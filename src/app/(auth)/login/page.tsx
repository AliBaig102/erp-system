'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Button,
	Input,
} from '@/components/ui/'
import { loginSchema } from '@/lib/frontend/zodValidation'
import LanguageDialog from '@/components/dialog/LanguageDialog'
import { langF } from '@/lib/frontend/clientCookie'
import { loginFormData } from '@/data'
import { useApi } from '@/hooks/useApi'
import { ApiResponse } from '@/types'
import { Loader2 } from 'lucide-react'
import { useAppDispatch } from '@/redux/store/hook'
import { login } from '@/redux/features/authSlice'
import { useRouter } from 'next/navigation'

type LoginForm = z.infer<typeof loginSchema>

const Login = () => {
	const api = useApi('/api/auth/login', { immediate: false })
	const dispatch = useAppDispatch()
	const router=useRouter()
	const isLanguageSet = document.cookie.split('lang=')[1]
	const form = useForm<LoginForm>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})
	const onSubmit = async (data: LoginForm) => {
		const response: ApiResponse = await api.post('/api/auth/login', data)
		if (response.status) {
			dispatch(login({ user: response.data!.user, accessToken: response.data!.accessToken }))
			router.push('/dashboard')
		}
	}
	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="w-full max-w-md rounded bg-white px-8 pt-6 pb-8 shadow-md">
				<h1 className="mb-6 text-center text-2xl font-bold">{loginFormData[langF].title}</h1>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{loginFormData[langF].email}</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder={loginFormData[langF].emailPlaceholder}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{loginFormData[langF].password}</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder={loginFormData[langF].passwordPlaceholder}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit" className="w-full">
							{!api.isLoading ? (
								loginFormData[langF].title
							) : (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									{loginFormData[langF].loading}
								</>
							)}
						</Button>
					</form>
				</Form>
			</div>
			{!isLanguageSet && <LanguageDialog autoOpen={true} />}
		</div>
	)
}

export default Login
