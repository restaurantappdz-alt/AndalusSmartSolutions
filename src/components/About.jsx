import React from 'react';
import { motion } from 'framer-motion';
import { FiTerminal } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <section id="about" className="py-20 md:py-24 px-4 bg-slate-900 text-slate-300 relative overflow-hidden">
      {/* Tech grid overlay for dark section */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5 order-2 md:order-1"
        >
          <div className="glass-panel !bg-slate-800/80 !border-slate-700 p-5 md:p-8 rounded-2xl relative overflow-hidden" dir="ltr">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue to-emerald-400 rounded-t-2xl"></div>
            <div className="flex items-center gap-3 text-emerald-400 font-mono text-xs md:text-sm mb-4 md:mb-6 pb-4 border-b border-slate-700">
              <FiTerminal size={16} className="shrink-0" />
              <span className="truncate">~/about/core_identity.sh</span>
            </div>
            
            <div className="space-y-3 font-mono text-xs md:text-sm text-left overflow-x-auto pb-2">
              <div className="flex whitespace-nowrap">
                <span className="text-slate-500 w-5 md:w-6 shrink-0">1</span>
                <span className="text-blue-400">const</span> <span className="text-white ml-2">company</span> <span className="text-cyan-400 ml-2">=</span> <span className="text-emerald-300 ml-2">"Al Andalus";</span>
              </div>
              <div className="flex whitespace-nowrap">
                <span className="text-slate-500 w-5 md:w-6 shrink-0">2</span>
                <span className="text-blue-400">const</span> <span className="text-white ml-2">focus</span> <span className="text-cyan-400 ml-2">=</span> <span className="text-emerald-300 ml-2">["Software", "Hardware"];</span>
              </div>
              <div className="flex whitespace-nowrap">
                <span className="text-slate-500 w-5 md:w-6 shrink-0">3</span>
                <span className="text-slate-500 italic">// Engineering success since init</span>
              </div>
              <div className="flex whitespace-nowrap">
                <span className="text-slate-500 w-5 md:w-6 shrink-0">4</span>
                <span className="text-cyan-400">return</span> <span className="text-white ml-2">buildFuture(company, focus);</span>
              </div>
              <div className="flex items-center mt-4 text-emerald-400 animate-pulse whitespace-nowrap">
                <span className="text-slate-500 w-5 md:w-6 shrink-0">5</span>
                <span className="mr-2">&gt;</span> _
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-7 order-1 md:order-2"
        >
          <div className="flex items-center gap-3 mb-4 text-accent-blue font-mono text-sm uppercase tracking-widest">
            <span className="w-8 h-[1px] bg-accent-blue"></span>
            {t('about_label')}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 md:mb-8 tracking-tight">
            {t('about_title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t('about_title2')}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-6">
            {t('about_desc1')}
          </p>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed border-s-2 border-accent-blue ps-4">
            {t('about_desc2')}
          </p>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;
