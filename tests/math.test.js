import { describe, it, expect } from 'vitest';
import { 
  calcolaMedia,
  calcolaPercentuale,
  arrotondaNumero,
  calcolaSomma,
  trovaMassimo,
  trovaMinimo,
  verificaNumeroPrimo,
  calcolaIpotenuza,
  calcolaFattoriale,
  calcolaPotenza,
  calcolaRadice,
  verificaInRange
} from '../src/math/index.js';

describe('Funzioni Matematiche', () => {
  describe('calcolaMedia', () => {
    it('dovrebbe calcolare la media di un array numerico', () => {
      expect(calcolaMedia([10, 20, 30])).toBe(20);
    });

    it('dovrebbe restituire 0 per array vuoto', () => {
      expect(calcolaMedia([])).toBe(0);
    });

    it('dovrebbe restituire 0 per input non array', () => {
      expect(calcolaMedia(null)).toBe(0);
      expect(calcolaMedia('non array')).toBe(0);
    });

    it('dovrebbe calcolare la media con numeri decimali', () => {
      expect(calcolaMedia([1.5, 2.5, 3])).toBe(2.3333333333333335);
    });
  });

  describe('calcolaPercentuale', () => {
    it('dovrebbe calcolare la percentuale di un valore', () => {
      expect(calcolaPercentuale(100, 10)).toBe(10);
      expect(calcolaPercentuale(200, 25)).toBe(50);
    });

    it('dovrebbe calcolare 0% di un valore', () => {
      expect(calcolaPercentuale(100, 0)).toBe(0);
    });

    it('dovrebbe calcolare 100% di un valore', () => {
      expect(calcolaPercentuale(50, 100)).toBe(50);
    });
  });

  describe('arrotondaNumero', () => {
    it('dovrebbe arrotondare a 0 decimali (intero)', () => {
      expect(arrotondaNumero(10.5)).toBe(11);
      expect(arrotondaNumero(10.4)).toBe(10);
    });

    it('dovrebbe arrotondare a N decimali', () => {
      expect(arrotondaNumero(10.1234, 2)).toBe(10.12);
      expect(arrotondaNumero(10.1234, 3)).toBe(10.123);
    });

    it('dovrebbe arrotondare con default 0 decimali', () => {
      expect(arrotondaNumero(10.5)).toBe(11);
    });
  });

  describe('calcolaSomma', () => {
    it('dovrebbe calcolare la somma di un array', () => {
      expect(calcolaSomma([1, 2, 3, 4])).toBe(10);
    });

    it('dovrebbe restituire 0 per array vuoto', () => {
      expect(calcolaSomma([])).toBe(0);
    });

    it('dovrebbe restituire 0 per input non array', () => {
      expect(calcolaSomma(null)).toBe(0);
    });

    it('dovrebbe calcolare somma con numeri negativi', () => {
      expect(calcolaSomma([10, -5, 3])).toBe(8);
    });
  });

  describe('trovaMassimo', () => {
    it('dovrebbe trovare il valore massimo', () => {
      expect(trovaMassimo([1, 5, 3, 9, 2])).toBe(9);
    });

    it('dovrebbe trovare il massimo con numeri negativi', () => {
      expect(trovaMassimo([-1, -5, -3])).toBe(-1);
    });

    it('dovrebbe restituire undefined per array vuoto', () => {
      expect(trovaMassimo([])).toBeUndefined();
    });

    it('dovrebbe restituire undefined per input non array', () => {
      expect(trovaMassimo(null)).toBeUndefined();
    });
  });

  describe('trovaMinimo', () => {
    it('dovrebbe trovare il valore minimo', () => {
      expect(trovaMinimo([1, 5, 3, 9, 2])).toBe(1);
    });

    it('dovrebbe trovare il minimo con numeri negativi', () => {
      expect(trovaMinimo([-1, -5, -3])).toBe(-5);
    });

    it('dovrebbe restituire undefined per array vuoto', () => {
      expect(trovaMinimo([])).toBeUndefined();
    });
  });

  describe('verificaNumeroPrimo', () => {
    it('dovrebbe restituire true per numeri primi', () => {
      expect(verificaNumeroPrimo(2)).toBe(true);
      expect(verificaNumeroPrimo(3)).toBe(true);
      expect(verificaNumeroPrimo(7)).toBe(true);
      expect(verificaNumeroPrimo(13)).toBe(true);
    });

    it('dovrebbe restituire false per numeri non primi', () => {
      expect(verificaNumeroPrimo(1)).toBe(false);
      expect(verificaNumeroPrimo(4)).toBe(false);
      expect(verificaNumeroPrimo(9)).toBe(false);
      expect(verificaNumeroPrimo(10)).toBe(false);
    });

    it('dovrebbe restituire false per numeri minori di 2', () => {
      expect(verificaNumeroPrimo(0)).toBe(false);
      expect(verificaNumeroPrimo(1)).toBe(false);
    });

    it('dovrebbe restituire false per numeri negativi', () => {
      expect(verificaNumeroPrimo(-5)).toBe(false);
    });
  });

  describe('calcolaIpotenuza', () => {
    it('dovrebbe calcolare l ipotenusa (3-4-5)', () => {
      expect(calcolaIpotenuza(3, 4)).toBe(5);
    });

    it('dovrebbe calcolare l ipotenusa (5-12-13)', () => {
      expect(calcolaIpotenuza(5, 12)).toBe(13);
    });

    it('dovrebbe calcolare l ipotenusa con numeri decimali', () => {
      const result = calcolaIpotenuza(1, 1);
      expect(result).toBeCloseTo(Math.sqrt(2), 10);
    });
  });

  describe('calcolaFattoriale', () => {
    it('dovrebbe calcolare il fattoriale di 5', () => {
      expect(calcolaFattoriale(5)).toBe(120);
    });

    it('dovrebbe restituire 1 per 0!', () => {
      expect(calcolaFattoriale(0)).toBe(1);
    });

    it('dovrebbe restituire 1 per 1!', () => {
      expect(calcolaFattoriale(1)).toBe(1);
    });

    it('dovrebbe restituire undefined per numeri negativi', () => {
      expect(calcolaFattoriale(-1)).toBeUndefined();
    });
  });

  describe('calcolaPotenza', () => {
    it('dovrebbe calcolare 2^3 = 8', () => {
      expect(calcolaPotenza(2, 3)).toBe(8);
    });

    it('dovrebbe calcolare 5^2 = 25', () => {
      expect(calcolaPotenza(5, 2)).toBe(25);
    });

    it('dovrebbe gestire esponenti negativi', () => {
      expect(calcolaPotenza(2, -1)).toBe(0.5);
    });
  });

  describe('calcolaRadice', () => {
    it('dovrebbe calcolare la radice quadrata di 16', () => {
      expect(calcolaRadice(16, 2)).toBe(4);
    });

    it('dovrebbe calcolare la radice cubica di 27', () => {
      expect(calcolaRadice(27, 3)).toBe(3);
    });

    it('dovrebbe usare indice 2 per default', () => {
      expect(calcolaRadice(9)).toBe(3);
    });
  });

  describe('verificaInRange', () => {
    it('dovrebbe restituire true se il numero è nel range', () => {
      expect(verificaInRange(5, 1, 10)).toBe(true);
      expect(verificaInRange(10, 1, 10)).toBe(true);
      expect(verificaInRange(1, 1, 10)).toBe(true);
    });

    it('dovrebbe restituire false se il numero è fuori dal range', () => {
      expect(verificaInRange(15, 1, 10)).toBe(false);
      expect(verificaInRange(0, 1, 10)).toBe(false);
    });

    it('dovrebbe funzionare con numeri decimali', () => {
      expect(verificaInRange(5.5, 1, 10)).toBe(true);
      expect(verificaInRange(10.1, 1, 10)).toBe(false);
    });
  });
});
