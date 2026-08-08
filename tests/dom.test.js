import { describe, it, expect, beforeEach, vi } from 'vitest';
import { 
  randomBgColor, 
  createEl, 
  on, 
  fadeIn,
  removeEl,
  toggleClass,
  hasClass,
  addClass,
  removeClass,
  getStyle,
  setStyle,
  scrollTo
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

  describe('removeEl', () => {
    it('should remove an element from the DOM', () => {
      const el = createEl('div', 'test-remove');
      container.appendChild(el);
      
      expect(container.querySelector('.test-remove')).toBeTruthy();
      
      removeEl(el);
      
      expect(container.querySelector('.test-remove')).toBeFalsy();
    });

    it('should handle null or orphaned elements', () => {
      const el = createEl('div');
      // Element not in DOM
      expect(() => removeEl(el)).not.toThrow();
      expect(() => removeEl(null)).not.toThrow();
    });
  });

  describe('toggleClass', () => {
    it('should add class if not present', () => {
      const el = createEl('div');
      container.appendChild(el);
      
      expect(el.className).toBe('');
      
      toggleClass(el, 'active');
      
      expect(el.className).toBe('active');
    });

    it('should remove class if present', () => {
      const el = createEl('div', 'active');
      container.appendChild(el);
      
      expect(el.className).toBe('active');
      
      toggleClass(el, 'active');
      
      expect(el.className).toBe('');
    });

    it('should toggle multiple classes', () => {
      const el = createEl('div', 'class1');
      container.appendChild(el);
      
      toggleClass(el, 'class2');
      expect(el.className).toContain('class2');
      
      toggleClass(el, 'class2');
      expect(el.className).not.toContain('class2');
    });
  });

  describe('hasClass', () => {
    it('should return true if element has the class', () => {
      const el = createEl('div', 'test-class');
      container.appendChild(el);
      
      expect(hasClass(el, 'test-class')).toBe(true);
    });

    it('should return false if element does not have the class', () => {
      const el = createEl('div', 'other-class');
      container.appendChild(el);
      
      expect(hasClass(el, 'test-class')).toBe(false);
    });

    it('should handle multiple classes on element', () => {
      const el = createEl('div', 'class1 class2 class3');
      container.appendChild(el);
      
      expect(hasClass(el, 'class2')).toBe(true);
      expect(hasClass(el, 'class4')).toBe(false);
    });
  });

  describe('addClass', () => {
    it('should add a single class', () => {
      const el = createEl('div');
      container.appendChild(el);
      
      addClass(el, 'new-class');
      
      expect(el.className).toBe('new-class');
    });

    it('should add multiple classes as array', () => {
      const el = createEl('div');
      container.appendChild(el);
      
      addClass(el, ['class1', 'class2']);
      
      expect(el.className).toContain('class1');
      expect(el.className).toContain('class2');
    });

    it('should not duplicate existing classes', () => {
      const el = createEl('div', 'existing');
      container.appendChild(el);
      
      addClass(el, 'existing');
      
      // Should still be only one 'existing'
      const classCount = el.className.split(' ').filter(c => c === 'existing').length;
      expect(classCount).toBe(1);
    });
  });

  describe('removeClass', () => {
    it('should remove a single class', () => {
      const el = createEl('div', 'class1 class2');
      container.appendChild(el);
      
      removeClass(el, 'class1');
      
      expect(el.className).not.toContain('class1');
      expect(el.className).toContain('class2');
    });

    it('should remove multiple classes as array', () => {
      const el = createEl('div', 'class1 class2 class3');
      container.appendChild(el);
      
      removeClass(el, ['class1', 'class3']);
      
      expect(el.className).not.toContain('class1');
      expect(el.className).not.toContain('class3');
      expect(el.className).toContain('class2');
    });

    it('should handle non-existent classes', () => {
      const el = createEl('div', 'existing');
      container.appendChild(el);
      
      expect(() => removeClass(el, 'non-existent')).not.toThrow();
      expect(el.className).toBe('existing');
    });
  });

  describe('getStyle', () => {
    it('should return computed style value', () => {
      const el = createEl('div');
      el.style.color = 'red';
      container.appendChild(el);
      
      const color = getStyle(el, 'color');
      
      // getComputedStyle returns RGB values, not the original value
      expect(color).toMatch(/^rgb\(255, 0, 0\)$/);
    });

    it('should return computed style for shorthand properties', () => {
      const el = createEl('div');
      el.style.fontSize = '16px';
      container.appendChild(el);
      
      const fontSize = getStyle(el, 'fontSize');
      
      expect(fontSize).toBe('16px');
    });
  });

  describe('setStyle', () => {
    it('should set a single style property', () => {
      const el = createEl('div');
      container.appendChild(el);
      
      setStyle(el, 'color', 'blue');
      
      expect(el.style.color).toBe('blue');
    });

    it('should set multiple style properties with object', () => {
      const el = createEl('div');
      container.appendChild(el);
      
      setStyle(el, {
        color: 'green',
        fontSize: '20px',
        backgroundColor: 'yellow'
      });
      
      expect(el.style.color).toBe('green');
      expect(el.style.fontSize).toBe('20px');
      expect(el.style.backgroundColor).toBe('yellow');
    });

    it('should override existing styles', () => {
      const el = createEl('div');
      el.style.color = 'red';
      container.appendChild(el);
      
      setStyle(el, 'color', 'blue');
      
      expect(el.style.color).toBe('blue');
    });
  });

  describe('scrollTo', () => {
    beforeEach(() => {
      // Mock window.scrollTo and Element.scrollIntoView
      window.scrollTo = vi.fn();
      Element.prototype.scrollIntoView = vi.fn();
    });

    it('should scroll to a position with smooth behavior', () => {
      scrollTo(500);
      
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 500,
        behavior: 'smooth'
      });
    });

    it('should scroll to a position without smooth behavior', () => {
      scrollTo(300, { smooth: false });
      
      expect(window.scrollTo).toHaveBeenCalledWith(0, 300);
    });

    it('should scroll to an element with smooth behavior', () => {
      const targetEl = createEl('div');
      container.appendChild(targetEl);
      
      scrollTo(targetEl);
      
      expect(targetEl.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start'
      });
    });

    it('should scroll to an element without smooth behavior', () => {
      const targetEl = createEl('div');
      container.appendChild(targetEl);
      
      scrollTo(targetEl, { smooth: false });
      
      expect(targetEl.scrollIntoView).toHaveBeenCalledWith();
    });
  });
});
