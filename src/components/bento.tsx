/** The two chevrons from the Channel Marker logo, used as a separator. */
export function Chevrons({ className = "h-5 w-5", color = "#6cc2e8" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 2 L20 11 L17 11 L12 5.5 L7 11 L4 11 Z" fill={color} />
      <path d="M12 10 L20 19 L17 19 L12 13.5 L7 19 L4 19 Z" fill={color} />
    </svg>
  );
}
