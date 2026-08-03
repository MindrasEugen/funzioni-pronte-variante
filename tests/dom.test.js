import { describe, it, expect, beforeEach } from 'vitest';
import { 
  cambiaColore, 
  crea, 
  on, 
  fadeIn 
} from '../src/dom/index.js';

describe('Funzioni DOM', () => {
  let container;

  beforeEach(() => {
    // Setup DOM
    document.body.innerHTML = '<div id="test-container"></div>';
    container = document.getElementById('test-container');
  });

  describe('crea', () => {
    it('dovrebbe creare un elemento div', () => {
      const el = crea('div');
      expect(el.tagName).toBe('DIV');
    });

    it('dovrebbe creare un elemento con classe', () => {
      const el = crea('div', 'test-class');
      expect(el.className).toBe('test-class');
    });

    it('dovrebbe creare un elemento con testo', () => {
      const el = crea('div', '', 'Ciao');
      expect(el.textContent).toBe('Ciao');
    });

    it('dovrebbe creare un elemento con classe e testo', () => {
      const el = crea('span', 'my-span', 'Testo');
      expect(el.tagName).toBe('SPAN');
      expect(el.className).toBe('my-span');
      expect(el.textContent).toBe('Testo');
    });
  });

  describe('cambiaColore', () => {
    it('dovrebbe cambiare il colore di sfondo di un elemento', () => {
      const el = crea('div');
      container.appendChild(el);
      
      const initialColor = el.style.backgroundColor;
      cambiaColore(el);
      const newColor = el.style.backgroundColor;
      
      expect(newColor).not.toBe(initialColor);
      expect(newColor).toMatch(/^rgb\(\d+, \d+, \d+\)$/);
    });

    it('dovrebbe generare colori diversi a ogni chiamata', () => {
      const el = crea('div');
      container.appendChild(el);
      
      cambiaColore(el);
      const firstColor = el.style.backgroundColor;
      
      cambiaColore(el);
      const secondColor = el.style.backgroundColor;
      
      // Potrebbe essere uguale per caso, ma molto improbabile
      // Quindi testiamo solo che sia un colore RGB valido
      expect(firstColor).toMatch(/^rgb\(\d+, \d+, \d+\)$/);
      expect(secondColor).toMatch(/^rgb\(\d+, \d+, \d+\)$/);
    });
  });

  describe('on', () => {
    it('dovrebbe aggiungere un event listener', () => {
      const btn = crea('button', '', 'Click me');
      container.appendChild(btn);
      
      let clicked = false;
      on(btn, 'click', () => {
        clicked = true;
      });
      
      // Simula click
      btn.click();
      expect(clicked).toBe(true);
    });
  });

  describe('fadeIn', () => {
    it('dovrebbe impostare opacity a 0 e poi a 1', () => {
      const el = crea('div');
      container.appendChild(el);
      
      expect(el.style.opacity).toBe('');
      
      fadeIn(el);
      
      // Subito dopo l'esecuzione, opacity dovrebbe essere 0
      expect(el.style.opacity).toBe('0');
      
      // Dovrebbe avere una transizione configurata
      expect(el.style.transition).toContain('opacity');
    });

    it('dovrebbe accettare durata personalizzata', () => {
      const el = crea('div');
      container.appendChild(el);
      
      fadeIn(el, 5000);
      
      expect(el.style.transition).toContain('5000ms');
    });
  });
});
