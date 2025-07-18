'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui'
import { Eye, EyeOff } from 'lucide-react'
import { Controller, UseFormReturn } from 'react-hook-form'
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/'

interface PasswordInputProps {
	form: UseFormReturn<any>
	name: string
	label: string
	placeholder: string
}

const PasswordInput: React.FC<PasswordInputProps> = ({
																											 form,
																											 name,
																											 label,
																											 placeholder,
																										 }) => {
	const [showPassword, setShowPassword] = useState(false)
	const error = form.formState.errors[name]?.message as string | undefined

	const togglePassword = () => {
		setShowPassword(prev => !prev)
	}

	return (
		<Controller
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel data-error={!!error}>{label}</FormLabel>
					<FormControl>
						<div className="relative">
							<Input
								type={showPassword ? 'text' : 'password'}
								placeholder={placeholder}
								aria-invalid={!!error}
								{...field}
							/>
							<button
								type="button"
								onClick={togglePassword}
								className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
								tabIndex={-1}
							>
								{showPassword ? (
									<EyeOff className="h-4 w-4" />
								) : (
									<Eye className="h-4 w-4" />
								)}
							</button>
						</div>
					</FormControl>
					{error && <FormMessage>{error}</FormMessage>}
				</FormItem>
			)}
		/>
	)
}

export default PasswordInput
