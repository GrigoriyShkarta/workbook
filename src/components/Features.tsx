import { FaMusic, FaHeadphones, FaRegClock, FaChartLine } from 'react-icons/fa'
import AbstractElements from './AbstractElements'

const Features = () => {
	const features = [
		{
			icon: <FaMusic className='text-3xl mb-4 text-[#ff6b6b]' />,
			title: '20 професійних вправ',
			description: 'Різноманітні вправи для всіх рівнів підготовки',
		},
		{
			icon: <FaHeadphones className='text-3xl mb-4 text-[#ff6b6b]' />,
			title: 'Високоякісний звук',
			description: 'Записи у форматі MP3 з чітким звучанням',
		},
		{
			icon: <FaRegClock className='text-3xl mb-4 text-[#ff6b6b]' />,
			title: 'Оптимальна тривалість',
			description: 'Кожна вправа розрахована на ефективне тренування',
		},
		{
			icon: <FaChartLine className='text-3xl mb-4 text-[#ff6b6b]' />,
			title: 'Прогрес гарантовано',
			description: 'Системний підхід до покращення вокальних навичок',
		},
	]

	return (
		<section id='features' className='py-20 bg-white relative overflow-hidden'>
			<AbstractElements.SmallCircle className='absolute top-10 right-10 opacity-10' />
			<AbstractElements.LargeCircle className='absolute bottom-10 left-10 opacity-10' />

			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-[#2a2860] mb-4'>
						Чому наш збірник?
					</h2>
					<p className='text-lg text-[#4d1b3d] max-w-2xl mx-auto'>
						Наш збірник створений професіоналами для тих, хто серйозно ставиться
						до свого вокального розвитку
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='bg-[#f9f9ff] p-8 rounded-xl shadow-sm hover:shadow-md transition'
						>
							<div className='text-center'>
								{feature.icon}
								<h3 className='text-xl font-bold mb-2 text-[#561526]'>
									{feature.title}
								</h3>
								<p className='text-[#4d1b3d]'>{feature.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Features
