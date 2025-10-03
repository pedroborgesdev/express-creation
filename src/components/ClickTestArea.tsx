import { useState, useEffect, useRef } from "react";

interface ClickTestAreaProps {
  cps: number;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const ClickTestArea = ({ cps }: ClickTestAreaProps) => {
  const [currentCPS, setCurrentCPS] = useState(0);
  const [clicks, setClicks] = useState<number[]>([]);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const intervalRef = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up old clicks every 100ms
    intervalRef.current = setInterval(() => {
      const now = Date.now();
      setClicks(prev => {
        const recent = prev.filter(time => now - time < 1000);
        setCurrentCPS(recent.length);
        return recent;
      });
    }, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setClicks(prev => [...prev, Date.now()]);

    // Create ripple effect at click position
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newRipple = {
        id: Date.now(),
        x,
        y,
      };

      setRipples(prev => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    }
  };

  return (
    <div className="relative mt-8">
      <div className="text-center mb-4">
        <p className="text-sm text-muted-foreground mb-2">Area to test auto-click</p>
      </div>
      
      <div
        ref={containerRef}
        onClick={handleClick}
        className="w-full h-40 bg-interactive hover:bg-interactive-hover border border-border rounded-lg transition-colors duration-200 relative overflow-hidden group cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-muted-foreground text-sm">Click here to test</span>
        </div>

        {/* Ripple effects */}
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="absolute rounded-full bg-primary pointer-events-none animate-ripple"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-4 right-4 flex items-baseline gap-2 pointer-events-none">
        <span className="text-sm text-muted-foreground">CPS Counter:</span>
        <span className="text-4xl font-bold text-primary animate-float">{currentCPS}</span>
      </div>
    </div>
  );
};

export default ClickTestArea;
