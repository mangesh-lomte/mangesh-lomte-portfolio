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
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase">
            Education & Qualifications
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto">
            Academic background and professional qualifications.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: B.Tech */}
          <div 
            data-aos="fade-right" 
            data-aos-delay="100" 
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="bg-white/10 text-white text-xs font-mono font-bold tracking-widest uppercase py-1 px-3 rounded-full border border-white/15">
                  Graduation: {education.graduation}
                </span>
                <span className="text-white text-sm font-black bg-red-600/60 px-3 py-1 rounded-full border border-red-400/40 font-mono">
                  CGPA: {education.cgpa}
                </span>
              </div>
              <h3 className="text-white text-2xl font-black mb-2 tracking-tight">
                {education.degree}
              </h3>
              <p className="text-red-400 text-base font-bold tracking-wide mb-4">
                {education.institution}
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                Focus Areas: Software Development, Information Technology & Computing
              </span>
            </div>
          </div>

          {/* Card 2: PG-DAC */}
          <div 
            data-aos="fade-left" 
            data-aos-delay="200" 
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="bg-white/10 text-white text-xs font-mono font-bold tracking-widest uppercase py-1 px-3 rounded-full border border-white/15">
                  Post Graduate Diploma
                </span>
              </div>
              <h3 className="text-white text-2xl font-black mb-2 tracking-tight">
                {education.pgdac}
              </h3>
              <p className="text-red-400 text-base font-bold tracking-wide mb-4">
                Centre for Development of Advanced Computing (C-DAC)
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                Advanced Diploma in Advanced Computing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

