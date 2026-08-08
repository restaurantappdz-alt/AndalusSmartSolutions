import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiCpu, FiDatabase, FiWifi, FiChevronRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center pt-20 px-4 bg-grid-pattern overflow-hidden">
      {/* Decorative background tech elements */}
      <div className="absolute top-1/3 left-10 md:left-24 text-blue-200 animate-pulse">
        <FiCpu size={64} className="opacity-50" />
      </div>
      <div className="absolute bottom-1/4 right-10 md:right-24 text-cyan-200 animate-bounce" style={{ animationDuration: '4s' }}>
        <FiWifi size={64} className="opacity-50" />
      </div>
      
      {/* Decorative glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full text-xs font-mono text-slate-600 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-widest uppercase">Systems Optimized & Online</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight"
        >
          Architecting <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-blue-500 to-cyan-400 glow-text">
            Smart Solutions
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          We engineer intelligent software and hardware ecosystems that <strong className="font-semibold text-slate-800">automate</strong>, <strong className="font-semibold text-slate-800">optimize</strong>, and drive your business forward into the digital era.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-64}
            className="group relative cursor-pointer overflow-hidden rounded-lg bg-slate-900 px-8 py-4 font-medium text-white shadow-xl transition-all hover:shadow-2xl hover:shadow-blue-500/30 w-full sm:w-auto flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center tracking-wide">
              Initialize Protocols <FiDatabase className="ml-3 opacity-70 group-hover:text-cyan-400 transition-colors" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-64}
            className="group cursor-pointer px-8 py-4 font-mono text-sm font-medium text-slate-700 transition-all hover:text-accent-blue bg-white/50 backdrop-blur-sm border border-slate-200 hover:border-blue-300 rounded-lg w-full sm:w-auto flex items-center justify-center"
          >
            Connect_Node() <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
