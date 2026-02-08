import { useEffect, useState } from 'react';

export default function HeroLineSketchOverlay() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle glow filter */}
          <filter id="hero-line-glow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient definitions for lines */}
          <linearGradient id="teal-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.65 0.18 165)" stopOpacity="0.08" />
            <stop offset="50%" stopColor="oklch(0.65 0.18 165)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="oklch(0.65 0.18 165)" stopOpacity="0.06" />
          </linearGradient>

          <linearGradient id="sky-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.62 0.22 240)" stopOpacity="0.06" />
            <stop offset="50%" stopColor="oklch(0.62 0.22 240)" stopOpacity="0.10" />
            <stop offset="100%" stopColor="oklch(0.62 0.22 240)" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="coral-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.68 0.20 35)" stopOpacity="0.05" />
            <stop offset="50%" stopColor="oklch(0.68 0.20 35)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="oklch(0.68 0.20 35)" stopOpacity="0.04" />
          </linearGradient>

          <linearGradient id="white-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(1 0 0)" stopOpacity="0.05" />
            <stop offset="50%" stopColor="oklch(1 0 0)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="oklch(1 0 0)" stopOpacity="0.05" />
          </linearGradient>

          {/* Dark mode gradients */}
          <linearGradient id="teal-gradient-dark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.72 0.20 165)" stopOpacity="0.10" />
            <stop offset="50%" stopColor="oklch(0.72 0.20 165)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="oklch(0.72 0.20 165)" stopOpacity="0.08" />
          </linearGradient>

          <linearGradient id="sky-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.68 0.24 240)" stopOpacity="0.08" />
            <stop offset="50%" stopColor="oklch(0.68 0.24 240)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="oklch(0.68 0.24 240)" stopOpacity="0.06" />
          </linearGradient>

          <linearGradient id="coral-gradient-dark" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.72 0.22 35)" stopOpacity="0.06" />
            <stop offset="50%" stopColor="oklch(0.72 0.22 35)" stopOpacity="0.10" />
            <stop offset="100%" stopColor="oklch(0.72 0.22 35)" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Desktop: Full complexity topographic lines */}
        {!isMobile && (
          <g className="hero-line-drift" filter="url(#hero-line-glow)">
            {/* Mountain contour lines - top section */}
            <path
              d="M 0 200 Q 400 180 800 220 T 1600 200 L 1920 200"
              stroke="url(#teal-gradient)"
              strokeWidth="1.2"
              fill="none"
              className="hero-line-dash-1"
            />
            <path
              d="M 0 280 Q 450 260 900 300 T 1800 280 L 1920 280"
              stroke="url(#sky-gradient)"
              strokeWidth="1"
              fill="none"
              className="hero-line-dash-2"
            />
            <path
              d="M 0 360 Q 500 340 1000 380 T 2000 360"
              stroke="url(#teal-gradient)"
              strokeWidth="1.5"
              fill="none"
              className="hero-line-dash-3"
            />

            {/* Middle section - wavy trails */}
            <path
              d="M 0 480 Q 350 460 700 500 Q 1050 540 1400 500 Q 1650 480 1920 490"
              stroke="url(#coral-gradient)"
              strokeWidth="1"
              fill="none"
              className="hero-line-dash-1"
            />
            <path
              d="M 0 560 Q 400 540 800 580 Q 1200 620 1600 580 Q 1800 560 1920 570"
              stroke="url(#white-gradient)"
              strokeWidth="1.2"
              fill="none"
              className="hero-line-dash-2"
            />

            {/* Lower section - topographic style */}
            <path
              d="M 0 680 Q 480 660 960 700 T 1920 680"
              stroke="url(#sky-gradient)"
              strokeWidth="1"
              fill="none"
              className="hero-line-dash-3"
            />
            <path
              d="M 0 780 Q 520 760 1040 800 T 2080 780"
              stroke="url(#teal-gradient)"
              strokeWidth="1.3"
              fill="none"
              className="hero-line-dash-1"
            />
            <path
              d="M 0 880 Q 450 860 900 900 T 1800 880 L 1920 880"
              stroke="url(#coral-gradient)"
              strokeWidth="1"
              fill="none"
              className="hero-line-dash-2"
            />

            {/* Diagonal accent lines */}
            <path
              d="M 200 0 Q 300 400 400 800 Q 450 1000 500 1080"
              stroke="url(#white-gradient)"
              strokeWidth="1"
              fill="none"
              className="hero-line-dash-3"
            />
            <path
              d="M 1500 0 Q 1400 350 1300 700 Q 1250 900 1200 1080"
              stroke="url(#sky-gradient)"
              strokeWidth="1.2"
              fill="none"
              className="hero-line-dash-1"
            />
          </g>
        )}

        {/* Mobile: Reduced complexity (50% fewer lines) */}
        {isMobile && (
          <g className="hero-line-drift-mobile" filter="url(#hero-line-glow)">
            {/* Simplified mountain contours */}
            <path
              d="M 0 200 Q 400 180 800 220 T 1600 200 L 1920 200"
              stroke="url(#teal-gradient)"
              strokeWidth="1.2"
              fill="none"
              className="hero-line-dash-1"
            />
            <path
              d="M 0 360 Q 500 340 1000 380 T 2000 360"
              stroke="url(#sky-gradient)"
              strokeWidth="1.5"
              fill="none"
              className="hero-line-dash-2"
            />

            {/* Middle trail */}
            <path
              d="M 0 560 Q 400 540 800 580 Q 1200 620 1600 580 Q 1800 560 1920 570"
              stroke="url(#coral-gradient)"
              strokeWidth="1"
              fill="none"
              className="hero-line-dash-3"
            />

            {/* Lower contour */}
            <path
              d="M 0 780 Q 520 760 1040 800 T 2080 780"
              stroke="url(#teal-gradient)"
              strokeWidth="1.3"
              fill="none"
              className="hero-line-dash-1"
            />
          </g>
        )}

        {/* Premium travel path animation - desktop only */}
        {!isMobile && (
          <g filter="url(#hero-line-glow)">
            <path
              d="M 100 540 Q 300 520 500 540 Q 700 560 900 540 Q 1100 520 1300 540 Q 1500 560 1700 540 L 1820 540"
              stroke="url(#teal-gradient)"
              strokeWidth="1.5"
              fill="none"
              className="hero-travel-path"
              strokeDasharray="2000"
              strokeDashoffset="2000"
            />
          </g>
        )}
      </svg>
    </div>
  );
}
