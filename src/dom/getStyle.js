/**
 * Ottiene il valore di uno stile computato di un elemento DOM.
 * 
 * @param {HTMLElement} el - L'elemento DOM
 * @param {string} property - La proprietà CSS (es: 'color', 'fontSize')
 * @returns {string} - Il valore dello stile computato
 */
function getStyle(el, property) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(el)[property];
    }
    // Fallback per browser vecchi
    return el.style[property];
}

export { getStyle };
