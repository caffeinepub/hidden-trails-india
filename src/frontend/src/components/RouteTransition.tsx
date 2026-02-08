import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from '@tanstack/react-router';

interface RouteTransitionProps {
  children: ReactNode;
}

export default function RouteTransition({ children }: RouteTransitionProps) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsTransitioning(true);
    const handleEnd = () => {
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    };

    // Listen to router navigation events
    const unsubscribe = router.subscribe('onBeforeLoad', handleStart);
    const unsubscribe2 = router.subscribe('onLoad', handleEnd);

    return () => {
      unsubscribe();
      unsubscribe2();
    };
  }, [router]);

  return (
    <div
      className={`transition-opacity duration-300 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {children}
    </div>
  );
}
