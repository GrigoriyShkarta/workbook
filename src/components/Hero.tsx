import Image from 'next/image'
import AbstractElements from './AbstractElements'

const Hero = () => {
	return (
		<section className='relative bg-gradient-to-b from-[#2a2860] to-[#4d1b3d] text-white py-20 overflow-hidden bg-[url(../assets/img/bg.jpg)] bg-no-repeat bg-cover'>
			<AbstractElements.LargeCircle className='absolute top-20 left-10 opacity-20' />
			<AbstractElements.SmallCircle className='absolute bottom-20 right-10 opacity-30' />

			<div className='container mx-auto px-4 flex flex-col md:flex-row items-center max-sm:text-center'>
				<div className='md:w-1/2 mb-10 md:mb-0 relative z-10'>
					<h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#97eaf9]'>
						Fire Up Your Drive
					</h1>
					<p className='text-xl mb-8 opacity-90'>
						20 професійних вокальних вправ у форматі MP3 для вашого марафону.
						Підніміть свій голос на новий рівень!
					</p>
					<div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
						<button className='bg-[#561526] hover:bg-[#7a1d34] text-white px-8 py-3 rounded-full font-bold text-lg transition cursor-pointer'>
							Замовити зараз
						</button>
						{/* <button className='bg-transparent border-2 border-white hover:bg-white hover:text-[#2a2860] text-white px-8 py-3 rounded-full font-bold text-lg transition'>
							Демо-версія
						</button> */}
					</div>
				</div>

				<div className='md:w-1/2 relative'>
					<div className='relative'>
						{/* <AbstractElements.WaveForm className='absolute -top-10 -left-10' /> */}
						<Image
							src='/images/album-cover.png'
							alt='Fire Up Your Drive Album Cover'
							fill
							className='rounded-2xl shadow-2xl w-full max-w-md mx-auto relative z-10'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
