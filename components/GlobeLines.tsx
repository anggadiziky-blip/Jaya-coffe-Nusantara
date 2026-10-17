// Restrained linework inspired by the globe curves of the emblem (brief: graphic motifs).
export function GlobeLines({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" fill="none" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
        <circle cx="300" cy="300" r="290" />
        <ellipse cx="300" cy="300" rx="200" ry="290" />
        <ellipse cx="300" cy="300" rx="100" ry="290" />
        <line x1="300" y1="10" x2="300" y2="590" />
        <path d="M30 190 Q300 230 570 190" />
        <path d="M10 300 H590" />
        <path d="M30 410 Q300 370 570 410" />
      </g>
    </svg>
  );
}
