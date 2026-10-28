import { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/mangesh-hero.mp4';
import { heroContent, socialLinks } from '../data/portfolioData';

const Hero = ({ onOpenResume }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }

    const attemptUnmute = () => {
      const v = videoRef.current;
      if (v) {
        v.muted = false;
        v.volume = 1.0;
        const playPromise = v.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
            removeListeners();
          }).catch(() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().catch(() => {});
            }
          });
        }
      }
    };

    const events = ['pointerdown', 'click', 'touchstart', 'keydown'];
    const addListeners = () => {
      events.forEach((ev) => window.addEventListener(ev, attemptUnmute, { passive: true }));
    };
    const removeListeners = () => {
      events.forEach((ev) => window.removeEventListener(ev, attemptUnmute));
    };

    addListeners();

    return () => {
      removeListeners();
    };
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
            setIsPlaying(true);
          }
        });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="home" className="hero-section-container font-sans relative overflow-hidden bg-black">
      {/* Background Video Container */}
      <div className="hero-video-wrapper">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          autoPlay
          className="hero-video-elem"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Cinematic gradient overlay ensuring text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-[1] pointer-events-none" />
      </div>

      {/* Left Floating Social Bar for Large Screens */}
      <div className="hero-floating-socials flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference">
        <a 
          href={socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/70 hover:text-white transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
          aria-label="GitHub Profile"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/70 hover:text-white transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
          aria-label="LinkedIn Profile"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a 
          href={socialLinks.instagram} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/70 hover:text-[#ff2a2a] transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-[#ff2a2a] rounded-full p-1"
          aria-label="Instagram Profile"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
      </div>

      {/* Content Container */}
      <div className="hero-main-content">
        
        {/* Left Side: Name, Role, Introduction, and Functional CTA Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          
          {/* Mobile top bar with social icons and play reel button */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="hero-top-bar"
          >
            <div className="flex items-center gap-4">
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-colors" 
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-colors" 
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>

            {/* Mobile Play/Pause Reel Button */}
            <button 
              onClick={toggleVideo}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/20 text-white text-xs font-semibold backdrop-blur-md hover:bg-black/90 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={!isPlaying ? "Play Reel" : "Pause Reel"}
            >
              {!isPlaying ? (
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              ) : (
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
              )}
              <span className="text-[11px] uppercase tracking-wider">{!isPlaying ? "Play Reel" : "Pause"}</span>
            </button>
          </div>

          {/* Specialization Badge */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-semibold mb-3 tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse"></span>
            {heroContent.roleSubline}
          </div>

          {/* Main Heading: Name & Role */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-white text-3xl sm:text-4xl md:text-6xl font-black mb-2 sm:mb-3 tracking-tight leading-tight"
          >
            {heroContent.greeting} <span className="text-white">{heroContent.name}</span>, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-[#ff2a2a] to-white font-black drop-shadow-sm">
              {heroContent.titleHighlight}
            </span>
          </h1>

          {/* Concise Introduction focused on practical web applications */}
          <p 
            data-aos="fade-up"
            data-aos-delay="250"
            className="text-white/90 text-sm sm:text-base md:text-lg font-medium mb-6 sm:mb-8 max-w-xl drop-shadow-md leading-relaxed"
          >
            {heroContent.subtitle}
          </p>

          {/* Primary Action Buttons: View Projects, GitHub, Contact Me (+ Resume) */}
          <div 
            data-aos="fade-up"
            data-aos-delay="350"
            className="flex flex-row flex-wrap items-center gap-2.5 sm:gap-3.5 w-full"
          >
            {/* 1. View Projects Button */}
            <a 
              href={heroContent.ctaPrimary.href}
              className="px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base rounded-full bg-[#ff2a2a] text-white font-bold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,42,42,0.45)] focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black flex items-center gap-2"
            >
              <span>{heroContent.ctaPrimary.text}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            
            {/* 2. GitHub Button */}
            <a 
              href={heroContent.ctaGithub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base rounded-full bg-white/10 border border-white/25 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </a>

            {/* 3. Contact Me Button */}
            <a 
              href={heroContent.ctaSecondary.href}
              className="px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base rounded-full bg-black/60 border border-white/30 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black flex items-center gap-2"
            >
              <span>{heroContent.ctaSecondary.text}</span>
            </a>

            {/* 4. Official Resume Preview Button */}
            <button 
              onClick={onOpenResume}
              className="px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm md:text-base rounded-full bg-white/5 border border-white/20 text-white/90 font-semibold hover:bg-white/20 hover:text-white transition-all duration-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* Right Side: Play Video Button (Desktop only) */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="hero-desktop-play-btn flex-col items-center gap-2 md:gap-3 cursor-pointer group self-auto focus:outline-none"
          onClick={toggleVideo}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { toggleVideo(e); } }}
          aria-label={!isPlaying ? "Play Video Reel" : "Pause Video Reel"}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
            {!isPlaying ? (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-75 group-hover:opacity-100 transition-opacity">
            {!isPlaying ? "Play Reel" : "Pause"}
          </span>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hero-scroll-down absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Bottom Red Oval Wave with Subtle Fade Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-10 h-[50px] md:h-[75px] -mb-[1px]">
        <svg
          viewBox="0 0 1440 75"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="heroRedWaveFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff2a2a" stopOpacity="0" />
              <stop offset="30%" stopColor="#ff2a2a" stopOpacity="0.4" />
              <stop offset="65%" stopColor="#ff2a2a" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ff2a2a" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0,10 Q360,75 720,75 Q1080,75 1440,10 L1440,75 L0,75 Z"
            fill="url(#heroRedWaveFade)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
