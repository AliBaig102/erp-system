import React from 'react'
import { Home, Users } from 'lucide-react'

interface sidebarItems {
	title: string
	href?: string
	icon?: React.ReactNode
	subItems?: sidebarItems[]
}

export const sidebarItems: sidebarItems[] = [
	{
		title: 'Dashboard',
		href: '/dashboard',
		icon: <Home className="h-5 w-5 mr-2" />,
	},
	{
		title: 'Customers',
		href: '/dashboard/customers',
		icon: <Users className="h-5 w-5 mr-2" />,
	},
]
