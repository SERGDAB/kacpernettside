import type React from 'react'
import type { Car } from '../types'
import { carImagePathFromName } from '../utils/images'

interface CarCardProps {
  car: Car
}

const GLOBAL_FALLBACK_IMG = 'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const derived = carImagePathFromName(car.name)
  const src = car.image || derived

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget
    if (car.fallbackImage && target.src !== car.fallbackImage) {
      target.src = car.fallbackImage
      return
    }
    if (target.src !== GLOBAL_FALLBACK_IMG) {
      target.src = GLOBAL_FALLBACK_IMG
    }
  }

  return (
    <div className="grid grid-cols-2 gap-8 group">
      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-800 shadow-lg shadow-black/40">
        <img
          src={src}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={handleError}
        />
      </div>
      <div className="relative">
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-red-600/25 via-red-500/0 to-transparent blur-md opacity-60 group-hover:opacity-90 transition" />
        <div className="relative p-6 rounded-2xl bg-black/50 backdrop-blur-md shadow-2xl shadow-black/60 transition-transform duration-300 group-hover:scale-[1.01]">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="inline-block w-1.5 h-6 bg-red-600 rounded-sm" />
            <h3 className="text-2xl font-extrabold tracking-wide text-white text-glow text-center">{car.name}</h3>
          </div>
          <ul className="text-gray-200 space-y-2 text-sm text-center">
            <li className="flex items-start justify-center gap-3">
              <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-red-500" />
              <span><span className="text-amber-300 font-semibold">Engine:</span> {car.specs.engine}</span>
            </li>
            <li className="flex items-start justify-center gap-3">
              <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-red-500" />
              <span><span className="text-amber-300 font-semibold">Power:</span> {car.specs.power}</span>
            </li>
            <li className="flex items-start justify-center gap-3">
              <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-red-500" />
              <span><span className="text-amber-300 font-semibold">0-60 mph:</span> {car.specs.acceleration}</span>
            </li>
            <li className="flex items-start justify-center gap-3">
              <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-red-500" />
              <span><span className="text-amber-300 font-semibold">Top Speed:</span> {car.specs.topSpeed}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CarCard 