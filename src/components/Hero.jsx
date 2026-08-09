import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiCpu, FiWifi, FiChevronRight, FiChevronLeft, FiServer, FiShield } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo.png';

const Hero = () => {
  const { t, language } = useLanguage();
  const ChevronIcon = language === 'ar' ? FiChevronLeft : FiChevronRight;

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center px-4 py-8 md:py-12 bg-grid-pattern overflow-hidden">
      {/* Decorative background tech elements */}
      <div className="absolute top-1/3 left-6 md:left-24 text-blue-200 animate-pulse">
        <FiCpu className="w-12 h-12 md:w-20 md:h-20 opacity-40" />
      </div>
      <div className="absolute bottom-1/4 right-6 md:right-24 text-cyan-200 animate-bounce" style={{ animationDuration: '4s' }}>
        <FiWifi className="w-16 h-16 md:w-24 md:h-24 opacity-30" />
      </div>
      <div className="absolute top-1/4 right-12 md:right-32 text-indigo-200 animate-pulse" style={{ animationDuration: '3s' }}>
        <FiServer className="w-10 h-10 md:w-[72px] md:h-[72px] opacity-40" />
      </div>
      <div className="absolute bottom-1/3 left-10 md:left-32 text-emerald-200 animate-bounce" style={{ animationDuration: '5s' }}>
        <FiShield className="w-20 h-20 md:w-[120px] md:h-[120px] opacity-50" />
      </div>
      
      {/* Decorative glowing orb (Radial gradient is much faster than CSS blur) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,_rgba(37,99,235,0.08)_0%,_transparent_70%)] -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full text-[10px] md:text-xs font-mono text-slate-600 mb-8 rtl:space-x-reverse"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-widest uppercase">{t('hero_status')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-blue-500 to-cyan-400 glow-text">
            {t('hero_title1')}
          </span> <br className="md:hidden" />
          {t('hero_title2')}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          {t('hero_desc')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center w-full px-4 sm:px-0"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-64}
            className="group relative cursor-pointer overflow-hidden rounded-lg bg-slate-900 px-8 py-4 font-medium text-white shadow-xl transition-all hover:shadow-2xl hover:shadow-blue-500/30 w-full sm:w-auto flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center tracking-wide">
              {t('hero_btn')} <ChevronIcon className="ms-2 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mt-10 md:mt-12"
        >
          <div className="absolute -inset-10 -z-10 bg-[radial-gradient(circle,rgba(37,99,235,0.28)_0%,rgba(6,182,212,0.15)_45%,transparent_70%)] blur-2xl"></div>
          <img
            src={logo}
            alt="Al Andalus Smart Solutions logo"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto object-cover shadow-2xl shadow-blue-500/25"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
