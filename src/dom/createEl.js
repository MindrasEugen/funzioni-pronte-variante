/**
 * Creates a new HTML element with optional tag, class, and text.
 * Crea un nuovo elemento HTML con tag, classe e testo opzionali.
 * 
 * @param {string} tag - The HTML tag of the element to create (e.g., 'div', 'span', 'p') / Il tag HTML dell'elemento da creare (es. 'div', 'span', 'p')
 * @param {string} [className=''] - The CSS class to apply to the element / La classe CSS da applicare all'elemento
 * @param {string} [text=''] - The text content of the element / Il contenuto testuale dell'elemento
 * @returns {HTMLElement} The created DOM element / L'elemento DOM creato
 */
function createEl(tag, className = '', text = '') {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
}

export { createEl };
