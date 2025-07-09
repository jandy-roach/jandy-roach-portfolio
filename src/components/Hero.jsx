import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Linkedin, Instagram, Github, Mail, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [showEmailBox, setShowEmailBox] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const email = "jandyroachy@gmail.com"; // Replace with your actual email

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/will_be_updated_soon.png';
    link.download = 'Jandy_Roach_Resume.pdf';
    link.click();
  };

  const handleGetInTouch = () => {
    setShowSocialIcons(!showSocialIcons);
    if (showEmailBox) {
      setShowEmailBox(false);
    }
  };

  const handleSocialClick = (platform) => {
    const urls = {
      linkedin: 'https://www.linkedin.com/in/jandy-roach-9234a032a', // <-- updated link
      instagram: 'https://instagram.com/jandy_roach_',
      github: 'https://github.com/jandy-roach' // Replace with your actual GitHub username
    };
    
    if (platform === 'gmail') {
      setShowEmailBox(!showEmailBox);
    } else {
      window.open(urls[platform], '_blank');
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden font-poppins" 
      style={{ backgroundColor: '#020817' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">
          {/* Image Section */}
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-95'
          }`}>
            <div className="relative group">
              {/* Simple professional shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-2xl blur-xl translate-y-4 group-hover:translate-y-6 transition-transform duration-500"></div>
              
              <img 
                src="../public/recrop2.png" 
                alt="Jandy Roach" 
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover mx-auto shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className={`lg:mt-16 transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <p className={`text-blue-400 text-lg mb-4 font-medium transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              Hello, I'm
            </p>
            
            <h1 className={`text-5xl lg:text-6xl font-bold text-white mb-6 font-outfit transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Jandy Roach
            </h1>
            
            <div className={`transition-all duration-700 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <p className="text-2xl text-gray-300 mb-2 font-medium">Computer Science Student &</p>
              <p className="text-2xl text-blue-400 font-semibold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Full Stack Developer from Coimbatore
              </p>
            </div>
            
            <p className={`text-gray-400 text-lg mb-8 max-w-2xl leading-relaxed transition-all duration-700 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              I love bringing digital ideas to life — designing clean, intuitive user interfaces and building powerful features that solve real-world problems.
            </p>
            
            {/* Buttons */}
            <div className={`flex gap-4 mt-6 mb-8 transition-all duration-700 delay-1100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* View Resume Button */}
              <motion.a
                href="../public/will_be_updated_soon.png"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-400/50 transition-all font-semibold"
              >
                <Download className="w-5 h-5" />
                View Resume
              </motion.a>

              {/* Get in Touch Button */}
              <button 
                onClick={handleGetInTouch}
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Icons */}
            <div className={`flex gap-4 transition-all duration-500 ${
              showSocialIcons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}>
              <button 
                onClick={() => handleSocialClick('linkedin')}
                className={`group bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 ${
                  showSocialIcons ? 'animate-bounce' : ''
                }`}
                style={{ animationDelay: '0ms' }}
              >
                <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => handleSocialClick('instagram')}
                className={`group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 ${
                  showSocialIcons ? 'animate-bounce' : ''
                }`}
                style={{ animationDelay: '200ms' }}
              >
                <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </button>

              <button 
                onClick={() => handleSocialClick('github')}
                className={`group bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 ${
                  showSocialIcons ? 'animate-bounce' : ''
                }`}
                style={{ animationDelay: '400ms' }}
              >
                <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </button>

              <button 
                onClick={() => handleSocialClick('gmail')}
                className={`group bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 ${
                  showSocialIcons ? 'animate-bounce' : ''
                }`}
                style={{ animationDelay: '600ms' }}
              >
                <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>

            {/* Email Box */}
            <div className={`mt-6 transition-all duration-500 ${
              showEmailBox ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
            }`}>
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-red-400" />
                    <span className="text-white font-medium">{email}</span>
                  </div>
                  <motion.button
                    onClick={copyEmail}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
                      emailCopied 
                        ? 'bg-green-600 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .font-outfit {
          font-family: 'Outfit', sans-serif;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .text-5xl {
            font-size: 2.5rem;
          }
          
          .lg\\:text-6xl {
            font-size: 3rem;
          }
          
          .w-80.h-80 {
            width: 16rem;
            height: 16rem;
          }
          
          .px-8 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
        
        /* Custom animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes click {
          0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.7); }
          70% { box-shadow: 0 0 0 10px rgba(59,130,246,0); }
          100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
        }
        .animate-click {
          animation: click 0.4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;