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
  const isCdac = project.id === 'smart-restaurant-management';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        {/* Backdrop overlay click to close */}
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
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#111111] border border-white/20 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col font-sans"
        >
          {/* Top Bar Header */}
          <div className="p-6 md:p-8 bg-gradient-to-r from-[#181818] via-[#141414] to-[#ff2a2a]/20 border-b border-white/10 flex justify-between items-start shrink-0">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                  {project.badge}
                </span>
                {project.institution && (
                  <span className="text-xs font-mono text-white/70 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    📍 {project.institution}
                  </span>
                )}
                {project.course && (
                  <span className="text-xs font-mono text-white/70 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    🎓 {project.course}
                  </span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ff2a2a] text-white flex items-center justify-center text-lg font-bold transition-all duration-300 shrink-0 ml-4"
              aria-label="Close Case Study"
            >
              ✕
            </button>
          </div>

          {/* Scrollable Case Study Body */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1 text-white/80 text-sm md:text-base leading-relaxed font-medium">
            
            {/* 01 Overview */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-2">
                01. Project Overview
              </h3>
              <p className="text-white/90 text-base md:text-lg font-semibold leading-relaxed">
                {caseStudy.overview || project.description}
              </p>
            </div>

            {/* 02 Problem Statement */}
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

            {/* C-DAC PROJECT SECTIONS */}
            {isCdac ? (
              <>
                {/* 03 Objectives */}
                {caseStudy.objectives && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-3">
                      03. System Objectives
                    </h3>
                    <ul className="space-y-2 text-xs md:text-sm text-white/80">
                      {caseStudy.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-400 font-bold shrink-0">▸</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 04 Main Modules (8 Modules) */}
                {caseStudy.modules && (
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-3">
                      04. Main Modules Breakdown
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {caseStudy.modules.map((mod) => (
                        <div key={mod.name} className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <h4 className="text-white font-bold text-xs md:text-sm mb-1 flex items-center gap-2">
                            <span>{mod.icon}</span>
                            <span>{mod.name}</span>
                          </h4>
                          <p className="text-white/60 text-xs leading-relaxed">
                            {mod.details}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 05 Customer Order Execution Flow */}
                {caseStudy.orderFlow && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-2">
                      05. Customer Order Execution Flow
                    </h3>
                    <p className="text-white/60 text-xs mb-4">{caseStudy.orderFlow.description}</p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                      {caseStudy.orderFlow.steps.map((step, idx) => (
                        <div key={step} className="p-2.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono flex flex-col justify-between">
                          <span className="text-[10px] text-red-400 font-bold">Step {idx + 1}</span>
                          <span className="text-white font-bold mt-1 text-[11px]">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 06 Authentication & Role-Based Authorization Flow */}
                {caseStudy.authFlow && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-2">
                      06. Authentication & RBAC Security Flow
                    </h3>
                    <p className="text-white/60 text-xs mb-4">{caseStudy.authFlow.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                      {caseStudy.authFlow.roles.map((r) => (
                        <div key={r.role} className="p-3 rounded-xl bg-red-950/20 border border-red-500/20">
                          <h5 className="text-red-400 font-bold text-xs mb-1">{r.role}</h5>
                          <p className="text-white/70 text-xs leading-relaxed">{r.scope}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 07 Java Spring Boot Notification Microservice */}
                {caseStudy.notificationService && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-2">
                      07. Java Spring Boot Notification Microservice
                    </h3>
                    <p className="text-white/60 text-xs mb-4">{caseStudy.notificationService.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.notificationService.stack.map((s) => (
                        <span key={s} className="px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono font-bold rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
                      {caseStudy.notificationService.steps.map((st, i) => (
                        <div key={st} className="p-2 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-between">
                          <span className="text-[10px] text-red-400 font-bold">0{i+1}</span>
                          <span className="text-white font-semibold text-[11px]">{st}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 08 SQL Server & Database Layer */}
                {caseStudy.databaseLayer && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-2">
                      08. Database Schema & Entities (SQL Server + EF Core)
                    </h3>
                    <p className="text-white/60 text-xs mb-3">{caseStudy.databaseLayer.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                      {caseStudy.databaseLayer.tables.map((t) => (
                        <div key={t} className="p-2.5 rounded-lg bg-black/30 border border-white/5 text-white/80">
                          <span className="text-red-400">🛢️</span> {t}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 09 Deployment & Testing */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.deployment && (
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-2">
                        09. Docker & AWS EC2 Deployment
                      </h3>
                      <p className="text-white/70 text-xs leading-relaxed">
                        {caseStudy.deployment.description}
                      </p>
                    </div>
                  )}

                  {caseStudy.aiFoundation && (
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-2">
                        10. AI Foundation for Intelligent Operations
                      </h3>
                      <p className="text-white/70 text-xs leading-relaxed">
                        {caseStudy.aiFoundation.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* 11 Testing & Validation */}
                {caseStudy.testingValidation && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-3">
                      11. Testing & Operational Validation Covered Areas
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80">
                      {caseStudy.testingValidation.coveredAreas.map((area) => (
                        <div key={area} className="flex items-center gap-2">
                          <span className="text-emerald-400 font-bold">✓</span>
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 12 Outcome */}
                {caseStudy.outcome && (
                  <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-6">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-2">
                      12. Project Outcome
                    </h3>
                    <p className="text-white/90 text-sm font-semibold leading-relaxed">
                      {caseStudy.outcome}
                    </p>
                  </div>
                )}
              </>
            ) : (
              /* COLLEGE IOT PROJECT SECTIONS */
              <>
                {/* 03 How It Works */}
                {caseStudy.howItWorks && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-3">
                      03. How It Works
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {caseStudy.howItWorks}
                    </p>
                  </div>
                )}

                {/* 04 Hardware & 05 Software Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Hardware */}
                  {caseStudy.hardware && (
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-3">
                        04. Hardware Components
                      </h3>
                      <ul className="space-y-2 text-xs md:text-sm text-white/80">
                        {caseStudy.hardware.map((hw) => (
                          <li key={hw} className="flex items-start gap-2">
                            <span className="text-red-400 font-bold shrink-0">⚙️</span>
                            <span>{hw}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Software */}
                  {caseStudy.software && (
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-3">
                        05. Software & Libraries
                      </h3>
                      <ul className="space-y-2 text-xs md:text-sm text-white/80">
                        {caseStudy.software.map((sw) => (
                          <li key={sw} className="flex items-start gap-2">
                            <span className="text-cyan-400 font-bold shrink-0">💻</span>
                            <span>{sw}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* 06 Control Logic */}
                {caseStudy.controlLogic && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-3">
                      06. Control Logic Breakdown
                    </h3>
                    <ul className="space-y-2 text-xs md:text-sm text-white/80">
                      {caseStudy.controlLogic.map((logic, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-yellow-400 font-bold shrink-0">▸</span>
                          <span>{logic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 07 Outcome */}
                {caseStudy.outcome && (
                  <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-6">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-2">
                      07. Prototype Outcome
                    </h3>
                    <p className="text-white/90 text-sm font-semibold leading-relaxed">
                      {caseStudy.outcome}
                    </p>
                  </div>
                )}

                {/* 08 Future Scope */}
                {caseStudy.futureScope && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-3">
                      08. Future Scope
                    </h3>
                    <ul className="space-y-2 text-xs text-white/80">
                      {caseStudy.futureScope.map((fs, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-400 font-bold">🚀</span>
                          <span>{fs}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}

            {/* Tech Tags */}
            <div>
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
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/20 text-white text-xs font-bold transition-all flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View GitHub Repository
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
