import { FaQuoteLeft } from 'react-icons/fa'
import AbstractElements from './AbstractElements'

const Testimonials = () => {
	const testimonials = [
		{
			quote:
				'Цей збірник кардинально змінив мій підхід до вокальних тренувань. Вправи дійсно ефективні!',
			author: 'Анна К., професійна співачка',
		},
		{
			quote:
				'Я використовую ці вправи зі своїми студентами. Результати помітні вже після першого тижня занять.',
			author: 'Олексій М., вокальний тренер',
		},
		{
			quote:
				'Найкращий інвестиція у мій голос за останні роки. Рекомендую всім, хто хоче прогресувати.',
			author: 'Марія Т., учасниця вокального марафону',
		},
	]

	return (
		<section
			id='testimonials'
			className='py-20 bg-[#2a2860] text-white relative'
		>
			<AbstractElements.LargeCircle className='absolute top-20 right-20 opacity-10' />

			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Що кажуть наші клієнти
					</h2>
					<p className='text-lg opacity-90 max-w-2xl mx-auto'>
						Відгуки тих, хто вже використовує наш збірник
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{testimonials.map((testimonial, index) => (
						<div key={index} className='bg-[#3a3669] p-8 rounded-xl relative'>
							<FaQuoteLeft className='text-4xl opacity-20 absolute top-6 left-6' />
							<p className='text-lg mb-6 relative z-10'>{testimonial.quote}</p>
							<p className='font-bold text-[#ff6b6b]'>{testimonial.author}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonials
