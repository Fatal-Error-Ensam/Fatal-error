import Image from "next/image";
import Link from "next/link";

// Helper function for asset paths
const getAssetPath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/Fatal-error-website' : '';
  return `${basePath}${path}`;
};

interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  colabLink: string;
}

interface Track {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  courses: Course[];
}

const tracks: Track[] = [
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    icon: '🤖',
    description: 'Master the fundamentals of AI and build intelligent systems',
    color: 'from-blue-500 to-cyan-500',
    courses: [
      {
        id: 'ai-101',
        title: 'Introduction to LLMs',
        description: 'Learn the basics of artificial intelligence, starting from the the most famous kind of AI, LLMs',
        level: 'Beginner',
        colabLink: 'https://colab.research.google.com/drive/1nfPiJDGVuLOLijPa2X5LdqL6pHt2F40E?usp=sharing'
      },
      {
        id: 'ai-neural',
        title: 'Neural Networks Fundamentals',
        description: 'Understanding the building blocks of modern AI systems',
        level: 'Intermediate',
        colabLink: 'https://colab.research.google.com/drive/1234567891'
      },
      {
        id: 'ai-nlp',
        title: 'Natural Language Processing',
        description: 'Build AI systems that understand and generate human language',

        level: 'Advanced',
        colabLink: 'https://colab.research.google.com/drive/1234567892'
      },
      {
        id: 'ai-computer-vision',
        title: 'Computer Vision',
        description: 'Teach machines to see and interpret visual information',

        level: 'Advanced',
        colabLink: 'https://colab.research.google.com/drive/1234567893'
      }
    ]
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    icon: '⚙️',
    description: 'Learn algorithms and techniques to make data-driven predictions',
    color: 'from-green-500 to-emerald-500',
    courses: [
      {
        id: 'ml-basics',
        title: 'Machine Learning Basics',
        description: 'Introduction to supervised and unsupervised learning',

        level: 'Beginner',
        colabLink: 'https://colab.research.google.com/drive/1234567894'
      },
      {
        id: 'ml-algorithms',
        title: 'ML Algorithms Deep Dive',
        description: 'Master classification, regression, and clustering algorithms',

        level: 'Intermediate',
        colabLink: 'https://colab.research.google.com/drive/1234567895'
      },
      {
        id: 'ml-advanced',
        title: 'Advanced ML Techniques',
        description: 'Ensemble methods, feature engineering, and model optimization',

        level: 'Advanced',
        colabLink: 'https://colab.research.google.com/drive/1234567896'
      },
      {
        id: 'ml-deployment',
        title: 'ML Model Deployment',
        description: 'Deploy and scale machine learning models in production',

        level: 'Advanced',
        colabLink: 'https://colab.research.google.com/drive/1234567897'
      }
    ]
  },
  {
    id: 'data',
    name: 'Data Science',
    icon: '📊',
    description: 'Extract insights and knowledge from data using statistical methods',
    color: 'from-purple-500 to-pink-500',
    courses: [
      {
        id: 'data-python',
        title: 'Python for Data Science',
        description: 'Master Python libraries: Pandas, NumPy, and Matplotlib',

        level: 'Beginner',
        colabLink: 'https://colab.research.google.com/drive/1234567898'
      },
      {
        id: 'data-analysis',
        title: 'Exploratory Data Analysis',
        description: 'Learn to explore, clean, and visualize data effectively',

        level: 'Intermediate',
        colabLink: 'https://colab.research.google.com/drive/1234567899'
      },
      {
        id: 'data-stats',
        title: 'Statistics for Data Science',
        description: 'Statistical foundations for data analysis and hypothesis testing',

        level: 'Intermediate',
        colabLink: 'https://colab.research.google.com/drive/1234567900'
      },
      {
        id: 'data-big',
        title: 'Big Data Analytics',
        description: 'Work with large datasets using Spark and distributed computing',

        level: 'Advanced',
        colabLink: 'https://colab.research.google.com/drive/1234567901'
      }
    ]
  },
  {
    id: 'cybersec',
    name: 'Cybersecurity',
    icon: '🔒',
    description: 'Protect systems and data from digital attacks and threats',
    color: 'from-red-500 to-orange-500',
    courses: [
      {
        id: 'cyber-fundamentals',
        title: 'Cybersecurity Fundamentals',
        description: 'Learn the basics of information security and threat landscape',

        level: 'Beginner',
        colabLink: 'https://colab.research.google.com/drive/1234567902'
      },
      {
        id: 'cyber-network',
        title: 'Network Security',
        description: 'Secure network infrastructure and protocols',

        level: 'Intermediate',
        colabLink: 'https://colab.research.google.com/drive/1234567903'
      },
      {
        id: 'cyber-ethical',
        title: 'Ethical Hacking',
        description: 'Learn penetration testing and vulnerability assessment',

        level: 'Advanced',
        colabLink: 'https://colab.research.google.com/drive/1234567904'
      },
      {
        id: 'cyber-incident',
        title: 'Incident Response',
        description: 'Handle and respond to cybersecurity incidents effectively',

        level: 'Advanced',
        colabLink: 'https://colab.research.google.com/drive/1234567905'
      }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

export default function Academy() {
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
                  src={getAssetPath("/images/fatal error logo .png")}
                  alt="Fatal Error Logo"
                  width={128}
                  height={128}
                  className="w-32 h-32"
                />
              </Link>
            </div>

            {/* Center: Nav links */}
            <div className="hidden md:flex items-center justify-center gap-14 text-xl">
              <Link href="/#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</Link>
              <Link href="/#about" className="text-gray-300 hover:text-green-400 transition-colors">About</Link>
              <Link href="/#partners" className="text-gray-300 hover:text-green-400 transition-colors">Partners</Link>
              <Link href="/#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact Us</Link>
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
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Image
            src={getAssetPath("/images/fatal error logo .png")}
            alt="Fatal Error Logo Background"
            width={600}
            height={600}
            className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] object-contain"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-green-400">Fatal Error</span>
              <span className="text-white"> Academy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Master the skills that matter. Choose your path and accelerate your journey in tech.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>4 Learning Tracks</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>16+ Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Interactive Notebooks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Track</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Specialized learning paths designed to take you from beginner to expert
            </p>
          </div>
          
          <div className="space-y-16">
            {tracks.map((track) => (
              <div key={track.id} className="bg-black/50 rounded-2xl p-8 border border-gray-800">
                {/* Track Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${track.color} rounded-xl flex items-center justify-center text-2xl`}>
                    {track.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{track.name}</h3>
                    <p className="text-gray-300 text-lg">{track.description}</p>
                  </div>
                </div>

                {/* Courses Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {track.courses.map((course) => (
                    <div key={course.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all group">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                            {course.title}
                          </h4>
                          <span className={`px-2 py-1 rounded-full text-xs border ${getLevelColor(course.level)}`}>
                            {course.level}
                          </span>
                        </div>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {course.description}
                        </p>
                        
                        <a
                          href={course.colabLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                        >
                          <span>📓</span>
                          <span>Open Notebook</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-black/80 mb-8">
            Join thousands of learners advancing their careers through hands-on practice and real-world projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chat.whatsapp.com/Hu2Ic0x09qAE88ZWvrsDke?mode=ems_copy_c" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-green-400 font-semibold px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>💬</span>
              Join Our Community
            </a>
            <Link 
              href="/"
              className="border-2 border-black text-black font-semibold px-8 py-3 rounded-lg hover:bg-black hover:text-green-400 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src={getAssetPath("/images/fatal error logo .png")}
                alt="Fatal Error Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">Fatal Error</span>
            </div>
            <div className="flex items-center gap-6 text-gray-300">
              <a href="https://www.linkedin.com/company/fatal-error-club-ensam" className="hover:text-white">LinkedIn</a>
              <a href="https://www.instagram.com/fatalerrorensamr/" className="hover:text-white">Instagram</a>
              <a href="https://github.com/Fatal-Error-Ensam" className="hover:text-white">GitHub</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Fatal Error Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
