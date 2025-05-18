import Link from 'next/link'

const Header = () => {
	return (
		<header className='bg-[#2a2860] text-white sticky top-0 z-50 shadow-lg'>
			<div className='container mx-auto px-4 py-4 flex justify-between items-center'>
				<Link
					href='/'
					className='text-2xl font-bold flex items-center text-[#97eaf9]'
				>
					Fire Up Your Drive
				</Link>

				<nav className='hidden md:flex space-x-8'>
					<Link href='#features' className='hover:text-[#ff6b6b] transition'>
						Переваги
					</Link>
					<Link href='#exercises' className='hover:text-[#ff6b6b] transition'>
						Вправи
					</Link>
					<Link
						href='#testimonials'
						className='hover:text-[#ff6b6b] transition'
					>
						Відгуки
					</Link>
					<Link href='#pricing' className='hover:text-[#ff6b6b] transition'>
						Ціни
					</Link>
				</nav>

				<button className='bg-[#561526] hover:bg-[#7a1d34] text-white px-6 py-2 rounded-full font-medium transition cursor-pointer'>
					Купити зараз
				</button>
			</div>
		</header>
	)
}

export default Header
