'use client'

import type * as React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { Check, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'
import { useApi } from '@/hooks/useApi'
import { ApiResponse } from '@/types'

interface LanguageDialogProps {
	autoOpen?: boolean
}

const LanguageDialog: React.FC<LanguageDialogProps> = ({ autoOpen = false }) => {
	const { post } = useApi('/api/language', { immediate: false })
	const [open, setOpen] = useState(false)
	const [selectedLang, setSelectedLang] = useState<'en' | 'ur' | ''>('')

	useEffect(() => {
		if (autoOpen) {
			const timer = setTimeout(() => {
				setOpen(true)
			}, 300)
			return () => clearTimeout(timer)
		}
	}, [autoOpen])

	const handleSubmit = async () => {
		if (!selectedLang) return
		try {
			const response: ApiResponse = await post('/api/language', { lang: selectedLang })
			if (response.status) {
				setTimeout(() => window.location.reload(), 1000)
			}
		} catch (error) {
			console.error('Error setting language:', error)
		}
		setOpen(false)
	}

	const languages = [
		{
			code: 'en',
			name: 'English',
			flag: '🇬🇧',
			description: 'Continue in English language',
		},
		{
			code: 'ur',
			name: 'اردو',
			flag: '🇵🇰',
			description: 'اردو میں جاری رکھیں',
		},
	]

	return (
		<div className="p-4">
			{!autoOpen && (
				<Button
					onClick={() => setOpen(true)}
					className="flex items-center gap-2 bg-black text-white hover:bg-black/80"
				>
					<Globe className="h-4 w-4" />
					Choose Language
				</Button>
			)}

			<Dialog open={open} onOpenChange={(o) => (autoOpen ? null : setOpen(o))}>
				<DialogContent
					className="pointer-events-auto rounded-xl border-0 bg-gradient-to-b from-white to-gray-50 shadow-2xl sm:max-w-md"
					onInteractOutside={(e) => e.preventDefault()}
					onEscapeKeyDown={(e) => e.preventDefault()}
				>
					<DialogHeader className="border-b pb-4 text-center">
						<DialogTitle className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-2xl font-bold text-transparent">
							Select Your Language
						</DialogTitle>
						<p className="text-muted-foreground mt-2 text-sm">
							Please select your preferred language to continue
						</p>
					</DialogHeader>

					<div className="space-y-4 py-6">
						{languages.map((language) => (
							<div
								key={language.code}
								onClick={() => setSelectedLang(language.code as 'en' | 'ur')}
								className={cn(
									'flex cursor-pointer items-center rounded-lg p-5 transition-all',
									'border-2 hover:shadow-md',
									selectedLang === language.code
										? 'border-black bg-black/5 shadow-sm'
										: 'border-gray-200',
								)}
							>
								<div className="mr-4 flex-shrink-0">
									<Checkbox
										checked={selectedLang === language.code}
										className={cn(
											'h-5 w-5 border-2',
											selectedLang === language.code
												? 'border-black data-[state=checked]:bg-black data-[state=checked]:text-white'
												: 'border-gray-300',
										)}
									/>
								</div>
								<div className="mr-4 flex-shrink-0 text-3xl">{language.flag}</div>
								<div className="flex-grow">
									<h3 className="text-lg font-semibold">{language.name}</h3>
									<p className="text-muted-foreground text-sm">{language.description}</p>
								</div>
								{selectedLang === language.code && (
									<div className="flex-shrink-0 rounded-full bg-black p-1 text-white">
										<Check className="h-4 w-4" />
									</div>
								)}
							</div>
						))}
					</div>

					<Button
						onClick={handleSubmit}
						disabled={!selectedLang}
						className={cn(
							'w-full bg-black py-6 text-base font-medium text-white hover:bg-black/90',
							'rounded-lg shadow-lg transition-all hover:shadow-xl',
							'border-b-4 border-gray-800 active:mt-1 active:mb-[-4px] active:border-b-0',
							!selectedLang && 'opacity-70',
						)}
					>
						Continue
					</Button>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default LanguageDialog
