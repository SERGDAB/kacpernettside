import { useMemo, useState, useCallback } from 'react'
import type { Car } from '../types'
import { FERRARI_CARS } from '../data/cars'

interface CarCarouselProps {
  cars?: Car[]
}

const GLOBAL_FALLBACK_IMG = 'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'

const mod = (n: number, m: number) => ((n % m) + m) % m

const CarCarousel = ({ cars }: CarCarouselProps) => {
  const items = cars && cars.length > 0 ? cars : FERRARI_CARS
  const [index, setIndex] = useState(0)

  const count = items.length
  const prevIndex = useMemo(() => mod(index - 1, count), [index, count])
  const nextIndex = useMemo(() => mod(index + 1, count), [index, count])

  const goPrev = useCallback(() => setIndex((i) => mod(i - 1, count)), [count])
  const goNext = useCallback(() => setIndex((i) => mod(i + 1, count)), [count])

  const handleError = (img: HTMLImageElement, car: Car) => {
    if (car.fallbackImage && img.src !== car.fallbackImage) {
      img.src = car.fallbackImage
      return
    }
    if (img.src !== GLOBAL_FALLBACK_IMG) {
      img.src = GLOBAL_FALLBACK_IMG
    }
  }

  return (
    <section className="relative w-full min-h-[70vh] bg-black">
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="relative h-[56vh] md:h-[64vh] overflow-hidden">
          {items.map((car, i) => {
            const isCenter = i === index
            const isPrev = i === prevIndex
            const isNext = i === nextIndex
            const hidden = !isCenter && !isPrev && !isNext

            const base = 'absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-500 ease-out'
            const leftClass = isCenter ? 'left-1/2 z-20' : isPrev ? 'left-[18%] z-10' : isNext ? 'left-[82%] z-10' : 'left-1/2'
            const scaleOpacity = isCenter ? 'scale-100 opacity-100' : 'scale-[0.86] opacity-40'

            return (
              <div key={i} className={`${base} ${hidden ? 'hidden' : ''} ${leftClass} ${scaleOpacity}`} aria-hidden={!isCenter}>
                <div className={`${isCenter ? 'h-[38vh] md:h-[44vh]' : 'h-[22vh] md:h-[26vh]'} aspect-[16/9] relative`}> 
                  <div className={`absolute -inset-1 rounded-2xl ${isCenter ? 'bg-gradient-to-tr from-red-600/20 via-red-500/0 to-transparent blur-xl' : ''}`} />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900/40 shadow-2xl shadow-black/60">
                    <img
                      src={car.image || ''}
                      alt={car.name}
                      className={`w-full h-full object-contain ${isCenter ? '' : 'backdrop-blur-sm'}`}
                      referrerPolicy="no-referrer"
                      loading="eager"
                      onError={(e) => handleError(e.currentTarget, car)}
                    />
                  </div>
                </div>

                {isCenter && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-2 md:mb-4 text-center">
                    <h3 className="text-3xl md:text-5xl font-extrabold tracking-wide text-white text-glow">
                      {car.name}
                    </h3>
                  </div>
                )}
              </div>
            )
          })}

          {/* Controls placed just outside the center image */}
          <button
            aria-label="Previous"
            onClick={goPrev}
            className="group absolute top-1/2 -translate-y-1/2 left-[12%] z-50 inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/5 text-white border border-white/10 shadow-lg backdrop-blur-md transition-transform duration-200 hover:scale-110 hover:bg-white/10 hover:border-red-500/40 focus:outline-none focus:ring-2 focus:ring-red-500/40"
          >
            <span className="pointer-events-none absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition shadow-[0_0_22px_rgba(220,38,38,0.5)]" />
            <svg className="transition-transform duration-200 group-hover:-translate-x-0.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.646 22.354L5.293 12 15.647 1.646l.706.707L6.707 12l9.646 9.646-.707.708z" fill="currentColor" />
            </svg>
          </button>
          <button
            aria-label="Next"
            onClick={goNext}
            className="group absolute top-1/2 -translate-y-1/2 right-[12%] z-50 inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/5 text-white border border-white/10 shadow-lg backdrop-blur-md transition-transform duration-200 hover:scale-110 hover:bg-white/10 hover:border-red-500/40 focus:outline-none focus:ring-2 focus:ring-red-500/40"
          >
            <span className="pointer-events-none absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition shadow-[0_0_22px_rgba(220,38,38,0.5)]" />
            <svg className="transition-transform duration-200 group-hover:translate-x-0.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.354 22.354L7.647 21.647 17.293 12 7.647 2.354l.707-.707L18.707 12 8.354 22.354z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default CarCarousel


