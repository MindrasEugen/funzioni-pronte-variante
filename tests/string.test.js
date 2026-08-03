import { describe, it, expect } from 'vitest';
import { 
  invertiStringa,
  conteggioCaratteri,
  capitalizzaParola,
  tagliaTestuale,
  contieneTestuale,
  sostituisciTestuale
} from '../src/string/index.js';

describe('Funzioni String', () => {
  describe('invertiStringa', () => {
    it('dovrebbe invertire una stringa', () => {
      expect(invertiStringa('ciao')).toBe('oaic');
    });

    it('dovrebbe invertire una stringa con numeri', () => {
      expect(invertiStringa('123')).toBe('321');
    });

    it('dovrebbe restituire stringa vuota per stringa vuota', () => {
      expect(invertiStringa('')).toBe('');
    });

    it('dovrebbe restituire stringa vuota per input non stringa', () => {
      expect(invertiStringa(null)).toBe('');
      expect(invertiStringa(123)).toBe('');
    });
  });

  describe('conteggioCaratteri', () => {
    it('dovrebbe contare i caratteri di una stringa', () => {
      expect(conteggioCaratteri('ciao')).toBe(4);
    });

    it('dovrebbe contare i caratteri inclusi spazi e punteggiatura', () => {
      expect(conteggioCaratteri('Ciao mondo!')).toBe(11);
    });

    it('dovrebbe restituire 0 per stringa vuota', () => {
      expect(conteggioCaratteri('')).toBe(0);
    });

    it('dovrebbe restituire 0 per input non stringa', () => {
      expect(conteggioCaratteri(null)).toBe(0);
      expect(conteggioCaratteri(123)).toBe(0);
    });
  });

  describe('capitalizzaParola', () => {
    it('dovrebbe capitalizzare la prima lettera', () => {
      expect(capitalizzaParola('gino')).toBe('Gino');
    });

    it('dovrebbe transformare il resto in minuscolo', () => {
      expect(capitalizzaParola('CIAO')).toBe('Ciao');
      expect(capitalizzaParola('jAvAsCrIpT')).toBe('Javascript');
    });

    it('dovrebbe restituire stringa vuota per stringa vuota', () => {
      expect(capitalizzaParola('')).toBe('');
    });

    it('dovrebbe restituire stringa vuota per input non stringa', () => {
      expect(capitalizzaParola(null)).toBe('');
    });
  });

  describe('tagliaTestuale', () => {
    it('dovrebbe tagliare una stringa a N caratteri', () => {
      expect(tagliaTestuale('ciao mondo', 4)).toBe('ciao');
    });

    it('dovrebbe restituire la stringa originale se è più corta di max', () => {
      expect(tagliaTestuale('ciao', 10)).toBe('ciao');
    });

    it('dovrebbe restituire stringa vuota se max <= 0', () => {
      expect(tagliaTestuale('ciao', 0)).toBe('');
      expect(tagliaTestuale('ciao', -1)).toBe('');
    });

    it('dovrebbe restituire stringa vuota per input non stringa', () => {
      expect(tagliaTestuale(null, 5)).toBe('');
    });
  });

  describe('contieneTestuale', () => {
    it('dovrebbe restituire true se il sottotesto è contenuto', () => {
      expect(contieneTestuale('Ciao mondo', 'Ciao')).toBe(true);
      expect(contieneTestuale('Ciao mondo', 'mondo')).toBe(true);
    });

    it('dovrebbe restituire false se il sottotesto non è contenuto', () => {
      expect(contieneTestuale('Ciao mondo', 'Mondo')).toBe(false);
    });

    it('dovrebbe essere case-sensitive', () => {
      expect(contieneTestuale('Ciao', 'ciao')).toBe(false);
    });

    it('dovrebbe restituire false per input non stringhe', () => {
      expect(contieneTestuale(123, 'ciao')).toBe(false);
      expect(contieneTestuale('ciao', null)).toBe(false);
    });
  });

  describe('sostituisciTestuale', () => {
    it('dovrebbe sostituire tutte le occorrenze', () => {
      expect(sostituisciTestuale('ciao ciao', 'ciao', 'addio')).toBe('addio addio');
    });

    it('dovrebbe restituire la stringa originale se non trova il testo', () => {
      expect(sostituisciTestuale('testo', 'x', 'y')).toBe('testo');
    });

    it('dovrebbe sostituire con stringa vuota', () => {
      expect(sostituisciTestuale('JavaScript', 'Script', '')).toBe('Java');
    });

    it('dovrebbe restituire stringa vuota per input non stringa', () => {
      expect(sostituisciTestuale(null, 'a', 'b')).toBe('');
    });
  });
});
