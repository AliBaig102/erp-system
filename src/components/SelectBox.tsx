import * as React from 'react'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { IconType } from 'react-icons'

interface SelectBoxProps<T> {
	items: T[]
	selected: string
	onSelect?: (value: string) => void
	onSelectItem?: (item: T) => void
	valueKey: keyof T
	renderItem: (item: T) => React.ReactNode

	label?: React.ReactNode
	placeholder?: string
	disabled?: boolean
	error?: boolean
	errorMessage?: string

	icon?: React.ReactNode

	classNames?: {
		container?: string
		label?: string
		trigger?: string
		content?: string
		group?: string
		item?: string
		error?: string
	}
}

export function SelectBox<T>({
	items,
	selected,
	onSelect,
	onSelectItem,
	valueKey,
	renderItem,
	label,
	placeholder = 'Select...',
	disabled = false,
	error = false,
	errorMessage,
	icon,
	classNames = {},
}: SelectBoxProps<T>) {
	const selectedItem = items.find((item) => String(item[valueKey]) === selected)

	function handleValueChange(value: string) {
		onSelect?.(value)
		const foundItem = items.find((item) => String(item[valueKey]) === value)
		if (foundItem) onSelectItem?.(foundItem)
	}

	return (
		<div className={cn('w-full', classNames.container)}>
			{label && (
				<Label className={cn(error ? 'text-red-600' : '', classNames.label)}>{label}</Label>
			)}

			<Select value={selected} onValueChange={handleValueChange} disabled={disabled}>
				<SelectTrigger
					aria-invalid={error}
					aria-describedby={error && errorMessage ? 'error-message' : undefined}
					className={cn(
						error ? 'border-red-600 focus:ring-red-600' : 'border-input focus:ring-ring',
						'w-full',
						classNames.trigger,
					)}
				>
					<SelectValue placeholder={placeholder} />
					{icon && <div className="ml-2 flex items-center">{icon}</div>}
				</SelectTrigger>

				<SelectContent className={classNames.content}>
					<SelectGroup className={classNames.group}>
						{items.map((item) => (
							<SelectItem
								key={String(item[valueKey])}
								value={String(item[valueKey])}
								className={classNames.item}
							>
								{renderItem(item)}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>

			{error && errorMessage && (
				<p
					id="error-message"
					role="alert"
					className={cn('mt-1 text-sm text-red-600', classNames.error)}
				>
					{errorMessage}
				</p>
			)}
		</div>
	)
}
