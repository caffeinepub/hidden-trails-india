import { useEffect, useRef, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ChevronDown, Play } from 'lucide-react';
import RippleButton from './RippleButton';
import { Button } from '@/components/ui/button';
import { useParallax } from '@/hooks/useParallax';
import HeroLineSketchOverlay from './HeroLineSketchOverlay';

export default function CinematicHero() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoState, setVideoState] = useState<'loading' | 'ready' | 'error' | 'autoplay-blocked'>('loading');
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  
  // Apply parallax only to background layers
  const backgroundParallaxRef = useParallax({ speed: 0.3, maxTranslation: 25 });
  const glowParallaxRef = useParallax({ speed: 0.2, maxTranslation: 15 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setVideoState('ready');
      // Smooth crossfade after a brief delay
      setTimeout(() => {
        setIsVideoVisible(true);
      }, 100);
    };

    const handleError = () => {
      setVideoState('error');
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Attempt autoplay
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        setVideoState('autoplay-blocked');
      });
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setVideoState('ready');
        setIsVideoVisible(true);
      }).catch(() => {
        setVideoState('error');
      });
    }
  };

  const handleScrollToNext = () => {
    const nextSection = document.getElementById('featured-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video Layer with Parallax */}
      <div ref={backgroundParallaxRef} className="absolute inset-0 hero-parallax-layer">
        {/* Intentional fallback gradient - always visible until video crossfades in */}
        <div className="absolute inset-0 hero-fallback-gradient" />
        
        {/* Video with crossfade */}
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            isVideoVisible ? 'opacity-100' : 'opacity-0'
          }`}
          loop
          muted
          playsInline
        >
          <source src="/assets/hero/hero-cinematic-loop.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vignette - no parallax */}
        <div className="absolute inset-0 hero-vignette" />
        
        {/* Gradient glow with subtle drift and parallax */}
        <div 
          ref={glowParallaxRef}
          className="absolute inset-0 hero-gradient-glow hero-parallax-layer motion-reduce:animate-none"
        />
        
        {/* Film grain texture - no parallax */}
        <div 
          className="absolute inset-0 hero-grain opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"
          style={{ backgroundImage: 'url(/assets/generated/grain-overlay.dim_1024x1024.png)' }}
        />
        
        {/* Light leak accent (top right) - no parallax */}
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 hero-light-leak motion-reduce:opacity-0" />
      </div>

      {/* Animated Line Sketch Overlay - positioned between atmosphere and glass */}
      <HeroLineSketchOverlay />

      {/* Glassmorphism Overlay - no parallax */}
      <div className="absolute inset-0 glass-strong">
        <div className="absolute inset-0 gradient-animated bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
      </div>

      {/* Content - no parallax */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="max-w-5xl space-y-8">
          {/* Headline */}
          <h1 className="font-display text-6xl md:text-8xl font-black tracking-tighter text-foreground drop-shadow-2xl">
            ESCAPE THE
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              ORDINARY
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-3xl font-medium text-foreground/90 drop-shadow-lg max-w-3xl mx-auto">
            Discover Hidden India Beyond the Crowds
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <RippleButton
              size="lg"
              className="btn-glow text-lg px-8 py-6 h-auto"
              onClick={() => navigate({ to: '/destinations' })}
            >
              Explore Hidden Trails
            </RippleButton>
            
            <RippleButton
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto border-2 bg-background/20 backdrop-blur-sm hover:bg-background/40"
              onClick={() => navigate({ to: '/budget' })}
            >
              Plan My Budget Trip
            </RippleButton>
          </div>

          {/* Autoplay blocked affordance */}
          {videoState === 'autoplay-blocked' && (
            <div className="pt-6">
              <Button
                onClick={handleManualPlay}
                variant="ghost"
                size="sm"
                className="gap-2 text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Start background video"
              >
                <Play className="h-4 w-4" />
                <span className="text-sm">Start cinematic experience</span>
              </Button>
            </div>
          )}
        </div>

        {/* Scroll Indicator - Absolutely positioned at bottom */}
        <button
          onClick={handleScrollToNext}
          className="absolute left-1/2 -translate-x-1/2 cursor-pointer group"
          style={{ bottom: '40px' }}
          aria-label="Scroll to next section"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium text-foreground drop-shadow-lg group-hover:text-primary transition-colors">
              Scroll to explore
            </span>
            <ChevronDown className="h-8 w-8 text-primary drop-shadow-lg hero-arrow-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
