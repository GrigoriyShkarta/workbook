import React from 'react'

const AbstractElements = {
	SmallCircle: ({ className = '' }: { className?: string }) => (
		<svg
			className={`w-16 h-16 ${className}`}
			viewBox='0 0 64 64'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle
				cx='32'
				cy='32'
				r='30'
				stroke='currentColor'
				strokeWidth='2'
				fill='none'
			/>
		</svg>
	),

	LargeCircle: ({ className = '' }: { className?: string }) => (
		<svg
			className={`w-32 h-32 ${className}`}
			viewBox='0 0 128 128'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle
				cx='64'
				cy='64'
				r='60'
				stroke='currentColor'
				strokeWidth='2'
				fill='none'
			/>
		</svg>
	),

	WaveForm: ({ className = '' }: { className?: string }) => (
		<svg
			className={`w-40 h-40 ${className}`}
			viewBox='0 0 160 160'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80'
				stroke='currentColor'
				strokeWidth='2'
				fill='none'
			/>
		</svg>
	),
}

export default AbstractElements
