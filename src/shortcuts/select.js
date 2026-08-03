/**
 * Shortcut for document.querySelector().
 * Scorciatoia per document.querySelector().
 * 
 * @param {string} selector - A valid CSS selector (e.g., '#id', '.class', 'div') / Un selettore CSS valido (es. '#id', '.class', 'div')
 * @returns {HTMLElement|null} The first element matching the selector, or null if not found / Il primo elemento che corrisponde al selettore, o null se non trovato
 */
function select(selector) {
    return document.querySelector(selector);
}

export { select };
