import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiCpu, FiMonitor, FiCloud } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = ({ project, index }) => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: index * 0.1 } }
  };

  const icons = [<FiMonitor size={13} />, <FiCpu size={13} />, <FiCloud size={13} />];

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white border border-slate-200 rounded-xl overflow-hidden group flex flex-col h-full hover:-translate-y-1 hover:shadow-lg hover:border-slate-300 transition-all duration-300"
    >
      {/* Thin top accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-accent-blue to-cyan-400 opacity-70" />

      {/* Image */}
      <div className="h-40 overflow-hidden relative shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-[0.92] saturate-[0.85] contrast-[1.05] group-hover:brightness-100 group-hover:saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/25 via-transparent to-cyan-400/30 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

        {/* System badge */}
        <span
          className="absolute top-3 font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-white/80 border border-slate-200 text-slate-500 flex items-center gap-1.5 shadow-sm"
          style={{ [isRtl ? 'right' : 'left']: '12px' }}
          dir="ltr"
        >
          {icons[index % icons.length]}
          SYS_0{index + 1}
        </span>
      </div>

      {/* Content */}
      <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-[15px] font-extrabold text-slate-800 leading-snug tracking-tight">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mt-0.5 mb-3">
            / {project.subtitle}
          </p>
        )}

        {/* Divider */}
        <div className="h-px bg-slate-100 mb-3" />

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4" dir="ltr">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-[10px] font-mono font-semibold bg-slate-50 text-slate-400 px-2 py-0.5 rounded border border-slate-200 uppercase tracking-wider">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Button — only if hasButton */}
        {project.hasButton && project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn mt-auto flex items-center justify-between py-2.5 px-4 rounded-lg font-mono text-sm font-bold bg-slate-900 text-white hover:bg-accent-blue transition-colors duration-300 shadow-md"
          >
            <span>{project.action || t('project_btn')}</span>
            <FiExternalLink
              size={15}
              className={`transition-transform ${isRtl ? 'group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'}`}
            />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
