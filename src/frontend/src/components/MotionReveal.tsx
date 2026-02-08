import { ReactNode } from 'react';
import { useIntersectionReveal } from '@/hooks/useIntersectionReveal';

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function MotionReveal({ children, className = '', delay = 0 }: MotionRevealProps) {
  const { ref, isVisible } = useIntersectionReveal({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
