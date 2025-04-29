import { NextResponse } from 'next/server'

export const ApiResponse = (
	status: boolean = true,
	message: string,
	statusCode: number = 200,
	data: object[] | object | null = null,
) => {
	return NextResponse.json(
		{
			status,
			message,
			data,
		},
		{
			status: statusCode,
		},
	)
}
