import { NextRequest } from 'next/server'
import { ApiResponse } from '@/lib/backend/apiResponse'
import { authCheck } from '@/lib/backend/auth'
import prisma from '@/lib/prisma'
import { getLanguage } from '@/lib/backend/serverCookie'
import { customerApiData } from '@/data'

export const GET = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
	try {
		const user = await authCheck(req)
		if (!user) {
			return ApiResponse(false, 'Unauthorized', 401)
		}
		const lang = await getLanguage()
		const vm = customerApiData.byId[lang]
		const { id } = await params

		const customer = await prisma.customer.findFirst({ where: { id: Number(id) } })
		if (!customer) {
			return ApiResponse(false, vm.notFound, 404)
		}

		return ApiResponse(true, vm.found, 200, customer)
	} catch (error) {
		console.log('error', error)
		return ApiResponse(false, 'Internal server error', 500, [error])
	}
}

export const PUT = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
	try {
		const user = await authCheck(req)
		if (!user) {
			return ApiResponse(false, 'Unauthorized', 401)
		}
		const lang = await getLanguage()
		const vm = customerApiData.update[lang]
		const { id } = await params
		const { name, email, phone, address } = await req.json()
		if (!name) {
			return ApiResponse(false, vm.requiredName, 400)
		}

		const customer = await prisma.customer.update({
			where: { id: Number(id) },
			data: {
				name,
				email,
				phone,
				address,
				userId: user.id,
			},
		})
		return ApiResponse(true, vm.updated, 200, customer)
	} catch (error) {
		console.log('error', error)
		return ApiResponse(false, 'Internal server error', 500, [error])
	}
}

export const DELETE = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
	try {
		const user = await authCheck(req)
		if (!user) {
			return ApiResponse(false, 'Unauthorized', 401)
		}
		const lang = await getLanguage()
		const vm = customerApiData.delete[lang]
		const { id } = await params
		const customer = await prisma.customer.delete({ where: { id: Number(id) } })
		return ApiResponse(true, vm.deleted, 200, customer)
	} catch (error) {
		console.log('error', error)
		return ApiResponse(false, 'Internal server error', 500, [error])
	}
}
