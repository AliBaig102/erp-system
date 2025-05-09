import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname
	const accessToken = request.cookies.get('accessToken')?.value
	const publicApiPaths: string[] = ['/login']

	if (!accessToken && !publicApiPaths.includes(path)) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	if (accessToken && publicApiPaths.includes(path)) {
		return NextResponse.redirect(new URL('/dashboard', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/login', '/', '/dashboard/:path*'],
}
