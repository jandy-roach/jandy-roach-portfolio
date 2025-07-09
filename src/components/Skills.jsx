import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Terminal, GitBranch, Smartphone, Server, Shield } from 'lucide-react';

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('.skill-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      id: 'languages',
      title: 'Languages',
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: ['HTML/CSS', 'JavaScript', 'Python', 'C++'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: ['React.js', 'Tailwind CSS'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      icon: <Server className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: ['Node.js', 'Express.js', 'JWT Authentication'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: ['MongoDB', 'MySQL'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: ['Git & GitHub', 'VS Code', 'Figma', 'Netlify', 'Render', 'Bruno', 'Linux'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="skills" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#020817' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-3 sm:mb-4 font-inter px-4">
            Skills & Technologies
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              id={`category-${category.id}`}
              className={`skill-card group relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 ${
                visibleItems.has(`category-${category.id}`) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${categoryIndex * 150}ms`,
                transform: visibleItems.has(`category-${category.id}`) ? 'translateY(0)' : 'translateY(32px)'
              }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl sm:rounded-2xl`}></div>
              
              {/* Card Content */}
              <div className="relative p-4 sm:p-6 lg:p-8">
                {/* Category Header */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${category.color} text-white mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-rubik leading-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`flex items-center p-2 sm:p-3 rounded-md sm:rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-300 group-hover:translate-x-1 ${
                        visibleItems.has(`category-${category.id}`) 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-4'
                      }`}
                      style={{
                        transitionDelay: `${(categoryIndex * 150) + (skillIndex * 100)}ms`
                      }}
                    >
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${category.color} mr-2 sm:mr-3 group-hover:scale-125 transition-transform duration-300 flex-shrink-0`}></div>
                      <span className="text-sm sm:text-base text-slate-300 font-medium font-poppins hover:text-slate-100 transition-colors duration-300 leading-relaxed">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${category.color} text-white`}>
                    {category.skills.length} skills
                  </div>
                </div>
              </div>

              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full -translate-x-10 sm:-translate-x-16 -translate-y-10 sm:-translate-y-16 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full translate-x-8 sm:translate-x-12 translate-y-8 sm:translate-y-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
            <GitBranch className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Always learning and growing
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Rubik:wght@300;400;500;600;700&display=swap');
        
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-rubik { font-family: 'Rubik', sans-serif; }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .skill-card {
          animation-fill-mode: both;
        }
        
        .skill-card:hover {
          transform: translateY(-4px) scale(1.02);
        }
        
        .skill-card:hover::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
          border-radius: 1rem;
          z-index: -1;
        }

        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          .skill-card:hover {
            transform: translateY(-2px) scale(1.01);
          }
          
          .skill-card:active {
            transform: translateY(0) scale(0.98);
          }
        }

        /* Tablet optimizations */
        @media (min-width: 640px) and (max-width: 1024px) {
          .skill-card {
            min-height: 280px;
          }
        }

        /* Desktop optimizations */
        @media (min-width: 1024px) {
          .skill-card {
            min-height: 320px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;