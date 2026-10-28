import { internshipsList } from '../data/portfolioData';

const InternshipCard = ({ intern, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-black/30 backdrop-blur-md border border-white/15 rounded-3xl p-7 md:p-8 hover:bg-black/45 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col justify-between h-full"
  >
    <div>
      <div className="flex justify-between items-start mb-5 flex-wrap gap-2">
        <span className="text-white/70 text-xs font-mono font-bold tracking-wider uppercase bg-black/40 px-3 py-1 rounded-full border border-white/10">
          {intern.duration}
        </span>
        <span className="bg-white/15 text-white text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-white/20">
          Internship
        </span>
      </div>

      <h3 className="text-white text-2xl font-black mb-1 tracking-tight">
        {intern.role}
      </h3>
      <p className="text-red-100 text-sm font-black tracking-wide mb-6 uppercase flex items-center gap-1.5">
        <span>🏢</span>
        <span>{intern.organization}</span>
      </p>

      {/* Responsibilities / Skills gained */}
      <div className="mb-6">
        <h4 className="text-white/70 text-xs font-bold uppercase tracking-wider mb-2.5">
          Key Responsibilities & Deliverables:
        </h4>
        <ul className="text-white/90 text-xs sm:text-sm font-medium space-y-1.5 pl-4 list-disc">
          {intern.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Technologies used */}
    <div className="pt-4 border-t border-white/15">
      <h4 className="text-white/70 text-xs font-bold uppercase tracking-wider mb-2.5">
        Technologies:
      </h4>
      <div className="flex flex-wrap gap-2">
        {intern.tech.map((t) => (
          <span 
            key={t}
            className="px-3 py-1 text-xs font-mono font-bold text-white bg-white/10 rounded-full border border-white/15 hover:bg-white/20 transition-all"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Internships = () => {
  return (
    <section id="experience" data-stars="off" className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-14 md:mb-16 text-center">
          <div className="inline-block border border-black/20 rounded-full px-5 py-1.5 text-xs md:text-sm text-black font-bold mb-4 shadow-sm bg-black/10 tracking-wide">
            Professional Experience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-3 tracking-tight uppercase">
            Work Experience
          </h2>
          <p className="text-red-100 text-sm md:text-base font-semibold max-w-lg mx-auto">
            Hands-on internships engineering responsive web pages, developing features, integrating APIs, and testing workflows.
          </p>
        </div>

        {/* Internship Cards Grid (2-column on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {internshipsList.map((intern, index) => (
            <div key={intern.role + intern.organization} className="w-full">
              <InternshipCard intern={intern} index={index} />
            </div>
          ))}
        </div>

      </div>

      {/* Decorative stars */}
      <div className="absolute bottom-10 left-10 text-black opacity-20 animate-pulse pointer-events-none">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Internships;
