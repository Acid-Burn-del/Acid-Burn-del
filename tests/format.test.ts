import { describe, expect, it } from 'vitest';
import { formatDate, formatPeriod } from '@/lib/format';

describe('formatPeriod', () => {
  it('formats years, months and "present"', () => {
    expect(formatPeriod('2024')).toBe('2024');
    expect(formatPeriod('2024-01')).toBe('Jan 2024');
    expect(formatPeriod('present')).toBe('Present');
  });
});

describe('formatDate', () => {
  it('is timezone independent', () => {
    expect(formatDate(new Date('2026-10-01T00:00:00Z'))).toBe('October 2026');
  });
});
