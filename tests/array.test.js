import { describe, it, expect } from 'vitest';
import { 
  filtraArray,
  ordinaArray,
  rimuoviDuplicati,
  mescolaArray
} from '../src/array/index.js';

describe('Funzioni Array', () => {
  describe('filtraArray', () => {
    it('dovrebbe filtrare un array di numeri', () => {
      const array = [1, 2, 3, 4, 5];
      const filtered = filtraArray(array, x => x > 2);
      expect(filtered).toEqual([3, 4, 5]);
    });

    it('dovrebbe filtrare un array di stringhe', () => {
      const array = ['a', 'b', 'c', 'd'];
      const filtered = filtraArray(array, x => x !== 'b');
      expect(filtered).toEqual(['a', 'c', 'd']);
    });

    it('dovrebbe restituire array vuoto per input non array', () => {
      expect(filtraArray(null)).toEqual([]);
      expect(filtraArray('non array')).toEqual([]);
    });

    it('dovrebbe restituire array vuoto per array vuoto', () => {
      expect(filtraArray([], x => x)).toEqual([]);
    });
  });

  describe('ordinaArray', () => {
    it('dovrebbe ordinare un array di numeri in modo crescente', () => {
      const array = [3, 1, 2, 5, 4];
      const sorted = ordinaArray(array);
      expect(sorted).toEqual([1, 2, 3, 4, 5]);
    });

    it('dovrebbe ordinare un array di stringhe', () => {
      const array = ['c', 'a', 'b'];
      const sorted = ordinaArray(array);
      expect(sorted).toEqual(['a', 'b', 'c']);
    });

    it('dovrebbe ordinare un array di oggetti per chiave', () => {
      const array = [{ id: 2 }, { id: 1 }, { id: 3 }];
      const sorted = ordinaArray(array, 'id');
      expect(sorted).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });

    it('dovrebbe restituire array vuoto per input non array', () => {
      expect(ordinaArray(null)).toEqual([]);
    });

    it('dovrebbe non modificare l array originale', () => {
      const array = [3, 1, 2];
      const original = [...array];
      ordinaArray(array);
      expect(array).toEqual(original);
    });
  });

  describe('rimuoviDuplicati', () => {
    it('dovrebbe rimuovere i duplicati da un array di numeri', () => {
      const array = [1, 2, 2, 3, 3, 3, 4];
      const unique = rimuoviDuplicati(array);
      expect(unique).toEqual([1, 2, 3, 4]);
    });

    it('dovrebbe rimuovere i duplicati da un array di stringhe', () => {
      const array = ['a', 'b', 'a', 'c', 'b'];
      const unique = rimuoviDuplicati(array);
      expect(unique).toEqual(['a', 'b', 'c']);
    });

    it('dovrebbe restituire array vuoto per input non array', () => {
      expect(rimuoviDuplicati(null)).toEqual([]);
    });

    it('dovrebbe restituire array vuoto per array vuoto', () => {
      expect(rimuoviDuplicati([])).toEqual([]);
    });

    it('dovrebbe preservare l ordine dei primi occorrenze', () => {
      const array = [3, 1, 2, 1, 3];
      const unique = rimuoviDuplicati(array);
      expect(unique).toEqual([3, 1, 2]);
    });
  });

  describe('mescolaArray', () => {
    it('dovrebbe mescolare un array', () => {
      const array = [1, 2, 3, 4, 5];
      const shuffled = mescolaArray(array);
      
      expect(shuffled).toHaveLength(5);
      expect(shuffled.sort()).toEqual(array.sort());
      expect(shuffled).toContain(1);
      expect(shuffled).toContain(2);
      expect(shuffled).toContain(3);
      expect(shuffled).toContain(4);
      expect(shuffled).toContain(5);
    });

    it('dovrebbe restituire array vuoto per input non array', () => {
      expect(mescolaArray(null)).toEqual([]);
    });

    it('dovrebbe restituire array vuoto per array vuoto', () => {
      expect(mescolaArray([])).toEqual([]);
    });

    it('dovrebbe non modificare l array originale', () => {
      const array = [1, 2, 3];
      const original = [...array];
      mescolaArray(array);
      expect(array).toEqual(original);
    });
  });
});
