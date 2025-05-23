'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
	Sidebar,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarContent as BaseSidebarContent,
} from '@/components/ui/sidebar'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { Menu } from 'lucide-react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { sidebarItems } from '@/constants/sidebar-items'

export function DashboardSidebar() {
	const pathname = usePathname()
	const [isMobile, setIsMobile] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const { user } = useAuth()

	// Track mobile width
	useEffect(() => {
		const onResize = () => setIsMobile(window.innerWidth < 768)
		onResize()
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [])

	const SidebarContentWrapper = () => (
		<>
			<SidebarHeader className="flex items-center justify-between p-4">
				<div className="flex items-center gap-2">
					<div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-md font-bold">
						D
					</div>
					<span className="text-lg font-semibold">Dashboard</span>
				</div>
			</SidebarHeader>

			<BaseSidebarContent>
				<SidebarMenu>
					{sidebarItems.map((item) => (
						<SidebarMenuItem key={item.title} className="mx-2">
							{item.href ? (
								<SidebarMenuButton
									asChild
									isActive={pathname === item.href}
									tooltip={item.title}
									onClick={() => isMobile && setIsOpen(false)}
									className="p-3 py-5"
								>
									<Link href={item.href}>
										{item.icon && item.icon}
										<span>{item.title}</span>
									</Link>
								</SidebarMenuButton>
							) : (
								<Accordion type="single" collapsible className="w-full">
									<AccordionItem value={item.title} className="border-none">
										<AccordionTrigger
											className="hover:bg-accent rounded-md p-3 hover:no-underline"
											onClick={() => isMobile && setIsOpen(true)}
										>
											<div className="flex w-full items-center">
												{item.icon && item.icon}
												<span>{item.title}</span>
											</div>
										</AccordionTrigger>
										<AccordionContent className="pb-0">
											{item.subItems?.map((subItem) => (
												<SidebarMenuButton
													key={subItem.href}
													asChild
													isActive={pathname === subItem.href}
													className="p-3 py-2 pl-8"
													onClick={() => isMobile && setIsOpen(false)}
												>
													<Link href={subItem.href!}>
														{subItem.icon && subItem.icon}
														<span>{subItem.title}</span>
													</Link>
												</SidebarMenuButton>
											))}
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							)}
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</BaseSidebarContent>

			<SidebarFooter className="p-4">
				<div className="flex items-center gap-2">
					<div className="bg-muted h-8 w-8 rounded-full"></div>
					<div className="flex flex-col">
						<span className="text-sm font-medium">{user.name}</span>
						<span className="text-muted-foreground text-xs">{user.email}</span>
					</div>
				</div>
			</SidebarFooter>
		</>
	)

	if (isMobile) {
		return (
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="fixed top-3 left-4 z-50 md:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle Menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="w-[280px] p-0">
					<SheetTitle></SheetTitle>
					<div className="flex h-full flex-col">
						<SidebarContentWrapper />
					</div>
				</SheetContent>
			</Sheet>
		)
	}

	return (
		<Sidebar>
			<SidebarContentWrapper />
		</Sidebar>
	)
}
