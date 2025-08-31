import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-32">
            {/* Left: Logo */}
            <div className="flex-1">
              <Link href="/" className="inline-flex items-center space-x-4">
                <Image
                  src={"/images/fatal-error-logo.png"}
                  alt="Fatal Error Logo"
                  width={128}
                  height={128}
                  className="w-32 h-32"
                />
              </Link>
            </div>

            {/* Center: Nav links */}
            <div className="hidden md:flex items-center justify-center gap-14 text-xl">
              <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About</a>
              <a href="#board" className="text-gray-300 hover:text-green-400 transition-colors">Executive Board</a>
              <a href="#partners" className="text-gray-300 hover:text-green-400 transition-colors">Partners</a>
              <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact Us</a>
              <Link href="/academy" className="text-gray-300 hover:text-green-400 transition-colors">Academy</Link>
            </div>

            {/* Right: Socials */}
            <div className="flex-1 hidden md:flex justify-end items-center gap-7 text-gray-300">
              <a href="https://www.linkedin.com/company/fatal-error-club-ensam" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2c-1.1 0-2 .9-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.instagram.com/fatalerrorensamr/" aria-label="Instagram" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.51"/></svg>
              </a>
              <a href="https://github.com/Fatal-Error-Ensam" aria-label="GitHub" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path fillRule="evenodd" d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.4.7-4.1-1.6-4.1-1.6-.5-1.3-1.1-1.7-1.1-1.7-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.7-.3-5.6-1.4-5.6-6.3 0-1.4.5-2.5 1.2-3.4-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.5 11.5 0 0 1 6.2 0C18 4.6 19 5 19 5c.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.4 0 4.9-2.9 6-5.6 6.3.4.3.7.9.7 1.9v2.8c0 .3.2.6.8.5A12 12 0 0 0 12 .5Z" clipRule="evenodd"/></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Image
            src={"/images/fatal-error-logo.png"}
            alt="Fatal Error Logo Background"
            width={1000}
            height={1000}
            className="w-[700px] h-[700px] md:w-[950px] md:h-[950px] object-contain"
          />
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            {/* Large Logo Display */}
            <div className="mb-10">
                        <Image
                src={"/images/fatal-error-logo.png"}
                alt="Fatal Error Logo"
                width={260}
                height={260}
                className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto drop-shadow-2xl"
              />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="text-green-400">Code.</span>
              <span className="text-white"> Create.</span>
              <span className="text-green-500"> Conquer.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto">
              Welcome to our club, a space where we learn, have fun, and grow together. Fatal Error, your way to the top of IT world.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a 
                href="https://chat.whatsapp.com/Hu2Ic0x09qAE88ZWvrsDke?mode=ems_copy_c" 
          target="_blank"
          rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-black font-semibold px-10 py-4 text-lg rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/25 inline-flex items-center gap-2"
              >
                <span>💬</span>
                Join Us
              </a>
                              <Link 
                  href="/academy"
                  className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold px-10 py-4 text-lg rounded-lg transition-all shadow-lg hover:shadow-green-500/25 inline-flex items-center gap-2"
                >
                  <span>🎓</span>
                  Explore Academy
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b0f16]/90 border border-gray-800 rounded-2xl p-6 md:p-10">
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
              <div className="md:col-span-2 flex items-center justify-center">
                <Image
                  src={"/images/fatal-error-logo.png"}
                  alt="Fatal Error Logo"
                  width={360}
                  height={360}
                  className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
                />
              </div>
              <div className="md:col-span-3">
                <h2 className="text-4xl md:text-5xl font-bold">
                  About <span className="text-green-400">Fatal Error</span> Club
                </h2>
                <p className="text-gray-300 mt-4 leading-relaxed text-lg">
                  Fatal Error, risen from the aches of GDSC and Digitech, is the go-to IT club at ENSAM Rabat. More than just a student
                  community, we are building a vibrant, collaborative space where students can
                  share ideas, learn from one another, and grow both personally and professionally.
                </p>
                <p className="text-gray-300 mt-4 leading-relaxed text-lg">
                  Our mission is to create an atmosphere that encourages creativity and
                  connection—whether it’s through exciting events, hands-on workshops, or
                  networking with industry professionals. At Fatal Error, we’re shaping the
                  future, one project at a time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Board Section */}
      <section id="board" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold">Executive Board</h2>
            <p className="text-gray-400 mt-3 text-lg">12 members leading vision, operations, and tracks.</p>
          </div>

          {/* Row 1: 1 */}
          <div className="flex justify-center mb-10">
            {[{ name: 'ANAS AMCHAAR', role: 'President', desc: "Leads the club's vision and overall strategy." }].map((m, idx) => (
              <div key={idx} className="relative bg-gray-900/60 border border-gray-800 rounded-2xl p-8 text-center w-full max-w-md">
                <div className="mx-auto w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-3xl -mt-12">👤</div>
                <h3 className="mt-5 text-xl font-semibold">{m.name}</h3>
                <div className="text-gray-400 text-sm">{m.role}</div>
                <p className="text-gray-300 text-base mt-2">{m.desc}</p>
                <div className="flex items-center justify-center gap-5 mt-4 text-gray-300">
                  <a href="#" aria-label="LinkedIn" className="hover:text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2c-1.1 0-2 .9-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" aria-label="GitHub" className="hover:text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12 .5a12 12 0 0 0-3.8 23.4c.6 .1 .8-.2 .8-.5v-2c-3.4 .7-4.1-1.6-4.1-1.6-.5-1.3-1.1-1.7-1.1-1.7-.9-.6 .1-.6 .1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8 .1-.7 .4-1.1 .7-1.3-2.7-.3-5.6-1.4-5.6-6.3 0-1.4 .5-2.5 1.2-3.4-.1-.3-.5-1.6 .1-3.3 0 0 1-.3 3.4 1.3a11.5 11.5 0 0 1 6.2 0C18 4.6 19 5 19 5c.6 1.7 .2 3 .1 3.3 .8 .9 1.2 2 1.2 3.4 0 4.9-2.9 6-5.6 6.3 .4 .3 .7 .9 .7 1.9v2.8c0 .3 .2 .6 .8 .5A12 12 0 0 0 12 .5Z" clipRule="evenodd"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 3 */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
            {[
              { name: 'Ilyas Fardaoui', role: 'Vice-president', desc: 'Supporting the president and overseeing club operations.' },
              { name: 'Bilal Lahfari', role: 'Advisor', desc: 'Advising the board and guiding long‑term strategy.' },
              { name: 'Inas Bentounsi', role: 'General Secretary', desc: 'Managing administrative tasks and internal communication.' },
            ].map((m, idx) => (
              <div key={idx} className="relative bg-gray-900/60 border border-gray-800 rounded-2xl p-8 text-center">
                <div className="mx-auto w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-3xl -mt-12">👤</div>
                <h3 className="mt-5 text-xl font-semibold">{m.name}</h3>
                <div className="text-gray-400 text-sm">{m.role}</div>
                <p className="text-gray-300 text-base mt-2">{m.desc}</p>
                <div className="flex items-center justify-center gap-5 mt-4 text-gray-300">
                  <a href="#" aria-label="LinkedIn" className="hover:text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2c-1.1 0-2 .9-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" aria-label="GitHub" className="hover:text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12 .5a12 12 0 0 0-3.8 23.4c.6 .1 .8-.2 .8-.5v-2c-3.4 .7-4.1-1.6-4.1-1.6-.5-1.3-1.1-1.7-1.1-1.7-.9-.6 .1-.6 .1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8 .1-.7 .4-1.1 .7-1.3-2.7-.3-5.6-1.4-5.6-6.3 0-1.4 .5-2.5 1.2-3.4-.1-.3-.5-1.6 .1-3.3 0 0 1-.3 3.4 1.3a11.5 11.5 0 0 1 6.2 0C18 4.6 19 5 19 5c.6 1.7 .2 3 .1 3.3 .8 .9 1.2 2 1.2 3.4 0 4.9-2.9 6-5.6 6.3 .4 .3 .7 .9 .7 1.9v2.8c0 .3 .2 .6 .8 .5A12 12 0 0 0 12 .5Z" clipRule="evenodd"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: 4 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-10">
            {[
              { name: 'Marouan Ezbakhe', role: 'Media Manager', desc: 'Crafting and executing media and outreach strategy.' },
              { name: 'Aya Chehhal', role: 'Head of Design', desc: 'Leading the design system and brand identity.' },
              { name: 'Mohammed Hamdouch', role: 'Head of Sponsoring', desc: 'Leading sponsorship initiatives and partnerships.' },
              { name: 'Basma Chaouki', role: 'Head of Training 1', desc: 'Training programs and workshops.' },
            ].map((m, idx) => (
              <div key={idx} className="relative bg-gray-900/60 border border-gray-800 rounded-2xl p-8 text-center">
                <div className="mx-auto w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-3xl -mt-12">👤</div>
                <h3 className="mt-5 text-xl font-semibold">{m.name}</h3>
                <div className="text-gray-400 text-sm">{m.role}</div>
                <p className="text-gray-300 text-base mt-2">{m.desc}</p>
                <div className="flex items-center justify-center gap-5 mt-4 text-gray-300">
                  <a href="#" aria-label="LinkedIn" className="hover:text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2c-1.1 0-2 .9-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" aria-label="GitHub" className="hover:text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12 .5a12 12 0 0 0-3.8 23.4c.6 .1 .8-.2 .8-.5v-2c-3.4 .7-4.1-1.6-4.1-1.6-.5-1.3-1.1-1.7-1.1-1.7-.9-.6 .1-.6 .1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8 .1-.7 .4-1.1 .7-1.3-2.7-.3-5.6-1.4-5.6-6.3 0-1.4 .5-2.5 1.2-3.4-.1-.3-.5-1.6 .1-3.3 0 0 1-.3 3.4 1.3a11.5 11.5 0 0 1 6.2 0C18 4.6 19 5 19 5c.6 1.7 .2 3 .1 3.3 .8 .9 1.2 2 1.2 3.4 0 4.9-2.9 6-5.6 6.3 .4 .3 .7 .9 .7 1.9v2.8c0 .3 .2 .6 .8 .5A12 12 0 0 0 12 .5Z" clipRule="evenodd"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Row 4: 4 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { name: 'Ahmed Bahlaoui', role: 'Head of Training 2', desc: 'Training logistics and support.' },
              { name: 'Ridouan Lachgar', role: 'Head of Events 1', desc: 'Event planning and coordination.' },
              { name: 'Taha Bachir El Bouhali', role: 'Head of Events 2', desc: 'Event operations and partnerships.' },
              { name: 'Rim Benamar', role: 'Head of Communications & External Relations', desc: 'Communications, PR, and partnerships.' },
            ].map((m, idx) => (
              <div key={idx} className="relative bg-gray-900/60 border border-gray-800 rounded-2xl p-8 text-center">
                <div className="mx-auto w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-3xl -mt-12">👤</div>
                <h3 className="mt-5 text-xl font-semibold">{m.name}</h3>
                <div className="text-gray-400 text-sm">{m.role}</div>
                <p className="text-gray-300 text-base mt-2">{m.desc}</p>
                <div className="flex items-center justify-center gap-5 mt-4 text-gray-300">
                  <a href="#" aria-label="LinkedIn" className="hover:text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2c-1.1 0-2 .9-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" aria-label="GitHub" className="hover:text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12 .5a12 12 0 0 0-3.8 23.4c.6 .1 .8-.2 .8-.5v-2c-3.4 .7-4.1-1.6-4.1-1.6-.5-1.3-1.1-1.7-1.1-1.7-.9-.6 .1-.6 .1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8 .1-.7 .4-1.1 .7-1.3-2.7-.3-5.6-1.4-5.6-6.3 0-1.4 .5-2.5 1.2-3.4-.1-.3-.5-1.6 .1-3.3 0 0 1-.3 3.4 1.3a11.5 11.5 0 0 1 6.2 0C18 4.6 19 5 19 5c.6 1.7 .2 3 .1 3.3 .8 .9 1.2 2 1.2 3.4 0 4.9-2.9 6-5.6 6.3 .4 .3 .7 .9 .7 1.9v2.8c0 .3 .2 .6 .8 .5A12 12 0 0 0 12 .5Z" clipRule="evenodd"/></svg>
                  </a>
                </div>
              </div>
            ))}
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

      {/* Partnerships Section */}
      <section id="partners" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 md:p-10 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-green-600/10 blur-3xl" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  We’re <span className="text-green-400">partner-friendly</span> —
                  let’s build something epic together
                </h2>
                <p className="text-gray-300 mt-4 leading-relaxed text-lg">
                  Brands, startups, communities: if you believe in empowering students and
                  accelerating innovation, we’d love to collaborate. From workshops and
                  hackathons to research sprints and product showcases, we create win‑win
                  partnerships with real impact.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 text-lg rounded-lg bg-green-500 text-black font-semibold hover:bg-green-600 transition-colors"
                  >
                    🤝 Become a Partner
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 text-base text-gray-300">
                  <div className="text-green-400 font-semibold">Brand Visibility</div>
                  <div>Spotlight at events and campaigns</div>
                </div>
                <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 text-base text-gray-300">
                  <div className="text-green-400 font-semibold">Talent Pipeline</div>
                  <div>Meet motivated student engineers</div>
                </div>
                <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 text-base text-gray-300">
                  <div className="text-green-400 font-semibold">Community Impact</div>
                  <div>Support education and open tech</div>
                </div>
                <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 text-base text-gray-300">
                  <div className="text-green-400 font-semibold">Co‑created Content</div>
                  <div>Workshops, labs, and showcases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-black mb-4">Ready to Level Up?</h2>
          <p className="text-2xl text-black/80 mb-8">
            Join our community of tech enthusiasts, programmers and competetors. 
            Let&apos;s build the future together, one line of code at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="https://chat.whatsapp.com/Hu2Ic0x09qAE88ZWvrsDke?mode=ems_copy_c" 
          target="_blank"
          rel="noopener noreferrer"
              className="bg-black text-green-400 font-semibold px-10 py-4 text-lg rounded-lg hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>💬</span>
              Join Us
            </a>
            <button className="border-2 border-black text-black font-semibold px-10 py-4 text-lg rounded-lg hover:bg-black hover:text-green-400 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold">Contact Us</h2>
            <p className="text-gray-400 mt-2 text-lg">We&apos;d love to hear from you. Fill the form below.</p>
          </div>
          <form action="https://formsubmit.co/anass.amchaar04@gmail.com" method="POST" className="bg-black/50 border border-gray-800 rounded-2xl p-6 md:p-8">
            <input type="hidden" name="_subject" value="New message from Fatal Error site" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400">Full Name</label>
                <input
                  name="name"
                  placeholder="Your full name"
                  required
                  className="mt-1 w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-3 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="mt-1 w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-3 outline-none"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm text-gray-400">Subject</label>
              <input
                name="subject"
                placeholder="What is this about?"
                required
                className="mt-1 w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-3 outline-none"
              />
            </div>
            <div className="mt-6">
              <label className="block text-sm text-gray-400">Message</label>
              <textarea
                name="message"
                rows={6}
                placeholder="Write your message..."
                required
                className="mt-1 w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-3 outline-none"
              />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button type="submit" className="inline-flex items-center justify-center px-10 py-4 text-lg rounded-lg bg-green-500 text-black font-semibold hover:bg-green-600 transition-colors">
                Send Message
              </button>
              <a href="mailto:anass.amchaar04@gmail.com" className="inline-flex items-center justify-center px-10 py-4 text-lg rounded-lg border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-colors">
                Or email us directly
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fatal Error. All rights reserved. Built with ❤️ and lots of ☕</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
