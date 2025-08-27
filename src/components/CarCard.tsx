import React from 'react'
import type { Car } from '../types'

interface CarCardProps {
  car: Car
}

const GLOBAL_FALLBACK_IMG = 'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'

const CarCard: React.FC<CarCardProps> = ({ car }) => {
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
    <div className="grid grid-cols-2 gap-4">
      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-800">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={handleError}
        />
      </div>
      <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
        <h3 className="text-xl font-bold text-red-500 mb-2">{car.name}</h3>
        <ul className="text-gray-300 space-y-1 text-xs">
          <li>• <span className="text-white font-semibold">Engine:</span> {car.specs.engine}</li>
          <li>• <span className="text-white font-semibold">Power:</span> {car.specs.power}</li>
          <li>• <span className="text-white font-semibold">0-60 mph:</span> {car.specs.acceleration}</li>
          <li>• <span className="text-white font-semibold">Top Speed:</span> {car.specs.topSpeed}</li>
        </ul>
      </div>
    </div>
  )
}

export default CarCard 