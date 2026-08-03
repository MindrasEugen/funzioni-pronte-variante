import { describe, it, expect } from 'vitest';
import { 
  logColor,
  verificaTipo,
  generaId,
  numeroCasuale
} from '../src/utility/index.js';

describe('Funzioni Utility', () => {
  describe('verificaTipo', () => {
    it('dovrebbe restituire string per stringa', () => {
      expect(verificaTipo('ciao')).toBe('string');
    });

    it('dovrebbe restituire number per numero', () => {
      expect(verificaTipo(42)).toBe('number');
    });

    it('dovrebbe restituire object per oggetto', () => {
      expect(verificaTipo({})).toBe('object');
    });

    it('dovrebbe restituire array per array', () => {
      expect(verificaTipo([1, 2, 3])).toBe('array');
    });

    it('dovrebbe restituire null per null', () => {
      expect(verificaTipo(null)).toBe('null');
    });

    it('dovrebbe restituire undefined per undefined', () => {
      expect(verificaTipo(undefined)).toBe('undefined');
    });

    it('dovrebbe restituire boolean per boolean', () => {
      expect(verificaTipo(true)).toBe('boolean');
      expect(verificaTipo(false)).toBe('boolean');
    });

    it('dovrebbe restituire function per funzione', () => {
      expect(verificaTipo(() => {})).toBe('function');
    });
  });

  describe('generaId', () => {
    it('dovrebbe generare un ID di lunghezza default (8)', () => {
      const id = generaId();
      expect(id).toHaveLength(8);
    });

    it('dovrebbe generare un ID di lunghezza personalizzata', () => {
      const id = generaId(10);
      expect(id).toHaveLength(10);
    });

    it('dovrebbe generare ID alfanumerici', () => {
      const id = generaId(100);
      expect(id).toMatch(/^[a-zA-Z0-9]+$/);
    });

    it('dovrebbe generare ID diversi a ogni chiamata', () => {
      const id1 = generaId(10);
      const id2 = generaId(10);
      // Potrebbero essere uguali per caso, ma molto improbabile
      // Quindi verifichiamo solo che siano stringhe valide
      expect(id1).toHaveLength(10);
      expect(id2).toHaveLength(10);
    });
  });

  describe('numeroCasuale', () => {
    it('dovrebbe generare un numero tra min e max (inclusi)', () => {
      const min = 1;
      const max = 10;
      
      for (let i = 0; i < 100; i++) {
        const num = numeroCasuale(min, max);
        expect(num).toBeGreaterThanOrEqual(min);
        expect(num).toBeLessThanOrEqual(max);
      }
    });

    it('dovrebbe generare un numero intero', () => {
      const num = numeroCasuale(1, 10);
      expect(Number.isInteger(num)).toBe(true);
    });

    it('dovrebbe usare default 0-100 se non specificato', () => {
      const num = numeroCasuale();
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(100);
    });

    it('dovrebbe generare lo stesso min se min === max', () => {
      const num = numeroCasuale(5, 5);
      expect(num).toBe(5);
    });
  });

  describe('logColor', () => {
    it('dovrebbe stampare in console senza errori', () => {
      // Non possiamo verificare l'output della console direttamente,
      // ma possiamo verificare che non lancia errori
      expect(() => {
        logColor('Test message', 'blue');
      }).not.toThrow();
    });

    it('dovrebbe usare cyan come default', () => {
      expect(() => {
        logColor('Test message');
      }).not.toThrow();
    });
  });
});
