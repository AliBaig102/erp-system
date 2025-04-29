import { NextRequest } from 'next/server'
import { ApiResponse } from '@/lib/backend/apiResponse'
import prisma from '@/lib/prisma'
import { hashPassword } from '@/lib/backend/auth'
import {  getLanguage } from '@/lib/backend/serverCookie'
import { authApiData } from '@/data'

export const POST = async (req: NextRequest) => {
	try {
		const { name, email, password } = await req.json()
		const lang = await getLanguage()
		const vm = authApiData[lang]
		if (!name || !email || !password) {
			return ApiResponse(false, vm.requiredFields, 400, [])
		}
		const user = await prisma.user.findFirst({ where: { email } })
		if (user) {
			return ApiResponse(false, vm.userExists, 400, [])
		}
		const newPassword = await hashPassword(password)
		const newUser = await prisma.user.create({
			data: {
				name,
				email,
				password: newPassword,
			},
		})
		return ApiResponse(true, vm.userCreated, 200, {
			id: newUser.id,
			name: newUser.name,
			email: newUser.email,
			role: newUser.role,
		})
	} catch (error) {
		console.log('error', error)
		return ApiResponse(false, 'Internal server error', 500, [error])
	}
}
