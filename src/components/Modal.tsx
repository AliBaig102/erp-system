import React, { useEffect } from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	title?: string
	children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
	// Close on an Escape key
	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}
		document.addEventListener('keydown', handleEsc)
		return () => document.removeEventListener('keydown', handleEsc)
	}, [onClose])

	if (!isOpen) return null

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity"
			onClick={onClose}
		>
			<div
				className="relative mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-3 right-3 text-xl text-gray-500 hover:text-gray-700"
				>
					&times;
				</button>

				{/* Title */}
				{title && <h2 className="mb-4 text-xl font-semibold">{title}</h2>}

				{/* Content */}
				<div>{children}</div>
			</div>
		</div>
	)
}

export default Modal
