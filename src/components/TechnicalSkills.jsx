import { technicalSkills } from '../data/portfolioData';
import ParallaxStars from './ParallaxStars';

const SkillCard = ({ category, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-[#121212]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-7 hover:border-red-500/40 hover:shadow-[0_15px_40px_rgba(255,42,42,0.12)] transition-all duration-300 flex flex-col justify-between group"
  >
    <div>
      {/* Category Header */}
      <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="text-xl" role="img" aria-label={category.title}>
            {category.icon || "⚙️"}
          </span>
          <h3 className="text-white text-base md:text-lg font-black tracking-tight uppercase group-hover:text-red-400 transition-colors">
            {category.title}
          </h3>
        </div>
        <span className="text-[11px] font-mono text-white/40 uppercase font-semibold">
          0{index + 1}
        </span>
      </div>

      {/* Description */}
      {category.description && (
        <p className="text-white/60 text-xs font-medium mb-4 leading-relaxed">
          {category.description}
        </p>
      )}

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {category.concepts.map((concept) => (
          <span 
            key={concept}
            className="px-3 py-1.5 text-xs font-medium text-white/85 bg-white/5 rounded-lg border border-white/10 hover:bg-[#ff2a2a]/20 hover:border-red-400/50 hover:text-white transition-all duration-200 cursor-default"
          >
            {concept}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const TechnicalSkills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <ParallaxStars speed={0.7} density="medium" />
      
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-14 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs md:text-sm text-white/70 font-bold mb-4 shadow-sm bg-white/5 backdrop-blur-sm tracking-wide">
            Verified Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Technical Skillset
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Core technologies, backend frameworks, relational databases, and tooling verified through implemented projects and production workflows.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
