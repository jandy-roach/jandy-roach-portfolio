import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="min-h-screen bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 font-['Inter',system-ui,sans-serif]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-light px-4">
            Still learning. Already building. Always growing.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[1.4fr,1fr] gap-8 lg:gap-8 items-start">
          {/* Text Content */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-4 md:space-y-6">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                I'm currently pursuing <span className="text-blue-400 font-medium">Computer Science Engineering</span> with a specialization in 
                Software Product Engineering at <span className="text-blue-400 font-medium">Kalvium</span> (Coimbatore campus), alongside an 
                online BCA degree from the University of Mysore.
              </p>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                I began my coding journey in my first year of college, and since then, I've been deeply curious about how 
                <span className="text-purple-400 font-medium"> design, logic, and technology</span> come together to build meaningful web experiences.
              </p>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                As a <span className="text-blue-400 font-medium">full-stack developer</span> building with the MERN stack, I'm constantly 
                experimenting, learning through hands-on projects, and exploring new tools. 
              </p>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                <span className="text-blue-400 font-medium">I love creating elegant UI/UX</span> and always 
                consider how users interact with what I build.
              </p>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                My vision is simple — to turn my skills into independence. I aim to create and launch digital products that solve problems, 
                provide value, and eventually become sources of <span className="text-purple-400 font-medium">financial freedom</span>. 
              </p>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                I'm not just learning to code; I'm learning to build a future.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-slate-700">
                <div className="text-center py-2">
                  <div className="text-xl md:text-2xl font-bold text-blue-400 mb-1">∞</div>
                  <div className="text-gray-400 text-sm">Dedication</div>
                </div>
                <div className="text-center py-2">
                  <div className="text-xl md:text-2xl font-bold text-purple-400 mb-1">∞</div>
                  <div className="text-gray-400 text-sm">Ideas Explored</div>
                </div>
                <div className="text-center py-2">
                  <div className="text-xl md:text-2xl font-bold text-blue-400 mb-1">1%</div>
                  <div className="text-gray-400 text-sm font-semibold">Better — Every Day</div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-500 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative mx-auto lg:mx-0 lg:ml-auto lg:mr-0 max-w-xs sm:max-w-sm">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              
              {/* Photo Container */}
              <div className="relative bg-slate-800 p-3 sm:p-4 rounded-2xl border border-slate-700 shadow-2xl">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <img 
                    src="/l-w-m-eimg.jpg"
                    alt="Jandy Roach - Full Stack Developer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium shadow-lg">
                  👋 Hello there!
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 rounded-full opacity-40 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;