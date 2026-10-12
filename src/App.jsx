import { useEffect, useState } from 'react';
import WaterBottle from './components/WaterBottle';
import GoalSetup from './components/GoalSetup';
import ReminderBanner from './components/ReminderBanner';
import IntakeControls from './components/IntakeControls';
import StatsSummary from './components/StatsSummary';
import IntakeLog from './components/IntakeLog';
import './App.css';

const STORAGE_KEY = 'water-intake-reminder-state';
const DEFAULT_GOAL = 2500;

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.day !== todayKey()) return null; // reset on a new day
    return parsed;
  } catch {
    return null;
  }
}

export default function App() {
  const saved = loadState();
  const [goal, setGoal] = useState(saved?.goal ?? DEFAULT_GOAL);
  const [entries, setEntries] = useState(saved?.entries ?? []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ day: todayKey(), goal, entries }));
  }, [goal, entries]);

  function handleAddIntake(amount) {
    setEntries((prev) => [...prev, { id: crypto.randomUUID(), amount, timestamp: Date.now() }]);
  }

  function handleRemoveIntake(id) {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  }

  const totalMl = entries.reduce((sum, entry) => sum + entry.amount, 0);
  const percentage = goal > 0 ? (totalMl / goal) * 100 : 0;
  const lastLoggedAt = entries.length > 0 ? entries[entries.length - 1].timestamp : null;

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Water Intake Reminder</h1>
        <p className="tagline">Track today's water intake and stay on top of your daily goal.</p>
      </header>

      <ReminderBanner totalMl={totalMl} goal={goal} lastLoggedAt={lastLoggedAt} />

      <main className="app-main">
        <section className="visual-section">
          <WaterBottle percentage={percentage} />
          <GoalSetup goal={goal} onGoalChange={setGoal} />
        </section>

        <section className="control-section">
          <StatsSummary totalMl={totalMl} goal={goal} entryCount={entries.length} />
          <IntakeControls onAddIntake={handleAddIntake} />
          <h2 className="log-heading">Today's log</h2>
          <IntakeLog entries={entries} onRemove={handleRemoveIntake} />
        </section>
      </main>
    </div>
  );
}
