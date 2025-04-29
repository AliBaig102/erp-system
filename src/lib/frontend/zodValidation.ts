import z from 'zod'
import { loginFormData } from '@/data'
import { langF } from '@/lib/frontend/clientCookie'

export const loginSchema = z.object({
	email: z.string().email({ message: loginFormData[langF].emailError }),
	password: z.string().min(6, { message: loginFormData[langF].passwordError }),
})
