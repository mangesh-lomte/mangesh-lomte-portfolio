import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aiKnowledgeBase, personalInfo, projects, internshipsList, education } from '../data/portfolioData';

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

    // Project queries
    if (q.includes('restaurant') || q.includes('qr') || q.includes('smart restaurant') || q.includes('flagship')) {
      const p = projects.find(item => item.id === 'smart-restaurant-management');
      return `**${p.title}** is Mangesh's flagship C-DAC project!\n\n` +
        `• **Architecture**: React Frontend ➔ ASP.NET Core REST API ➔ SQL Server, plus a Python FastAPI machine learning microservice.\n` +
        `• **Dashboards**: Features Customer (QR menu scanning & AI recommendations), Chef (kitchen order queue), and Admin (inventory & analytics) dashboards.\n` +
        `• **Auth & AI**: Uses JWT authentication, OTP sign-in, and pandas AI models for item recommendation and demand prediction.`;
    }

    if (q.includes('road safety') || q.includes('arduino') || q.includes('iot') || q.includes('safety system')) {
      return `Mangesh built the **Road Safety Alert System** (2024), an IoT project using Arduino Uno R3, C++, ultrasonic sensors, servo motor barriers, and LED indicators to automate pedestrian safety crossing alerts.`;
    }

    if (q.includes('project') || q.includes('build') || q.includes('work') || q.includes('portfolio')) {
      return `Mangesh has built two primary showcase projects:\n\n` +
        `1. **AI + QR Smart Restaurant Management System** (Full-Stack ASP.NET Core, React, SQL Server, Python FastAPI, JWT Auth, AI models)\n` +
        `2. **Road Safety Alert System** (IoT, C++, Arduino IDE, Servo Motors, Sensors)\n\n` +
        `Click any project card on the page to open a detailed case study and interactive architecture diagram!`;
    }

    // Technology / Skill queries
    if (q.includes('java') || q.includes('core java') || q.includes('oop')) {
      return `Yes! Mangesh has strong expertise in **Java**. His skill set includes Object-Oriented Programming (OOP), Collections Framework, Exception Handling, JDBC, and Multithreading fundamentals. Java is one of his core languages.`;
    }

    if (q.includes('react') || q.includes('frontend') || q.includes('tailwind') || q.includes('javascript')) {
      return `Mangesh specializes in **Frontend Development** with React 19, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS v4, Framer Motion, and REST API integration. He builds clean, responsive component architectures.`;
    }

    if (q.includes('backend') || q.includes('api') || q.includes('.net') || q.includes('asp.net') || q.includes('node') || q.includes('express') || q.includes('fastapi')) {
      return `Mangesh's **Backend & Microservice capabilities** include:\n\n` +
        `• **ASP.NET Core**: REST APIs, role-based access control, JWT tokens, OTP verification.\n` +
        `• **Node.js & Express.js**: REST API server design and JSON processing.\n` +
        `• **Python FastAPI**: Asynchronous machine learning microservices connecting pandas data processing to React frontends.`;
    }

    if (q.includes('database') || q.includes('sql') || q.includes('mysql') || q.includes('sql server')) {
      return `Mangesh is experienced with **SQL Server** and **MySQL**. He understands relational database design, schema normalization, complex SQL queries, joins, constraints, and entity modeling.`;
    }

    if (q.includes('skill') || q.includes('tech stack') || q.includes('technologies')) {
      return `Mangesh's technical skillset spans:\n\n` +
        `• **Languages**: Java, C++, Python, JavaScript\n` +
        `• **Frontend**: React 19, Tailwind CSS, Hooks, State Management, REST Integration\n` +
        `• **Backend**: ASP.NET Core REST API, Node.js, Express.js, JWT, FastAPI\n` +
        `• **Databases**: SQL Server, MySQL\n` +
        `• **CS Concepts**: OOP, DBMS, Data Structures & Algorithms, Software Architecture`;
    }

    // Experience / Internship queries
    if (q.includes('internship') || q.includes('experience') || q.includes('job') || q.includes('work experience')) {
      const intern = internshipsList[0];
      return `Mangesh completed a **${intern.role}** from **${intern.duration}**. Key focus areas included Full Stack Development, API Integration, Database Design, and applying software engineering best practices using Java, React, Node.js, and SQL.`;
    }

    // Education / Qualifications queries
    if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('c-dac') || q.includes('dac') || q.includes('gpa') || q.includes('cgpa')) {
      return `Mangesh's academic background:\n\n` +
        `• **${education.degree}**: ${education.institution} (Graduated ${education.graduation}, CGPA: ${education.cgpa})\n` +
        `• **${education.pgdac}**: Centre for Development of Advanced Computing (Post Graduate Diploma in Advanced Computing)`;
    }

    // Contact / Location queries
    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('hire') || q.includes('location') || q.includes('where')) {
      return `Mangesh is based in **${personalInfo.location}**. You can contact him directly using the Contact Form on this site, or connect with him via GitHub (github.com/mangesh-lomte) or LinkedIn (linkedin.com/in/mangesh-lomte).`;
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

