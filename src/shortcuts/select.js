/**
 * Shortcut for document.querySelector().
 * 
 * @param {string} selector - A valid CSS selector (e.g., '#id', '.class', 'div')
 * @returns {HTMLElement|null} The first element matching the selector, or null if not found
 */
function select(selector) {
    return document.querySelector(selector);
}

export { select };
