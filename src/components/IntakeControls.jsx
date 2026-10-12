import { useState } from 'react';

const QUICK_AMOUNTS = [150, 250, 500];

export default function IntakeControls({ onAddIntake }) {
  const [customAmount, setCustomAmount] = useState('');

  function handleCustomSubmit(event) {
    event.preventDefault();
    const parsed = Number(customAmount);
    if (!Number.isFinite(parsed) || parsed <= 0) return;
    onAddIntake(parsed);
    setCustomAmount('');
  }

  return (
    <div className="intake-controls">
      <div className="quick-buttons">
        {QUICK_AMOUNTS.map((amount) => (
          <button key={amount} type="button" className="quick-btn" onClick={() => onAddIntake(amount)}>
            + {amount} ml
          </button>
        ))}
      </div>
      <form className="custom-form" onSubmit={handleCustomSubmit}>
        <input
          type="number"
          min="1"
          placeholder="Custom amount (ml)"
          value={customAmount}
          onChange={(event) => setCustomAmount(event.target.value)}
        />
        <button type="submit" className="add-btn">Log intake</button>
      </form>
    </div>
  );
}
