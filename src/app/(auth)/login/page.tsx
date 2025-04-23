'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Modal from '@/components/Modal'

const loginSchema = z.object({
	email: z.string().email({ message: 'Please enter a valid email' }),
	password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
})

type LoginForm = z.infer<typeof loginSchema>

const Login = () => {
	const [isModalOpen, setIsModalOpen] = useState(true)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginForm>({
		resolver: zodResolver(loginSchema),
	})

	const onSubmit = (data: LoginForm) => {
		console.log('Form Data:', data)
		// Call login API here
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Hello Modal!">
				<p>This is a simple modal component.</p>
			</Modal>
			<div className="w-full max-w-md rounded bg-white px-8 pt-6 pb-8 shadow-md">
				<h1 className="mb-6 text-center text-2xl font-bold">Login</h1>
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div>
						<label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="email">
							Email
						</label>
						<input
							type="email"
							id="email"
							{...register('email')}
							className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${
								errors.email ? 'border-red-500' : ''
							}`}
							placeholder="you@example.com"
						/>
						{errors.email && (
							<p className="mt-1 text-xs text-red-500 italic">{errors.email.message}</p>
						)}
					</div>

					<div>
						<label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">
							Password
						</label>
						<input
							type="password"
							id="password"
							{...register('password')}
							className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${
								errors.password ? 'border-red-500' : ''
							}`}
							placeholder="••••••••"
						/>
						{errors.password && (
							<p className="mt-1 text-xs text-red-500 italic">{errors.password.message}</p>
						)}
					</div>

					<button
						type="submit"
						className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
					>
						Log In
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login
