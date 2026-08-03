/**
 * Creates a new HTML element with optional tag, class, and text.
 * 
 * @param {string} tag - The HTML tag of the element to create (e.g., 'div', 'span', 'p')
 * @param {string} [className=''] - The CSS class to apply to the element
 * @param {string} [text=''] - The text content of the element
 * @returns {HTMLElement} The created DOM element
 */
function createEl(tag, className = '', text = '') {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
}

export { createEl };
