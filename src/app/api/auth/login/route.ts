import { NextRequest } from 'next/server'
import { ApiResponse } from '@/lib/backend/apiResponse'
import prisma from '@/lib/prisma'
import { createAccessToken, validatePassword } from '@/lib/backend/auth'
import { cookies } from 'next/headers'
import { getLanguage } from '@/lib/backend/serverCookie'
import { authApiData } from '@/data'

export const POST = async (req: NextRequest) => {
	try {
		const lang = await getLanguage()
		const vm = authApiData[lang]
		const cookiesStore = await cookies()
		const { email, password } = await req.json()
		if (!email || !password) {
			return ApiResponse(false, vm.requiredFields, 400, [])
		}

		const user = await prisma.user.findFirst({ where: { email } })
		if (!user) {
			return ApiResponse(false, vm.userNotFound, 400, [])
		}
		const isValidPassword = await validatePassword(password, user.password)
		if (!isValidPassword) {
			return ApiResponse(false, vm.invalidPassword, 400, [])
		}
		const accessToken = createAccessToken({
			id: user.id,
			email: user.email,
			name: user.name,
			role: user.role,
		})
		await prisma.user.update({
			where: { id: user.id },
			data: {
				accessToken,
				accessTokenExpiry: new Date(Date.now() + 60 * 60 * 1000),
			},
		})

		cookiesStore.set('accessToken', accessToken)
		cookiesStore.set(
			'user',
			JSON.stringify({ id: user.id, email: user.email, name: user.name, role: user.role }),
		)
		return ApiResponse(true, vm.userLoggedIn, 200, {
			user: {
				id: user.id,
				email: user.email,
				name: user.name,
				role: user.role,
			},
			accessToken,
		})
	} catch (error) {
		console.log('error', error)
		return ApiResponse(false, 'Internal server error', 500, [error])
	}
}
