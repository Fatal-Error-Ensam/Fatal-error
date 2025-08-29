import Image from "next/image";
import Link from "next/link";

// Helper function for asset paths
const getAssetPath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/Fatal-error-website' : '';
  return `${basePath}${path}`;
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center space-x-3">
                      <Image
                src={getAssetPath("/images/fatal error logo .png")}
                alt="Fatal Error Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">Fatal Error</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-green-400 hover:text-green-300 transition-colors">Home</a>
              <Link href="/academy" className="text-gray-300 hover:text-green-400 transition-colors">Academy</Link>
              <a href="#projects" className="text-gray-300 hover:text-green-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Image
            src={getAssetPath("/images/fatal error logo .png")}
            alt="Fatal Error Logo Background"
            width={800}
            height={800}
            className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] object-contain"
          />
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            {/* Large Logo Display */}
            <div className="mb-8">
                        <Image
                src={getAssetPath("/images/fatal error logo .png")}
                alt="Fatal Error Logo"
                width={200}
                height={200}
                className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto drop-shadow-2xl"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-green-400">Code.</span>
              <span className="text-white"> Create.</span>
              <span className="text-green-500"> Conquer.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Welcome to our club, a space where we learn, have fun, and grow together. Fatal Error, your way to the top of IT world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://chat.whatsapp.com/Hu2Ic0x09qAE88ZWvrsDke?mode=ems_copy_c" 
          target="_blank"
          rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/25 inline-flex items-center gap-2"
              >
                <span>💬</span>
                Join Us
              </a>
                              <Link 
                  href="/academy"
                  className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-green-500/25 inline-flex items-center gap-2"
                >
                  <span>🎓</span>
                  Explore Academy
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Dive into three exciting worlds that define our club&apos;s passion for technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* IT Section */}
            <div className="bg-black/50 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-all group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto group-hover:bg-green-500/30 transition-colors">
                  <span className="text-3xl">🖥️</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400">Learn</h3>
                <p className="text-gray-300">
                  Explore the Fatal Error Academy, where you can learn everything about:
                </p>
                <ul className="text-left text-gray-400 space-y-2">
                  <li>• AI</li>
                  <li>• Data</li>
                  <li>• Maching Learning</li>
                  <li>• CyberSecurity</li>
                </ul>
              </div>
            </div>

            {/* Programming Section */}
            <div className="bg-black/50 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-all group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto group-hover:bg-green-500/30 transition-colors">
                  <span className="text-3xl">⌨️</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400">Enjoy</h3>
                <p className="text-gray-300">
                  Enjoy the Events, Workshops, and more, where you will meet great minds, connect with people, and have fun.
                </p>
                <ul className="text-left text-gray-400 space-y-2">
                  <li>• Conferences</li>
                  <li>• Workshops</li>
                  <li>• Events</li>
                </ul>
              </div>
            </div>

            {/* Gaming Section */}
            <div className="bg-black/50 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-all group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto group-hover:bg-green-500/30 transition-colors">
                  <span className="text-3xl">🎮</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400">Compete</h3>
                <p className="text-gray-300">
                  In this club, we are preparing you to compete with others in the World of IT.
                </p>
                <ul className="text-left text-gray-400 space-y-2">
                  <li>• Competitions</li>
                  <li>• Hackathons</li>
                  <li>• Bootcamps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">Ready to Level Up?</h2>
          <p className="text-xl text-black/80 mb-8">
            Join our community of tech enthusiasts, programmers and competetors. 
            Let&apos;s build the future together, one line of code at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chat.whatsapp.com/Hu2Ic0x09qAE88ZWvrsDke?mode=ems_copy_c" 
          target="_blank"
          rel="noopener noreferrer"
              className="bg-black text-green-400 font-semibold px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>💬</span>
              Join Us
            </a>
            <button className="border-2 border-black text-black font-semibold px-8 py-3 rounded-lg hover:bg-black hover:text-green-400 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                          <Image
                  src={getAssetPath("/images/fatal error logo .png")}
                  alt="Fatal Error Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold">Fatal Error</span>
              </div>
              <p className="text-gray-400">
                Empowering the next generation of technologists through code, creativity, and community.
              </p>
            </div>
            
            <div>
              <h4 className="text-green-400 font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">About Us</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Events</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Projects</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Blog</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-green-400 font-semibold mb-4">Technologies</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">JavaScript</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Python</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">React</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Node.js</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-green-400 font-semibold mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Discord</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">GitHub</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Twitter</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fatal Error. All rights reserved. Built with ❤️ and lots of ☕</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
