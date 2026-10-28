import { projects, socialLinks } from '../data/portfolioData';
import ParallaxStars from './ParallaxStars';

const GitHubIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ProjectCard = ({ project, aosDelay, onOpenCaseStudy }) => {
  const hasLiveDemo = Boolean(project.links?.demo);

  return (
    <article 
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`group relative rounded-3xl p-[1px] transition-all duration-500 ${
        project.isFlagship
          ? 'bg-gradient-to-b from-red-500/40 via-white/10 to-red-500/20 hover:from-red-500 hover:via-red-400/40 hover:to-red-500/50 shadow-[0_10px_40px_rgba(255,42,42,0.12)]'
          : 'bg-white/10 hover:bg-white/20'
      }`}
    >
      <div className="rounded-3xl bg-[#0f0f0f]/95 p-6 sm:p-8 md:p-10 backdrop-blur-xl h-full flex flex-col justify-between transition-all duration-300">
        
        {/* Top Header: Badge, Number, Category */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3.5 py-1 rounded-full border border-red-500/20">
                {project.badge}
              </span>
              <span className="text-xs font-mono font-semibold text-white/50 tracking-wide uppercase">
                {project.category}
              </span>
            </div>

            <span className="text-4xl sm:text-5xl font-black text-white/15 font-mono tracking-tighter">
              {project.number}
            </span>
          </div>

          {/* Project Screenshot / Visual Preview */}
          <div className="relative mb-8 rounded-2xl overflow-hidden border border-white/10 bg-[#161616] group-hover:border-red-500/40 transition-colors duration-500">
            {/* Browser chrome header bar */}
            <div className="h-8 bg-[#1f1f1f] px-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
              </div>
              <div className="text-[11px] font-mono text-white/40 truncate max-w-[240px] px-2 py-0.5 rounded bg-black/40">
                {hasLiveDemo ? project.links.demo.replace('https://', '') : 'internal://architecture-blueprint'}
              </div>
              <div className="w-8"></div>
            </div>

            {/* Preview Image or Technical Fallback Graphic */}
            <div className="aspect-[16/9] w-full overflow-hidden relative bg-black/50">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.imageAlt || `${project.title} Preview Screenshot`}
                  className="w-full h-full object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="eager"
                  onError={(e) => {
                    // Graceful fallback if image fails to load
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.classList.remove('hidden');
                    }
                  }}
                />
              ) : null}

              {/* Graceful Fallback Container (used when no image or image fails) */}
              <div className={`${project.image ? 'hidden' : 'flex'} w-full h-full flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#0f0f0f]`}>
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-2xl text-red-400 mb-4 shadow-[0_0_20px_rgba(255,42,42,0.2)]">
                  🏛️
                </div>
                <h4 className="text-white text-base md:text-lg font-black tracking-tight mb-2">
                  Multi-Tier System Architecture & Microservices
                </h4>
                <p className="text-white/50 text-xs md:text-sm max-w-md font-medium leading-relaxed">
                  Layered ASP.NET Core REST API, SQL Server Entity Framework models, and independent Java Spring Boot SMTP microservice.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-red-300">
                    C-DAC Capstone
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">
                    Dockerized Containers
                  </span>
                </div>
              </div>

              {/* Subtle hover overlay prompt */}
              <div 
                onClick={() => onOpenCaseStudy(project)}
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer backdrop-blur-[2px]"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') onOpenCaseStudy(project); }}
                aria-label={`Open ${project.title} Case Study`}
              >
                <span className="px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  View Full Case Study
                  <ExternalLinkIcon />
                </span>
              </div>
            </div>
          </div>

          {/* Project Title & Subtitle */}
          <div className="mb-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight group-hover:text-red-400 transition-colors">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-xs sm:text-sm font-mono font-semibold text-red-300/90 mt-1">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Project Description */}
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Key Implemented Features Bullets */}
          {project.keyFeatures && (
            <div className="mb-6 space-y-2 border-l-2 border-red-500/40 pl-4 py-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/40 font-bold block mb-1">
                Key Technical Highlights
              </span>
              {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-white/70 font-medium">
                  <span className="text-red-400 font-bold leading-none mt-0.5">▸</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techTags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-xs font-medium text-white/80 bg-white/5 rounded-lg border border-white/10 hover:bg-[#ff2a2a]/20 hover:border-red-500/40 hover:text-white transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: Live Demo, GitHub Repository, Case Study */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
          
          {/* 1. Live Demo Button */}
          {hasLiveDemo ? (
            <a 
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-xs sm:text-sm font-bold hover:bg-red-600 hover:shadow-[0_0_25px_rgba(255,42,42,0.45)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span>Live Demo</span>
              <ExternalLinkIcon />
            </a>
          ) : (
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/15 text-white/60 text-xs sm:text-sm font-semibold hover:bg-white/10 hover:text-white transition-all cursor-pointer"
              title="Live deployment is configured for internal testing. Click to view architecture."
            >
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              <span>Architecture Case Study</span>
            </button>
          )}

          {/* 2. GitHub Repository Button */}
          {project.links.github ? (
            <a 
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-bold hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              <GitHubIcon />
              <span>GitHub Repository</span>
            </a>
          ) : null}

          {/* 3. Deep Dive Case Study Button */}
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-transparent hover:bg-white/5 text-white/70 hover:text-white text-xs sm:text-sm font-semibold transition-all ml-auto focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <span>Deep Dive</span>
            <span className="text-red-400">→</span>
          </button>
        </div>

      </div>
    </article>
  );
};

const Projects = ({ onSelectProject }) => {
  return (
    <section 
      id="projects" 
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <ParallaxStars speed={0.7} density="medium" />

      {/* Background glow accent */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs md:text-sm text-white/70 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm tracking-wide">
            Featured Engineering Projects
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-5 tracking-tight uppercase">
            Built for Real-World <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-[#ff2a2a] to-white">
              Scale & Experience
            </span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            Full-stack web applications featuring production live deployments, verified GitHub repositories, database-level concurrency control, and zero-latency user experiences.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-10 md:gap-14">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              aosDelay={String((index + 1) * 120)}
              onOpenCaseStudy={onSelectProject}
            />
          ))}
        </div>

        {/* All Repositories Link */}
        {socialLinks.github ? (
          <div data-aos="fade-up" data-aos-delay="400" className="mt-16 sm:mt-20 flex justify-center">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-bold text-sm sm:text-base hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white group"
            >
              <GitHubIcon />
              <span>Explore All Repositories on GitHub</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        ) : null}

      </div>
    </section>
  );
};

export default Projects;
