import { useEffect, useRef, useState } from 'react';

interface UseParallaxOptions {
  speed?: number;
  disabled?: boolean;
  maxTranslation?: number;
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.5, disabled = false, maxTranslation = 25 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (disabled) return;

    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Reset any transform
      element.style.transform = '';
      return;
    }

    // Check for low-performance devices
    const isLowPerformance = 
      ('connection' in navigator && (navigator as any).connection?.saveData) ||
      ('deviceMemory' in navigator && (navigator as any).deviceMemory < 4) ||
      ('hardwareConcurrency' in navigator && navigator.hardwareConcurrency < 4);

    if (isLowPerformance) {
      element.style.transform = '';
      return;
    }

    // Adjust intensity for mobile
    const isMobile = window.innerWidth < 768;
    const intensityMultiplier = isMobile ? 0.4 : 1.0;
    const effectiveSpeed = speed * intensityMultiplier;
    const effectiveMaxTranslation = maxTranslation * intensityMultiplier;

    // Use IntersectionObserver to gate updates
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        rootMargin: '100px 0px',
        threshold: 0,
      }
    );

    observer.observe(element);

    let ticking = false;

    const handleScroll = () => {
      if (!isInView || ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        if (element && isInView) {
          const rect = element.getBoundingClientRect();
          const scrolled = window.pageYOffset;
          const elementTop = rect.top + scrolled;
          
          // Calculate offset with linear easing
          let offset = (scrolled - elementTop) * effectiveSpeed;
          
          // Clamp translation to max magnitude
          offset = Math.max(-effectiveMaxTranslation, Math.min(effectiveMaxTranslation, offset));
          
          // Apply GPU-accelerated transform only
          element.style.transform = `translateY(${offset}px)`;
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      // Reset transform on cleanup
      if (element) {
        element.style.transform = '';
      }
    };
  }, [speed, disabled, maxTranslation, isInView]);

  return ref;
}
