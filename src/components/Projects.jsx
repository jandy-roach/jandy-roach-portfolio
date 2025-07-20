import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Zap, FileText, X, Linkedin, Instagram, Mail, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [showEmailBox, setShowEmailBox] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const email = "jandyroachy@gmail.com"; // Replace with your actual email

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Fruit Catcher",
      description: "A fun beginner-friendly JavaScript game where players catch falling fruits with a basket. Designed to improve DOM manipulation and game logic skills.",
      detailedDescription: "This fun arcade-style game was made using basic web tools: JavaScript, HTML, and CSS. It runs smoothly on all devices, including phones, and responds well to touch, mouse, and keyboard controls.\n\nThe game looks modern with a frosted-glass style design and smooth animations. As you play, the game gets harder based on how well you’re doing. You can earn combos, rack up points, and see your score pop up in real-time. It also includes levels, lives, and smart tracking of your progress.\n\nBehind the scenes, the code is written using the latest features of JavaScript to make sure the game runs fast and smoothly in all browsers.",
      status: "finished",
      githubLink: "https://github.com/jandy-roach/Fruit-Catcher",
      liveLink: "https://neon-biscotti-78c0a8.netlify.app/",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "Amazon Clone",
      description: "A static clone of the Amazon India homepage built using HTML and CSS. Designed by following a tutorial to strengthen layout and styling skills.",
      detailedDescription: "This project is a static recreation of the Amazon India homepage, built using only HTML and CSS. It closely follows a hands-on tutorial from Apna College's YouTube channel.\n\nThe layout includes a header with navigation, search bar, promotional hero section, product grid layout, and footer. The focus was on mastering box model, Flexbox, and positioning techniques.\n\nNote: This version is not responsive and is best viewed on desktop. It was created as a foundational layout exercise without advanced media queries or mobile support.",
      status: "finished",
      githubLink: "https://github.com/jandy-roach/Amazon-clone",
      liveLink: "https://singular-faun-2e37b8.netlify.app/",
      tech: ["HTML", "CSS"]
    },
    {
      id: 3,
      title: "Chatalyst",
      description: "A full-stack real-time chat application with video calling, dynamic themes, JWT authentication, and modern UI — built using the MERN stack with TanStack Query and Tailwind CSS.",
      detailedDescription: "Chatalyst is a modern real-time chat and video calling web application built using the MERN stack. It incorporates advanced features for communication and collaboration in a sleek, customizable UI.\n\nKey highlights include a JWT-authenticated login/signup system, an onboarding flow, and a friends system for managing connections. Users can engage in real-time chat, initiate video calls, and switch between 32 unique UI themes for a personalized experience.\n\nThe app follows clean architecture with custom hooks, protected routes, and reliable API endpoints, tested thoroughly for performance. Built with TanStack Query for optimal data fetching and cache management, it’s fully scalable and deployment-ready.",
      status: "ongoing",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "TanStack Query"]
    },
    {
      id: 4,
      title: "Crewsy – Team Collaboration Platform",
      description: "A full-stack platform for team collaboration featuring real-time chat, video calls, code editor, sketch board, task tracking, and file sharing — built with the MERN stack.",
      detailedDescription: `Crewsy is a modern collaboration tool for teams, offering:

🧑‍💻 Live Code Editor with real-time syncing

🎨 Sketch Board for visual collaboration

💬 Real-Time Chat & File Sharing via Socket.io

📞 Video/Voice Calls using WebRTC

✅ Task & Team Management with role-based access

APIs cover team creation, messaging, file uploads, and call handling. Built with clean architecture, real-time capabilities, and ready for scaling.`,
      status: "ongoing",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT" ,"Socket.io", "WebRTC"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Handle modal open/close
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Restore scroll
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // Social media handlers
  const handleGetInTouch = () => {
    setShowSocialIcons(!showSocialIcons);
    if (showEmailBox) {
      setShowEmailBox(false);
    }
  };

  const handleSocialClick = (platform) => {
    const urls = {
      linkedin: 'https://www.linkedin.com/in/jandy-roach-9234a032a/',
      instagram: 'https://instagram.com/jandy_roach',
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

  const getStatusStyle = (status) => {
    return status === 'finished' 
      ? 'bg-green-500/20 text-green-300 border-green-500/30' 
      : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
  };

  const getStatusIcon = (status) => {
    return status === 'finished' ? '✅' : '🚧';
  };

  const getStatusText = (status) => {
    return status === 'finished' ? 'Finished' : 'Ongoing';
  };

  return (
    <div id="projects" className="min-h-screen bg-slate-900 py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0f172a' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-inter">
            Featured Projects
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className={`project-card group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:bg-slate-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 ${
                visibleCards.has(`project-${project.id}`) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: `${index * 0.2}s`
              }}
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border font-inter ${getStatusStyle(project.status)}`}>
                  <span className="mr-2">{getStatusIcon(project.status)}</span>
                  {getStatusText(project.status)}
                </span>
                <div className="flex space-x-2">
                  <Code className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-blue-300 transition-colors font-inter">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-slate-300 mb-4 md:mb-6 line-clamp-3 font-inter leading-relaxed text-sm md:text-base">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 md:px-3 py-1 bg-slate-700/50 text-slate-300 text-xs md:text-sm rounded-full font-inter hover:bg-slate-600/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* Description Button - Always visible */}
                <button
                  onClick={() => openModal(project)}
                  className="flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 hover:scale-105 group/btn font-inter text-sm md:text-base"
                >
                  <FileText className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  View Details
                </button>

                {project.status === 'finished' ? (
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 hover:scale-105 group/btn font-inter text-sm md:text-base"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      GitHub
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300 hover:scale-105 group/btn font-inter text-sm md:text-base"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Live Demo
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center justify-center px-4 py-2 bg-slate-700/50 text-slate-400 rounded-lg font-inter text-sm md:text-base">
                    <span className="animate-pulse mr-2">⏳</span>
                    In Development
                  </div>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-xl group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-slate-400 mb-6 font-inter text-sm md:text-base">
            Want to see more of my work or collaborate on a project?
          </p>
          <button 
            onClick={handleGetInTouch}
            className="px-6 md:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg font-inter text-sm md:text-base"
          >
            Get In Touch
          </button>

          {/* Social Icons */}
          <div className={`flex justify-center gap-4 mt-6 transition-all duration-500 ${
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
          <div className={`max-w-md mx-auto mt-6 transition-all duration-500 ${
            showEmailBox ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
          }`}>
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span className="text-white font-medium text-sm md:text-base">{email}</span>
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

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div 
              className="relative bg-slate-800 rounded-2xl border border-slate-700/50 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              style={{
                animation: 'modalSlideIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-slate-800/95 backdrop-blur-sm border-b border-slate-700/50 p-4 md:p-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${selectedProject.status === 'finished' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                  <h3 className="text-xl md:text-2xl font-bold text-white font-inter">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors group"
                >
                  <X className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border font-inter ${getStatusStyle(selectedProject.status)}`}>
                    <span className="mr-2">{getStatusIcon(selectedProject.status)}</span>
                    {getStatusText(selectedProject.status)}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 font-inter">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full font-inter hover:bg-slate-600/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 font-inter">Project Details</h4>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-300 leading-relaxed font-inter text-sm md:text-base whitespace-pre-line">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                {selectedProject.status === 'finished' && (
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-slate-700/50">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 hover:scale-105 group/btn font-inter text-sm md:text-base"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      View on GitHub
                    </a>
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300 hover:scale-105 group/btn font-inter text-sm md:text-base"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      View Live Demo
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add CSS for modal animation */}
      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;