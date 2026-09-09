export const STANDARD_HOURS_TARGET = 1225;

/** A planning calculation, not an assessment of eligibility for tax deductions. */
export function remainingHoursPlan(recorded, weeks) {
  if (!Number.isFinite(recorded) || recorded < 0 || !Number.isFinite(weeks) || weeks < 0 || weeks > 53) {
    throw new RangeError('Vul geldige uren en 0 tot en met 53 resterende werkweken in.');
  }
  const remaining = Math.max(0, STANDARD_HOURS_TARGET - recorded);
  return { remaining, weekly: weeks > 0 ? remaining / weeks : null, reached: remaining === 0 };
}
