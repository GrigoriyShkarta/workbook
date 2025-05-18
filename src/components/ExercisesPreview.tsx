'use client'

import { useState, useRef, useEffect } from 'react'
import {
	FaPlay,
	FaPause,
	FaStepForward,
	FaStepBackward,
	FaVolumeUp,
	FaVolumeMute,
} from 'react-icons/fa'
import AbstractElements from './AbstractElements'

const ExercisesPreview = () => {
	const [currentTrack, setCurrentTrack] = useState(0)
	const [isPlaying, setIsPlaying] = useState(false)
	const [progress, setProgress] = useState(0)
	const [volume, setVolume] = useState(0.7)
	const [isMuted, setIsMuted] = useState(false)
	const [duration, setDuration] = useState(0)
	const [error, setError] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const audioRef = useRef<HTMLAudioElement>(null)

	const exercises = [
		{
			id: 1,
			title: 'Розспівка #1',
			duration: '3:45',
			src: '../assets/audio/demo_1.mp3',
		},
		{
			id: 2,
			title: 'Діапазонне тренування',
			duration: '4:20',
			src: '../assets/audio/demo_2.mp3',
		},
		{
			id: 3,
			title: 'Динамічний контроль',
			duration: '5:10',
			src: '../assets/audio/demo_3.mp3',
		},
		{
			id: 4,
			title: 'Вибірковість звуку',
			duration: '3:55',
			src: '../assets/audio/demo_4.mp3',
		},
		{
			id: 5,
			title: 'Розспівка #2',
			duration: '4:30',
			src: '../assets/audio/demo_5.mp3',
		},
		{
			id: 6,
			title: 'Витримка нот',
			duration: '6:15',
			src: '../assets/audio/demo_6.mp3',
		},
	]

	// Load metadata and handle errors
	// Инициализация аудио и загрузка метаданных
	useEffect(() => {
		const audio = audioRef.current
		if (!audio) return

		const handleLoadedData = () => {
			setIsLoading(false)
			setDuration(audio.duration)
			setError(null)
		}

		const handleError = () => {
			setIsLoading(false)
			setError(`Не вдалося завантажити аудіо: ${exercises[currentTrack].title}`)
			setIsPlaying(false)
		}

		const handleWaiting = () => {
			setIsLoading(true)
		}

		audio.addEventListener('loadeddata', handleLoadedData)
		audio.addEventListener('error', handleError)
		audio.addEventListener('waiting', handleWaiting)

		// Загружаем метаданные при смене трека
		audio.load()
		audio.volume = volume

		return () => {
			audio.removeEventListener('loadeddata', handleLoadedData)
			audio.removeEventListener('error', handleError)
			audio.removeEventListener('waiting', handleWaiting)
		}
	}, [currentTrack])

	// Обработка воспроизведения/паузы
	useEffect(() => {
		const audio = audioRef.current
		if (!audio || isLoading) return

		const playPromise = isPlaying ? audio.play() : audio.pause()

		if (isPlaying) {
			if (playPromise instanceof Promise) {
				playPromise.catch(e => {
					setError(`Помилка відтворення: ${e.message}`)
					setIsPlaying(false)
				})
			}
		}
	}, [isPlaying, currentTrack, isLoading])

	// Обновление прогресса
	useEffect(() => {
		const audio = audioRef.current
		if (!audio) return

		const updateProgress = () => {
			if (audio.duration) {
				setProgress((audio.currentTime / audio.duration) * 100)
			}
		}

		const handleEnded = () => {
			handleNext()
		}

		audio.addEventListener('timeupdate', updateProgress)
		audio.addEventListener('ended', handleEnded)

		return () => {
			audio.removeEventListener('timeupdate', updateProgress)
			audio.removeEventListener('ended', handleEnded)
		}
	}, [duration])

	const handlePlayPause = () => {
		setIsPlaying(!isPlaying)
	}

	const handleNext = () => {
		setCurrentTrack(prev => (prev === exercises.length - 1 ? 0 : prev + 1))
		setIsPlaying(true)
	}

	const handlePrev = () => {
		setCurrentTrack(prev => (prev === 0 ? exercises.length - 1 : prev - 1))
		setIsPlaying(true)
	}

	const handleTrackSelect = (index: number) => {
		if (currentTrack !== index) {
			setCurrentTrack(index)
			setIsPlaying(true)
		} else {
			handlePlayPause()
		}
	}

	const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newProgress = Number(e.target.value)
		setProgress(newProgress)
		if (audioRef.current && duration) {
			audioRef.current.currentTime = (newProgress / 100) * duration
		}
	}

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = Number(e.target.value)
		setVolume(newVolume)
		if (audioRef.current) {
			audioRef.current.volume = newVolume
			setIsMuted(newVolume === 0)
		}
	}

	const toggleMute = () => {
		if (audioRef.current) {
			if (isMuted) {
				audioRef.current.volume = volume
			} else {
				audioRef.current.volume = 0
			}
			setIsMuted(!isMuted)
		}
	}

	const formatTime = (seconds: number) => {
		const mins = Math.floor(seconds / 60)
		const secs = Math.floor(seconds % 60)
		return `${mins}:${secs < 10 ? '0' : ''}${secs}`
	}

	return (
		<section
			id='exercises'
			className='py-20 bg-gradient-to-b from-[#f9f9ff] to-white relative'
		>
			<AbstractElements.WaveForm className='absolute top-0 right-0 opacity-10' />

			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-[#2a2860] mb-4'>
						Прослухати вправи
					</h2>
					<p className='text-lg text-[#4d1b3d] max-w-2xl mx-auto'>
						Ось декілька прикладів вправ з нашого збірника
					</p>
				</div>

				{/* Error message */}
				{error && (
					<div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 max-w-3xl mx-auto'>
						<p>{error}</p>
					</div>
				)}

				{/* Audio Player */}
				<div className='bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto mb-12'>
					<div className='flex flex-col md:flex-row gap-6'>
						{/* Album Cover */}
						<div className='w-full md:w-1/3 flex-shrink-0'>
							<div className='bg-gradient-to-br from-[#2a2860] to-[#561526] rounded-lg aspect-square flex items-center justify-center'>
								<div className='text-white text-center p-4'>
									<div className='text-2xl font-bold mb-2'>Fire Up</div>
									<div className='text-lg'>Your Drive</div>
								</div>
							</div>
						</div>

						{/* Player Controls */}
						<div className='flex-1'>
							<h3 className='text-xl font-bold text-[#561526] mb-1'>
								{exercises[currentTrack].title}
							</h3>
							<p className='text-[#4d1b3d] mb-4'>
								{duration
									? formatTime(duration)
									: exercises[currentTrack].duration}
							</p>

							{/* Progress Bar */}
							<div className='mb-4'>
								<div className='flex justify-between text-sm text-[#4d1b3d] mb-1'>
									<span>
										{audioRef.current
											? formatTime(audioRef.current.currentTime || 0)
											: '0:00'}
									</span>
									<span>
										{formatTime(duration) || exercises[currentTrack].duration}
									</span>
								</div>
								<input
									type='range'
									min='0'
									max='100'
									value={progress}
									onChange={handleProgressChange}
									className='w-full h-2 bg-[#e0e0ff] rounded-full appearance-none cursor-pointer'
									style={{
										background: `linear-gradient(to right, #561526 0%, #561526 ${progress}%, #e0e0ff ${progress}%, #e0e0ff 100%)`,
									}}
								/>
							</div>

							{/* Main Controls */}
							<div className='flex justify-center items-center space-x-6 mb-6'>
								<button
									onClick={handlePrev}
									className='text-[#2a2860] hover:text-[#561526] transition cursor-pointer'
									aria-label='Попередній трек'
								>
									<FaStepBackward className='text-xl' />
								</button>
								<button
									onClick={handlePlayPause}
									className='bg-[#561526] hover:bg-[#7a1d34] text-white w-12 h-12 rounded-full flex items-center justify-center transition cursor-pointer'
									aria-label={isPlaying ? 'Пауза' : 'Відтворити'}
								>
									{isPlaying ? (
										<FaPause className='text-lg' />
									) : (
										<FaPlay className='text-lg ml-1' />
									)}
								</button>
								<button
									onClick={handleNext}
									className='text-[#2a2860] hover:text-[#561526] transition cursor-pointer'
									aria-label='Наступний трек'
								>
									<FaStepForward className='text-xl' />
								</button>
							</div>

							{/* Volume Control */}
							<div className='flex items-center space-x-2 cursor-pointer'>
								<button
									onClick={toggleMute}
									aria-label={isMuted ? 'Увімкнути звук' : 'Вимкнути звук'}
								>
									{isMuted ? (
										<FaVolumeMute className='text-[#4d1b3d] cursor-pointer' />
									) : (
										<FaVolumeUp className='text-[#4d1b3d] cursor-pointer' />
									)}
								</button>
								<input
									type='range'
									min='0'
									max='1'
									step='0.01'
									value={isMuted ? 0 : volume}
									onChange={handleVolumeChange}
									className='w-24 h-2 bg-[#e0e0ff] rounded-full appearance-none cursor-pointer'
									style={{
										background: `linear-gradient(to right, #561526 0%, #561526 ${
											(isMuted ? 0 : volume) * 100
										}%, #e0e0ff ${
											(isMuted ? 0 : volume) * 100
										}%, #e0e0ff 100%)`,
									}}
								/>
							</div>
						</div>
					</div>

					{/* Hidden Audio Element */}
					<audio
						ref={audioRef}
						src={exercises[currentTrack].src}
						preload='metadata'
						onError={() => setError('Не вдалося завантажити аудіофайл')}
					/>
				</div>

				{/* Track List */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto'>
					{exercises.map((exercise, index) => (
						<div
							key={exercise.id}
							onClick={() => handleTrackSelect(index)}
							className={`bg-white p-4 rounded-lg cursor-pointer transition ${
								currentTrack === index
									? 'ring-2 ring-[#561526] bg-[#f9f9ff]'
									: 'hover:bg-[#f9f9ff] ring-2 ring-[#f9f9ff]'
							}`}
						>
							<div className='flex items-center'>
								<div
									className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
										currentTrack === index
											? 'bg-[#561526] text-white'
											: 'bg-[#e0e0ff] text-[#2a2860]'
									}`}
								>
									{index + 1}
								</div>
								<div>
									<h4 className='font-medium text-[#561526]'>
										{exercise.title}
									</h4>
									{/* <p className='text-sm text-[#4d1b3d]'>{exercise.duration}</p> */}
								</div>
								{currentTrack === index && isPlaying && (
									<div className='ml-auto w-3 h-3 rounded-full bg-[#561526] animate-pulse'></div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ExercisesPreview
