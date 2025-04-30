import { ApiResponse } from '@/lib/backend/apiResponse'
import { cookies } from 'next/headers'
import { getLanguage } from '@/lib/backend/serverCookie'
import { authApiData } from '@/data'


export const GET = async () => {
	try {
		const lang = await getLanguage()
		const vm = authApiData[lang]
		const cookiesStore = await cookies();
		cookiesStore.delete('accessToken');
		cookiesStore.delete('user');
		return ApiResponse(true, vm.userLoggedOut, 200, [])

	}
	catch (e) {
		console.log("error", e)
		return ApiResponse(false, 'Internal server error', 500, [e])
	}
}