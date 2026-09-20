import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { engineeringArchitecture, projects } from '../data/portfolioData';

const EngineeringBehindProjects = ({ onSelectProject }) => {
  const [selectedTechId, setSelectedTechId] = useState('react');
  const [selectedArchNode, setSelectedArchNode] = useState(null);
  const [activeArchTab, setActiveArchTab] = useState('web'); // 'web' | 'notification' | 'auth' | 'deployment' | 'ai'

  const selectedTech = engineeringArchitecture.techNodes.find(
    (t) => t.id === selectedTechId
  ) || engineeringArchitecture.techNodes[0];

  const handleProjectClick = (projectId) => {
    const proj = projects.find((p) => p.id === projectId);
    if (proj && onSelectProject) {
      onSelectProject(proj);
    } else {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getActiveFlow = () => {
    const feat = engineeringArchitecture.featuredProject;
    switch (activeArchTab) {
      case 'web':
        return { title: 'Web & Relational Database Architecture Flow', nodes: feat.webFlow };
      case 'notification':
        return { title: 'Java Spring Boot & Gmail SMTP Notification Flow', nodes: feat.notificationFlow };
      case 'auth':
        return { title: 'JWT Authentication & Role-Based Access Control (RBAC) Flow', nodes: feat.authFlow };
      case 'deployment':
        return { title: 'Docker Containerization & AWS EC2 Deployment Flow', nodes: feat.deploymentFlow };
      case 'ai':
        return { title: feat.aiFoundation.title, isAi: true, data: feat.aiFoundation };
      default:
        return { title: 'Web & Relational Database Architecture Flow', nodes: feat.webFlow };
    }
  };

  const currentFlow = getActiveFlow();

  return (
    <section 
      id="engineering"
      className="bg-[#0e0e0e] py-20 px-6 md:px-12 w-full border-t border-b border-white/10 font-sans relative overflow-hidden"
    >
      {/* Glow Ambient Highlights */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ============================================================ */}
        {/* SECTION HEADER                                               */}
        {/* ============================================================ */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-mono font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 shadow-sm">
            {engineeringArchitecture.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            {engineeringArchitecture.heading}
          </h2>
          <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed">
            "{engineeringArchitecture.subtitle}"
          </p>
        </div>

        {/* ============================================================ */}
        {/* 1. INTERACTIVE TECHNOLOGY MAP                                */}
        {/* ============================================================ */}
        <div data-aos="fade-up" className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl mb-16">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block mb-1">
                Architecture Map
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Interactive Technology & Project Map
              </h3>
            </div>
            <p className="text-xs text-white/50 font-mono">
              💡 Select any technology to inspect details and connected projects
            </p>
          </div>

          {/* Technology Nodes Grid */}
          <div className="relative py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10 mb-8">
              {engineeringArchitecture.techNodes.map((tech) => {
                const isSelected = selectedTechId === tech.id;
                return (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTechId(tech.id)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedTechId(tech.id); }}
                    tabIndex={0}
                    role="tab"
                    aria-selected={isSelected}
                    className={`text-left p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 flex flex-col justify-between min-h-[110px] focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      isSelected
                        ? 'bg-[#ff2a2a] text-white border-red-400 shadow-[0_0_20px_rgba(255,42,42,0.4)] scale-[1.02]'
                        : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-white border-white/10'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isSelected ? 'text-white/80' : 'text-red-400'}`}>
                        {tech.layer}
                      </span>
                      {isSelected && <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">Selected</span>}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm leading-snug">{tech.name}</h4>
                      <p className={`text-[11px] font-mono mt-1 ${isSelected ? 'text-white/90' : 'text-white/50'}`}>
                        {tech.category}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Technology Inspector Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTech.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="bg-[#141414] border border-red-500/30 rounded-2xl p-6 backdrop-blur-xl shadow-2xl relative"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-3">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-red-400 uppercase tracking-widest">
                      {selectedTech.subtitle}
                    </span>
                    <h4 className="text-lg md:text-xl font-black text-white mt-0.5">
                      {selectedTech.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-white/50 font-mono">Used in:</span>
                    {selectedTech.usedInProjectNames.map((name, idx) => {
                      const projId = selectedTech.usedInProjectIds[idx];
                      return (
                        <button
                          key={name}
                          onClick={() => handleProjectClick(projId)}
                          className="text-xs font-bold text-white bg-red-500/20 hover:bg-red-500/40 border border-red-500/40 px-3 py-1 rounded-full transition-all duration-300 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          <span>{name}</span>
                          <span className="text-red-400">→</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed mb-4">
                  "{selectedTech.description}"
                </p>

                <div className="pt-3 border-t border-white/10 flex flex-wrap justify-between items-center gap-3">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-white/50">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Technology → Project Relationship Verified</span>
                  </div>

                  <button
                    onClick={() => handleProjectClick(selectedTech.usedInProjectIds[0])}
                    className="px-4 py-1.5 bg-[#ff2a2a] hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-all shadow-[0_0_12px_rgba(255,42,42,0.3)] flex items-center gap-2"
                  >
                    <span>View Project Case Study</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

        {/* ============================================================ */}
        {/* 2. FEATURED PROJECT ARCHITECTURE                             */}
        {/* ============================================================ */}
        <div data-aos="fade-up" className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl mb-16">
          
          {/* Header & Tab Selector */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <div className="inline-block border border-red-500/30 bg-red-500/10 text-red-400 text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2">
                Flagship C-DAC Architecture Deep-Dive
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                {engineeringArchitecture.featuredProject.title}
              </h3>
              <p className="text-xs md:text-sm text-white/60 font-medium">
                {engineeringArchitecture.featuredProject.subtitle}
              </p>
            </div>

            {/* Architecture Tabs */}
            <div className="flex items-center flex-wrap bg-white/5 p-1 rounded-xl border border-white/10 text-xs font-bold gap-1">
              <button
                onClick={() => { setActiveArchTab('web'); setSelectedArchNode(null); }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeArchTab === 'web' ? 'bg-[#ff2a2a] text-white shadow-md' : 'text-white/60 hover:text-white'
                }`}
              >
                Web & Database
              </button>
              <button
                onClick={() => { setActiveArchTab('notification'); setSelectedArchNode(null); }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeArchTab === 'notification' ? 'bg-[#ff2a2a] text-white shadow-md' : 'text-white/60 hover:text-white'
                }`}
              >
                Spring Boot Email Service
              </button>
              <button
                onClick={() => { setActiveArchTab('auth'); setSelectedArchNode(null); }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeArchTab === 'auth' ? 'bg-[#ff2a2a] text-white shadow-md' : 'text-white/60 hover:text-white'
                }`}
              >
                JWT & RBAC Auth
              </button>
              <button
                onClick={() => { setActiveArchTab('deployment'); setSelectedArchNode(null); }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeArchTab === 'deployment' ? 'bg-[#ff2a2a] text-white shadow-md' : 'text-white/60 hover:text-white'
                }`}
              >
                Docker & AWS EC2
              </button>
              <button
                onClick={() => { setActiveArchTab('ai'); setSelectedArchNode(null); }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeArchTab === 'ai' ? 'bg-[#ff2a2a] text-white shadow-md' : 'text-white/60 hover:text-white'
                }`}
              >
                AI Foundation
              </button>
            </div>
          </div>

          {/* Architecture Visual Flow */}
          <div className="relative py-2">
            <h4 className="text-sm font-mono font-bold text-red-400 uppercase tracking-wider mb-4">
              {currentFlow.title}
            </h4>

            {currentFlow.isAi ? (
              <div className="bg-[#141414] border border-white/15 rounded-2xl p-6">
                <h5 className="text-white font-black text-lg mb-1">{currentFlow.data.title}</h5>
                <span className="text-xs font-mono text-red-400 font-bold block mb-3">{currentFlow.data.subtitle}</span>
                <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed">
                  "{currentFlow.data.description}"
                </p>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-stretch justify-between gap-3 overflow-x-auto pb-2">
                {currentFlow.nodes.map((node, index, arr) => {
                  const isSelected = selectedArchNode?.title === node.title;

                  return (
                    <div key={node.title} className="flex-1 flex flex-col md:flex-row items-center gap-3 min-w-[160px]">
                      
                      {/* Node Box */}
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setSelectedArchNode(node)}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedArchNode(node); }}
                        tabIndex={0}
                        role="button"
                        aria-label={`Inspect ${node.title}`}
                        className={`w-full p-4 rounded-2xl border backdrop-blur-md cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[120px] focus:outline-none focus:ring-2 focus:ring-red-500 ${
                          isSelected
                            ? 'bg-[#ff2a2a]/20 border-red-500 shadow-[0_0_20px_rgba(255,42,42,0.4)] scale-105'
                            : 'bg-white/5 border-white/10 hover:border-red-500/40 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider">
                            Step {node.step || `0${index + 1}`}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-xs sm:text-sm leading-snug mb-1">
                            {node.title}
                          </h4>
                          <p className="text-[11px] font-mono text-white/60 truncate font-semibold">
                            {node.tech}
                          </p>
                        </div>
                      </motion.div>

                      {/* Flow Arrow */}
                      {index < arr.length - 1 && (
                        <div className="hidden md:flex items-center justify-center text-red-500/70 shrink-0">
                          <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      )}
                      {index < arr.length - 1 && (
                        <div className="md:hidden flex items-center justify-center text-red-500/70 my-1">
                          <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            )}

            {/* Architecture Node Details Drawer */}
            <AnimatePresence mode="wait">
              {selectedArchNode && (
                <motion.div
                  key={selectedArchNode.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-6 p-5 rounded-2xl bg-[#141414] border border-white/15 backdrop-blur-md"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest">
                        {selectedArchNode.layer || "Architecture Layer"}
                      </span>
                      <h4 className="text-white font-black text-base md:text-lg">{selectedArchNode.title}</h4>
                    </div>
                    <button
                      onClick={() => setSelectedArchNode(null)}
                      className="text-white/50 hover:text-white text-xs font-bold px-2.5 py-1 bg-white/10 rounded-lg transition-colors"
                    >
                      Close ✕
                    </button>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed mb-3">
                    {selectedArchNode.role}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-white/50 uppercase">Technology:</span>
                    <span className="text-xs font-mono font-bold text-red-300 bg-red-500/10 px-2.5 py-0.5 rounded-full border border-red-500/20">
                      {selectedArchNode.tech}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* ============================================================ */}
        {/* 3. COLLEGE PROJECT VS C-DAC PROJECT COMPARISON               */}
        {/* ============================================================ */}
        <div data-aos="fade-up" className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block mb-1">
              {engineeringArchitecture.projectComparison.badge}
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
              {engineeringArchitecture.projectComparison.heading}
            </h3>
            <p className="text-xs text-white/60 font-medium mt-1">
              {engineeringArchitecture.projectComparison.subtitle}
            </p>
          </div>

          {/* Comparison Matrix Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/15 bg-white/5">
                  <th className="py-3 px-4 text-xs font-mono font-bold text-white/50 uppercase">Aspect</th>
                  <th className="py-3 px-4 text-xs font-mono font-bold text-yellow-400 uppercase">
                    College IoT Project (Road Safety)
                  </th>
                  <th className="py-3 px-4 text-xs font-mono font-bold text-red-400 uppercase">
                    C-DAC Project (Restaurant Management)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs">
                {engineeringArchitecture.projectComparison.rows.map((row) => (
                  <tr key={row.aspect} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-white/70 whitespace-nowrap">
                      {row.aspect}
                    </td>
                    <td className="py-3 px-4 text-white/80 font-medium">
                      {row.college}
                    </td>
                    <td className="py-3 px-4 text-white font-bold">
                      {row.cdac}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-center">
            <div className="inline-block bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1.5 text-[11px] font-mono font-bold text-red-300">
              {engineeringArchitecture.projectComparison.progressionText}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. "HOW IT CONNECTS" END-TO-END REQUEST PIPELINE              */}
        {/* ============================================================ */}
        <div data-aos="fade-up" className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl mb-16">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block mb-1">
              End-to-End Request Pipeline
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
              How It Connects
            </h3>
            <p className="text-xs text-white/50 font-medium mt-1">
              Conceptual request lifecycle from QR table access to SQL Server persistence and Java Spring Boot email notification delivery.
            </p>
          </div>

          {/* Step Flow List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {engineeringArchitecture.howItConnects.map((step, idx) => (
              <div 
                key={step.title}
                className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between relative group hover:border-red-500/30 transition-all"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-mono font-bold text-red-400">
                    Step 0{idx + 1}
                  </span>
                  <span className="text-[10px] text-white/30 font-mono">→</span>
                </div>
                <h5 className="text-white font-bold text-xs mb-1 group-hover:text-red-400 transition-colors">
                  {step.title}
                </h5>
                <p className="text-[11px] text-white/60 leading-normal font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 5. TECHNICAL CAPABILITY CARDS ("What I Work With")           */}
        {/* ============================================================ */}
        <div data-aos="fade-up" className="mb-16">
          <div className="mb-8 text-center">
            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
              What I Work With
            </h3>
            <p className="text-xs text-white/50 font-medium mt-1">
              Core technologies proven and implemented across my academic and C-DAC engineering projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {engineeringArchitecture.capabilityCategories.map((cat) => (
              <div 
                key={cat.category}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-red-500/40 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
                  {cat.category}
                </div>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-xs font-semibold text-white/80">
                      <span className="text-red-500 text-[10px]">▸</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 6. PROOF OF SKILL MATRIX                                     */}
        {/* ============================================================ */}
        <div data-aos="fade-up" className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block mb-1">
                Implementation Evidence
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                Proof of Skill
              </h3>
              <p className="text-xs text-white/50 font-medium mt-1">
                Connecting claimed technical skills directly to real project implementations and architectural evidence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {engineeringArchitecture.skillEvidence.map((item) => (
              <div
                key={item.skill}
                className="bg-[#121212] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-red-500/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono font-bold text-white bg-red-500/20 px-2.5 py-1 rounded-md border border-red-500/30">
                      {item.skill}
                    </span>
                    <span className="text-[10px] font-mono text-white/40">Verified Evidence</span>
                  </div>

                  <h5 className="text-white font-bold text-sm mt-3 mb-1 group-hover:text-red-400 transition-colors">
                    {item.projectTitle}
                  </h5>

                  <p className="text-white/60 text-xs font-medium leading-relaxed mb-4">
                    {item.evidence}
                  </p>
                </div>

                <button
                  onClick={() => handleProjectClick(item.projectId)}
                  className="w-full py-2 bg-white/5 hover:bg-[#ff2a2a] text-white text-xs font-bold rounded-xl border border-white/10 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm group-hover:shadow-[0_0_15px_rgba(255,42,42,0.3)]"
                >
                  <span>View Case Study</span>
                  <span className="text-red-400 group-hover:text-white">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EngineeringBehindProjects;
