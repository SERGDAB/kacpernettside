const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative pt-6">
          <div className="pointer-events-none absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent"></div>
          <div className="flex justify-center items-center">
            <p className="text-gray-400/90 text-sm tracking-wide text-center">
              © {year} Ferrari N.V. — All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
