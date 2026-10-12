import { useState } from 'react';

export default function GoalSetup({ goal, onGoalChange }) {
  const [draft, setDraft] = useState(goal);
  const [editing, setEditing] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const parsed = Number(draft);
    if (!Number.isFinite(parsed) || parsed <= 0) return;
    onGoalChange(parsed);
    setEditing(false);
  }

  if (!editing) {
    return (
      <div className="goal-row">
        <span>
          Daily goal: <strong>{goal} ml</strong>
        </span>
        <button type="button" className="link-btn" onClick={() => { setDraft(goal); setEditing(true); }}>
          Change
        </button>
      </div>
    );
  }

  return (
    <form className="goal-row" onSubmit={handleSubmit}>
      <label htmlFor="goal-input">Daily goal (ml)</label>
      <input
        id="goal-input"
        type="number"
        min="500"
        step="250"
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
      />
      <button type="submit" className="link-btn">Save</button>
      <button type="button" className="link-btn" onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );
}
