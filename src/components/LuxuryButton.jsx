export default function LuxuryButton({ children, variant = 'gold', href = '#', full = false }) {
  return (
    <a className={`lux-btn ${variant} ${full ? 'full' : ''}`.trim()} href={href}>
      {children}
    </a>
  );
}
