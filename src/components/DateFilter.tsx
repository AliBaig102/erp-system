'use client'

import React from 'react'
import { CalendarIcon } from 'lucide-react'
import { format, isBefore } from 'date-fns'
import { Button, Calendar, Popover, PopoverTrigger, PopoverContent } from '@/components/ui'
import { cn } from '@/lib/utils'

interface DateFilterProps {
	date?: Date
	setDate: (date?: Date) => void
	disabledBefore?: Date
	placeholder?: string
}

const DateFilter: React.FC<DateFilterProps> = ({
	date,
	setDate,
	disabledBefore, // only passed when needed
	placeholder = 'Filter by date',
}) => {
	const disableDates = (dateToCheck: Date) => {
		if (!disabledBefore) return false
		return isBefore(dateToCheck, disabledBefore)
	}

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					size="sm"
					className={cn('justify-start text-left font-normal', date && 'text-primary')}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? format(date, 'PPP') : placeholder}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="end">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					initialFocus
					disabled={disabledBefore ? disableDates : undefined}
				/>
			</PopoverContent>
		</Popover>
	)
}

export default DateFilter
