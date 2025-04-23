import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { ApiResponse } from '@/lib/backend/api-response'

export const POST = async (req: NextRequest) => {
	const { lang } = await req.json()
	const cookiesStore = await cookies()
	cookiesStore.set('lang', lang)
	return ApiResponse(true, 'Language changed successfully', 200, [])
}
