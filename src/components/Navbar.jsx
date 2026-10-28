import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to make navbar more solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-[#ff2a2a] py-4 shadow-xl'
          : isScrolled 
            ? 'bg-black/75 py-3.5 backdrop-blur-md border-b border-white/10 shadow-lg' 
            : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center">
          <a 
            href="#home" 
            className="text-white text-xl sm:text-2xl font-black tracking-tight whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-red-400 rounded px-1"
          >
            {personalInfo.brandName}<span className="text-[#ff2a2a]">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-5 lg:space-x-8">
          {navLinks.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-white/80 hover:text-white text-xs lg:text-sm font-semibold relative group transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-1.5 py-0.5"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
          >
            Resume
          </button>
          <a 
            href="#contact"
            className="px-5 py-2 rounded-full bg-[#ff2a2a] text-white text-xs font-bold hover:bg-red-600 shadow-[0_0_15px_rgba(255,42,42,0.4)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white p-2 rounded-lg"
            aria-label={isOpen ? "Close Menu" : "Open Navigation Menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-5 opacity-100 bg-[#ff2a2a] shadow-2xl border-t border-white/20' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-3">
          {navLinks.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-black font-bold text-base border-b border-white/20 pb-2 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2.5">
             <button
               onClick={() => { setIsOpen(false); onOpenResume(); }}
               className="px-6 py-2.5 rounded-full bg-white/20 border border-white/30 text-white font-bold hover:bg-white hover:text-black transition-colors w-full text-center text-sm"
             >
               View Resume
             </button>
             <a 
               href="#contact"
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-2.5 rounded-full bg-black text-white font-bold hover:bg-white hover:text-black transition-colors w-full text-center text-sm shadow-lg"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
