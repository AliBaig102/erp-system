'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import {
	ChevronDown,
	ChevronRight,
	Download,
	FileText,
	Home,
	Plus,
	Printer,
} from 'lucide-react'
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,

} from '@/components/ui'
import { DatePicker } from '@/components/DatePicker'

const Customers = () => {
	const [date, setDate] = useState<Date | null>(null)
	return (
		<div>
			<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center print:hidden">
				<div className="space-y-1">
					<div className="text-muted-foreground flex items-center gap-2 text-sm">
						<Link href="/" className="hover:text-primary flex items-center gap-1">
							<Home className="h-3.5 w-3.5" />
							<span>Home</span>
						</Link>
						<ChevronRight className="h-3.5 w-3.5" />
						<span className="text-foreground font-medium">Customers</span>
					</div>
					<h1 className="text-2xl font-bold tracking-tight">Customers</h1>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-wrap items-center gap-2 self-end sm:self-auto">
					<Button variant="outline">
						<Printer className="mr-2 h-4 w-4" />
						Print
					</Button>

					<DatePicker
						classNames={{ container: 'w-fit' }}
						placeholder={"Filter by date..."}
						date={date}
						onChange={(date) => setDate(date!)}
					/>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">
								<Download className="mr-2 h-4 w-4" />
								Export
								<ChevronDown className="ml-2 h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem className="flex items-center">
								<FileText className="mr-2 h-4 w-4" />
								Export as CSV
							</DropdownMenuItem>
							<DropdownMenuItem className="flex items-center">
								<FileText className="mr-2 h-4 w-4" />
								Export as Excel
							</DropdownMenuItem>
							<DropdownMenuItem className="flex items-center">
								<FileText className="mr-2 h-4 w-4" />
								Export as PDF
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<Button>
						<Plus className="mr-1 h-4 w-4" />
						Create
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Customers
