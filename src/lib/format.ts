/** Format a `YYYY` / `YYYY-MM` / `present` string for display. */
export function formatPeriod(value: string, locale = 'en'): string {
  if (value === 'present') return 'Present';
  const [year, month] = value.split('-').map(Number);
  if (year === undefined || Number.isNaN(year)) return value;
  if (month === undefined) return String(year);
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  });
}

/** Human-readable date for project pages, rendered in UTC so builds are deterministic. */
export function formatDate(date: Date, locale = 'en'): string {
  return date.toLocaleDateString(locale, { year: 'numeric', month: 'long', timeZone: 'UTC' });
}
