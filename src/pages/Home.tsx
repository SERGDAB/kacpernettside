import { useState } from 'react'
import SimpleBackendTest from '../components/SimpleBackendTest'
import CarShowcase from '../components/CarShowcase'

const Home = () => {
  const [activeSection, setActiveSection] = useState('sports-cars')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat"></div>
        
        <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight">
            START YOUR ENGINE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Discover the ultimate driving experience with our exclusive Ferrari collection
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-none transition-all duration-300 transform hover:scale-105">
            DISCOVER MORE
          </button>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'sports-cars', label: 'SPORTS CARS' },
              { id: 'racing', label: 'RACING' },
              { id: 'collections', label: 'COLLECTIONS' },
              { id: 'experiences', label: 'EXPERIENCES' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`py-6 px-4 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-red-500 border-b-2 border-red-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

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
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-bold text-red-500 mb-2">Scuderia Ferrari F1-75</h3>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• <span className="text-white font-semibold">Engine:</span> 1.6L Turbo Hybrid V6</li>
                      <li>• <span className="text-white font-semibold">Power:</span> 1000+ hp</li>
                      <li>• <span className="text-white font-semibold">Weight:</span> 798 kg (minimum)</li>
                      <li>• <span className="text-white font-semibold">Championships:</span> 16 Constructors' Titles</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-bold text-red-500 mb-2">Ferrari 499P Hypercar</h3>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• <span className="text-white font-semibold">Engine:</span> 3.0L Twin-Turbo V6 Hybrid</li>
                      <li>• <span className="text-white font-semibold">Power:</span> 680 hp + 272 hp electric</li>
                      <li>• <span className="text-white font-semibold">Weight:</span> 1,030 kg</li>
                      <li>• <span className="text-white font-semibold">Achievement:</span> 2023 24 Hours of Le Mans Winner</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-bold text-red-500 mb-2">Ferrari 296 GT3</h3>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• <span className="text-white font-semibold">Engine:</span> 3.0L Twin-Turbo V6</li>
                      <li>• <span className="text-white font-semibold">Power:</span> 600 hp (GT3 regulations)</li>
                      <li>• <span className="text-white font-semibold">Weight:</span> 1,240 kg</li>
                      <li>• <span className="text-white font-semibold">Series:</span> GT3 Racing Worldwide</li>
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
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-bold text-red-500 mb-2">Ferrari Lifestyle Collection</h3>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• <span className="text-white font-semibold">Apparel:</span> Racing suits, casual wear</li>
                      <li>• <span className="text-white font-semibold">Accessories:</span> Watches, bags, sunglasses</li>
                      <li>• <span className="text-white font-semibold">Home:</span> Furniture, decor, art pieces</li>
                      <li>• <span className="text-white font-semibold">Technology:</span> Smartphones, headphones</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-bold text-red-500 mb-2">Scuderia Ferrari Racing Gear</h3>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• <span className="text-white font-semibold">Racing Suits:</span> Fire-resistant, custom fitted</li>
                      <li>• <span className="text-white font-semibold">Helmets:</span> Carbon fiber, FIA certified</li>
                      <li>• <span className="text-white font-semibold">Gloves:</span> Nomex material, precision grip</li>
                      <li>• <span className="text-white font-semibold">Shoes:</span> Lightweight, fire-resistant</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-bold text-red-500 mb-2">Ferrari Luxury Accessories</h3>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• <span className="text-white font-semibold">Watches:</span> Hublot collaboration, limited editions</li>
                      <li>• <span className="text-white font-semibold">Jewelry:</span> Sterling silver, 18k gold pieces</li>
                      <li>• <span className="text-white font-semibold">Bags:</span> Leather goods, racing-inspired design</li>
                      <li>• <span className="text-white font-semibold">Sunglasses:</span> Ray-Ban partnership, UV protection</li>
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
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-bold text-red-500 mb-2">Ferrari Driving Experience</h3>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• <span className="text-white font-semibold">Location:</span> Maranello, Italy</li>
                      <li>• <span className="text-white font-semibold">Duration:</span> 1-3 days</li>
                      <li>• <span className="text-white font-semibold">Cars:</span> 488, F8, SF90, 812</li>
                      <li>• <span className="text-white font-semibold">Price:</span> €2,500 - €8,000</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-bold text-red-500 mb-2">Ferrari Museum & Factory Tour</h3>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• <span className="text-white font-semibold">Location:</span> Maranello & Modena, Italy</li>
                      <li>• <span className="text-white font-semibold">Duration:</span> 4-6 hours</li>
                      <li>• <span className="text-white font-semibold">Highlights:</span> Historical cars, production line</li>
                      <li>• <span className="text-white font-semibold">Price:</span> €25 - €150</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-bold text-red-500 mb-3">Ferrari Racing Academy</h3>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• <span className="text-white font-semibold">Location:</span> Fiorano Circuit, Italy</li>
                      <li>• <span className="text-white font-semibold">Duration:</span> 5-7 days intensive</li>
                      <li>• <span className="text-white font-semibold">Program:</span> Advanced driving techniques</li>
                      <li>• <span className="text-white font-semibold">Price:</span> €15,000 - €25,000</li>
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
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">LATEST NEWS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Ferrari SF90 Stradale",
                excerpt: "Experience the future of automotive excellence with our latest hybrid supercar featuring 986 hp and 2.5s 0-60 mph acceleration.",
                image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                specs: "4.0L V8 + 3 Electric Motors • 986 hp • 2.5s 0-60"
              },
              {
                title: "Scuderia Ferrari Victory",
                excerpt: "Celebrating another triumph on the world's most prestigious Formula 1 circuits with Charles Leclerc and Carlos Sainz.",
                image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                specs: "16 Constructors' Titles • 1.6L Hybrid V6 • 1000+ hp"
              },
              {
                title: "Ferrari 812 Superfast",
                excerpt: "The most powerful naturally aspirated Ferrari ever produced, delivering 789 hp from its 6.5L V12 engine.",
                image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                specs: "6.5L V12 • 789 hp • 211 mph • 2.9s 0-60"
              }
            ].map((news, index) => (
              <article key={index} className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="aspect-[8/3] bg-cover bg-center" style={{backgroundImage: `url(${news.image})`}}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                  <p className="text-gray-400 mb-3 text-sm">{news.excerpt}</p>
                  <p className="text-red-500 text-xs font-mono mb-4 bg-gray-900 px-3 py-2 rounded border border-gray-800">
                    {news.specs}
                  </p>
                  <button className="text-red-500 hover:text-red-400 font-medium transition-colors">
                    READ MORE →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Backend Test Section (Hidden by default) */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <SimpleBackendTest />
        </div>
      </section>
    </div>
  )
}

export default Home
