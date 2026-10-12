export default function WaterBottle({ percentage }) {
  const clamped = Math.max(0, Math.min(100, percentage));
  const fillHeight = (clamped / 100) * 190;
  const fillY = 216 - fillHeight;

  return (
    <div className="bottle-wrap">
      <svg viewBox="0 0 120 220" className="bottle-svg" role="img" aria-label={`Water level at ${Math.round(clamped)} percent`}>
        <defs>
          <clipPath id="bottleClip">
            <path d="M45 8 H75 V28 C75 32 80 34 84 40 C90 48 96 58 96 72 V196 C96 208 88 216 76 216 H44 C32 216 24 208 24 196 V72 C24 58 30 48 36 40 C40 34 45 32 45 28 Z" />
          </clipPath>
        </defs>

        <path
          d="M45 8 H75 V28 C75 32 80 34 84 40 C90 48 96 58 96 72 V196 C96 208 88 216 76 216 H44 C32 216 24 208 24 196 V72 C24 58 30 48 36 40 C40 34 45 32 45 28 Z"
          className="bottle-outline"
        />

        <g clipPath="url(#bottleClip)">
          <rect x="10" y={fillY} width="100" height="220" className="bottle-fill" />
          <rect x="10" y={fillY - 3} width="100" height="6" className="bottle-fill-line" />
        </g>

        <rect x="45" y="2" width="30" height="10" rx="2" className="bottle-cap" />
      </svg>
      <span className="bottle-percentage">{Math.round(clamped)}%</span>
    </div>
  );
}
