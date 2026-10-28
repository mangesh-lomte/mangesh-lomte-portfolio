import stackImage from '../assets/about/mangesh-avatar.png';
import { aboutContent } from '../data/portfolioData';

const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 128 128">
      <g stroke="#00d8ff" strokeWidth="4.5" fill="none" transform="translate(10, 10)">
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(30 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(90 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(150 54 54)" />
        <circle cx="54" cy="54" r="7" fill="#00d8ff" />
      </g>
    </svg>
    <span className="text-[11px] font-black text-black/90 uppercase tracking-wider">React</span>
  </div>
);

const TypeScriptIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16 rounded-xl" viewBox="0 0 128 128">
      <rect width="128" height="128" rx="20" fill="#3178C6" />
      <path fill="#ffffff" d="M68.5 73.5c1.6 4.3 4.2 7.6 7.8 9.9 3.6 2.3 8 3.5 13.2 3.5 4.3 0 7.8-.8 10.5-2.4 2.7-1.6 4-3.8 4-6.6 0-2.3-1.1-4.2-3.3-5.7-2.2-1.5-5.9-2.8-11.1-3.9l-8.5-1.9c-7.2-1.6-12.6-4.2-16.2-7.8-3.6-3.6-5.4-8.4-5.4-14.4 0-6.8 2.5-12.2 7.5-16.2 5-4 11.9-6 20.7-6 7.4 0 13.7 1.6 18.9 4.8 5.2 3.2 8.6 7.9 10.2 14.1l-14.7 4.2c-1-3.2-2.7-5.6-5.1-7.2-2.4-1.6-5.5-2.4-9.3-2.4-3.8 0-6.8.8-9 2.4-2.2 1.6-3.3 3.6-3.3 6 0 2 1 3.6 3 4.8 2 1.2 5.5 2.3 10.5 3.5l8.5 1.9c7.6 1.7 13.2 4.4 16.8 8.1 3.6 3.7 5.4 8.6 5.4 14.7 0 7.3-2.6 13.1-7.8 17.4-5.2 4.3-12.5 6.4-21.9 6.4-9.1 0-16.7-2-22.8-6-6.1-4-9.9-9.8-11.4-17.4l14.9-3.4zM47.8 38v62.4H31.5V38H11V25h57.3v13H47.8z" />
    </svg>
    <span className="text-[11px] font-black text-black/90 uppercase tracking-wider">TypeScript</span>
  </div>
);

const NodeIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 128 128">
      <path fill="#222222" d="M64 10l50 28.8v57.6L64 125.2 14 96.4V38.8L64 10zm0 10.4L23 43.8v48.4L64 114.6l41-22.4V43.8L64 20.4z" />
    </svg>
    <span className="text-[11px] font-black text-black/90 uppercase tracking-wider">Node.js</span>
  </div>
);

const PostgresIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="56" fill="#336791" />
      <path fill="#ffffff" d="M63.6 28c-18.6 0-31.5 12.2-31.5 29.8 0 14.9 9.2 25.8 22.6 28.8v12.5c0 3.4 2.7 6.1 6.1 6.1h5.4c3.4 0 6.1-2.7 6.1-6.1V86.6c13.4-3 22.6-13.9 22.6-28.8 0-17.6-12.9-29.8-31.3-29.8zm-9 41.6c-5.6-1.2-9.5-6.1-9.5-11.9 0-6.8 5.5-12.3 12.3-12.3s12.3 5.5 12.3 12.3c0 5.7-3.9 10.7-9.5 11.9l-5.6-1.6v1.6z" />
    </svg>
    <span className="text-[11px] font-black text-black/90 uppercase tracking-wider">PostgreSQL</span>
  </div>
);

const About = () => {
  return (
    <>
      <section id="about" data-stars="off" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start">

          {/* Left Side: ID Badge */}
          <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-8 md:mt-0">
            <div data-aos="drop-bounce" className="relative flex justify-center w-full">
              {/* Lanyard string */}
              <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
              {/* Lanyard clip */}
              <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

              {/* Badge Card */}
              <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Cutout Hole */}
                <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                  <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
                </div>
                {/* Image Container */}
                <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                  <img
                    src={stackImage}
                    alt="Mangesh Lomte — Software Developer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Info Content */}
          <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-4 md:mt-0 relative z-20">
            <div className="inline-block px-3.5 py-1 rounded-full bg-black/15 text-black font-mono font-bold text-xs uppercase tracking-widest mb-3">
              Developer Profile
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
              {aboutContent.heading}
            </h2>
            <p
              className="text-base md:text-lg font-bold mb-8 leading-relaxed max-w-3xl text-red-50"
              dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
            />

            {/* Core Tech Stack Icons Row */}
            <div className="pt-4 border-t border-black/15">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/70 block mb-4">
                Primary Core Stack
              </span>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-lg">
                  <ReactIcon />
                </div>
                <div data-aos="zoom-in" data-aos-delay="400" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-lg">
                  <TypeScriptIcon />
                </div>
                <div data-aos="zoom-in" data-aos-delay="500" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-lg">
                  <NodeIcon />
                </div>
                <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-lg">
                  <PostgresIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative stars */}
        <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse pointer-events-none">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
        </div>
        <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}>
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
        </div>
      </section>

      {/* Red Wavy Divider extending downward */}
      <div data-stars="off" className="w-full h-[60px] md:h-[80px] overflow-hidden -mt-1 relative z-20 bg-transparent">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full fill-[#ff2a2a] transform scale-y-[-1]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </>
  );
};

export default About;
