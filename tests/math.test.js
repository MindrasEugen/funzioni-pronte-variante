import { describe, it, expect } from 'vitest';
import { 
  calculateAverage,
  calculatePercentage,
  round,
  sum,
  findMax,
  findMin,
  isPrime,
  calculateHypotenuse,
  factorial,
  power,
  nthRoot,
  isInRange
} from '../src/math/index.js';

describe('Math Functions', () => {
  describe('calculateAverage', () => {
    it('should calculate the average of a numeric array', () => {
      expect(calculateAverage([10, 20, 30])).toBe(20);
    });

    it('should return 0 for empty array', () => {
      expect(calculateAverage([])).toBe(0);
    });

    it('should return 0 for non-array input', () => {
      expect(calculateAverage(null)).toBe(0);
      expect(calculateAverage('non array')).toBe(0);
    });

    it('should calculate average with decimal numbers', () => {
      expect(calculateAverage([1.5, 2.5, 3])).toBe(2.3333333333333335);
    });
  });

  describe('calculatePercentage', () => {
    it('should calculate the percentage of a value', () => {
      expect(calculatePercentage(100, 10)).toBe(10);
      expect(calculatePercentage(200, 25)).toBe(50);
    });

    it('should calculate 0% of a value', () => {
      expect(calculatePercentage(100, 0)).toBe(0);
    });

    it('should calculate 100% of a value', () => {
      expect(calculatePercentage(50, 100)).toBe(50);
    });
  });

  describe('round', () => {
    it('should round to 0 decimals (integer)', () => {
      expect(round(10.5)).toBe(11);
      expect(round(10.4)).toBe(10);
    });

    it('should round to N decimals', () => {
      expect(round(10.1234, 2)).toBe(10.12);
      expect(round(10.1234, 3)).toBe(10.123);
    });

    it('should round with default 0 decimals', () => {
      expect(round(10.5)).toBe(11);
    });
  });

  describe('sum', () => {
    it('should calculate the sum of an array', () => {
      expect(sum([1, 2, 3, 4])).toBe(10);
    });

    it('should return 0 for empty array', () => {
      expect(sum([])).toBe(0);
    });

    it('should return 0 for non-array input', () => {
      expect(sum(null)).toBe(0);
    });

    it('should calculate sum with negative numbers', () => {
      expect(sum([10, -5, 3])).toBe(8);
    });
  });

  describe('findMax', () => {
    it('should find the maximum value', () => {
      expect(findMax([1, 5, 3, 9, 2])).toBe(9);
    });

    it('should find max with negative numbers', () => {
      expect(findMax([-1, -5, -3])).toBe(-1);
    });

    it('should return undefined for empty array', () => {
      expect(findMax([])).toBeUndefined();
    });

    it('should return undefined for non-array input', () => {
      expect(findMax(null)).toBeUndefined();
    });
  });

  describe('findMin', () => {
    it('should find the minimum value', () => {
      expect(findMin([1, 5, 3, 9, 2])).toBe(1);
    });

    it('should find min with negative numbers', () => {
      expect(findMin([-1, -5, -3])).toBe(-5);
    });

    it('should return undefined for empty array', () => {
      expect(findMin([])).toBeUndefined();
    });
  });

  describe('isPrime', () => {
    it('should return true for prime numbers', () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(7)).toBe(true);
      expect(isPrime(13)).toBe(true);
    });

    it('should return false for non-prime numbers', () => {
      expect(isPrime(1)).toBe(false);
      expect(isPrime(4)).toBe(false);
      expect(isPrime(9)).toBe(false);
      expect(isPrime(10)).toBe(false);
    });

    it('should return false for numbers less than 2', () => {
      expect(isPrime(0)).toBe(false);
      expect(isPrime(1)).toBe(false);
    });

    it('should return false for negative numbers', () => {
      expect(isPrime(-5)).toBe(false);
    });
  });

  describe('calculateHypotenuse', () => {
    it('should calculate the hypotenuse (3-4-5)', () => {
      expect(calculateHypotenuse(3, 4)).toBe(5);
    });

    it('should calculate the hypotenuse (5-12-13)', () => {
      expect(calculateHypotenuse(5, 12)).toBe(13);
    });

    it('should calculate hypotenuse with decimal numbers', () => {
      const result = calculateHypotenuse(1, 1);
      expect(result).toBeCloseTo(Math.sqrt(2), 10);
    });
  });

  describe('factorial', () => {
    it('should calculate factorial of 5', () => {
      expect(factorial(5)).toBe(120);
    });

    it('should return 1 for 0!', () => {
      expect(factorial(0)).toBe(1);
    });

    it('should return 1 for 1!', () => {
      expect(factorial(1)).toBe(1);
    });

    it('should return undefined for negative numbers', () => {
      expect(factorial(-1)).toBeUndefined();
    });
  });

  describe('power', () => {
    it('should calculate 2^3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    it('should calculate 5^2 = 25', () => {
      expect(power(5, 2)).toBe(25);
    });

    it('should handle negative exponents', () => {
      expect(power(2, -1)).toBe(0.5);
    });
  });

  describe('nthRoot', () => {
    it('should calculate the square root of 16', () => {
      expect(nthRoot(16, 2)).toBe(4);
    });

    it('should calculate the cube root of 27', () => {
      expect(nthRoot(27, 3)).toBe(3);
    });

    it('should use index 2 as default', () => {
      expect(nthRoot(9)).toBe(3);
    });
  });

  describe('isInRange', () => {
    it('should return true if number is in range', () => {
      expect(isInRange(5, 1, 10)).toBe(true);
      expect(isInRange(10, 1, 10)).toBe(true);
      expect(isInRange(1, 1, 10)).toBe(true);
    });

    it('should return false if number is out of range', () => {
      expect(isInRange(15, 1, 10)).toBe(false);
      expect(isInRange(0, 1, 10)).toBe(false);
    });

    it('should work with decimal numbers', () => {
      expect(isInRange(5.5, 1, 10)).toBe(true);
      expect(isInRange(10.1, 1, 10)).toBe(false);
    });
  });
});
