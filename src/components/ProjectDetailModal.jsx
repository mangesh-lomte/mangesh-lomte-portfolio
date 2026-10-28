import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetailModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy || {};
  const hasLiveDemo = Boolean(project.links?.demo);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-0"
        />

        {/* Main Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#111111] border border-white/20 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col font-sans"
        >
          {/* Top Bar Header */}
          <div className="p-6 md:p-8 bg-gradient-to-r from-[#181818] via-[#141414] to-[#ff2a2a]/20 border-b border-white/10 flex justify-between items-start shrink-0">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                  {project.badge}
                </span>
                <span className="text-xs font-mono text-white/70 bg-white/5 px-3 py-1 rounded-full border border-white/10 uppercase">
                  {project.category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="text-xs sm:text-sm font-mono text-red-300 font-semibold mt-1">
                  {project.subtitle}
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ff2a2a] text-white flex items-center justify-center text-lg font-bold transition-all duration-300 shrink-0 ml-4 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close Case Study"
            >
              ✕
            </button>
          </div>

          {/* Scrollable Case Study Body */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-7 flex-1 text-white/80 text-sm md:text-base leading-relaxed font-medium">
            
            {/* 01. Overview */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-2">
                01. Project Overview
              </h3>
              <p className="text-white/90 text-base md:text-lg font-semibold leading-relaxed">
                {caseStudy.overview || project.description}
              </p>
            </div>

            {/* 02. Problem Statement */}
            {caseStudy.problem && (
              <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-6">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-2 flex items-center gap-2">
                  <span>⚠️</span> 02. The Problem Statement
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>
            )}

            {/* 03. Engineering Solution */}
            {caseStudy.solution && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-2 flex items-center gap-2">
                  <span>💡</span> 03. Implemented Engineering Solution
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            )}

            {/* 04. Architecture Highlights */}
            {caseStudy.architectureHighlights && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-3">
                  04. Key Architecture & System Components
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-white/80">
                  {caseStudy.architectureHighlights.map((arch, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold shrink-0">▸</span>
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 05. User Roles & Capabilities */}
            {caseStudy.userRoles && (
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-3">
                  05. Role-Based Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {caseStudy.userRoles.map((r) => (
                    <div key={r.role} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="text-red-400 font-bold text-xs md:text-sm mb-1 uppercase tracking-wider">
                        {r.role} Role
                      </h4>
                      <p className="text-white/70 text-xs leading-relaxed">
                        {r.access}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Core Technologies Badges */}
            <div className="pt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-3">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-mono font-bold text-white bg-white/10 rounded-full border border-white/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Action Links */}
          <div className="p-6 bg-[#181818] border-t border-white/10 flex flex-wrap justify-between items-center gap-4 shrink-0">
            <div className="text-xs text-white/50 font-mono font-semibold">
              Project ID: {project.id}
            </div>

            <div className="flex items-center gap-3">
              {hasLiveDemo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#ff2a2a] hover:bg-red-600 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <span>Launch Live App</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}

              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/20 text-white text-xs font-bold transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
