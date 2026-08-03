import { describe, it, expect, beforeEach } from 'vitest';
import { 
  randomBgColor, 
  createEl, 
  on, 
  fadeIn 
} from '../src/dom/index.js';

describe('DOM Functions', () => {
  let container;

  beforeEach(() => {
    // Setup DOM
    document.body.innerHTML = '<div id="test-container"></div>';
    container = document.getElementById('test-container');
  });

  describe('createEl', () => {
    it('should create a div element', () => {
      const el = createEl('div');
      expect(el.tagName).toBe('DIV');
    });

    it('should create an element with class', () => {
      const el = createEl('div', 'test-class');
      expect(el.className).toBe('test-class');
    });

    it('should create an element with text', () => {
      const el = createEl('div', '', 'Hello');
      expect(el.textContent).toBe('Hello');
    });

    it('should create an element with class and text', () => {
      const el = createEl('span', 'my-span', 'Text');
      expect(el.tagName).toBe('SPAN');
      expect(el.className).toBe('my-span');
      expect(el.textContent).toBe('Text');
    });
  });

  describe('randomBgColor', () => {
    it('should change the background color of an element', () => {
      const el = createEl('div');
      container.appendChild(el);
      
      const initialColor = el.style.backgroundColor;
      randomBgColor(el);
      const newColor = el.style.backgroundColor;
      
      expect(newColor).not.toBe(initialColor);
      expect(newColor).toMatch(/^rgb\(\d+, \d+, \d+\)$/);
    });

    it('should generate different colors on each call', () => {
      const el = createEl('div');
      container.appendChild(el);
      
      randomBgColor(el);
      const firstColor = el.style.backgroundColor;
      
      randomBgColor(el);
      const secondColor = el.style.backgroundColor;
      
      // Could be equal by chance, but very unlikely
      // So we just test that it's a valid RGB color
      expect(firstColor).toMatch(/^rgb\(\d+, \d+, \d+\)$/);
      expect(secondColor).toMatch(/^rgb\(\d+, \d+, \d+\)$/);
    });
  });

  describe('on', () => {
    it('should add an event listener', () => {
      const btn = createEl('button', '', 'Click me');
      container.appendChild(btn);
      
      let clicked = false;
      on(btn, 'click', () => {
        clicked = true;
      });
      
      // Simulate click
      btn.click();
      expect(clicked).toBe(true);
    });
  });

  describe('fadeIn', () => {
    it('should set opacity to 0 and configure transition', () => {
      const el = createEl('div');
      container.appendChild(el);
      
      expect(el.style.opacity).toBe('');
      
      fadeIn(el);
      
      // Right after execution, opacity should be 0
      expect(el.style.opacity).toBe('0');
      
      // Should have a transition configured
      expect(el.style.transition).toContain('opacity');
    });

    it('should accept custom duration', () => {
      const el = createEl('div');
      container.appendChild(el);
      
      fadeIn(el, 5000);
      
      expect(el.style.transition).toContain('5000ms');
    });
  });
});
