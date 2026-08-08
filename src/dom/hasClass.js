/**
 * Verifica se un elemento DOM ha una classe CSS specifica.
 * 
 * @param {HTMLElement} el - L'elemento DOM
 * @param {string} className - La classe CSS da verificare
 * @returns {boolean} - True se l'elemento ha la classe, False altrimenti
 */
function hasClass(el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    }
    // Fallback per browser vecchi
    return el.className.split(' ').indexOf(className) >= 0;
}

export { hasClass };
