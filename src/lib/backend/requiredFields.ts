import { ApiResponse } from './apiResponse'

export const requiredFields = (
	fields: { [key: string]: any },
	vm: { [key: string]: string },
	statusCode: number = 400,
) => {
	const errors: { [key: string]: string } = {}

	Object.keys(fields).forEach((fieldName) => {
		const fieldValue = fields[fieldName]
		if (!fieldValue || (typeof fieldValue === 'string' && fieldValue.trim() === '')) {
			const errorMessage = vm[`required${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`]
			if (errorMessage) {
				errors[fieldName] = errorMessage
			}
		}
	})

	if (Object.keys(errors).length > 0) {
		return ApiResponse(
			false,
			vm.requiredFields,
			statusCode,
			[],
			{ errors },
		)
	}

	return null // No errors, proceed
}
