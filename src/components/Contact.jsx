import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Communication link established! (demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-grid-pattern relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 mb-4 text-cyan-600 font-mono text-sm"
          >
             <span className="w-2 h-2 bg-cyan-500"></span> ESTABLISH_CONNECTION
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Commence Transmission
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-10 glass-panel p-8 rounded-2xl"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6 font-mono border-b border-slate-200 pb-4">NETWORK_NODES</h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-accent-blue mr-4 group-hover:bg-accent-blue group-hover:text-white transition-colors">
                    <FaEnvelope size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-mono mb-1">DATA_PACKET</span>
                    <span className="text-slate-700 font-medium">info@alandalus-solutions.com</span>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 mr-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-mono mb-1">VOICE_PROTOCOL</span>
                    <span className="text-slate-700 font-medium">+966 50 123 4567</span>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mr-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-mono mb-1">PHYSICAL_LOCATION</span>
                    <span className="text-slate-700 font-medium">King Fahd Road, Riyadh</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-4 font-mono">EXTERNAL_LINKS</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-slate-100 border border-slate-200 rounded-lg text-slate-600 hover:text-white hover:bg-slate-800 transition-all">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="p-3 bg-slate-100 border border-slate-200 rounded-lg text-slate-600 hover:text-white hover:bg-slate-800 transition-all">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="p-3 bg-slate-100 border border-slate-200 rounded-lg text-slate-600 hover:text-white hover:bg-slate-800 transition-all">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100 rounded-full blur-[60px] -z-10"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-bold text-slate-600 mb-2 uppercase tracking-wide">Identifier</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all font-mono text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-bold text-slate-600 mb-2 uppercase tracking-wide">Return Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all font-mono text-sm"
                    placeholder="user@network.com"
                  />
                </div>
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-xs font-mono font-bold text-slate-600 mb-2 uppercase tracking-wide">Payload Data</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all resize-none font-mono text-sm"
                  placeholder="Enter transmission..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full relative group overflow-hidden bg-slate-900 text-white py-4 px-6 rounded-lg font-mono font-bold uppercase tracking-widest hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Transmit <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
