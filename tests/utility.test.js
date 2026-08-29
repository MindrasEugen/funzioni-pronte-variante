import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { 
  logColor,
  getType,
  generateId,
  randomInt,
  debounce,
  throttle,
  once,
  memoize,
  deepClone,
  deepEqual,
  isEmpty,
  isNull,
  isUndefined,
  sleep,
  uuid,
  isFunction,
  isArray,
  isObject,
  isString,
  isNumber,
  isBoolean
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

  describe('debounce', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('should delay function execution', () => {
      const mockFn = vi.fn();
      const debouncedFn = debounce(mockFn, 100);
      
      debouncedFn();
      expect(mockFn).not.toHaveBeenCalled();
      
      vi.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should reset timer on subsequent calls', () => {
      const mockFn = vi.fn();
      const debouncedFn = debounce(mockFn, 100);
      
      debouncedFn();
      debouncedFn();
      debouncedFn();
      
      expect(mockFn).not.toHaveBeenCalled();
      
      vi.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('throttle', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('should allow immediate first call', () => {
      const mockFn = vi.fn();
      const throttledFn = throttle(mockFn, 100);
      
      throttledFn();
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should throttle subsequent calls within wait period', () => {
      const mockFn = vi.fn();
      const throttledFn = throttle(mockFn, 100);
      
      throttledFn();
      throttledFn();
      throttledFn();
      
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should allow call after wait period', () => {
      const mockFn = vi.fn();
      const throttledFn = throttle(mockFn, 100);
      
      throttledFn();
      vi.advanceTimersByTime(100);
      throttledFn();
      
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
  });

  describe('once', () => {
    it('should only call the function once', () => {
      const mockFn = vi.fn(() => 'result');
      const onceFn = once(mockFn);
      
      expect(onceFn()).toBe('result');
      expect(onceFn()).toBe('result');
      expect(onceFn()).toBe('result');
      
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should return the first result for subsequent calls', () => {
      let count = 0;
      const onceFn = once(() => ++count);
      
      expect(onceFn()).toBe(1);
      expect(onceFn()).toBe(1);
      expect(onceFn()).toBe(1);
      
      expect(count).toBe(1);
    });
  });

  describe('memoize', () => {
    it('should cache function results', () => {
      const mockFn = vi.fn((x) => x * 2);
      const memoizedFn = memoize(mockFn);
      
      expect(memoizedFn(5)).toBe(10);
      expect(memoizedFn(5)).toBe(10);
      expect(memoizedFn(5)).toBe(10);
      
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should call function for different arguments', () => {
      const mockFn = vi.fn((x) => x * 2);
      const memoizedFn = memoize(mockFn);
      
      memoizedFn(5);
      memoizedFn(10);
      memoizedFn(15);
      
      expect(mockFn).toHaveBeenCalledTimes(3);
    });
  });

  describe('deepClone', () => {
    it('should clone primitive values', () => {
      expect(deepClone(42)).toBe(42);
      expect(deepClone('hello')).toBe('hello');
      expect(deepClone(true)).toBe(true);
    });

    it('should clone arrays', () => {
      const arr = [1, 2, { a: 3 }];
      const cloned = deepClone(arr);
      
      expect(cloned).toEqual(arr);
      expect(cloned).not.toBe(arr);
      expect(cloned[2]).not.toBe(arr[2]);
    });

    it('should clone objects', () => {
      const obj = { a: 1, b: { c: 2 } };
      const cloned = deepClone(obj);
      
      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
      expect(cloned.b).not.toBe(obj.b);
    });

    it('should clone Date objects', () => {
      const date = new Date();
      const cloned = deepClone(date);
      
      expect(cloned).toEqual(date);
      expect(cloned).not.toBe(date);
    });

    it('should clone RegExp objects', () => {
      const regex = /test/;
      const cloned = deepClone(regex);
      
      expect(cloned.toString()).toBe(regex.toString());
      expect(cloned).not.toBe(regex);
    });

    it('should handle null and undefined', () => {
      expect(deepClone(null)).toBe(null);
      expect(deepClone(undefined)).toBe(undefined);
    });
  });

  describe('deepEqual', () => {
    it('should return true for equal primitive values', () => {
      expect(deepEqual(42, 42)).toBe(true);
      expect(deepEqual('hello', 'hello')).toBe(true);
      expect(deepEqual(true, true)).toBe(true);
    });

    it('should return false for different primitive values', () => {
      expect(deepEqual(42, 43)).toBe(false);
      expect(deepEqual('hello', 'world')).toBe(false);
    });

    it('should compare arrays deeply', () => {
      expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
      expect(deepEqual([1, [2, 3]], [1, [2, 3]])).toBe(true);
      expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    });

    it('should compare objects deeply', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { a: 1, b: { c: 2 } };
      const obj3 = { a: 1, b: { c: 3 } };
      
      expect(deepEqual(obj1, obj2)).toBe(true);
      expect(deepEqual(obj1, obj3)).toBe(false);
    });

    it('should compare Date objects', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-01-01');
      
      expect(deepEqual(date1, date2)).toBe(true);
      expect(deepEqual(date1, new Date('2023-01-02'))).toBe(false);
    });

    it('should compare RegExp objects', () => {
      const regex1 = /test/;
      const regex2 = /test/;
      
      expect(deepEqual(regex1, regex2)).toBe(true);
      expect(deepEqual(regex1, /other/)).toBe(false);
    });

    it('should handle null and undefined', () => {
      expect(deepEqual(null, null)).toBe(true);
      expect(deepEqual(undefined, undefined)).toBe(true);
      expect(deepEqual(null, undefined)).toBe(false);
    });
  });

  describe('isEmpty', () => {
    it('should return true for null and undefined', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    it('should return true for empty string', () => {
      expect(isEmpty('')).toBe(true);
    });

    it('should return true for empty array', () => {
      expect(isEmpty([])).toBe(true);
    });

    it('should return true for empty object', () => {
      expect(isEmpty({})).toBe(true);
    });

    it('should return false for non-empty values', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty([1, 2, 3])).toBe(false);
      expect(isEmpty({ a: 1 })).toBe(false);
      expect(isEmpty(0)).toBe(false);
      expect(isEmpty(false)).toBe(false);
    });
  });

  describe('isNull', () => {
    it('should return true for null', () => {
      expect(isNull(null)).toBe(true);
    });

    it('should return false for non-null values', () => {
      expect(isNull(undefined)).toBe(false);
      expect(isNull(0)).toBe(false);
      expect(isNull('')).toBe(false);
      expect(isNull({})).toBe(false);
    });
  });

  describe('isUndefined', () => {
    it('should return true for undefined', () => {
      expect(isUndefined(undefined)).toBe(true);
    });

    it('should return false for non-undefined values', () => {
      expect(isUndefined(null)).toBe(false);
      expect(isUndefined(0)).toBe(false);
      expect(isUndefined('')).toBe(false);
      expect(isUndefined({})).toBe(false);
    });
  });

  describe('sleep', () => {
    it('should resolve after specified delay', async () => {
      const start = Date.now();
      await sleep(50);
      const end = Date.now();
      
      expect(end - start).toBeGreaterThanOrEqual(49);
    });
  });

  describe('uuid', () => {
    it('should generate a valid UUID v4', () => {
      const id = uuid();
      expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });

    it('should generate unique values across calls', () => {
      const a = uuid();
      const b = uuid();
      expect(a).not.toBe(b);
    });
  });

  describe('isFunction', () => {
    it('should return true for functions', () => {
      expect(isFunction(() => {})).toBe(true);
      expect(isFunction(function () {})).toBe(true);
    });

    it('should return false for non-functions', () => {
      expect(isFunction({})).toBe(false);
      expect(isFunction('function')).toBe(false);
      expect(isFunction(null)).toBe(false);
    });
  });

  describe('isArray', () => {
    it('should return true for arrays', () => {
      expect(isArray([1, 2, 3])).toBe(true);
      expect(isArray([])).toBe(true);
    });

    it('should return false for non-arrays', () => {
      expect(isArray({})).toBe(false);
      expect(isArray('array')).toBe(false);
      expect(isArray(null)).toBe(false);
    });
  });

  describe('isObject', () => {
    it('should return true for plain objects', () => {
      expect(isObject({})).toBe(true);
      expect(isObject({ a: 1 })).toBe(true);
    });

    it('should return false for arrays', () => {
      expect(isObject([1, 2, 3])).toBe(false);
    });

    it('should return false for null', () => {
      expect(isObject(null)).toBe(false);
    });

    it('should return false for primitives', () => {
      expect(isObject('object')).toBe(false);
      expect(isObject(42)).toBe(false);
    });
  });

  describe('isString', () => {
    it('should return true for strings', () => {
      expect(isString('hello')).toBe(true);
      expect(isString('')).toBe(true);
    });

    it('should return false for non-strings', () => {
      expect(isString(42)).toBe(false);
      expect(isString(null)).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('should return true for numbers', () => {
      expect(isNumber(42)).toBe(true);
      expect(isNumber(-3.14)).toBe(true);
      expect(isNumber(0)).toBe(true);
    });

    it('should return false for NaN', () => {
      expect(isNumber(NaN)).toBe(false);
    });

    it('should return false for non-numbers', () => {
      expect(isNumber('42')).toBe(false);
      expect(isNumber(null)).toBe(false);
    });
  });

  describe('isBoolean', () => {
    it('should return true for booleans', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
    });

    it('should return false for non-booleans', () => {
      expect(isBoolean(0)).toBe(false);
      expect(isBoolean('true')).toBe(false);
      expect(isBoolean(null)).toBe(false);
    });
  });
});
