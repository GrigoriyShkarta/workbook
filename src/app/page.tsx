import ExercisesPreview from '@/components/ExercisesPreview'
import FAQ from '@/components/FAQ'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Fire Up Your Drive - Вокальні вправи для марафону</title>
				<meta
					name='description'
					content='20 професійних вокальних вправ у форматі MP3'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<main>
				<Hero />
				<Features />
				<ExercisesPreview />
				<Testimonials />
				<Pricing />
				<FAQ />
			</main>
			<Footer />
		</>
	)
}
