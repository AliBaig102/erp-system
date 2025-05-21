const getLanguageClient = (): 'ur' | 'en' => {
	if (typeof document !== 'undefined') {
		const lang = document.cookie.split('lang=')[1]?.split(";")[0]
		return lang === 'ur' ? 'ur' : 'en'
	}
	return 'en'
}
export const langF = getLanguageClient()
