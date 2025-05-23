'use client'
import React, { useState, useMemo } from 'react'
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	RowSelectionState,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
	flexRender,
} from '@tanstack/react-table'
import {
	Button,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuCheckboxItem,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from '@/components/ui'
import {
	ArrowDownIcon,
	ArrowUpIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronsLeftIcon,
	ChevronsRightIcon,
	ListFilterIcon,
	ChevronDownIcon,
	DownloadIcon,
	FileTextIcon,
	PrinterIcon,
	PlusIcon,
	HomeIcon,
} from 'lucide-react'
import Link from 'next/link'
import { DatePicker } from '@/components/DatePicker' // Assuming DatePicker is a custom component
import Papa from 'papaparse' // For CSV export
import { saveAs } from 'file-saver' // For file download
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// Define props interface
interface DataTableProps<TData, TValue> {
	data: TData[]
	columns: ColumnDef<TData, TValue>[]
	defaultPageSize?: number
	className?: string
	isLoading?: boolean
	onCreate?: () => void // Prop for Create button action
	title?: string // Prop for table title
	breadcrumb?: { label: string; href: string }[] // Prop for breadcrumb navigation
}

function DataTable<TData, TValue>({
	columns,
	data,
	defaultPageSize = 10,
	className = '',
	isLoading = false,
	onCreate,
	title = 'Data Table',
	breadcrumb = [
		{ label: 'Home', href: '/' },
		{ label: 'Data', href: '#' },
	],
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [globalFilter, setGlobalFilter] = useState<string>('')
	const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
	const [date, setDate] = useState<Date | null>(null)

	// Memoize filtered data for global search
	const filteredData = useMemo(() => {
		let result = data
		if (globalFilter) {
			result = result.filter((row) =>
				Object.values(row as object).some((value) =>
					String(value).toLowerCase().includes(globalFilter.toLowerCase()),
				),
			)
		}
		if (date) {
			result = result.filter((row) => {
				// Assuming data has a date field; adjust as needed
				const rowDate = (row as any).date
				if (!rowDate) return true
				return new Date(rowDate).toDateString() === date.toDateString()
			})
		}
		return result
	}, [data, globalFilter, date])

	// Add selection column
	const tableColumns = useMemo<ColumnDef<TData, TValue>[]>(
		() => [
			{
				id: 'select',
				header: ({ table }) => (
					<Input
						type="checkbox"
						checked={table.getIsAllRowsSelected()}
						onChange={table.getToggleAllRowsSelectedHandler()}
						className="cursor-pointer size-5"
						aria-label="Select all rows"
					/>
				),
				cell: ({ row }) => (
					<Input
						type="checkbox"
						checked={row.getIsSelected()}
						onChange={row.getToggleSelectedHandler()}
						className="cursor-pointer size-5"
						aria-label={`Select row ${row.id}`}
					/>
				),
				enableSorting: false,
				enableColumnFilter: false,
			},
			...columns,
		],
		[columns],
	)

	const table = useReactTable({
		data: filteredData,
		columns: tableColumns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			rowSelection,
			pagination: {
				pageIndex: 0,
				pageSize: defaultPageSize,
			},
		},
	})

	// Export as CSV
	const exportToCSV = () => {
		const csvData = table.getRowModel().rows.map((row) =>
			row.getVisibleCells().reduce(
				(acc, cell) => {
					acc[cell.column.id] = cell.getValue()
					return acc
				},
				{} as Record<string, any>,
			),
		)
		const csv = Papa.unparse(csvData)
		const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
		saveAs(blob, `${title.replace(/\s+/g, '_').toLowerCase()}.csv`)
	}

	// Placeholder for Excel and PDF export
	const exportToExcel = () => {
		alert('Excel export not implemented. Use CSV for now.')
	}

	const exportToPDF = () => {
		alert('PDF export not implemented. Use CSV for now.')
	}

	// Bulk delete action (example)
	const handleBulkDelete = () => {
		const selectedRows = table.getSelectedRowModel().rows.map((row) => row.original)
		alert(`Deleting ${selectedRows.length} rows: ${JSON.stringify(selectedRows, null, 2)}`)
		// Implement actual delete logic here
		table.resetRowSelection()
	}

	return (
		<div className={`space-y-4 ${className}`}>
			{/* Header with Breadcrumb and Actions */}
			<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center print:hidden">
				<div className="space-y-1">
					<div className="text-muted-foreground flex items-center gap-2 text-sm">
						{breadcrumb.map((item, index) => (
							<React.Fragment key={item.href}>
								<Link href={item.href} className="hover:text-primary flex items-center gap-1">
									{index === 0 && <HomeIcon className="h-3.5 w-3.5" />}
									<span>{item.label}</span>
								</Link>
								{index < breadcrumb.length - 1 && <ChevronRightIcon className="h-3.5 w-3.5" />}
							</React.Fragment>
						))}
					</div>
					<h1 className="text-2xl font-bold tracking-tight">{title}</h1>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-wrap items-center gap-2 self-end sm:self-auto">
					<Button variant="outline" onClick={() => window.print()}>
						<PrinterIcon className="mr-2 h-4 w-4" />
						Print
					</Button>
					<DatePicker
						classNames={{ container: 'w-fit' }}
						placeholder="Filter by date..."
						date={date}
						onChange={(date: Date) => setDate(date)}
					/>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">
								<DownloadIcon className="mr-2 h-4 w-4" />
								Export
								<ChevronDownIcon className="ml-2 h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem onClick={exportToCSV} className="flex items-center">
								<FileTextIcon className="mr-2 h-4 w-4" />
								Export as CSV
							</DropdownMenuItem>
							<DropdownMenuItem onClick={exportToExcel} className="flex items-center">
								<FileTextIcon className="mr-2 h-4 w-4" />
								Export as Excel
							</DropdownMenuItem>
							<DropdownMenuItem onClick={exportToPDF} className="flex items-center">
								<FileTextIcon className="mr-2 h-4 w-4" />
								Export as PDF
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					{onCreate && (
						<Button onClick={onCreate}>
							<PlusIcon className="mr-1 h-4 w-4" />
							Create
						</Button>
					)}
				</div>
			</div>

			{/* Column Visibility and Bulk Actions */}
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-2">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" className="text-sm">
								Columns
								<ChevronDownIcon className="ml-2 h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="start">
							<DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
							<DropdownMenuSeparator />
							{table.getAllLeafColumns().map((column) => (
								<DropdownMenuCheckboxItem
									key={column.id}
									checked={column.getIsVisible()}
									onCheckedChange={(value) => column.toggleVisibility(!!value)}
									disabled={column.id === 'select'} // Prevent hiding select column
								>
									{column.columnDef.header?.toString() || column.id}
								</DropdownMenuCheckboxItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
					{Object.keys(rowSelection).length > 0 && (
						<Button variant="destructive" onClick={handleBulkDelete} className="text-sm">
							Delete Selected ({Object.keys(rowSelection).length})
						</Button>
					)}
				</div>
				<Input
					placeholder="Search all columns..."
					value={globalFilter}
					onChange={(e) => setGlobalFilter(e.target.value)}
					className="max-w-sm"
				/>
			</div>

			{/* Table */}
			<div className="w-full overflow-x-auto rounded-lg">
				<Table className={"p-4"}>
					<TableHeader className="sticky top-0 z-10">
						{table.getHeaderGroups().map((headerGroup) => (
							<React.Fragment key={headerGroup.id}>
								{/* Column Filters */}
								<TableRow className="bg-muted">
									{headerGroup.headers.map((header) => (
										<TableHead key={header.id} className="py-0">
											{header.column.columnDef.enableColumnFilter !== false && (
												<Input
													className="border-none  bg-transparent font-normal shadow-none focus-visible:ring-0"
													value={(header.column.getFilterValue() as string) ?? ''}
													onChange={(e) => header.column.setFilterValue(e.target.value)}
													placeholder={`Filter ${String(header.column.columnDef.header).toLowerCase()}`}
												/>
											)}
										</TableHead>
									))}
								</TableRow>
								{/* Column Headers with Sorting */}
								<TableRow className="bg-muted">
									{headerGroup.headers.map((header) => (
										<TableHead key={header.id} className="font-semibold">
											{header.isPlaceholder ? null : header.column.columnDef.enableSorting !==
											  false ? (
												<Button
													variant="ghost"
													onClick={() =>
														header.column.toggleSorting(header.column.getIsSorted() === 'asc')
													}
													className="flex items-start justify-start w-full gap-2 hover:bg-transparent"
												>
													{flexRender(header.column.columnDef.header, header.getContext())}
													<span className="ml-1">
														{header.column.getIsSorted() === 'desc' ? (
															<ArrowUpIcon className="h-4 w-4" />
														) : header.column.getIsSorted() === 'asc' ? (
															<ArrowDownIcon className="h-4 w-4" />
														) : (
															<ListFilterIcon className="h-4 w-4" />
														)}
													</span>
												</Button>
											) : (
												flexRender(header.column.columnDef.header, header.getContext())
											)}
										</TableHead>
									))}
								</TableRow>
							</React.Fragment>
						))}
					</TableHeader>
					<TableBody>
						{isLoading ? (
							<TableRow>
								<TableCell colSpan={tableColumns.length} className="p-4">
									<Skeleton count={defaultPageSize} height={40} />
								</TableCell>
							</TableRow>
						) : table.getRowModel().rows.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
									className="hover:bg-muted/50 "
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id} className="py-2">
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={tableColumns.length}
									className="text-muted-foreground h-24 text-center"
								>
									No results found.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			{/* Pagination Controls */}
			<div className="flex items-center justify-between gap-4 py-2">
				<div className="text-muted-foreground text-sm">
					Showing {table.getRowModel().rows.length} of {filteredData.length} rows
					{Object.keys(rowSelection).length > 0 && `, ${Object.keys(rowSelection).length} selected`}
				</div>
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-2 text-sm font-medium">
						Rows per page
						<Select
							value={table.getState().pagination.pageSize.toString()}
							onValueChange={(value) => table.setPageSize(Number(value))}
						>
							<SelectTrigger className="w-16">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{[5, 10, 20, 30, 50].map((size) => (
									<SelectItem key={size} value={size.toString()}>
										{size}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="text-sm font-medium">
						Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
					</div>
					<div className="flex items-center gap-2">
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.firstPage()}
							disabled={!table.getCanPreviousPage()}
						>
							<ChevronsLeftIcon className="h-4 w-4" />
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							<ChevronLeftIcon className="h-4 w-4" />
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							<ChevronRightIcon className="h-4 w-4" />
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.lastPage()}
							disabled={!table.getCanNextPage()}
						>
							<ChevronsRightIcon className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DataTable
