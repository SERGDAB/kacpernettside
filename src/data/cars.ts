import type { Car } from '../types'
import sf90 from './sf90.webp'
import f8 from './f8.webp'
import portofino from './portofino.webp'
import roma from './roma.webp'
import gtb296 from './296.webp'
import superfast812 from './812.webp'

export const FERRARI_CARS: Car[] = [
  {
    name: 'Ferrari SF90 Stradale',
    image: sf90,
    fallbackImage: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    specs: {
      engine: '4.0L Twin-Turbo V8 + 3 Electric Motors',
      power: '986 hp (combined)',
      acceleration: '2.5 seconds',
      topSpeed: '211 mph'
    }
  },
  {
    name: 'Ferrari F8 Tributo',
    image: f8,
    fallbackImage: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    specs: {
      engine: '3.9L Twin-Turbo V8',
      power: '710 hp @ 8,000 rpm',
      acceleration: '2.9 seconds',
      topSpeed: '211 mph'
    }
  },
  {
    name: 'Ferrari Portofino M',
    image: portofino,
    fallbackImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    specs: {
      engine: '3.9L Twin-Turbo V8',
      power: '612 hp @ 7,500 rpm',
      acceleration: '3.45 seconds',
      topSpeed: '199 mph'
    }
  },
  {
    name: 'Ferrari Roma',
    image: roma,
    fallbackImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    specs: {
      engine: '3.9L Twin-Turbo V8',
      power: '612 hp @ 7,500 rpm',
      acceleration: '3.4 seconds',
      topSpeed: '199 mph'
    }
  },
  {
    name: 'Ferrari 296 GTB',
    image: gtb296,
    fallbackImage: 'https://images.unsplash.com/photo-1517167685281-3a6fdbf34e30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    specs: {
      engine: '3.0L Twin-Turbo V6 + Electric Motor',
      power: '830 hp (combined)',
      acceleration: '2.9 seconds',
      topSpeed: '205 mph'
    }
  },
  {
    name: 'Ferrari 812 Superfast',
    image: superfast812,
    fallbackImage: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    specs: {
      engine: '6.5L Naturally Aspirated V12',
      power: '789 hp @ 8,500 rpm',
      acceleration: '2.9 seconds',
      topSpeed: '211 mph'
    }
  }
] 