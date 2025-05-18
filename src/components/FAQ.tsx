'use client'

import { useState } from 'react'

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const faqs = [
		{
			question: 'Як отримати доступ до збірника після оплати?',
			answer:
				'Після успішної оплати вам на електронну пошту буде надіслано лист з посиланням для завантаження всіх матеріалів.',
		},
		{
			question: 'Чи підійде цей збірник для початківців?',
			answer:
				'Так, у збірнику є вправи різного рівня складності, включаючи спеціальні вправи для початківців.',
		},
		{
			question: 'Які формати файлів включені до збірника?',
			answer:
				'Усі вправи надаються у форматі MP3 з високою якістю звучання. Також додаються PDF-інструкції.',
		},
		{
			question: 'Чи можу я використовувати ці вправи для викладання?',
			answer:
				'Для особистого використання - так. Для професійного викладання необхідно придбати професійний пакет з ліцензією.',
		},
		{
			question: 'Чи є гарантія повернення коштів?',
			answer:
				'Так, ми пропонуємо 14-денну гарантію повернення коштів, якщо збірник вам не підійде.',
		},
	]

	const toggleFAQ = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index)
	}

	return (
		<section className='py-20 bg-gradient-to-b from-white to-[#f9f9ff]'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-[#2a2860] mb-4'>
						Поширені запитання
					</h2>
					<p className='text-lg text-[#4d1b3d] max-w-2xl mx-auto'>
						Знайдіть відповіді на ваші запитання
					</p>
				</div>

				<div className='max-w-3xl mx-auto'>
					{faqs.map((faq, index) => (
						<div
							key={index}
							className='mb-4 border-b border-gray-200 last:border-0'
						>
							<button
								className='w-full text-left py-4 px-2 flex justify-between items-center font-medium text-[#561526] hover:text-[#7a1d34] cursor-pointer'
								onClick={() => toggleFAQ(index)}
							>
								<span>{faq.question}</span>
								<span className='text-xl'>
									{activeIndex === index ? '-' : '+'}
								</span>
							</button>

							{activeIndex === index && (
								<div className='px-2 pb-4 text-[#4d1b3d]'>{faq.answer}</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default FAQ
