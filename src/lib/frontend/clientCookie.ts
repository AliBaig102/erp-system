const getLanguageClient = (): 'ur' | 'en' => {
	if (typeof document !== 'undefined') {
		const lang = document.cookie.split('lang=')[1]
		return lang ? 'ur' : 'en'
	}
	return 'en'
}
export const langF = getLanguageClient()
