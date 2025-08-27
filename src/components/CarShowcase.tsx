import CarCard from './CarCard'
import { FERRARI_CARS } from '../data/cars'

const CarShowcase = () => {
  const cars = FERRARI_CARS

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-white mb-12 text-center">FERRARI COLLECTION</h1>
        <div className="grid grid-cols-2 gap-16">
          <div className="space-y-8">
            {cars.slice(0, 3).map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
          <div className="space-y-8">
            {cars.slice(3, 6).map((car, index) => (
              <CarCard key={index + 3} car={car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarShowcase
