const MouseIllustration = () => {
  return (
    <svg
      width="200"
      height="280"
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl"
    >
      {/* Mouse body - split into two colors */}
      <g filter="url(#shadow)">
        {/* Left side (light blue) */}
        <path
          d="M60 40 C60 20, 80 0, 100 0 L100 220 C100 220, 60 220, 60 190 Z"
          fill="#7BA8D1"
          stroke="#2C3E50"
          strokeWidth="3"
        />
        
        {/* Right side (gray) */}
        <path
          d="M100 0 C120 0, 140 20, 140 40 L140 190 C140 220, 100 220, 100 220 Z"
          fill="#B8C3CC"
          stroke="#2C3E50"
          strokeWidth="3"
        />
        
        {/* Bottom of mouse */}
        <ellipse
          cx="100"
          cy="220"
          rx="40"
          ry="20"
          fill="#E8EDF1"
          stroke="#2C3E50"
          strokeWidth="3"
        />
        
        {/* Scroll wheel */}
        <rect
          x="95"
          y="30"
          width="10"
          height="50"
          rx="5"
          fill="#2C3E50"
          stroke="#1a1d2e"
          strokeWidth="2"
        />
        
        {/* Scroll wheel groove */}
        <line
          x1="100"
          y1="35"
          x2="100"
          y2="75"
          stroke="#1a1d2e"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
      </g>
      
      {/* Shadow filter */}
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
          <feOffset dx="0" dy="4" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};

export default MouseIllustration;
