const HOUR_MS = 60 * 60 * 1000;

export default function ReminderBanner({ totalMl, goal, lastLoggedAt }) {
  const goalReached = totalMl >= goal;
  const hoursSinceLast = lastLoggedAt ? (Date.now() - lastLoggedAt) / HOUR_MS : null;
  const isOverdue = !goalReached && hoursSinceLast !== null && hoursSinceLast >= 2;

  let tone = 'info';
  let message = 'Log your first glass to start tracking today.';

  if (goalReached) {
    tone = 'success';
    message = "Goal reached — nice work staying hydrated today.";
  } else if (isOverdue) {
    tone = 'alert';
    message = `It's been over ${Math.floor(hoursSinceLast)}h since your last glass. Time for some water.`;
  } else if (lastLoggedAt) {
    tone = 'info';
    const remaining = goal - totalMl;
    message = `${remaining} ml to go — keep it up.`;
  }

  return (
    <div className={`banner banner-${tone}`} role="status">
      {message}
    </div>
  );
}
