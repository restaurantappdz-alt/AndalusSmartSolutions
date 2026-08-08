import React from 'react';
import { motion } from 'framer-motion';
import { FiTerminal } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-slate-900 text-slate-300 relative overflow-hidden">
      {/* Tech grid overlay for dark section */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5"
        >
          <div className="glass-panel !bg-slate-800/80 !border-slate-700 p-8 rounded-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue to-emerald-400 rounded-t-2xl"></div>
            <div className="flex items-center gap-3 text-emerald-400 font-mono text-sm mb-6 pb-4 border-b border-slate-700">
              <FiTerminal size={18} />
              <span>~/about/core_identity.sh</span>
            </div>
            
            <div className="space-y-4 font-mono text-sm">
              <div className="flex">
                <span className="text-slate-500 w-6">1</span>
                <span className="text-blue-400">const</span> <span className="text-white ml-2">company</span> <span className="text-cyan-400 ml-2">=</span> <span className="text-emerald-300 ml-2">"Al Andalus";</span>
              </div>
              <div className="flex">
                <span className="text-slate-500 w-6">2</span>
                <span className="text-blue-400">const</span> <span className="text-white ml-2">focus</span> <span className="text-cyan-400 ml-2">=</span> <span className="text-emerald-300 ml-2">["Software", "Hardware"];</span>
              </div>
              <div className="flex">
                <span className="text-slate-500 w-6">3</span>
                <span className="text-slate-500 italic">// Engineering success since init</span>
              </div>
              <div className="flex">
                <span className="text-slate-500 w-6">4</span>
                <span className="text-cyan-400">return</span> <span className="text-white ml-2">buildFuture(company, focus);</span>
              </div>
              <div className="flex items-center mt-4 text-emerald-400 animate-pulse">
                <span className="text-slate-500 w-6">5</span>
                <span className="mr-2">&gt;</span> _
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-7"
        >
          <div className="flex items-center gap-3 mb-4 text-accent-blue font-mono text-sm uppercase tracking-widest">
            <span className="w-8 h-[1px] bg-accent-blue"></span>
            Who We Are
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Future.</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            At Al Andalus Smart Solutions, we fuse cutting-edge software with intelligent hardware to create seamless, future-ready systems. From bespoke applications to IoT-enabled infrastructure, our team delivers turnkey solutions that are smart, effective, and unapologetically professional.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-accent-blue pl-4">
            We don’t just build technology – we architect interconnected ecosystems that elevate operational efficiency.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;
