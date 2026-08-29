import { describe, it, expect } from 'vitest';
import {
  pick,
  omit,
  merge,
  deepMerge,
  mapValues,
  invert,
  getPath,
  setPath,
  hasPath,
  isPlainObject
} from '../src/object/index.js';

describe('Object Functions', () => {
  describe('pick', () => {
    it('should return empty object for null input', () => {
      expect(pick(null, ['a'])).toEqual({});
    });

    it('should pick existing keys', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    it('should ignore non-existing keys', () => {
      const obj = { a: 1, b: 2 };
      expect(pick(obj, ['a', 'x', 'y'])).toEqual({ a: 1 });
    });

    it('should handle empty keys array', () => {
      const obj = { a: 1, b: 2 };
      expect(pick(obj, [])).toEqual({});
    });
  });

  describe('omit', () => {
    it('should return empty object for null input', () => {
      expect(omit(null, ['a'])).toEqual({});
    });

    it('should omit specified keys', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
    });

    it('should return all keys if none to omit', () => {
      const obj = { a: 1, b: 2 };
      expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
    });

    it('should handle duplicate keys in omit list', () => {
      const obj = { a: 1, b: 2 };
      expect(omit(obj, ['a', 'a', 'a'])).toEqual({ b: 2 });
    });
  });

  describe('merge', () => {
    it('should return empty object for no arguments', () => {
      expect(merge()).toEqual({});
    });

    it('should merge multiple objects', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      expect(merge(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
    });

    it('should handle null objects', () => {
      const obj1 = { a: 1 };
      expect(merge(obj1, null, { b: 2 })).toEqual({ a: 1, b: 2 });
    });

    it('should not mutate original objects', () => {
      const obj1 = { a: 1 };
      const obj2 = { b: 2 };
      merge(obj1, obj2);
      expect(obj1).toEqual({ a: 1 });
      expect(obj2).toEqual({ b: 2 });
    });
  });

  describe('deepMerge', () => {
    it('should merge nested objects', () => {
      const target = { a: { b: 1, c: 2 }, d: 3 };
      const source = { a: { b: 4, e: 5 }, f: 6 };
      expect(deepMerge(target, source)).toEqual({ a: { b: 4, c: 2, e: 5 }, d: 3, f: 6 });
    });

    it('should overwrite non-object values', () => {
      const target = { a: [1, 2], b: { c: 3 } };
      const source = { a: [3, 4], b: { c: 5 } };
      expect(deepMerge(target, source)).toEqual({ a: [3, 4], b: { c: 5 } });
    });

    it('should not mutate original objects', () => {
      const target = { a: { b: 1 } };
      const source = { a: { c: 2 } };
      deepMerge(target, source);
      expect(target).toEqual({ a: { b: 1 } });
    });

    it('should handle null target', () => {
      expect(deepMerge(null, { a: 1 })).toEqual({ a: 1 });
    });

    it('should handle null source', () => {
      expect(deepMerge({ a: 1 }, null)).toEqual({ a: 1 });
    });
  });

  describe('mapValues', () => {
    it('should return empty object for null input', () => {
      expect(mapValues(null, x => x)).toEqual({});
    });

    it('should transform values', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(mapValues(obj, (v, k) => v * 2)).toEqual({ a: 2, b: 4, c: 6 });
    });

    it('should pass key and object to function', () => {
      const obj = { a: 1, b: 2 };
      const result = {};
      mapValues(obj, (v, k, o) => {
        result[k] = v + o[k];
        return result[k];
      });
      expect(result).toEqual({ a: 2, b: 4 });
    });

    it('should handle function returning undefined', () => {
      const obj = { a: 1, b: 2 };
      expect(mapValues(obj, () => undefined)).toEqual({ a: undefined, b: undefined });
    });
  });

  describe('invert', () => {
    it('should return empty object for null input', () => {
      expect(invert(null)).toEqual({});
    });

    it('should swap keys and values', () => {
      const obj = { a: 'x', b: 'y' };
      expect(invert(obj)).toEqual({ x: 'a', y: 'b' });
    });

    it('should keep last value for duplicate values', () => {
      const obj = { a: 'x', b: 'x', c: 'y' };
      expect(invert(obj)).toEqual({ x: 'b', y: 'c' });
    });

    it('should handle numeric values', () => {
      const obj = { a: 1, b: 2 };
      expect(invert(obj)).toEqual({ 1: 'a', 2: 'b' });
    });
  });

  describe('getPath', () => {
    it('should return default for null object', () => {
      expect(getPath(null, 'a.b', 'default')).toBe('default');
    });

    it('should access nested properties', () => {
      const obj = { a: { b: { c: 'value' } } };
      expect(getPath(obj, 'a.b.c')).toBe('value');
    });

    it('should return default for missing path', () => {
      const obj = { a: { b: 1 } };
      expect(getPath(obj, 'a.x.y', 'default')).toBe('default');
    });

    it('should return default when path is undefined', () => {
      const obj = { a: { b: undefined } };
      expect(getPath(obj, 'a.b', 'default')).toBe('default');
    });

    it('should work with empty path', () => {
      const obj = { a: 1 };
      expect(getPath(obj, '')).toEqual(obj);
    });

    it('should use undefined as default when not provided', () => {
      const obj = { a: 1 };
      expect(getPath(obj, 'x.y')).toBe(undefined);
    });
  });

  describe('setPath', () => {
    it('should return object for null input', () => {
      expect(setPath(null, 'a.b', 1)).toBe(null);
    });

    it('should set nested value', () => {
      const obj = {};
      setPath(obj, 'a.b.c', 'value');
      expect(obj).toEqual({ a: { b: { c: 'value' } } });
    });

    it('should create intermediate objects', () => {
      const obj = {};
      setPath(obj, 'x.y.z', 42);
      expect(obj).toEqual({ x: { y: { z: 42 } } });
    });

    it('should overwrite existing value', () => {
      const obj = { a: { b: 1 } };
      setPath(obj, 'a.b', 2);
      expect(obj).toEqual({ a: { b: 2 } });
    });

    it('should return the modified object', () => {
      const obj = { a: 1 };
      const result = setPath(obj, 'b', 2);
      expect(result).toBe(obj);
      expect(result).toEqual({ a: 1, b: 2 });
    });
  });

  describe('hasPath', () => {
    it('should return false for null object', () => {
      expect(hasPath(null, 'a.b')).toBe(false);
    });

    it('should return true for existing path', () => {
      const obj = { a: { b: { c: 1 } } };
      expect(hasPath(obj, 'a.b.c')).toBe(true);
    });

    it('should return false for missing path', () => {
      const obj = { a: { b: 1 } };
      expect(hasPath(obj, 'a.x')).toBe(false);
    });

    it('should return false for path ending with undefined', () => {
      const obj = { a: { b: undefined } };
      expect(hasPath(obj, 'a.b')).toBe(false);
    });

    it('should return true for path with null value', () => {
      const obj = { a: { b: null } };
      expect(hasPath(obj, 'a.b')).toBe(true);
    });
  });

  describe('isPlainObject', () => {
    it('should return true for object literals', () => {
      expect(isPlainObject({})).toBe(true);
      expect(isPlainObject({ a: 1, b: 2 })).toBe(true);
    });

    it('should return false for arrays', () => {
      expect(isPlainObject([])).toBe(false);
      expect(isPlainObject([1, 2, 3])).toBe(false);
    });

    it('should return false for null', () => {
      expect(isPlainObject(null)).toBe(false);
    });

    it('should return false for Date objects', () => {
      expect(isPlainObject(new Date())).toBe(false);
    });

    it('should return false for RegExp objects', () => {
      expect(isPlainObject(/test/)).toBe(false);
    });

    it('should return false for Map objects', () => {
      expect(isPlainObject(new Map())).toBe(false);
    });

    it('should return false for Set objects', () => {
      expect(isPlainObject(new Set())).toBe(false);
    });

    it('should return false for primitive values', () => {
      expect(isPlainObject(42)).toBe(false);
      expect(isPlainObject('string')).toBe(false);
      expect(isPlainObject(true)).toBe(false);
      expect(isPlainObject(undefined)).toBe(false);
    });
  });
});
