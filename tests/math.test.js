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
  isInRange,
  clamp,
  randomFloat,
  toDegrees,
  toRadians,
  median,
  mode,
  standardDeviation,
  gcd,
  lcm,
  isEven,
  isOdd,
  toFixed,
  modulo,
  abs,
  ceil
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

  describe('clamp', () => {
    it('should clamp value within min and max', () => {
      expect(clamp(5, 1, 10)).toBe(5);
      expect(clamp(0, 1, 10)).toBe(1);
      expect(clamp(15, 1, 10)).toBe(10);
    });

    it('should work with negative numbers', () => {
      expect(clamp(-5, -10, -1)).toBe(-5);
      expect(clamp(-15, -10, -1)).toBe(-10);
      expect(clamp(0, -10, -1)).toBe(-1);
    });
  });

  describe('randomFloat', () => {
    it('should return a number between min and max', () => {
      const result = randomFloat(1, 5);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThan(5);
    });

    it('should work with negative ranges', () => {
      const result = randomFloat(-5, -1);
      expect(result).toBeGreaterThanOrEqual(-5);
      expect(result).toBeLessThan(-1);
    });
  });

  describe('toDegrees', () => {
    it('should convert 0 radians to 0 degrees', () => {
      expect(toDegrees(0)).toBe(0);
    });

    it('should convert PI radians to 180 degrees', () => {
      expect(toDegrees(Math.PI)).toBe(180);
    });

    it('should convert PI/2 radians to 90 degrees', () => {
      expect(toDegrees(Math.PI / 2)).toBe(90);
    });
  });

  describe('toRadians', () => {
    it('should convert 0 degrees to 0 radians', () => {
      expect(toRadians(0)).toBe(0);
    });

    it('should convert 180 degrees to PI radians', () => {
      expect(toRadians(180)).toBe(Math.PI);
    });

    it('should convert 90 degrees to PI/2 radians', () => {
      expect(toRadians(90)).toBe(Math.PI / 2);
    });
  });

  describe('median', () => {
    it('should calculate median of odd-length array', () => {
      expect(median([1, 3, 5])).toBe(3);
    });

    it('should calculate median of even-length array', () => {
      expect(median([1, 3, 5, 7])).toBe(4);
    });

    it('should return NaN for empty array', () => {
      expect(median([])).toBeNaN();
    });

    it('should return NaN for non-array input', () => {
      expect(median(null)).toBeNaN();
    });
  });

  describe('mode', () => {
    it('should find the most frequent number', () => {
      expect(mode([1, 2, 2, 3, 4])).toBe(2);
    });

    it('should return first mode if multiple', () => {
      expect(mode([1, 1, 2, 2, 3])).toBe(1);
    });

    it('should return NaN for empty array', () => {
      expect(mode([])).toBeNaN();
    });

    it('should return NaN for non-array input', () => {
      expect(mode(null)).toBeNaN();
    });
  });

  describe('standardDeviation', () => {
    it('should calculate standard deviation', () => {
      const data = [2, 4, 4, 4, 5, 5, 7, 9];
      const result = standardDeviation(data);
      expect(result).toBeCloseTo(2);
    });

    it('should return NaN for empty array', () => {
      expect(standardDeviation([])).toBeNaN();
    });

    it('should return NaN for non-array input', () => {
      expect(standardDeviation(null)).toBeNaN();
    });

    it('should return 0 for array with identical values', () => {
      expect(standardDeviation([5, 5, 5, 5])).toBe(0);
    });
  });

  describe('gcd', () => {
    it('should calculate GCD of two numbers', () => {
      expect(gcd(48, 18)).toBe(6);
      expect(gcd(17, 5)).toBe(1);
    });

    it('should work with negative numbers', () => {
      expect(gcd(-48, 18)).toBe(6);
      expect(gcd(48, -18)).toBe(6);
    });

    it('should return 0 for gcd(0, n)', () => {
      expect(gcd(0, 5)).toBe(5);
      expect(gcd(0, 0)).toBe(0);
    });
  });

  describe('lcm', () => {
    it('should calculate LCM of two numbers', () => {
      expect(lcm(4, 6)).toBe(12);
      expect(lcm(5, 7)).toBe(35);
    });

    it('should return 0 for lcm(0, n)', () => {
      expect(lcm(0, 5)).toBe(0);
    });

    it('should work with negative numbers', () => {
      expect(lcm(-4, 6)).toBe(12);
    });
  });

  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-4)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
      expect(isEven(-3)).toBe(false);
    });

    it('should return false for non-integers', () => {
      expect(isEven(2.5)).toBe(false);
      expect(isEven(NaN)).toBe(false);
      expect(isEven(Infinity)).toBe(false);
    });
  });

  describe('isOdd', () => {
    it('should return true for odd numbers', () => {
      expect(isOdd(1)).toBe(true);
      expect(isOdd(3)).toBe(true);
      expect(isOdd(-3)).toBe(true);
    });

    it('should return false for even numbers', () => {
      expect(isOdd(2)).toBe(false);
      expect(isOdd(0)).toBe(false);
      expect(isOdd(-4)).toBe(false);
    });

    it('should return false for non-integers', () => {
      expect(isOdd(2.5)).toBe(false);
      expect(isOdd(NaN)).toBe(false);
      expect(isOdd(Infinity)).toBe(false);
    });
  });

  describe('toFixed', () => {
    it('should round to 0 decimals by default', () => {
      expect(toFixed(10.5)).toBe(11);
      expect(toFixed(10.4)).toBe(10);
    });

    it('should round to specified decimals', () => {
      expect(toFixed(10.1234, 2)).toBe(10.12);
      expect(toFixed(10.1234, 3)).toBe(10.123);
    });

    it('should work with negative numbers', () => {
      expect(toFixed(-10.5)).toBe(-10);
      expect(toFixed(-10.1234, 2)).toBe(-10.12);
    });
  });

  describe('modulo', () => {
    it('should return positive modulo', () => {
      expect(modulo(7, 3)).toBe(1);
      expect(modulo(10, 3)).toBe(1);
    });

    it('should handle negative numbers correctly', () => {
      expect(modulo(-7, 3)).toBe(2);
      expect(modulo(7, -3)).toBe(1);
      expect(modulo(-7, -3)).toBe(2);
    });

    it('should return 0 when divisible', () => {
      expect(modulo(9, 3)).toBe(0);
    });
  });

  describe('abs', () => {
    it('should return absolute value of positive number', () => {
      expect(abs(5)).toBe(5);
    });

    it('should return absolute value of negative number', () => {
      expect(abs(-5)).toBe(5);
    });

    it('should return 0 for 0', () => {
      expect(abs(0)).toBe(0);
    });
  });

  describe('ceil', () => {
    it('should round up positive numbers', () => {
      expect(ceil(10.3)).toBe(11);
      expect(ceil(10.9)).toBe(11);
    });

    it('should round up negative numbers', () => {
      expect(ceil(-10.3)).toBe(-10);
      expect(ceil(-10.9)).toBe(-10);
    });

    it('should handle integers', () => {
      expect(ceil(10)).toBe(10);
      expect(ceil(-10)).toBe(-10);
    });
  });
});
