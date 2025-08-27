import { useEffect, useRef, useState } from 'react'
import CarShowcase from '../components/CarShowcase'
// Resolve local assets to runtime URLs via Vite
const heroBg = new URL('../data/giphy.gif', import.meta.url).href
const startupAudioSrc = new URL("../data/Car Startup Sound Effect  Cranking Sound Effect  Loud Exhaust Sound Effect.mp3", import.meta.url).href
const ferrari488SpiderImg = new URL('../data/7f8d8e75-37a0-435a-8be7-ccf1f4528f67.png', import.meta.url).href
const ferrari348Img = new URL('../data/31342352-3c14-4cad-b46b-45fa695103ff.png', import.meta.url).href
const ferrariSf90Img = new URL('../data/ChatGPT Image 28. aug. 2025, 00_17_17.png', import.meta.url).href

const Home = () => {
  const [activeSection, setActiveSection] = useState('sports-cars')
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const heroRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const playOnce = async () => {
      if (!audioRef.current) return
      try {
        await audioRef.current.play()
      } catch {
        // Fallback: try again on first user gesture without showing UI
        const resume = () => {
          audioRef.current?.play().catch(() => {})
          window.removeEventListener('pointerdown', resume)
          window.removeEventListener('keydown', resume)
          window.removeEventListener('wheel', resume)
          window.removeEventListener('touchstart', resume)
        }
        window.addEventListener('pointerdown', resume, { once: true })
        window.addEventListener('keydown', resume, { once: true })
        window.addEventListener('wheel', resume, { once: true })
        window.addEventListener('touchstart', resume, { once: true })
      }
    }
    playOnce()
  }, [])

  useEffect(() => {
    if (!heroRef.current) return
    const el = heroRef.current
    const io = new IntersectionObserver(
      ([entry]) => {
        const audio = audioRef.current
        if (!audio) return
        if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
          audio.play().catch(() => {})
        } else {
          audio.pause()
        }
      },
      { threshold: [0, 0.6, 1] }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Ferrari hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 z-10"></div>
        <audio ref={audioRef} src={startupAudioSrc} preload="auto" loop playsInline />
        
        <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight text-white drop-shadow-[0_0_25px_rgba(220,38,38,0.45)]">
            START YOUR ENGINE
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 drop-shadow-[0_0_18px_rgba(220,38,38,0.35)]">
            Discover the ultimate driving experience with our exclusive Ferrari collection
          </p>
        </div>
      </section>

      {/* Navigation Tabs removed per request */}

      {/* Content Sections */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Sports Cars Section */}
          {activeSection === 'sports-cars' && (
            <CarShowcase />
          )}

          {/* Racing Section */}
          {activeSection === 'racing' && (
            <div className="grid grid-cols-5 gap-16 items-start">
              <div className="col-span-3 relative p-16">
                <div className="aspect-[4/1] bg-gradient-to-br from-red-900/20 to-gray-800/20 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                </div>
              </div>
              <div className="col-span-2">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  RACING
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="bg-gradient-to-b from-gray-900/80 to-black/80 p-5 rounded-xl border border-gray-800/60 shadow-lg shadow-black/40 backdrop-blur-sm">
                    <h3 className="text-2xl font-extrabold tracking-wide text-white mb-2">Scuderia Ferrari F1-75</h3>
                    <ul className="text-gray-300 space-y-1.5 text-sm">
                      <li>• <span className="text-amber-300 font-semibold">Engine:</span> 1.6L Turbo Hybrid V6</li>
                      <li>• <span className="text-amber-300 font-semibold">Power:</span> 1000+ hp</li>
                      <li>• <span className="text-amber-300 font-semibold">Weight:</span> 798 kg (minimum)</li>
                      <li>• <span className="text-amber-300 font-semibold">Championships:</span> 16 Constructors' Titles</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-b from-gray-900/80 to-black/80 p-5 rounded-xl border border-gray-800/60 shadow-lg shadow-black/40 backdrop-blur-sm">
                    <h3 className="text-2xl font-extrabold tracking-wide text-white mb-2">Ferrari 499P Hypercar</h3>
                    <ul className="text-gray-300 space-y-1.5 text-sm">
                      <li>• <span className="text-amber-300 font-semibold">Engine:</span> 3.0L Twin-Turbo V6 Hybrid</li>
                      <li>• <span className="text-amber-300 font-semibold">Power:</span> 680 hp + 272 hp electric</li>
                      <li>• <span className="text-amber-300 font-semibold">Weight:</span> 1,030 kg</li>
                      <li>• <span className="text-amber-300 font-semibold">Achievement:</span> 2023 24 Hours of Le Mans Winner</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-b from-gray-900/80 to-black/80 p-5 rounded-xl border border-gray-800/60 shadow-lg shadow-black/40 backdrop-blur-sm">
                    <h3 className="text-2xl font-extrabold tracking-wide text-white mb-2">Ferrari 296 GT3</h3>
                    <ul className="text-gray-300 space-y-1.5 text-sm">
                      <li>• <span className="text-amber-300 font-semibold">Engine:</span> 3.0L Twin-Turbo V6</li>
                      <li>• <span className="text-amber-300 font-semibold">Power:</span> 600 hp (GT3 regulations)</li>
                      <li>• <span className="text-amber-300 font-semibold">Weight:</span> 1,240 kg</li>
                      <li>• <span className="text-amber-300 font-semibold">Series:</span> GT3 Racing Worldwide</li>
                    </ul>
                  </div>
                </div>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
                  RACING HERITAGE
                </button>
              </div>
            </div>
          )}

          {/* Collections Section */}
          {activeSection === 'collections' && (
            <div className="grid grid-cols-5 gap-16 items-start">
              <div className="col-span-3 relative p-16">
                <div className="aspect-[4/1] bg-gradient-to-br from-red-900/20 to-gray-800/20 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                </div>
              </div>
              <div className="col-span-2">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  COLLECTIONS
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="bg-gradient-to-b from-gray-900/80 to-black/80 p-5 rounded-xl border border-gray-800/60 shadow-lg shadow-black/40 backdrop-blur-sm">
                    <h3 className="text-2xl font-extrabold tracking-wide text-white mb-2">Ferrari Lifestyle Collection</h3>
                    <ul className="text-gray-300 space-y-1.5 text-sm">
                      <li>• <span className="text-amber-300 font-semibold">Apparel:</span> Racing suits, casual wear</li>
                      <li>• <span className="text-amber-300 font-semibold">Accessories:</span> Watches, bags, sunglasses</li>
                      <li>• <span className="text-amber-300 font-semibold">Home:</span> Furniture, decor, art pieces</li>
                      <li>• <span className="text-amber-300 font-semibold">Technology:</span> Smartphones, headphones</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-b from-gray-900/80 to-black/80 p-5 rounded-xl border border-gray-800/60 shadow-lg shadow-black/40 backdrop-blur-sm">
                    <h3 className="text-2xl font-extrabold tracking-wide text-white mb-2">Scuderia Ferrari Racing Gear</h3>
                    <ul className="text-gray-300 space-y-1.5 text-sm">
                      <li>• <span className="text-amber-300 font-semibold">Racing Suits:</span> Fire-resistant, custom fitted</li>
                      <li>• <span className="text-amber-300 font-semibold">Helmets:</span> Carbon fiber, FIA certified</li>
                      <li>• <span className="text-amber-300 font-semibold">Gloves:</span> Nomex material, precision grip</li>
                      <li>• <span className="text-amber-300 font-semibold">Shoes:</span> Lightweight, fire-resistant</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-b from-gray-900/80 to-black/80 p-5 rounded-xl border border-gray-800/60 shadow-lg shadow-black/40 backdrop-blur-sm">
                    <h3 className="text-2xl font-extrabold tracking-wide text-white mb-2">Ferrari Luxury Accessories</h3>
                    <ul className="text-gray-300 space-y-1.5 text-sm">
                      <li>• <span className="text-amber-300 font-semibold">Watches:</span> Hublot collaboration, limited editions</li>
                      <li>• <span className="text-amber-300 font-semibold">Jewelry:</span> Sterling silver, 18k gold pieces</li>
                      <li>• <span className="text-amber-300 font-semibold">Bags:</span> Leather goods, racing-inspired design</li>
                      <li>• <span className="text-amber-300 font-semibold">Sunglasses:</span> Ray-Ban partnership, UV protection</li>
                    </ul>
                  </div>
                </div>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
                  SHOP COLLECTION
                </button>
              </div>
            </div>
          )}

          {/* Experiences Section */}
          {activeSection === 'experiences' && (
            <div className="grid grid-cols-5 gap-16 items-start">
              <div className="col-span-3 relative p-16">
                <div className="aspect-[4/1] bg-gradient-to-br from-red-900/20 to-gray-800/20 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                </div>
              </div>
              <div className="col-span-2">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  EXPERIENCES
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="bg-gradient-to-b from-gray-900/80 to-black/80 p-5 rounded-xl border border-gray-800/60 shadow-lg shadow-black/40 backdrop-blur-sm">
                    <h3 className="text-2xl font-extrabold tracking-wide text-white mb-2">Ferrari Driving Experience</h3>
                    <ul className="text-gray-300 space-y-1.5 text-sm">
                      <li>• <span className="text-amber-300 font-semibold">Location:</span> Maranello, Italy</li>
                      <li>• <span className="text-amber-300 font-semibold">Duration:</span> 1-3 days</li>
                      <li>• <span className="text-amber-300 font-semibold">Cars:</span> 488, F8, SF90, 812</li>
                      <li>• <span className="text-amber-300 font-semibold">Price:</span> €2,500 - €8,000</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-b from-gray-900/80 to-black/80 p-5 rounded-xl border border-gray-800/60 shadow-lg shadow-black/40 backdrop-blur-sm">
                    <h3 className="text-2xl font-extrabold tracking-wide text-white mb-2">Ferrari Museum & Factory Tour</h3>
                    <ul className="text-gray-300 space-y-1.5 text-sm">
                      <li>• <span className="text-amber-300 font-semibold">Location:</span> Maranello & Modena, Italy</li>
                      <li>• <span className="text-amber-300 font-semibold">Duration:</span> 4-6 hours</li>
                      <li>• <span className="text-amber-300 font-semibold">Highlights:</span> Historical cars, production line</li>
                      <li>• <span className="text-amber-300 font-semibold">Price:</span> €25 - €150</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-b from-gray-900/80 to-black/80 p-5 rounded-xl border border-gray-800/60 shadow-lg shadow-black/40 backdrop-blur-sm">
                    <h3 className="text-2xl font-extrabold tracking-wide text-white mb-3">Ferrari Racing Academy</h3>
                    <ul className="text-gray-300 space-y-1.5 text-sm">
                      <li>• <span className="text-amber-300 font-semibold">Location:</span> Fiorano Circuit, Italy</li>
                      <li>• <span className="text-amber-300 font-semibold">Duration:</span> 5-7 days intensive</li>
                      <li>• <span className="text-amber-300 font-semibold">Program:</span> Advanced driving techniques</li>
                      <li>• <span className="text-amber-300 font-semibold">Price:</span> €15,000 - €25,000</li>
                    </ul>
                  </div>
                </div>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
                  BOOK EXPERIENCE
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* News Section */}
      <section className="pt-20 pb-40 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-white drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]">LATEST NEWS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Ferrari 348 — A Brief History",
                excerpt: "Launched in 1989, the 348 modernized Ferrari’s mid‑engined V8 line with a 3.4‑liter V8, transverse gearbox, and styling that bridged the Testarossa to the 90s era.",
                image: ferrari348Img,
                specs: "Ferrari 348 history"
              },
              {
                title: "Ferrari 488 Spider — A Brief History",
                excerpt: "From the 488 GTB origins to the open-top Spider: twin-turbo V8 performance, design evolution, and racing DNA distilled for the road.",
                image: ferrari488SpiderImg,
                specs: "Ferrari 488 Spider history"
              },
              {
                title: "Ferrari SF90 Stradale — Highlights",
                excerpt: "Ferrari’s first series‑production PHEV supercar: 4.0L twin‑turbo V8 with three e‑motors for 986 hp, e‑SSC torque vectoring, and blistering 0–100 km/h in 2.5 seconds.",
                image: ferrariSf90Img,
                specs: "SF90 Stradale highlights"
              }
            ].map((news, index) => (
              <article key={index} className="group bg-black rounded-lg overflow-hidden">
                <div
                  className="aspect-[8/3] bg-center bg-no-repeat transform transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${news.image})`, backgroundSize: '50%' }}
                ></div>
                <div className="p-6 text-center w-1/2 mx-auto transform transition-transform duration-300 group-hover:scale-110">
                  <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                  <p className="text-gray-400 mb-3 text-sm">{news.excerpt}</p>
                  {/* Specs line removed per request */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Backend Test Section removed per request */}
    </div>
  )
}

export default Home
