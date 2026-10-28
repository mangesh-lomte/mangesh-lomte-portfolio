import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aiKnowledgeBase, personalInfo, projects, education } from '../data/portfolioData';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: `Hi! I'm **Ask Mangesh AI**. Ask me anything about Mangesh Lomte's projects, tech stack, education, or internship experience!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize Speech Recognition if supported
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };

      recognition.onerror = (error) => {
        console.error('Speech Recognition Error:', error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping]);

  // Handle Voice Input Toggle
  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in this browser. Please type your query.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setInputValue('');
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  // Local Intent Matching Engine (Guaranteed zero hallucination)
  const generateAIResponse = (query) => {
    const q = query.toLowerCase();

    // TurfBook queries
    if (q.includes('turf') || q.includes('turfbook') || q.includes('booking') || q.includes('venue')) {
      return `**TurfBook** is Mangesh's flagship sports venue booking platform!\n\n` +
        `• **Live Demo**: https://turf-book-real.vercel.app/\n` +
        `• **GitHub**: https://github.com/mangesh-lomte/TurfBook\n` +
        `• **Stack**: React, TypeScript, Tailwind CSS, Node.js, Express.js, Prisma ORM, PostgreSQL, Python FastAPI, Three.js.\n` +
        `• **Key Engineering**: Uses PostgreSQL GiST exclusion constraints to eliminate overlapping bookings at the database level, and incorporates a Python FastAPI analytical microservice for dynamic pricing.`;
    }

    // typeDon queries
    if (q.includes('typedon') || q.includes('typing') || q.includes('typed') || q.includes('touch typing')) {
      return `**typeDon** is Mangesh's competitive touch-typing platform built with a Modern-Noir aesthetic!\n\n` +
        `• **Live Website**: https://type-don.vercel.app/\n` +
        `• **GitHub**: https://github.com/mangesh-lomte/typeDon\n` +
        `• **Stack**: React 19, TypeScript, Tailwind CSS v4, Framer Motion, SignalR, Vite, ASP.NET Core.\n` +
        `• **Key Engineering**: Zero-latency keyboard telemetry HUD (WPM, Raw Speed, Accuracy, Consistency), 34-lesson touch typing academy across 5 progression stages, adaptive weak-key ngram drills, and a 7-tier syndicate reputation hierarchy.`;
    }

    // Restaurant project queries
    if (q.includes('restaurant') || q.includes('qr') || q.includes('dining')) {
      const p = projects.find(item => item.id === 'smart-restaurant-management');
      return `**${p?.title || "Smart AI & QR-Based Restaurant Management System"}** is Mangesh's C-DAC PG-DAC capstone project!\n\n` +
        `• **GitHub**: https://github.com/mangesh-lomte/Qr-Dining-main\n` +
        `• **Architecture**: React Frontend ➔ ASP.NET Core REST API ➔ SQL Server, plus an independent Java Spring Boot notification microservice for Gmail SMTP.\n` +
        `• **Dashboards**: Customer (contactless table QR menu), Chef (kitchen order queue), and Admin (menu & inventory CRUD) with JWT authentication.`;
    }

    if (q.includes('project') || q.includes('build') || q.includes('work') || q.includes('portfolio')) {
      return `Mangesh has built three primary showcase projects:\n\n` +
        `1. **TurfBook**: Full-Stack Sports Venue Booking Platform (Live: https://turf-book-real.vercel.app/)\n` +
        `2. **typeDon**: Competitive Typing Platform (Live: https://type-don.vercel.app/)\n` +
        `3. **Smart AI & QR Restaurant System**: C-DAC Microservices Application (GitHub: github.com/mangesh-lomte/Qr-Dining-main)\n\n` +
        `Check out the interactive cards and live demos in the Projects section!`;
    }

    // Technology / Skill queries
    if (q.includes('postgres') || q.includes('prisma') || q.includes('database') || q.includes('sql')) {
      return `Mangesh works extensively with **PostgreSQL**, **Prisma ORM**, and **SQL Server**. In TurfBook, he engineered PostgreSQL GiST exclusion constraints with the btree_gist extension to prevent concurrent booking collisions at the database layer.`;
    }

    if (q.includes('typescript') || q.includes('react') || q.includes('frontend') || q.includes('tailwind')) {
      return `Mangesh specializes in **Frontend Engineering** with React, TypeScript, Tailwind CSS, and Framer Motion. Both TurfBook and typeDon are built with TypeScript and React with high-performance, responsive UI and zero-latency interactions.`;
    }

    if (q.includes('node') || q.includes('express') || q.includes('backend') || q.includes('api') || q.includes('.net') || q.includes('asp.net')) {
      return `Mangesh's **Backend capabilities** include:\n\n` +
        `• **Node.js & Express.js**: REST API design, Prisma ORM integration, JWT authentication, and Swagger documentation (used in TurfBook).\n` +
        `• **ASP.NET Core Web API**: Layered Architecture, Dependency Injection, and Entity Framework Core.\n` +
        `• **Python FastAPI**: Microservices for dynamic pricing, analytics, and diagnostics.`;
    }

    if (q.includes('skill') || q.includes('tech stack') || q.includes('technologies')) {
      return `Mangesh's technical skillset spans:\n\n` +
        `• **Frontend**: React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Three.js, Framer Motion\n` +
        `• **Backend**: Node.js, Express.js, ASP.NET Core Web API, Java Spring Boot, FastAPI\n` +
        `• **Databases**: PostgreSQL, Prisma ORM, SQL Server, MySQL, Entity Framework Core\n` +
        `• **Tools & DevOps**: Git, GitHub, Docker, AWS EC2, Postman, Vite, VS Code`;
    }

    // Experience / Internship queries
    if (q.includes('internship') || q.includes('experience') || q.includes('job') || q.includes('work experience')) {
      return `Mangesh has completed two practical internships:\n\n` +
        `1. **Software Developer Intern** at **Nexprism** (May 2026 – Oct 2026): Web application development, implementation tasks, and software maintenance.\n` +
        `2. **Web Developer Intern** at **Txon, Pune** (6 Months): Built responsive web pages with HTML, CSS, and JavaScript with focus on UX and testing.`;
    }

    // Education / Qualifications queries
    if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('c-dac') || q.includes('cgpa')) {
      return `Mangesh's academic background:\n\n` +
        `• **${education.degree}**: ${education.institution} (${education.graduation}, CGPA: ${education.cgpa})\n` +
        `• **${education.pgdac}**: ${education.cdacInstitution} (${education.cdacYear})`;
    }

    // Contact / Location queries
    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('hire') || q.includes('location')) {
      return `Mangesh is based in **${personalInfo.location}**. You can reach him via email at **${personalInfo.emails.primary}** or use the Contact Form on this site. GitHub: github.com/mangesh-lomte | LinkedIn: linkedin.com/in/mangesh-lomte.`;
    }

    // Who is Mangesh / Overview
    if (q.includes('who') || q.includes('mangesh') || q.includes('about') || q.includes('developer')) {
      return `${aiKnowledgeBase.about}`;
    }

    // Default polite fallback (Zero Hallucination Guarantee)
    return `I don't have explicit information about "${query}" in Mangesh's verified portfolio data. \n\nFeel free to ask about his **projects** (Smart Restaurant System, Road Safety Alert), **tech stack** (Java, React, ASP.NET Core, SQL), **education** (B.Tech IT, PG-DAC), or **internship experience**!`;
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg = {
      id: messages.length + 1,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate progressive response streaming delay
    setTimeout(() => {
      const responseText = generateAIResponse(query);
      const aiMsg = {
        id: messages.length + 2,
        sender: 'ai',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  const suggestedPrompts = [
    "What projects has Mangesh built?",
    "Tell me about the AI restaurant system",
    "Does he know Java?",
    "What backend tech does he use?",
    "What was his internship experience?"
  ];

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-[9999] font-sans">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative px-5 py-3.5 rounded-full bg-[#ff2a2a] text-white font-bold text-sm shadow-[0_10px_30px_rgba(255,42,42,0.5)] border border-red-400 flex items-center gap-3 transition-all group"
          aria-label="Ask Mangesh AI Assistant"
        >
          <span className="text-xl">🤖</span>
          <span className="hidden sm:inline font-black tracking-wide">Ask Mangesh AI</span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute -top-1 -right-1" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -top-1 -right-1" />
        </motion.button>
      </div>

      {/* Chat Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 sm:right-6 z-[99999] w-[calc(100vw-2rem)] sm:w-[420px] max-h-[580px] h-[80vh] bg-[#111111] border border-white/20 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col font-sans backdrop-blur-xl"
          >
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 bg-[#181818] border-b border-white/10 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#ff2a2a]/20 border border-[#ff2a2a]/40 flex items-center justify-center text-lg">
                  🤖
                </div>
                <div>
                  <h4 className="text-white font-black text-sm tracking-tight flex items-center gap-2">
                    Ask Mangesh AI
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      Verifiable Data
                    </span>
                  </h4>
                  <p className="text-white/50 text-[11px] font-medium">
                    Strictly trained on verified portfolio facts
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMessages([messages[0]])}
                  className="text-white/40 hover:text-white text-xs font-mono px-2 py-1 bg-white/5 rounded-md transition-colors"
                  title="Clear Chat History"
                >
                  Clear
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/40 hover:text-white text-sm font-bold w-7 h-7 rounded-full bg-white/5 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="p-4 overflow-y-auto space-y-4 flex-1 text-xs sm:text-sm leading-relaxed">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`p-3.5 rounded-2xl max-w-[88%] font-medium ${
                      msg.sender === 'user'
                        ? 'bg-[#ff2a2a] text-white rounded-br-none shadow-md'
                        : 'bg-white/10 text-white/90 border border-white/10 rounded-bl-none'
                    }`}
                  >
                    <div className="whitespace-pre-line leading-relaxed">
                      {msg.text.split('**').map((part, index) => 
                        index % 2 === 1 ? <strong key={index} className="text-white font-black">{part}</strong> : part
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-white/30 mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-white/40 bg-white/5 p-3 rounded-2xl w-fit border border-white/10">
                  <span className="text-xs font-mono font-bold">Mangesh AI thinking</span>
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts Carousel */}
            <div className="px-4 py-2 bg-[#141414] border-t border-white/5 flex gap-2 overflow-x-auto shrink-0 scrollbar-none">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSendMessage(prompt)}
                  className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#ff2a2a]/20 hover:border-red-400/40 border border-white/10 text-white/70 hover:text-white text-[11px] font-medium whitespace-nowrap transition-all shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-[#181818] border-t border-white/10 flex items-center gap-2 shrink-0"
            >
              {/* Optional Voice Input Button */}
              <button
                type="button"
                onClick={toggleVoiceInput}
                className={`p-2.5 rounded-full border transition-all ${
                  isListening
                    ? 'bg-red-600 border-red-400 text-white animate-pulse'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                }`}
                title={isListening ? "Listening... Click to stop" : "Use Voice Input (Microphone)"}
              >
                🎤
              </button>

              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={isListening ? "Listening to your voice..." : "Ask about Mangesh's skills, projects..."}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-white text-xs sm:text-sm placeholder-white/40 focus:outline-none focus:border-red-400 transition-colors font-medium"
              />

              <button
                type="submit"
                disabled={!inputValue.trim()}
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-white transition-all ${
                  inputValue.trim()
                    ? 'bg-[#ff2a2a] hover:bg-red-600 shadow-md'
                    : 'bg-white/10 text-white/30 cursor-not-allowed'
                }`}
              >
                ➔
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;

