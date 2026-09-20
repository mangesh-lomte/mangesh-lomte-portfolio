import { useMemo } from 'react';

const generateBoxShadows = (count) => {
  let shadows = '';

  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);

    shadows += `${i === 0 ? '' : ', '}${x}px ${y}px #FFFFFF`;
  }

  return shadows;
};

export function ParallaxStars({
  speed = 1,
  density = 'medium',
  className = '',
}) {
  const countMultiplier = useMemo(() => {
    if (density === 'high') return 1.5;
    if (density === 'low') return 0.5;
    return 1;
  }, [density]);

  const shadowsSmall = useMemo(
    () => generateBoxShadows(Math.floor(700 * countMultiplier)),
    [countMultiplier]
  );

  const shadowsMedium = useMemo(
    () => generateBoxShadows(Math.floor(200 * countMultiplier)),
    [countMultiplier]
  );

  const shadowsBig = useMemo(
    () => generateBoxShadows(Math.floor(100 * countMultiplier)),
    [countMultiplier]
  );

  // Compute duration dynamically based on speed prop
  const durationSmall = 35 / speed;
  const durationMedium = 55 / speed;
  const durationLarge = 80 / speed;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 bg-transparent ${className}`}
      aria-hidden="true"
    >
      {/* SMALL STARS */}
      <div
        className="absolute left-0 top-0 w-[1px] h-[1px] bg-transparent"
        style={{
          boxShadow: shadowsSmall,
          animation: `animStar ${durationSmall}s linear infinite`,
          willChange: 'transform',
          pointerEvents: 'none',
          zIndex: 0
        }}
      >
        <div
          className="absolute top-[2000px] left-0 w-[1px] h-[1px] bg-transparent"
          style={{
            boxShadow: shadowsSmall,
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* MEDIUM STARS */}
      <div
        className="absolute left-0 top-0 w-[2px] h-[2px] bg-transparent"
        style={{
          boxShadow: shadowsMedium,
          animation: `animStar ${durationMedium}s linear infinite`,
          willChange: 'transform',
          pointerEvents: 'none',
          zIndex: 0
        }}
      >
        <div
          className="absolute top-[2000px] left-0 w-[2px] h-[2px] bg-transparent"
          style={{
            boxShadow: shadowsMedium,
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* LARGE STARS */}
      <div
        className="absolute left-0 top-0 w-[3px] h-[3px] bg-transparent"
        style={{
          boxShadow: shadowsBig,
          animation: `animStar ${durationLarge}s linear infinite`,
          willChange: 'transform',
          pointerEvents: 'none',
          zIndex: 0
        }}
      >
        <div
          className="absolute top-[2000px] left-0 w-[3px] h-[3px] bg-transparent"
          style={{
            boxShadow: shadowsBig,
            pointerEvents: 'none'
          }}
        />
      </div>
    </div>
  );
}

export default ParallaxStars;
