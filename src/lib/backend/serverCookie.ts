import { cookies } from 'next/headers'

export const getLanguage =async ():Promise<"en" | "ur"> => {
	const cookiesStore = await cookies();
	const lang = cookiesStore.get('lang')?.value;
	return lang ? 'ur': 'en';
}


