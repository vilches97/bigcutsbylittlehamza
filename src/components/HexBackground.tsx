const HexBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 hex-pattern opacity-40" />
      <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20" viewBox="0 0 800 400">
        {[
          { cx: 400, cy: 120, r: 60 },
          { cx: 330, cy: 160, r: 60 },
          { cx: 470, cy: 160, r: 60 },
          { cx: 295, cy: 220, r: 60 },
          { cx: 365, cy: 220, r: 60 },
          { cx: 435, cy: 220, r: 60 },
          { cx: 505, cy: 220, r: 60 },
          { cx: 330, cy: 280, r: 60 },
          { cx: 400, cy: 280, r: 60 },
          { cx: 470, cy: 280, r: 60 },
        ].map((hex, i) => (
          <polygon
            key={i}
            points={hexPoints(hex.cx, hex.cy, hex.r)}
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            style={{ animation: `hex-pulse ${2 + i * 0.3}s ease-in-out infinite` }}
          />
        ))}
      </svg>
    </div>
  );
};

function hexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
}

export default HexBackground;
