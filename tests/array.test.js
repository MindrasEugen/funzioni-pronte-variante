import { describe, it, expect } from 'vitest';
import { 
  filterArray,
  sortArray,
  unique,
  shuffle
} from '../src/array/index.js';

describe('Array Functions', () => {
  describe('filterArray', () => {
    it('should filter an array of numbers', () => {
      const array = [1, 2, 3, 4, 5];
      const filtered = filterArray(array, x => x > 2);
      expect(filtered).toEqual([3, 4, 5]);
    });

    it('should filter an array of strings', () => {
      const array = ['a', 'b', 'c', 'd'];
      const filtered = filterArray(array, x => x !== 'b');
      expect(filtered).toEqual(['a', 'c', 'd']);
    });

    it('should return empty array for non-array input', () => {
      expect(filterArray(null)).toEqual([]);
      expect(filterArray('non array')).toEqual([]);
    });

    it('should return empty array for empty array', () => {
      expect(filterArray([], x => x)).toEqual([]);
    });
  });

  describe('sortArray', () => {
    it('should sort an array of numbers in ascending order', () => {
      const array = [3, 1, 2, 5, 4];
      const sorted = sortArray(array);
      expect(sorted).toEqual([1, 2, 3, 4, 5]);
    });

    it('should sort an array of strings', () => {
      const array = ['c', 'a', 'b'];
      const sorted = sortArray(array);
      expect(sorted).toEqual(['a', 'b', 'c']);
    });

    it('should sort an array of objects by key', () => {
      const array = [{ id: 2 }, { id: 1 }, { id: 3 }];
      const sorted = sortArray(array, 'id');
      expect(sorted).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });

    it('should return empty array for non-array input', () => {
      expect(sortArray(null)).toEqual([]);
    });

    it('should not modify the original array', () => {
      const array = [3, 1, 2];
      const original = [...array];
      sortArray(array);
      expect(array).toEqual(original);
    });
  });

  describe('unique', () => {
    it('should remove duplicates from an array of numbers', () => {
      const array = [1, 2, 2, 3, 3, 3, 4];
      const result = unique(array);
      expect(result).toEqual([1, 2, 3, 4]);
    });

    it('should remove duplicates from an array of strings', () => {
      const array = ['a', 'b', 'a', 'c', 'b'];
      const result = unique(array);
      expect(result).toEqual(['a', 'b', 'c']);
    });

    it('should return empty array for non-array input', () => {
      expect(unique(null)).toEqual([]);
    });

    it('should return empty array for empty array', () => {
      expect(unique([])).toEqual([]);
    });

    it('should preserve the order of first occurrences', () => {
      const array = [3, 1, 2, 1, 3];
      const result = unique(array);
      expect(result).toEqual([3, 1, 2]);
    });
  });

  describe('shuffle', () => {
    it('should shuffle an array', () => {
      const array = [1, 2, 3, 4, 5];
      const shuffled = shuffle(array);
      
      expect(shuffled).toHaveLength(5);
      expect(shuffled.sort()).toEqual(array.sort());
      expect(shuffled).toContain(1);
      expect(shuffled).toContain(2);
      expect(shuffled).toContain(3);
      expect(shuffled).toContain(4);
      expect(shuffled).toContain(5);
    });

    it('should return empty array for non-array input', () => {
      expect(shuffle(null)).toEqual([]);
    });

    it('should return empty array for empty array', () => {
      expect(shuffle([])).toEqual([]);
    });

    it('should not modify the original array', () => {
      const array = [1, 2, 3];
      const original = [...array];
      shuffle(array);
      expect(array).toEqual(original);
    });
  });
});
