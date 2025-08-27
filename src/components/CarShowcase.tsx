import CarCarousel from './CarCarousel'
import { FERRARI_CARS } from '../data/cars'

const CarShowcase = () => {
  const cars = FERRARI_CARS

  return (
    <div className="min-h-screen bg-black flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="mb-6 text-center">
          <h1 className="text-7xl md:text-8xl font-extrabold tracking-widest text-white text-center text-glow">FERRARI COLLECTION</h1>
          <p className="mt-3 text-gray-400 text-lg md:text-2xl tracking-widest uppercase">Beyond the concrete</p>
        </div>
        <CarCarousel cars={cars} />
      </div>
    </div>
  )
}

export default CarShowcase
