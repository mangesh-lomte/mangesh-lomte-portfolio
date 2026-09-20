import { technicalSkills } from '../data/portfolioData';
import ParallaxStars from './ParallaxStars';

const SkillCard = ({ category, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500 flex flex-col justify-between"
  >
    <div>
      <h3 className="text-white text-lg font-black tracking-tight mb-4 pb-2 border-b border-white/10 uppercase flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#ff2a2a]" />
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.concepts.map((concept) => (
          <span 
            key={concept}
            className="px-3 py-1.5 text-xs font-medium text-white/80 bg-white/5 rounded-lg border border-white/10 hover:bg-[#ff2a2a]/20 hover:border-red-400/40 hover:text-white transition-all duration-300 cursor-default"
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
      {/* Background visual elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Engineering Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Technical Skillset
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Core technologies, frameworks, architecture concepts, and development tools I work with daily.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;

