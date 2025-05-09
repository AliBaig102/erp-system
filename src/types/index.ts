export interface ApiResponse {
	status: boolean
	message: string
	data: object | object[] | any
	extraData: object | null
}
