import { compare, hash } from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const hashPassword = async (password: string) => {
	return await hash(password, 10)
}

export const validatePassword = async (password: string, hashedPassword: string) => {
	return compare(password, hashedPassword)
}

export const createAccessToken = (user: object) => {
	return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '7d' })
}
