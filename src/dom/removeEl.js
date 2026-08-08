/**
 * Rimuove un elemento dal DOM.
 * 
 * @param {HTMLElement} el - L'elemento DOM da rimuovere
 * @returns {void}
 */
function removeEl(el) {
    if (el && el.parentNode) {
        el.parentNode.removeChild(el);
    }
}

export { removeEl };
