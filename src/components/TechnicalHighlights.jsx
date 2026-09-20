import { technicalHighlights } from '../data/portfolioData';

const TechnicalHighlights = () => {
  return (
    <section className="bg-[#0e0e0e] py-16 px-6 md:px-12 w-full border-t border-b border-white/10 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-12">
          <div className="inline-block border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-mono font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
            Practical Engineering Focus
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Key Capabilities & What I Have Built
          </h3>
          <p className="text-white/50 text-sm font-medium mt-1">
            Proven engineering experience across full-stack systems, security flows, database modeling, and AI integration.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalHighlights.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/40 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-4 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-base mb-2 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/60 text-xs leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-red-400 font-semibold">
                <span>Verified in Portfolio Projects</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalHighlights;
