function formatTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function IntakeLog({ entries, onRemove }) {
  if (entries.length === 0) {
    return <p className="empty-state">No water logged yet today.</p>;
  }

  return (
    <ul className="intake-log">
      {entries.map((entry) => (
        <li key={entry.id} className="intake-entry">
          <span className="entry-amount">{entry.amount} ml</span>
          <span className="entry-time">{formatTime(entry.timestamp)}</span>
          <button type="button" className="remove-btn" onClick={() => onRemove(entry.id)} aria-label="Remove entry">
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}
