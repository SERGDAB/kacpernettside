import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-black/90 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <h1 className="text-2xl font-bold text-white">FERRARI</h1>
          </Link>
          
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors font-medium">HOME</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors font-medium">ABOUT</Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors font-medium">SERVICES</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors font-medium">CONTACT</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-medium transition-colors">
              CONFIGURE
            </button>
            <div className="lg:hidden">
              <button className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
