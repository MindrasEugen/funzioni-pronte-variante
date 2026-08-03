import { describe, it, expect } from 'vitest';
import { 
  reverseString,
  countChars,
  capitalize,
  truncate,
  includesText,
  replaceText
} from '../src/string/index.js';

describe('String Functions', () => {
  describe('reverseString', () => {
    it('should reverse a string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    it('should reverse a string with numbers', () => {
      expect(reverseString('123')).toBe('321');
    });

    it('should return empty string for empty string', () => {
      expect(reverseString('')).toBe('');
    });

    it('should return empty string for non-string input', () => {
      expect(reverseString(null)).toBe('');
      expect(reverseString(123)).toBe('');
    });
  });

  describe('countChars', () => {
    it('should count characters in a string', () => {
      expect(countChars('hello')).toBe(5);
    });

    it('should count characters including spaces and punctuation', () => {
      expect(countChars('Hello world!')).toBe(12);
    });

    it('should return 0 for empty string', () => {
      expect(countChars('')).toBe(0);
    });

    it('should return 0 for non-string input', () => {
      expect(countChars(null)).toBe(0);
      expect(countChars(123)).toBe(0);
    });
  });

  describe('capitalize', () => {
    it('should capitalize the first letter', () => {
      expect(capitalize('gino')).toBe('Gino');
    });

    it('should transform the rest to lowercase', () => {
      expect(capitalize('CIAO')).toBe('Ciao');
      expect(capitalize('jAvAsCrIpT')).toBe('Javascript');
    });

    it('should return empty string for empty string', () => {
      expect(capitalize('')).toBe('');
    });

    it('should return empty string for non-string input', () => {
      expect(capitalize(null)).toBe('');
    });
  });

  describe('truncate', () => {
    it('should truncate a string to N characters', () => {
      expect(truncate('hello world', 5)).toBe('hello');
    });

    it('should return the original string if it is shorter than max', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    it('should return empty string if max <= 0', () => {
      expect(truncate('hello', 0)).toBe('');
      expect(truncate('hello', -1)).toBe('');
    });

    it('should return empty string for non-string input', () => {
      expect(truncate(null, 5)).toBe('');
    });
  });

  describe('includesText', () => {
    it('should return true if substring is contained', () => {
      expect(includesText('Hello world', 'Hello')).toBe(true);
      expect(includesText('Hello world', 'world')).toBe(true);
    });

    it('should return false if substring is not contained', () => {
      expect(includesText('Hello world', 'World')).toBe(false);
    });

    it('should be case-sensitive', () => {
      expect(includesText('Hello', 'hello')).toBe(false);
    });

    it('should return false for non-string inputs', () => {
      expect(includesText(123, 'hello')).toBe(false);
      expect(includesText('hello', null)).toBe(false);
    });
  });

  describe('replaceText', () => {
    it('should replace all occurrences', () => {
      expect(replaceText('hello hello', 'hello', 'goodbye')).toBe('goodbye goodbye');
    });

    it('should return the original string if text is not found', () => {
      expect(replaceText('hello', 'x', 'y')).toBe('hello');
    });

    it('should replace with empty string', () => {
      expect(replaceText('JavaScript', 'Script', '')).toBe('Java');
    });

    it('should return empty string for non-string input', () => {
      expect(replaceText(null, 'a', 'b')).toBe('');
    });
  });
});
