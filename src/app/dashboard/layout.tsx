'use client'

import type React from 'react'

import { DashboardSidebar } from '@/components/DashboardSidebar'
import { SidebarProvider } from '@/components/ui/'
import DashboardHeader from '@/components/DashboardHeader'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<div className="bg-muted/20 flex min-h-screen w-screen">
				<DashboardSidebar />
				<main className="flex-1">
					<DashboardHeader />
					<div className={"p-4 max-h-[calc(100vh_-_70px)] relative overflow-auto"}>{children}</div>
				</main>
			</div>
		</SidebarProvider>
	)
}
