import { compare, hash } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { ApiResponse } from '@/lib/backend/apiResponse'
import { NextRequest } from 'next/server'
import prisma from '@/lib/prisma'

export const hashPassword = async (password: string) => {
	return await hash(password, 10)
}

export const validatePassword = async (password: string, hashedPassword: string) => {
	return compare(password, hashedPassword)
}

export const createAccessToken = (user: object) => {
	return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '7d' })
}

interface User {
	id: number
	name: string
	email: string
	role: string
	createdAt: Date
}

export const authCheck = async (req: NextRequest): Promise<User | null> => {
	const accessToken = req.cookies.get('accessToken')?.value
	if (!accessToken) {
		return null
	}

	const isValidToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET!)
	if (!isValidToken) {
		return null
	}

	const user = await prisma.user.findFirst({ where: { accessToken } })
	if (!user || user.accessTokenExpiry! < new Date()) {
		return null
	}

	return {
		id: user.id,
		name: user.name,
		email: user.email,
		role: user.role,
		createdAt: user.createdAt,
	}
}
