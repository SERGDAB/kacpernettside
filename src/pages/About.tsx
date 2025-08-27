const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate about creating modern, scalable web applications that deliver exceptional user experiences.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To build cutting-edge web applications that solve real-world problems while providing an intuitive and delightful user experience.
            </p>
            <p className="text-gray-600 mb-6">
              We believe in the power of modern technologies like React, TypeScript, and Tailwind CSS to create applications that are not only beautiful but also maintainable and scalable.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Our Values</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Innovation and creativity in everything we do</li>
                <li>• User-centered design and development</li>
                <li>• Code quality and maintainability</li>
                <li>• Continuous learning and improvement</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Technology Stack</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">React</h4>
                  <p className="text-sm text-gray-600">Modern UI library for building interactive interfaces</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">TypeScript</h4>
                  <p className="text-sm text-gray-600">Type-safe JavaScript for better development experience</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Tailwind CSS</h4>
                  <p className="text-sm text-gray-600">Utility-first CSS framework for rapid styling</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Vite</h4>
                  <p className="text-sm text-gray-600">Next-generation frontend build tool</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">JD</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">John Doe</h3>
              <p className="text-gray-600 mb-2">Frontend Developer</p>
              <p className="text-sm text-gray-500">Passionate about creating beautiful user interfaces</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">JS</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Jane Smith</h3>
              <p className="text-gray-600 mb-2">Backend Developer</p>
              <p className="text-sm text-gray-500">Expert in building robust and scalable APIs</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">MJ</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mike Johnson</h3>
              <p className="text-gray-600 mb-2">Full Stack Developer</p>
              <p className="text-sm text-gray-500">Bridging the gap between frontend and backend</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
