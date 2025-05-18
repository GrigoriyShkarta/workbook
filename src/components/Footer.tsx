const Footer = () => {
	return (
		<footer className='bg-[#2a2860] text-white py-12'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div>
						<h3 className='text-xl font-bold mb-4 flex items-center text-[#97eaf9]'>
							Fire Up Your Drive
						</h3>
						<p className='mb-4 opacity-80'>
							Професійні вокальні вправи для вашого марафону
						</p>
					</div>
				</div>

				<div className='border-t border-[#3a3669] mt-12 pt-8 text-center opacity-70 text-sm'>
					<p>
						© {new Date().getFullYear()} Fire Up Your Drive. Всі права захищені.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
