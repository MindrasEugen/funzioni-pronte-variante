/**
 * Rimuove una o più classi CSS da un elemento DOM.
 * 
 * @param {HTMLElement} el - L'elemento DOM
 * @param {string|string[]} className - La classe o le classi da rimuovere
 * @returns {void}
 */
function removeClass(el, className) {
    if (el.classList) {
        if (Array.isArray(className)) {
            el.classList.remove(...className);
        } else {
            el.classList.remove(className);
        }
    } else {
        // Fallback per browser vecchi
        const currentClasses = el.className.split(' ');
        const classesToRemove = Array.isArray(className) ? className : [className];
        el.className = currentClasses
            .filter(cls => !classesToRemove.includes(cls))
            .join(' ')
            .trim();
    }
}

export { removeClass };
