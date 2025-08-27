import React from 'react'

const CarShowcase = () => {
  const cars = [
    {
      name: "Ferrari SF90 Stradale",
      image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      specs: {
        engine: "4.0L Twin-Turbo V8 + 3 Electric Motors",
        power: "986 hp (combined)",
        acceleration: "2.5 seconds",
        topSpeed: "211 mph"
      }
    },
    {
      name: "Ferrari 812 Superfast",
      image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      specs: {
        engine: "6.5L Naturally Aspirated V12",
        power: "789 hp @ 8,500 rpm",
        acceleration: "2.9 seconds",
        topSpeed: "211 mph"
      }
    },
    {
      name: "Ferrari F8 Tributo",
      image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      specs: {
        engine: "3.9L Twin-Turbo V8",
        power: "710 hp @ 8,000 rpm",
        acceleration: "2.9 seconds",
        topSpeed: "211 mph"
      }
    },
    {
      name: "Ferrari 296 GTB",
      image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      specs: {
        engine: "3.0L Twin-Turbo V6 + Electric Motor",
        power: "830 hp (combined)",
        acceleration: "2.9 seconds",
        topSpeed: "205 mph"
      }
    },
    {
      name: "Ferrari Roma",
      image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      specs: {
        engine: "3.9L Twin-Turbo V8",
        power: "612 hp @ 7,500 rpm",
        acceleration: "3.4 seconds",
        topSpeed: "199 mph"
      }
    },
    {
      name: "Ferrari Portofino M",
      image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      specs: {
        engine: "3.9L Twin-Turbo V8",
        power: "612 hp @ 7,500 rpm",
        acceleration: "3.45 seconds",
        topSpeed: "199 mph"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-white mb-12 text-center">FERRARI COLLECTION</h1>
        
        <div className="grid grid-cols-2 gap-16">
          {/* Left Column - 3 cars */}
          <div className="space-y-8">
            {cars.slice(0, 3).map((car, index) => (
              <div key={index} className="grid grid-cols-2 gap-4">
                <div 
                  className="aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden" 
                  style={{backgroundImage: `url(${car.image})`}}
                ></div>
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
            ))}
          </div>

          {/* Right Column - 3 cars */}
          <div className="space-y-8">
            {cars.slice(3, 6).map((car, index) => (
              <div key={index + 3} className="grid grid-cols-2 gap-4">
                <div 
                  className="aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden" 
                  style={{backgroundImage: `url(${car.image})`}}
                ></div>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarShowcase
