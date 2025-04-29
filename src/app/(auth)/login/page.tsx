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

type LoginForm = z.infer<typeof loginSchema>

const Login = () => {
	const form = useForm<LoginForm>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = (data: LoginForm) => {
		console.log('Form Data:', data)
		// Call login API here
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="w-full max-w-md rounded bg-white px-8 pt-6 pb-8 shadow-md">
				<h1 className="mb-6 text-center text-2xl font-bold">Login</h1>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input type="email" placeholder="you@example.com" {...field} />
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
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input type="password" placeholder="Enter your password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit" className="w-full">
							Log In
						</Button>
					</form>
				</Form>
			</div>
		</div>
	)
}

export default Login
