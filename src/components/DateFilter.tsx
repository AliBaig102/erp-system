import { CalendarIcon } from 'lucide-react'
import * as React from 'react'

import { Calendar, Button, Label, Popover, PopoverTrigger, PopoverContent } from '@/components/ui/'
import { cn } from '@/lib/utils'

interface DatePickerProps {
	date: Date | null
	onChange: (date: Date | undefined) => void

	label?: string
	placeholder?: string
	open?: boolean
	onOpenChange?: (open: boolean) => void

	minDate?: Date
	maxDate?: Date

	disabled?: boolean
	error?: boolean
	errorMessage?: string

	icon?: React.ReactNode

	classNames?: {
		container?: string
		label?: string
		trigger?: string
		popover?: string
		calendar?: string
		error?: string
	}
}

export function DatePicker({
	date,
	onChange,
	label,
	placeholder = 'Select...',
	open,
	onOpenChange,
	minDate,
	maxDate,
	disabled = false,
	error = false,
	errorMessage,
	icon = <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />,
	classNames = {},
}: DatePickerProps) {
	const isDateDisabled = (day: Date) => {
		if (minDate && day < minDate) return true
		if (maxDate && day > maxDate) return true
		return false
	}

	return (
		<div className={cn('w-full', classNames.container)}>
			{label && (
				<Label
					className={cn(
						'mb-1 text-xs',
						error ? 'text-red-600' : 'text-muted-foreground',
						classNames.label,
					)}
				>
					{label}
				</Label>
			)}

			<Popover open={open} onOpenChange={onOpenChange}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						className={cn(
							'w-[250px] justify-between',
							error ? 'border-red-600 focus:ring-red-600' : '',
							disabled && 'cursor-not-allowed opacity-50',
							classNames.trigger,
						)}
						disabled={disabled}
					>
						{date ? date.toLocaleDateString() : placeholder}
						{icon}
					</Button>
				</PopoverTrigger>

				<PopoverContent className={cn('w-auto p-0', classNames.popover)} align="start">
					<Calendar
						mode="single"
						selected={date ?? undefined}
						onSelect={onChange}
						initialFocus
						disabled={isDateDisabled}
						className={classNames.calendar}
					/>
				</PopoverContent>
			</Popover>

			{error && errorMessage && (
				<p className={cn('mt-1 text-sm text-red-600', classNames.error)} role="alert">
					{errorMessage}
				</p>
			)}
		</div>
	)
}
