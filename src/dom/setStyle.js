/**
 * Imposta uno o più stili CSS su un elemento DOM.
 * 
 * @param {HTMLElement} el - L'elemento DOM
 * @param {string|Object} property - La proprietà CSS (es: 'color') o un oggetto con più proprietà
 * @param {string} [value] - Il valore dello stile (usato se property è una stringa)
 * @returns {void}
 */
function setStyle(el, property, value) {
    if (typeof property === 'object' && property !== null) {
        // Se property è un oggetto, imposta tutte le proprietà
        Object.keys(property).forEach(key => {
            el.style[key] = property[key];
        });
    } else {
        // Se property è una stringa, imposta la singola proprietà
        el.style[property] = value;
    }
}

export { setStyle };
