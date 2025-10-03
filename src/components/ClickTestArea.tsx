import { useState, useEffect, useRef } from "react";

interface ClickTestAreaProps {
  cps: number;
}

const ClickTestArea = ({ cps }: ClickTestAreaProps) => {
  const [currentCPS, setCurrentCPS] = useState(0);
  const [clicks, setClicks] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout>();

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

  const handleClick = () => {
    setClicks(prev => [...prev, Date.now()]);
  };

  return (
    <div className="relative mt-8">
      <div className="text-center mb-4">
        <p className="text-sm text-muted-foreground mb-2">Area to test auto-click</p>
      </div>
      
      <button
        onClick={handleClick}
        className="w-full h-40 bg-interactive hover:bg-interactive-hover border border-border rounded-lg transition-all duration-200 active:scale-95 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="text-muted-foreground text-sm">Click here to test</span>
      </button>

      <div className="absolute bottom-4 right-4 flex items-baseline gap-2">
        <span className="text-sm text-muted-foreground">CPS Counter:</span>
        <span className="text-4xl font-bold text-primary">{currentCPS}</span>
      </div>
    </div>
  );
};

export default ClickTestArea;
