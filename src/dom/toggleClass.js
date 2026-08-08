/**
 * Alterna una classe CSS su un elemento DOM.
 * Se la classe è presente, la rimuove; altrimenti, la aggiunge.
 * 
 * @param {HTMLElement} el - L'elemento DOM
 * @param {string} className - La classe CSS da alternare
 * @returns {void}
 */
function toggleClass(el, className) {
    if (el.classList) {
        el.classList.toggle(className);
    } else {
        // Fallback per browser vecchi
        const classes = el.className.split(' ');
        const existingIndex = classes.indexOf(className);
        if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
        } else {
            classes.push(className);
        }
        el.className = classes.join(' ');
    }
}

export { toggleClass };
