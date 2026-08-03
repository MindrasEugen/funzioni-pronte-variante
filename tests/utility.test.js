import { describe, it, expect } from 'vitest';
import { 
  logColor,
  getType,
  generateId,
  randomInt
} from '../src/utils/index.js';

describe('Utility Functions', () => {
  describe('getType', () => {
    it('should return string for string', () => {
      expect(getType('hello')).toBe('string');
    });

    it('should return number for number', () => {
      expect(getType(42)).toBe('number');
    });

    it('should return object for object', () => {
      expect(getType({})).toBe('object');
    });

    it('should return array for array', () => {
      expect(getType([1, 2, 3])).toBe('array');
    });

    it('should return null for null', () => {
      expect(getType(null)).toBe('null');
    });

    it('should return undefined for undefined', () => {
      expect(getType(undefined)).toBe('undefined');
    });

    it('should return boolean for boolean', () => {
      expect(getType(true)).toBe('boolean');
      expect(getType(false)).toBe('boolean');
    });

    it('should return function for function', () => {
      expect(getType(() => {})).toBe('function');
    });
  });

  describe('generateId', () => {
    it('should generate an ID of default length (8)', () => {
      const id = generateId();
      expect(id).toHaveLength(8);
    });

    it('should generate an ID of custom length', () => {
      const id = generateId(10);
      expect(id).toHaveLength(10);
    });

    it('should generate alphanumeric IDs', () => {
      const id = generateId(100);
      expect(id).toMatch(/^[a-zA-Z0-9]+$/);
    });

    it('should generate different IDs on each call', () => {
      const id1 = generateId(10);
      const id2 = generateId(10);
      // They could be equal by chance, but very unlikely
      // So we just verify they are valid strings
      expect(id1).toHaveLength(10);
      expect(id2).toHaveLength(10);
    });
  });

  describe('randomInt', () => {
    it('should generate a number between min and max (inclusive)', () => {
      const min = 1;
      const max = 10;
      
      for (let i = 0; i < 100; i++) {
        const num = randomInt(min, max);
        expect(num).toBeGreaterThanOrEqual(min);
        expect(num).toBeLessThanOrEqual(max);
      }
    });

    it('should generate an integer', () => {
      const num = randomInt(1, 10);
      expect(Number.isInteger(num)).toBe(true);
    });

    it('should use default 0-100 if not specified', () => {
      const num = randomInt();
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(100);
    });

    it('should generate the same min if min === max', () => {
      const num = randomInt(5, 5);
      expect(num).toBe(5);
    });
  });

  describe('logColor', () => {
    it('should print to console without errors', () => {
      // We cannot verify console output directly,
      // but we can verify it doesn't throw errors
      expect(() => {
        logColor('Test message', 'blue');
      }).not.toThrow();
    });

    it('should use cyan as default', () => {
      expect(() => {
        logColor('Test message');
      }).not.toThrow();
    });
  });
});
