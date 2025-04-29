import { useEffect, useState } from 'react'

export const useLanguage = () => {
	const [lang, setLang] = useState<'en' | 'ur'>('en')

	useEffect(() => {
		const lang = document.cookie.split('lang=')[1]
		setLang(lang ? 'ur' : 'en')
	}, [lang])

	return lang
}
