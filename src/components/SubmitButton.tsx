'use client'

import React from 'react'
import { Button } from '@/components/ui'
import { Loader2 } from 'lucide-react'

interface SubmitButtonProps {
	isLoading: boolean
	text: string
	loadingText?: string
	className?: string
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
	isLoading,
	text,
	loadingText = 'Loading...',
	className = '',
}) => {
	return (
		<Button type="submit" disabled={isLoading} className={`w-full ${className}`}>
			{!isLoading ? (
				text
			) : (
				<>
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
					{loadingText}
				</>
			)}
		</Button>
	)
}

export default SubmitButton
