export default function StatsSummary({ totalMl, goal, entryCount }) {
  const remaining = Math.max(0, goal - totalMl);

  return (
    <div className="stats-grid">
      <div className="stat">
        <span className="stat-value">{totalMl}</span>
        <span className="stat-label">ml logged</span>
      </div>
      <div className="stat">
        <span className="stat-value">{remaining}</span>
        <span className="stat-label">ml remaining</span>
      </div>
      <div className="stat">
        <span className="stat-value">{entryCount}</span>
        <span className="stat-label">glasses today</span>
      </div>
    </div>
  );
}
