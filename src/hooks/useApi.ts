import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios'
import useSWR, { SWRConfiguration, SWRResponse } from 'swr'
import { toast, ToastOptions } from 'react-toastify'
import { useState } from 'react'

/**
 * Options to configure the useApi hook
 */
export interface UseApiOptions<T> {
	/** Disable automatic fetch on mount */
	immediate?: boolean
	/** Default axios configuration overrides */
	axiosConfig?: AxiosRequestConfig
	/** Global headers to apply to all requests */
	headers?: Record<string, string>
	/** SWR configuration overrides */
	swrConfig?: SWRConfiguration<T, Error>
	/** Toast options for success/error notifications */
	toastOptions?: ToastOptions
}

/**
 * Per-request configuration
 */
export interface RequestConfig {
	/** Show success toast */
	message?: boolean
	/** Suppress all toasts (success & error) */
	silent?: boolean
	/** Axios config overrides for this request */
	config?: AxiosRequestConfig
}

/**
 * The return type of the useApi hook
 */
export interface ApiHookReturn<T> extends SWRResponse<T, Error> {
	get: <R = T>(url: string, cfg?: RequestConfig) => Promise<R>
	post: <R = T>(url: string, body: unknown, cfg?: RequestConfig) => Promise<R>
	put: <R = T>(url: string, body: unknown, cfg?: RequestConfig) => Promise<R>
	patch: <R = T>(url: string, body: unknown, cfg?: RequestConfig) => Promise<R>
	delete: <R = T>(url: string, cfg?: RequestConfig) => Promise<R>
	invalidate: (keys?: string | string[]) => Promise<void>
	uploadFile: (url: string, file: File, onProgress?: (percentage: number) => void) => Promise<T>
}

/**
 * Custom hook for RESTful API interactions with axios + SWR.
 * @param baseUrl - Base URL or key for SWR
 * @param options  - Hook configuration
 */
export function useApi<T>(baseUrl: string, options: UseApiOptions<T> = {}): ApiHookReturn<T> {
	const { immediate = true, axiosConfig, headers = {}, swrConfig, toastOptions } = options
	const [isLoading, setIsLoading] = useState(false)
	// Initialize axios instance
	const axiosInstance: AxiosInstance = axios.create({
		// baseURL: baseUrl,
		timeout: 10000,
		headers: { 'Content-Type': 'application/json', ...headers },
		...axiosConfig,
	})

	// Propagate errors
	axiosInstance.interceptors.response.use(
		(response) => response,
		(error) => Promise.reject(error),
	)

	// SWR fetcher returns typed data
	const fetcher = (url: string): Promise<T> =>
		axiosInstance.get<T>(url).then((res: AxiosResponse<T>) => res.data)

	// SWR hook
	const swrResponse = useSWR<T>(immediate ? baseUrl : null, fetcher, {
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		...swrConfig,
	})

	/**
	 * Generic request wrapper
	 */
	const request = async <R>(
		method: Method,
		url: string,
		data?: unknown,
		reqConfig: RequestConfig = {},
	): Promise<unknown> => {
		const { message = true, silent = false, config } = reqConfig
		setIsLoading(true)
		try {
			const response = await axiosInstance.request<R>({
				method,
				url,
				data,
				...config,
			})

			if (message && !silent) {
				toast.success(
					(response.data as any)?.message ?? 'Operation completed successfully',
					toastOptions,
				)
			}
			return response.data
		} catch (error: unknown) {
			if (!silent) {
				const errMsg =
					axios.isAxiosError(error) && error.response?.data
						? error.response.data.message
						: (error as Error).message
				toast.error(errMsg, toastOptions)
			}
			return error
		} finally {
			setIsLoading(false)
		}
	}

	// Shorthand methods
	const get = <R = T>(url: string, cfg?: RequestConfig) => request<R>('get', url, undefined, cfg)
	const post = <R = T>(url: string, body: unknown, cfg?: RequestConfig) =>
		request<R>('post', url, body, cfg)
	const put = <R = T>(url: string, body: unknown, cfg?: RequestConfig) =>
		request<R>('put', url, body, cfg)
	const patch = <R = T>(url: string, body: unknown, cfg?: RequestConfig) =>
		request<R>('patch', url, body, cfg)
	const del = <R = T>(url: string, cfg?: RequestConfig) => request<R>('delete', url, undefined, cfg)

	// Invalidate one or more SWR cache keys
	const invalidate = async (keys?: string | string[]) => {
		if (!keys) return
		const list = Array.isArray(keys) ? keys : [keys]
		await Promise.all(list.map((key) => swrResponse.mutate(key)))
	}

	// File upload with progress callback
	const uploadFile = (
		url: string,
		file: File,
		onProgress?: (percentage: number) => void,
	): Promise<T> => {
		const formData = new FormData()
		formData.append('file', file)
		return request<T>('post', url, formData, {
			config: {
				headers: { 'Content-Type': 'multipart/form-data' },
				onUploadProgress: onProgress
					? (event) => onProgress(Math.round((100 * event.loaded) / event.total!))
					: undefined,
			},
		})
	}

	return {
		...swrResponse,
		isLoading,
		get,
		post,
		put,
		patch,
		delete: del,
		invalidate,
		uploadFile,
	}
}
