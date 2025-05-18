import { FaCheck } from 'react-icons/fa'
import AbstractElements from './AbstractElements'

const Pricing = () => {
	const plans = [
		{
			name: 'Стандарт',
			price: '499',
			description: 'Базовий доступ до всіх матеріалів',
			features: [
				'20 вокальних вправ MP3',
				'Доступ назавжди',
				'Оновлення 1 раз на рік',
				'PDF-інструкція',
			],
			popular: false,
		},
		{
			name: 'Преміум',
			price: '799',
			description: 'Найкращий вибір для серйозних вокалістів',
			features: [
				'20 вокальних вправ MP3',
				'Доступ назавжди',
				'Оновлення 2 рази на рік',
				'Детальна PDF-інструкція',
				'Додаткові бонусні матеріали',
				'Доступ до закритої групи',
			],
			popular: true,
		},
		{
			name: 'Професійний',
			price: '1299',
			description: 'Для професіоналів та викладачів',
			features: [
				'20 вокальних вправ MP3',
				'Доступ назавжди',
				'Оновлення щокварталу',
				'Повний набір інструкцій',
				'Бонусні матеріали',
				'Доступ до закритої групи',
				'Особистий розбір 1 вправи',
				'Ліцензія для викладання',
			],
			popular: false,
		},
	]

	return (
		<section id='pricing' className='py-20 bg-white relative'>
			<AbstractElements.SmallCircle className='absolute top-10 left-10 opacity-10' />

			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-[#2a2860] mb-4'>
						Варіанти придбання
					</h2>
					<p className='text-lg text-[#4d1b3d] max-w-2xl mx-auto'>
						Оберіть пакет, який найкраще підходить для ваших потреб
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
					{plans.map((plan, index) => (
						<div
							key={index}
							className={`relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition ${
								plan.popular
									? 'border-2 border-[#ff6b6b]'
									: 'border border-gray-200'
							}`}
						>
							{plan.popular && (
								<div className='absolute top-0 right-0 bg-[#ff6b6b] text-white px-4 py-1 text-sm font-bold'>
									Популярний вибір
								</div>
							)}

							<div className='p-8'>
								<h3 className='text-2xl font-bold mb-2 text-[#561526]'>
									{plan.name}
								</h3>
								<p className='text-[#4d1b3d] mb-6'>{plan.description}</p>

								<div className='mb-8'>
									<span className='text-4xl font-bold text-[#2a2860]'>
										{plan.price}
									</span>
									<span className='text-gray-500'> грн</span>
								</div>

								<ul className='space-y-3 mb-8'>
									{plan.features.map((feature, i) => (
										<li key={i} className='flex items-start'>
											<FaCheck className='text-green-500 mt-1 mr-2 flex-shrink-0' />
											<span>{feature}</span>
										</li>
									))}
								</ul>

								<button
									className={`w-full py-3 rounded-full font-bold transition cursor-pointer ${
										plan.popular
											? 'bg-[#561526] hover:bg-[#7a1d34] text-white'
											: 'bg-[#2a2860] hover:bg-[#3d3a7a] text-white'
									}`}
								>
									Обрати пакет
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Pricing
