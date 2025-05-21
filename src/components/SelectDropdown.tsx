import { ChevronsUpDown, Check } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
	Command,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	Popover,
	PopoverTrigger,
	PopoverContent,
} from '@/components/ui/'
import { cn } from '@/lib/utils'

interface SelectDropdownProps<T> {
	items: T[]
	selected: string
	onSelect?: (value: string) => void
	onSelectItem?: (item: T) => void
	valueKey: keyof T
	renderItem: (item: T) => string

	// Label & Text
	label?: string
	placeholder?: string
	searchPlaceholder?: string
	emptyMessage?: string
	errorMessage?: string

	// Styling
	width?: string
	error?: boolean
	borderless?: boolean
	icon?: React.ReactNode
	classNames?: {
		container?: string
		trigger?: string
		dropdown?: string
		item?: string
		label?: string
		error?: string
	}

	// Advanced overrides
	renderTrigger?: (label: string) => React.ReactNode
	renderEmpty?: React.ReactNode
}

export function SelectDropdown<T>({
	items,
	selected,
	onSelect,
	onSelectItem,
	valueKey,
	renderItem,
	label = '',
	placeholder = 'Select...',
	searchPlaceholder = 'Search...',
	emptyMessage = 'No results found.',
	error = false,
	errorMessage = '',
	width = 'w-[200px]',
	borderless = false,
	icon = <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />,
	classNames = {},
	renderTrigger,
	renderEmpty,
}: SelectDropdownProps<T>) {
	const [open, setOpen] = React.useState(false)

	const triggerClassNames = cn(
		width,
		'justify-between',
		borderless ? 'border-none shadow-none' : '',
		error ? 'border-red-500 focus:ring-red-500 text-red-600' : '',
		classNames?.trigger,
	)

	const containerClass = cn('w-full sm:w-auto', classNames?.container)
	const labelClass = cn(
		'mb-1 text-xs',
		error ? 'text-red-500' : 'text-muted-foreground',
		classNames?.label,
	)
	const dropdownClass = cn(width, 'p-0', classNames?.dropdown)
	const itemClass = (selectedValue: boolean) =>
		cn('cursor-pointer', classNames?.item, selectedValue ? 'font-semibold' : '')

	const selectedItem = items.find((item) => item[valueKey] === selected)

	return (
		<div className={containerClass}>
			{label && <p className={labelClass}>{label}</p>}

			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					{renderTrigger ? (
						renderTrigger(selectedItem ? renderItem(selectedItem) : '')
					) : (
						<Button
							variant="outline"
							role="combobox"
							aria-expanded={open}
							className={triggerClassNames}
						>
							{selectedItem ? renderItem(selectedItem) : placeholder}
							{icon}
						</Button>
					)}
				</PopoverTrigger>
				<PopoverContent className={dropdownClass}>
					<Command>
						<CommandInput placeholder={searchPlaceholder} />
						<CommandList>
							<CommandEmpty>
								{renderEmpty ?? (
									<div className="text-muted-foreground p-2 text-sm">{emptyMessage}</div>
								)}
							</CommandEmpty>
							<CommandGroup>
								{items.map((item) => {
									const itemValue = item[valueKey] as string
									return (
										<CommandItem
											key={itemValue}
											value={itemValue}
											onSelect={() => {
												const newValue = itemValue === selected ? '' : itemValue
												onSelect?.(newValue)
												onSelectItem?.(newValue ? item : ({} as T))
												setOpen(false)
											}}
											className={itemClass(selected === itemValue)}
										>
											<Check
												className={cn(
													'h-4 w-4 text-black',
													selected === itemValue ? 'opacity-100' : 'opacity-0',
												)}
											/>
											{renderItem(item)}
										</CommandItem>
									)
								})}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>

			{error && errorMessage && (
				<p className={cn('mt-1 text-xs text-red-500', classNames?.error)}>{errorMessage}</p>
			)}
		</div>
	)
}
