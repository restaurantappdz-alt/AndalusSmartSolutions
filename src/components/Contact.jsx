import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
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
    <section id="contact" className="py-20 md:py-24 px-4 bg-grid-pattern relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 mb-4 text-cyan-600 font-mono text-xs md:text-sm"
          >
             <span className="w-2 h-2 bg-cyan-500"></span> {t('contact_label')}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            {t('contact_title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8 md:space-y-10 glass-panel p-6 md:p-8 rounded-2xl"
          >
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-6 font-mono border-b border-slate-200 pb-4">{t('contact_nodes')}</h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-50 flex items-center justify-center text-accent-blue me-4 group-hover:bg-accent-blue group-hover:text-white transition-colors shrink-0">
                    <FaEnvelope size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[10px] md:text-xs text-slate-500 font-mono mb-1 truncate">DATA_PACKET</span>
                    <span className="text-sm md:text-base text-slate-700 font-medium truncate">info@alandalus-solutions.com</span>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 me-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors shrink-0">
                    <FaPhoneAlt size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs text-slate-500 font-mono mb-1">VOICE_PROTOCOL</span>
                    <span className="text-sm md:text-base text-slate-700 font-medium" dir="ltr">0123456</span>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 me-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                    <FaMapMarkerAlt size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs text-slate-500 font-mono mb-1">PHYSICAL_LOCATION</span>
                    <span className="text-sm md:text-base text-slate-700 font-medium">Someplace</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-10 rounded-2xl relative overflow-hidden">
              <div className={`absolute top-[-100px] ${isRtl ? 'left-[-100px]' : 'right-[-100px]'} w-[300px] h-[300px] bg-[radial-gradient(circle,_rgba(6,182,212,0.15)_0%,_transparent_70%)] -z-10`}></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] md:text-xs font-mono font-bold text-slate-600 mb-2 uppercase tracking-wide">{t('contact_id')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all font-mono text-sm"
                    placeholder={t('contact_placeholder_name')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] md:text-xs font-mono font-bold text-slate-600 mb-2 uppercase tracking-wide">{t('contact_email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all font-mono text-sm"
                    placeholder={t('contact_placeholder_email')}
                  />
                </div>
              </div>
              <div className="mb-6 md:mb-8">
                <label htmlFor="message" className="block text-[10px] md:text-xs font-mono font-bold text-slate-600 mb-2 uppercase tracking-wide">{t('contact_payload')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all resize-none font-mono text-sm"
                  placeholder={t('contact_placeholder_msg')}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full relative group overflow-hidden bg-slate-900 text-white py-3 md:py-4 px-6 rounded-lg font-mono font-bold uppercase tracking-widest hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center text-sm md:text-base">
                  {t('contact_transmit')} <span className="ms-2 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform">→</span>
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
