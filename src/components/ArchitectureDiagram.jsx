import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ArchitectureDiagram = ({ projectId }) => {
  const [activeTab, setActiveTab] = useState('fullstack'); // 'fullstack' | 'ai'
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  // Full-Stack Web Flow Nodes & Edges
  const fullstackNodes = [
    {
      id: 'client',
      label: 'Customer / User',
      type: 'User Session',
      tech: 'QR Scan / Browser',
      color: 'border-blue-500/50 text-blue-400 bg-blue-950/30',
      description: 'Customer scans QR code on dining table to launch responsive React web application session.'
    },
    {
      id: 'frontend',
      label: 'React 19 Frontend',
      type: 'Single Page App',
      tech: 'React · Tailwind · JWT',
      color: 'border-cyan-500/50 text-cyan-400 bg-cyan-950/30',
      description: 'Displays Customer, Chef, and Admin dashboards with JWT token storage, OTP forms, and menu state.'
    },
    {
      id: 'api',
      label: 'ASP.NET Core API',
      type: 'Backend REST API',
      tech: 'C# · REST · Auth',
      color: 'border-purple-500/50 text-purple-400 bg-purple-950/30',
      description: 'Handles core business logic, role-based JWT authentication, order routing, menu CRUD, and table state.'
    },
    {
      id: 'db',
      label: 'SQL Server',
      type: 'Relational Database',
      tech: 'SQL · Relational Schema',
      color: 'border-red-500/50 text-red-400 bg-red-950/30',
      description: 'Stores normalized relational tables for Users, Tables, Menus, Active Orders, OrderDetails, and Inventory.'
    }
  ];

  // AI Pipeline Flow Nodes
  const aiNodes = [
    {
      id: 'data',
      label: 'Restaurant Order Data',
      type: 'Data Source',
      tech: 'Order Logs · SQL Export',
      color: 'border-yellow-500/50 text-yellow-400 bg-yellow-950/30',
      description: 'Historical order items, time-of-day preferences, and dish combinations exported for ML training.'
    },
    {
      id: 'processing',
      label: 'Python / pandas',
      type: 'Data Preprocessing',
      tech: 'Python 3 · pandas',
      color: 'border-amber-500/50 text-amber-400 bg-amber-950/30',
      description: 'Cleans, aggregates, and transforms order frequency data into feature vectors for ML models.'
    },
    {
      id: 'ml',
      label: 'AI / ML Models',
      type: 'Intelligence Engine',
      tech: 'Recommendation & Demand Predictor',
      color: 'border-emerald-500/50 text-emerald-400 bg-emerald-950/30',
      description: 'Calculates co-occurrence recommendation scores and generates ingredient demand forecasts.'
    },
    {
      id: 'fastapi',
      label: 'FastAPI Microservice',
      type: 'AI Service Layer',
      tech: 'FastAPI · JSON Endpoints',
      color: 'border-teal-500/50 text-teal-400 bg-teal-950/30',
      description: 'Exposes high-speed asynchronous REST API endpoints returning real-time recommendations and prediction metrics.'
    },
    {
      id: 'react_ai',
      label: 'React Application',
      type: 'Client Interface',
      tech: 'UI Recommendation Cards',
      color: 'border-cyan-500/50 text-cyan-400 bg-cyan-950/30',
      description: 'Fetches AI recommendations to present trending dishes to customers and inventory forecasts to admins.'
    }
  ];

  const activeNodes = activeTab === 'fullstack' ? fullstackNodes : aiNodes;

  return (
    <div className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 my-6 font-sans">
      {/* Header & Tab Selector */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-white/10">
        <div>
          <h4 className="text-white font-black text-lg tracking-tight flex items-center gap-2">
            <span className="text-red-500">⚙️</span> Interactive Technical Architecture
          </h4>
          <p className="text-white/50 text-xs font-medium">
            Explore the multi-tier system layers and data pipelines. Click any node for technical details.
          </p>
        </div>

        {projectId === 'smart-restaurant-management' && (
          <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 text-xs font-bold">
            <button
              onClick={() => { setActiveTab('fullstack'); setSelectedNode(null); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'fullstack'
                  ? 'bg-[#ff2a2a] text-white shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Full-Stack Web Flow
            </button>
            <button
              onClick={() => { setActiveTab('ai'); setSelectedNode(null); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'ai'
                  ? 'bg-[#ff2a2a] text-white shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              AI / ML Pipeline Flow
            </button>
          </div>
        )}
      </div>

      {/* Architecture Flow Diagram Canvas */}
      <div className="relative w-full py-6 px-2 overflow-x-auto">
        <div className="min-w-[600px] flex items-center justify-between gap-3 relative">
          {activeNodes.map((node, index) => {
            const isSelected = selectedNode?.id === node.id;
            const isHovered = hoveredNode === node.id;

            return (
              <React.Fragment key={node.id}>
                {/* Node Box */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedNode(node)}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`flex-1 min-w-[130px] p-4 rounded-xl border backdrop-blur-md cursor-pointer transition-all duration-300 relative group flex flex-col justify-between min-h-[110px] ${node.color} ${
                    isSelected
                      ? 'ring-2 ring-red-500 shadow-[0_0_20px_rgba(255,42,42,0.4)] scale-105'
                      : isHovered
                      ? 'border-white/40 shadow-lg'
                      : 'opacity-90 hover:opacity-100'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold opacity-70">
                      Layer {index + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-xs sm:text-sm leading-snug mb-1">
                      {node.label}
                    </h5>
                    <p className="text-[11px] font-mono text-white/60 truncate font-semibold">
                      {node.tech}
                    </p>
                  </div>
                </motion.div>

                {/* Flow Connection Arrow (except after last node) */}
                {index < activeNodes.length - 1 && (
                  <div className="flex items-center justify-center shrink-0 px-1 text-white/30">
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <svg className="w-5 h-5 text-red-500/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Node Detail Inspector Box */}
      <AnimatePresence mode="wait">
        {selectedNode ? (
          <motion.div
            key={selectedNode.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 p-4 rounded-xl bg-white/5 border border-white/15 backdrop-blur-md"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">
                  {selectedNode.type}
                </span>
                <h5 className="text-white font-black text-base">{selectedNode.label}</h5>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-white/40 hover:text-white text-xs font-bold px-2 py-1 bg-white/10 rounded-md transition-colors"
              >
                Close ✕
              </button>
            </div>
            <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed mb-3">
              {selectedNode.description}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-white/50 uppercase">Technologies:</span>
              <span className="text-xs font-mono font-bold text-red-300 bg-red-500/10 px-2.5 py-0.5 rounded-full border border-red-500/20">
                {selectedNode.tech}
              </span>
            </div>
          </motion.div>
        ) : (
          <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/5 text-center text-xs text-white/40 font-mono font-medium">
            💡 Click any architecture layer above to inspect technical specifications and data responsibilities.
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArchitectureDiagram;
