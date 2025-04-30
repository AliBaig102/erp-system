import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname
	// const accessToken = request.cookies.get('accessToken')?.value
	// const publicApiPaths: string[] = ['/api/auth/login','/api/auth/unauthorized', '/api/language']
	//
	// if (!accessToken && !publicApiPaths.includes(path)) {
	// 	return NextResponse.redirect(new URL('/api/auth/unauthorized', request.url))
	// }

	return NextResponse.next()
}

export const config = {
	matcher: ['/api/:path*'],
}
