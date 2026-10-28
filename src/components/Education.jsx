import { education } from '../data/portfolioData';
import ParallaxStars from './ParallaxStars';

const Education = () => {
  return (
    <section id="education" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <ParallaxStars speed={0.7} density="medium" />

      {/* Torn paper divider at top matching Internships red section */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-14 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs md:text-sm text-white/70 font-bold mb-4 shadow-sm bg-white/5 backdrop-blur-sm tracking-wide">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 tracking-tight uppercase">
            Education & Qualifications
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-lg mx-auto">
            Formal technical education, foundational computer science degree, and post-graduate engineering credentials.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Card 1: B.Tech in IT */}
          <div 
            data-aos="fade-right" 
            data-aos-delay="100" 
            className="bg-[#121212]/80 backdrop-blur-md border border-white/10 rounded-3xl p-7 md:p-8 hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                <span className="bg-white/10 text-white text-xs font-mono font-bold tracking-wider uppercase py-1 px-3 rounded-full border border-white/15">
                  Duration: {education.graduation}
                </span>
                <span className="text-white text-xs sm:text-sm font-black bg-red-600/70 px-3 py-1 rounded-full border border-red-400/40 font-mono shadow-sm">
                  CGPA: {education.cgpa}
                </span>
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-black mb-2 tracking-tight">
                {education.degree}
              </h3>
              <p className="text-red-400 text-sm sm:text-base font-bold tracking-wide mb-4">
                {education.institution}
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="text-white/60 text-xs font-semibold uppercase tracking-wider block">
                Focus Areas: Full-Stack Web Development, Data Structures, Database Management & Computing
              </span>
            </div>
          </div>

          {/* Card 2: PG-DAC C-DAC */}
          <div 
            data-aos="fade-left" 
            data-aos-delay="200" 
            className="bg-[#121212]/80 backdrop-blur-md border border-white/10 rounded-3xl p-7 md:p-8 hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                <span className="bg-white/10 text-white text-xs font-mono font-bold tracking-wider uppercase py-1 px-3 rounded-full border border-white/15">
                  Credential: {education.cdacYear}
                </span>
                <span className="text-red-300 text-xs font-mono font-bold bg-red-950/40 px-3 py-1 rounded-full border border-red-500/30">
                  Advanced Diploma
                </span>
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-black mb-2 tracking-tight">
                {education.pgdac}
              </h3>
              <p className="text-red-400 text-sm sm:text-base font-bold tracking-wide mb-4">
                {education.cdacInstitution}
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="text-white/60 text-xs font-semibold uppercase tracking-wider block">
                Specialized Training: Advanced Full-Stack Software Engineering, Microservices Architecture & Cloud Deployment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
