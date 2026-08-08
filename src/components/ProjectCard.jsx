import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiCpu, FiMonitor, FiCloud } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Assign random tech icon based on index for the tech vibe
  const icons = [<FiCpu />, <FiMonitor />, <FiCloud />];
  const TechIcon = () => icons[index % icons.length];

  return (
    <motion.div
      variants={itemVariants}
      className="glass-panel rounded-xl overflow-hidden group relative scanline"
    >
      {/* Top tech border */}
      <div className="h-1 w-full bg-gradient-to-r from-accent-blue via-cyan-400 to-transparent opacity-70"></div>
      
      <div className="h-56 overflow-hidden relative">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
        />
        
        {/* Tech overlay badge */}
        <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-xs px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
          <span className="text-cyan-400"><TechIcon /></span>
          SYS_0{index + 1}
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-accent-blue border border-blue-100">
             <TechIcon />
          </div>
          <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
        </div>
        
        <p className="text-slate-600 mb-6 text-sm leading-relaxed">{project.description}</p>
        
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-mono font-bold tracking-widest uppercase text-accent-blue hover:text-cyan-600 transition-colors group/link"
        >
          Execute <FiExternalLink className="ml-2 group-hover/link:translate-x-1 transition-transform" size={16} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
