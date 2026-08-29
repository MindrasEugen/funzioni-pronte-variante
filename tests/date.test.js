import { describe, it, expect } from 'vitest';
import {
  formatDate,
  addDays,
  subDays,
  addMonths,
  diffInDays,
  isToday,
  isWeekend,
  startOfDay,
  endOfDay,
  daysInMonth
} from '../src/date/index.js';

describe('Date Functions', () => {
  describe('formatDate', () => {
    it('should return Invalid Date for invalid input', () => {
      expect(formatDate(new Date('invalid'))).toBe('Invalid Date');
      expect(formatDate(null)).toBe('Invalid Date');
      expect(formatDate('not a date')).toBe('Invalid Date');
    });

    it('should format with default YYYY-MM-DD', () => {
      const date = new Date(2023, 0, 15);
      expect(formatDate(date)).toBe('2023-01-15');
    });

    it('should format with custom format', () => {
      const date = new Date(2023, 11, 25, 14, 30, 45);
      expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-12-25 14:30:45');
    });

    it('should format with different tokens', () => {
      const date = new Date(2023, 0, 15, 8, 5, 3);
      expect(formatDate(date, 'DD/MM/YYYY')).toBe('15/01/2023');
      expect(formatDate(date, 'HH:mm')).toBe('08:05');
      expect(formatDate(date, 'ss')).toBe('03');
    });

    it('should pad with zeros', () => {
      const date = new Date(2023, 0, 5, 9, 7, 3);
      expect(formatDate(date, 'MM/DD')).toBe('01/05');
      expect(formatDate(date, 'HH:mm:ss')).toBe('09:07:03');
    });
  });

  describe('addDays', () => {
    it('should return Invalid Date for invalid input', () => {
      const invalid = new Date('invalid');
      expect(addDays(invalid, 1)).toEqual(new Date('Invalid Date'));
    });

    it('should add positive days', () => {
      const date = new Date(2023, 0, 15);
      const result = addDays(date, 5);
      expect(result.getDate()).toBe(20);
      expect(result.getMonth()).toBe(0);
      expect(result.getFullYear()).toBe(2023);
    });

    it('should add negative days', () => {
      const date = new Date(2023, 0, 15);
      const result = addDays(date, -5);
      expect(result.getDate()).toBe(10);
    });

    it('should cross month boundaries', () => {
      const date = new Date(2023, 0, 31);
      const result = addDays(date, 1);
      expect(result.getDate()).toBe(1);
      expect(result.getMonth()).toBe(1);
    });

    it('should not mutate original date', () => {
      const date = new Date(2023, 0, 15);
      const originalDate = date.getDate();
      addDays(date, 10);
      expect(date.getDate()).toBe(originalDate);
    });
  });

  describe('subDays', () => {
    it('should return Invalid Date for invalid input', () => {
      const invalid = new Date('invalid');
      expect(subDays(invalid, 1)).toEqual(new Date('Invalid Date'));
    });

    it('should subtract days', () => {
      const date = new Date(2023, 0, 15);
      const result = subDays(date, 5);
      expect(result.getDate()).toBe(10);
    });

    it('should be equivalent to addDays with negative value', () => {
      const date = new Date(2023, 0, 15);
      expect(subDays(date, 5)).toEqual(addDays(date, -5));
    });

    it('should not mutate original date', () => {
      const date = new Date(2023, 0, 15);
      const originalDate = date.getDate();
      subDays(date, 10);
      expect(date.getDate()).toBe(originalDate);
    });
  });

  describe('addMonths', () => {
    it('should return Invalid Date for invalid input', () => {
      const invalid = new Date('invalid');
      expect(addMonths(invalid, 1)).toEqual(new Date('Invalid Date'));
    });

    it('should add positive months', () => {
      const date = new Date(2023, 0, 15);
      const result = addMonths(date, 3);
      expect(result.getMonth()).toBe(3);
      expect(result.getDate()).toBe(15);
    });

    it('should add negative months', () => {
      const date = new Date(2023, 5, 15);
      const result = addMonths(date, -3);
      expect(result.getMonth()).toBe(2);
    });

    it('should cross year boundaries', () => {
      const date = new Date(2023, 11, 15);
      const result = addMonths(date, 1);
      expect(result.getMonth()).toBe(0);
      expect(result.getFullYear()).toBe(2024);
    });

    it('should handle day overflow', () => {
      const date = new Date(2023, 0, 31);
      const result = addMonths(date, 1);
      expect(result.getMonth()).toBe(1);
      expect(result.getDate()).toBe(28); // February 2023 has 28 days
    });

    it('should not mutate original date', () => {
      const date = new Date(2023, 0, 15);
      const originalMonth = date.getMonth();
      addMonths(date, 3);
      expect(date.getMonth()).toBe(originalMonth);
    });
  });

  describe('diffInDays', () => {
    it('should return 0 for invalid dates', () => {
      expect(diffInDays(new Date('invalid'), new Date())).toBe(0);
      expect(diffInDays(new Date(), new Date('invalid'))).toBe(0);
    });

    it('should return days difference (date2 - date1)', () => {
      const date1 = new Date(2023, 0, 15);
      const date2 = new Date(2023, 0, 20);
      expect(diffInDays(date1, date2)).toBe(5);
    });

    it('should return negative for date2 before date1', () => {
      const date1 = new Date(2023, 0, 20);
      const date2 = new Date(2023, 0, 15);
      expect(diffInDays(date1, date2)).toBe(-5);
    });

    it('should ignore time components', () => {
      const date1 = new Date(2023, 0, 15, 12, 0, 0);
      const date2 = new Date(2023, 0, 15, 18, 0, 0);
      expect(diffInDays(date1, date2)).toBe(0);
    });

    it('should handle same date', () => {
      const date = new Date(2023, 0, 15);
      expect(diffInDays(date, date)).toBe(0);
    });
  });

  describe('isToday', () => {
    it('should return false for invalid date', () => {
      expect(isToday(new Date('invalid'))).toBe(false);
    });

    it('should return true for today', () => {
      const now = new Date();
      expect(isToday(now)).toBe(true);
    });

    it('should return false for different date', () => {
      const date = new Date(2023, 0, 15);
      expect(isToday(date)).toBe(false);
    });

    it('should return false for same day but different time', () => {
      const date = new Date();
      date.setHours(date.getHours() - 1);
      expect(isToday(date)).toBe(true); // Same day
    });
  });

  describe('isWeekend', () => {
    it('should return false for invalid date', () => {
      expect(isWeekend(new Date('invalid'))).toBe(false);
    });

    it('should return true for Sunday (day 0)', () => {
      const date = new Date(2023, 0, 1); // January 1, 2023 is a Sunday
      date.setDate(1);
      expect(date.getDay()).toBe(0);
      expect(isWeekend(date)).toBe(true);
    });

    it('should return true for Saturday (day 6)', () => {
      const date = new Date(2023, 0, 7); // January 7, 2023 is a Saturday
      expect(date.getDay()).toBe(6);
      expect(isWeekend(date)).toBe(true);
    });

    it('should return false for weekdays', () => {
      const date = new Date(2023, 0, 2); // January 2, 2023 is a Monday
      expect(date.getDay()).toBe(1);
      expect(isWeekend(date)).toBe(false);
    });
  });

  describe('startOfDay', () => {
    it('should return Invalid Date for invalid input', () => {
      expect(startOfDay(new Date('invalid'))).toEqual(new Date('Invalid Date'));
    });

    it('should set time to 00:00:00.000', () => {
      const date = new Date(2023, 0, 15, 14, 30, 45, 123);
      const result = startOfDay(date);
      expect(result.getHours()).toBe(0);
      expect(result.getMinutes()).toBe(0);
      expect(result.getSeconds()).toBe(0);
      expect(result.getMilliseconds()).toBe(0);
    });

    it('should preserve date', () => {
      const date = new Date(2023, 0, 15, 14, 30, 45);
      const result = startOfDay(date);
      expect(result.getFullYear()).toBe(2023);
      expect(result.getMonth()).toBe(0);
      expect(result.getDate()).toBe(15);
    });

    it('should not mutate original date', () => {
      const date = new Date(2023, 0, 15, 14, 30, 45);
      const originalHours = date.getHours();
      startOfDay(date);
      expect(date.getHours()).toBe(originalHours);
    });
  });

  describe('endOfDay', () => {
    it('should return Invalid Date for invalid input', () => {
      expect(endOfDay(new Date('invalid'))).toEqual(new Date('Invalid Date'));
    });

    it('should set time to 23:59:59.999', () => {
      const date = new Date(2023, 0, 15, 14, 30, 45, 123);
      const result = endOfDay(date);
      expect(result.getHours()).toBe(23);
      expect(result.getMinutes()).toBe(59);
      expect(result.getSeconds()).toBe(59);
      expect(result.getMilliseconds()).toBe(999);
    });

    it('should preserve date', () => {
      const date = new Date(2023, 0, 15, 14, 30, 45);
      const result = endOfDay(date);
      expect(result.getFullYear()).toBe(2023);
      expect(result.getMonth()).toBe(0);
      expect(result.getDate()).toBe(15);
    });

    it('should not mutate original date', () => {
      const date = new Date(2023, 0, 15, 14, 30, 45);
      const originalHours = date.getHours();
      endOfDay(date);
      expect(date.getHours()).toBe(originalHours);
    });
  });

  describe('daysInMonth', () => {
    it('should return 31 for January', () => {
      expect(daysInMonth(2023, 1)).toBe(31);
    });

    it('should return 28 for February 2023 (not leap year)', () => {
      expect(daysInMonth(2023, 2)).toBe(28);
    });

    it('should return 29 for February 2024 (leap year)', () => {
      expect(daysInMonth(2024, 2)).toBe(29);
    });

    it('should return 30 for April', () => {
      expect(daysInMonth(2023, 4)).toBe(30);
    });

    it('should return 31 for December', () => {
      expect(daysInMonth(2023, 12)).toBe(31);
    });

    it('should handle leap year century edge case', () => {
      // 2000 is a leap year
      expect(daysInMonth(2000, 2)).toBe(29);
      // 1900 is NOT a leap year
      expect(daysInMonth(1900, 2)).toBe(28);
    });
  });
});
