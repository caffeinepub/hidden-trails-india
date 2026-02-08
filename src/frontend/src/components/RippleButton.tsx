import { MouseEvent, useState, ComponentPropsWithoutRef } from 'react';
import { Button } from '@/components/ui/button';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

type RippleButtonProps = ComponentPropsWithoutRef<typeof Button>;

export default function RippleButton({ children, onClick, className, ...props }: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple: Ripple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    // Call original onClick
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={`relative overflow-hidden ${className || ''}`}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 10,
            height: 10,
          }}
        />
      ))}
    </Button>
  );
}
