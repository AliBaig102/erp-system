import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { ApiResponse } from '@/lib/backend/apiResponse'

export const POST = async (req: NextRequest) => {
	const { lang } = await req.json()
	const cookiesStore = await cookies()
	cookiesStore.set('lang', lang)
	return ApiResponse(
		true,
		lang === 'en' ? 'Language changed successfully' : 'زبان کامیابی سے تبدیل ہو گئی۔',
		200,
		[],
	)
}
