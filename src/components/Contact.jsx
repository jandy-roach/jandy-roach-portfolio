// src/sections/Contact.jsx
import React, { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, Instagram, User, Clock, Zap } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', email: '', subject: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6" style={{ backgroundColor: '#020817' }}>
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities or collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {['fullName', 'email', 'subject', 'message'].map((field, i) => (
                  <div key={i}>
                    <label className="block text-white font-medium mb-2">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {field !== 'message' ? (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white"
                        required
                      />
                    ) : (
                      <textarea
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        rows="6"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white"
                        required
                      />
                    )}
                  </div>
                ))}
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium">
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8">Reach out via any platform below. I respond within 24 hours!</p>
              <div className="space-y-6">
                {[{
                  icon: <Mail className="w-6 h-6 text-red-400" />, label: 'Email', value: 'alex.johnson@email.com'
                }, {
                  icon: <Github className="w-6 h-6 text-gray-400" />, label: 'GitHub', value: '@alexjohnson'
                }, {
                  icon: <Linkedin className="w-6 h-6 text-blue-400" />, label: 'LinkedIn', value: 'Alex Johnson'
                }, {
                  icon: <Instagram className="w-6 h-6 text-pink-400" />, label: 'Instagram', value: '@alexjohnson.dev'
                }].map(({ icon, label, value }, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-slate-700/30">{icon}</div>
                    <div>
                      <div className="text-white font-medium">{label}</div>
                      <div className="text-gray-400">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;