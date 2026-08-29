import { describe, it, expect } from 'vitest';
import { 
  chunk,
  compact,
  concat,
  countBy,
  difference,
  drop,
  fill,
  filterArray,
  first,
  flatten,
  groupBy,
  indexOf,
  intersection,
  keyBy,
  last,
  lastIndexOf,
  move,
  partition,
  range,
  rotate,
  sample,
  sampleSize,
  shuffle,
  sortArray,
  sumBy,
  tail,
  take,
  unique,
  union,
  without,
  zip
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

  describe('chunk', () => {
    it('should divide array into chunks of specified size', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it('should return empty array for non-array input', () => {
      expect(chunk(null, 2)).toEqual([]);
    });

    it('should return empty array for invalid size', () => {
      expect(chunk([1, 2, 3], 0)).toEqual([]);
      expect(chunk([1, 2, 3], -1)).toEqual([]);
    });

    it('should handle empty array', () => {
      expect(chunk([], 2)).toEqual([]);
    });
  });

  describe('flatten', () => {
    it('should flatten a nested array by one level', () => {
      expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
    });

    it('should return empty array for non-array input', () => {
      expect(flatten(null)).toEqual([]);
    });

    it('should handle already flat array', () => {
      expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should handle empty nested arrays', () => {
      expect(flatten([1, [], 2])).toEqual([1, 2]);
    });
  });

  describe('groupBy', () => {
    it('should group array by property', () => {
      const array = [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }, { type: 'vegetable', name: 'carrot' }];
      const result = groupBy(array, 'type');
      expect(result.fruit).toHaveLength(2);
      expect(result.vegetable).toHaveLength(1);
      expect(result.fruit[0].name).toBe('apple');
    });

    it('should group array by function', () => {
      const array = [1.1, 2.6, 3.2, 4.8];
      const result = groupBy(array, Math.floor);
      expect(result[1]).toEqual([1.1]);
      expect(result[2]).toEqual([2.6]);
      expect(result[3]).toEqual([3.2]);
      expect(result[4]).toEqual([4.8]);
    });

    it('should return empty object for non-array input', () => {
      expect(groupBy(null, 'key')).toEqual({});
    });
  });

  describe('keyBy', () => {
    it('should create object with keys from property', () => {
      const array = [{ id: 1, name: 'first' }, { id: 2, name: 'second' }];
      const result = keyBy(array, 'id');
      expect(result[1].name).toBe('first');
      expect(result[2].name).toBe('second');
    });

    it('should create object with keys from function', () => {
      const array = [{ id: 1 }, { id: 2 }];
      const result = keyBy(array, item => `key_${item.id}`);
      expect(result.key_1.id).toBe(1);
      expect(result.key_2.id).toBe(2);
    });

    it('should return empty object for non-array input', () => {
      expect(keyBy(null, 'key')).toEqual({});
    });
  });

  describe('difference', () => {
    it('should return elements in first array not in others', () => {
      expect(difference([1, 2, 3], [2], [3])).toEqual([1]);
    });

    it('should handle multiple exclusion arrays', () => {
      expect(difference([1, 2, 3, 4], [2, 3], [4])).toEqual([1]);
    });

    it('should return empty array for non-array input', () => {
      expect(difference(null, [1, 2])).toEqual([]);
    });

    it('should handle empty first array', () => {
      expect(difference([], [1, 2])).toEqual([]);
    });
  });

  describe('intersection', () => {
    it('should return common elements across arrays', () => {
      expect(intersection([1, 2, 3], [2, 3, 4], [3, 4, 5])).toEqual([3]);
    });

    it('should return all elements if only one array provided', () => {
      expect(intersection([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should return empty array if no arrays provided', () => {
      expect(intersection()).toEqual([]);
    });

    it('should handle empty arrays', () => {
      expect(intersection([1, 2], [])).toEqual([]);
    });
  });

  describe('union', () => {
    it('should return unique elements from all arrays', () => {
      expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
    });

    it('should handle non-array arguments', () => {
      expect(union([1, 2], null, [3], 'not array')).toEqual([1, 2, 3]);
    });

    it('should handle empty arrays', () => {
      expect(union([], [1, 2], [])).toEqual([1, 2]);
    });
  });

  describe('without', () => {
    it('should return array without specified values', () => {
      expect(without([1, 2, 3, 2, 1], 1, 2)).toEqual([3]);
    });

    it('should return empty array for non-array input', () => {
      expect(without(null, 1, 2)).toEqual([]);
    });

    it('should handle empty array', () => {
      expect(without([], 1, 2)).toEqual([]);
    });
  });

  describe('first', () => {
    it('should return first element', () => {
      expect(first([1, 2, 3])).toBe(1);
    });

    it('should return undefined for empty array', () => {
      expect(first([])).toBeUndefined();
    });

    it('should return undefined for non-array input', () => {
      expect(first(null)).toBeUndefined();
    });
  });

  describe('last', () => {
    it('should return last element', () => {
      expect(last([1, 2, 3])).toBe(3);
    });

    it('should return undefined for empty array', () => {
      expect(last([])).toBeUndefined();
    });

    it('should return undefined for non-array input', () => {
      expect(last(null)).toBeUndefined();
    });
  });

  describe('tail', () => {
    it('should return all elements except first', () => {
      expect(tail([1, 2, 3])).toEqual([2, 3]);
    });

    it('should return empty array for single element array', () => {
      expect(tail([1])).toEqual([]);
    });

    it('should return empty array for empty array', () => {
      expect(tail([])).toEqual([]);
    });

    it('should return empty array for non-array input', () => {
      expect(tail(null)).toEqual([]);
    });
  });

  describe('take', () => {
    it('should return first n elements', () => {
      expect(take([1, 2, 3, 4], 2)).toEqual([1, 2]);
    });

    it('should return all elements if n > array length', () => {
      expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
    });

    it('should return empty array for n <= 0', () => {
      expect(take([1, 2, 3], 0)).toEqual([]);
      expect(take([1, 2, 3], -1)).toEqual([]);
    });

    it('should return empty array for non-array input', () => {
      expect(take(null, 2)).toEqual([]);
    });
  });

  describe('drop', () => {
    it('should return all elements except first n', () => {
      expect(drop([1, 2, 3, 4], 2)).toEqual([3, 4]);
    });

    it('should return empty array if n >= array length', () => {
      expect(drop([1, 2, 3], 5)).toEqual([]);
    });

    it('should return empty array for n <= 0', () => {
      expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
    });

    it('should return empty array for non-array input', () => {
      expect(drop(null, 2)).toEqual([]);
    });
  });

  describe('compact', () => {
    it('should remove falsy values from array', () => {
      expect(compact([0, 1, false, true, '', 'hello', null, undefined, NaN])).toEqual([1, true, 'hello']);
    });

    it('should return empty array for non-array input', () => {
      expect(compact(null)).toEqual([]);
    });

    it('should handle empty array', () => {
      expect(compact([])).toEqual([]);
    });
  });

  describe('fill', () => {
    it('should fill array with value from start to end', () => {
      const array = [1, 2, 3, 4, 5];
      fill(array, 0, 1, 4);
      expect(array).toEqual([1, 0, 0, 0, 5]);
    });

    it('should fill entire array if no end specified', () => {
      const array = [1, 2, 3];
      fill(array, 0);
      expect(array).toEqual([0, 0, 0]);
    });

    it('should return empty array for non-array input', () => {
      expect(fill(null, 0)).toEqual([]);
    });

    it('should handle negative indices', () => {
      const array = [1, 2, 3, 4];
      fill(array, 0, -3, -1);
      expect(array).toEqual([1, 0, 0, 4]);
    });
  });

  describe('range', () => {
    it('should create array from start to end with step 1', () => {
      expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
    });

    it('should handle negative step', () => {
      expect(range(5, 0, -1)).toEqual([5, 4, 3, 2, 1]);
    });

    it('should handle custom step', () => {
      expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
    });

    it('should return empty array for step 0', () => {
      expect(range(0, 5, 0)).toEqual([]);
    });

    it('should handle negative ranges', () => {
      expect(range(-2, 2)).toEqual([-2, -1, 0, 1]);
    });
  });

  describe('concat', () => {
    it('should concatenate arrays', () => {
      expect(concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });

    it('should handle mixed arguments', () => {
      expect(concat([1, 2], 3, [4], 5)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle empty arrays', () => {
      expect(concat([], [1, 2], [])).toEqual([1, 2]);
    });

    it('should handle no arguments', () => {
      expect(concat()).toEqual([]);
    });
  });

  describe('indexOf', () => {
    it('should return index of value', () => {
      expect(indexOf([1, 2, 3, 2], 2)).toBe(1);
    });

    it('should return -1 if value not found', () => {
      expect(indexOf([1, 2, 3], 4)).toBe(-1);
    });

    it('should start from specified index', () => {
      expect(indexOf([1, 2, 3, 2], 2, 2)).toBe(3);
    });

    it('should return -1 for non-array input', () => {
      expect(indexOf(null, 1)).toBe(-1);
    });

    it('should handle negative fromIndex', () => {
      expect(indexOf([1, 2, 3, 2], 2, -2)).toBe(3);
    });
  });

  describe('lastIndexOf', () => {
    it('should return last index of value', () => {
      expect(lastIndexOf([1, 2, 3, 2], 2)).toBe(3);
    });

    it('should return -1 if value not found', () => {
      expect(lastIndexOf([1, 2, 3], 4)).toBe(-1);
    });

    it('should start from specified index', () => {
      // Array: [1, 2, 3, 2, 3] - 3 appears at indices 2 and 4
      // Starting from index 4, should find 4
      expect(lastIndexOf([1, 2, 3, 2, 3], 3, 4)).toBe(4);
      // Starting from index 3, should find 2 (going backwards: 3->2, and array[2] === 3)
      expect(lastIndexOf([1, 2, 3, 2, 3], 3, 3)).toBe(2);
    });

    it('should return -1 for non-array input', () => {
      expect(lastIndexOf(null, 1)).toBe(-1);
    });
  });

  describe('sample', () => {
    it('should return random element from array', () => {
      const array = [1, 2, 3, 4, 5];
      const sampled = sample(array);
      expect(array).toContain(sampled);
    });

    it('should return undefined for empty array', () => {
      expect(sample([])).toBeUndefined();
    });

    it('should return undefined for non-array input', () => {
      expect(sample(null)).toBeUndefined();
    });

    it('should handle array with one element', () => {
      expect(sample([42])).toBe(42);
    });
  });

  describe('sampleSize', () => {
    it('should return n unique random elements', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const sampled = sampleSize(array, 5);
      expect(sampled).toHaveLength(5);
      expect(new Set(sampled).size).toBe(5);
      expect(sampled.every(el => array.includes(el))).toBe(true);
    });

    it('should return empty array for n <= 0', () => {
      expect(sampleSize([1, 2, 3], 0)).toEqual([]);
      expect(sampleSize([1, 2, 3], -1)).toEqual([]);
    });

    it('should return empty array for non-array input', () => {
      expect(sampleSize(null, 3)).toEqual([]);
    });

    it('should return all elements if n > array length', () => {
      const array = [1, 2, 3];
      const sampled = sampleSize(array, 10);
      expect(sampled).toHaveLength(3);
      expect(new Set(sampled).size).toBe(3);
    });
  });

  describe('partition', () => {
    it('should split array into matched and unmatched', () => {
      const array = [1, 2, 3, 4, 5, 6];
      const [matched, unmatched] = partition(array, x => x % 2 === 0);
      expect(matched).toEqual([2, 4, 6]);
      expect(unmatched).toEqual([1, 3, 5]);
    });

    it('should return two empty arrays for non-array input', () => {
      expect(partition(null, x => x)).toEqual([[], []]);
    });

    it('should return two empty arrays for non-function predicate', () => {
      expect(partition([1, 2, 3], null)).toEqual([[], []]);
    });

    it('should handle empty array', () => {
      expect(partition([], x => x)).toEqual([[], []]);
    });

    it('should preserve all elements', () => {
      const array = [1, 2, 3, 4, 5];
      const [matched, unmatched] = partition(array, x => x > 2);
      expect([...matched, ...unmatched].sort()).toEqual(array.sort());
    });
  });

  describe('zip', () => {
    it('should zip multiple arrays', () => {
      expect(zip([1, 2], ['a', 'b'])).toEqual([[1, 'a'], [2, 'b']]);
    });

    it('should zip arrays of different lengths', () => {
      expect(zip([1, 2, 3], ['a', 'b'])).toEqual([[1, 'a'], [2, 'b'], [3, undefined]]);
    });

    it('should handle single array', () => {
      expect(zip([1, 2, 3])).toEqual([[1], [2], [3]]);
    });

    it('should handle no arrays', () => {
      expect(zip()).toEqual([]);
    });

    it('should handle empty arrays', () => {
      expect(zip([], [1, 2])).toEqual([[undefined, 1], [undefined, 2]]);
    });
  });

  describe('rotate', () => {
    it('should rotate array to the right', () => {
      expect(rotate([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
    });

    it('should rotate array to the left', () => {
      expect(rotate([1, 2, 3, 4, 5], -2)).toEqual([3, 4, 5, 1, 2]);
    });

    it('should handle rotation larger than array length', () => {
      expect(rotate([1, 2, 3], 5)).toEqual([2, 3, 1]);
    });

    it('should return empty array for non-array input', () => {
      expect(rotate(null, 2)).toEqual([]);
    });

    it('should return empty array for empty array', () => {
      expect(rotate([], 2)).toEqual([]);
    });

    it('should handle rotation of 0', () => {
      const array = [1, 2, 3];
      expect(rotate(array, 0)).toEqual([1, 2, 3]);
    });
  });

  describe('move', () => {
    it('should move element from one index to another', () => {
      const array = [1, 2, 3, 4, 5];
      expect(move(array, 2, 0)).toEqual([3, 1, 2, 4, 5]);
    });

    it('should move element to higher index', () => {
      const array = [1, 2, 3, 4, 5];
      expect(move(array, 0, 3)).toEqual([2, 3, 4, 1, 5]);
    });

    it('should return empty array for non-array input', () => {
      expect(move(null, 0, 1)).toEqual([]);
    });

    it('should handle negative indices', () => {
      const array = [1, 2, 3, 4, 5];
      expect(move(array, -1, 0)).toEqual([5, 1, 2, 3, 4]);
    });

    it('should not mutate original array', () => {
      const array = [1, 2, 3, 4, 5];
      move(array, 2, 0);
      expect(array).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('countBy', () => {
    it('should count elements by category', () => {
      const array = [6.1, 4.2, 6.3, 4.1, 6.4];
      expect(countBy(array, Math.floor)).toEqual({ 4: 2, 6: 3 });
    });

    it('should return empty object for non-array input', () => {
      expect(countBy(null, x => x)).toEqual({});
    });

    it('should return empty object for non-function', () => {
      expect(countBy([1, 2, 3], null)).toEqual({});
    });

    it('should handle empty array', () => {
      expect(countBy([], x => x)).toEqual({});
    });

    it('should work with string categorization', () => {
      const array = ['apple', 'banana', 'apricot', 'blueberry'];
      expect(countBy(array, word => word[0])).toEqual({ a: 2, b: 2 });
    });
  });

  describe('sumBy', () => {
    it('should sum transformed values', () => {
      const array = [{ value: 1 }, { value: 2 }, { value: 3 }];
      expect(sumBy(array, item => item.value)).toBe(6);
    });

    it('should return 0 for non-array input', () => {
      expect(sumBy(null, x => x)).toBe(0);
    });

    it('should return 0 for non-function', () => {
      expect(sumBy([1, 2, 3], null)).toBe(0);
    });

    it('should handle empty array', () => {
      expect(sumBy([], x => x)).toBe(0);
    });

    it('should skip non-numeric results', () => {
      const array = [{ v: 1 }, { v: null }, { v: 2 }];
      expect(sumBy(array, item => item.v)).toBe(3);
    });

    it('should handle NaN values', () => {
      const array = [{ v: 1 }, { v: NaN }, { v: 2 }];
      expect(sumBy(array, item => item.v)).toBe(3);
    });
  });
});
