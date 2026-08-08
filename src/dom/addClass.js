/**
 * Aggiunge una o più classi CSS a un elemento DOM.
 * 
 * @param {HTMLElement} el - L'elemento DOM
 * @param {string|string[]} className - La classe o le classi da aggiungere
 * @returns {void}
 */
function addClass(el, className) {
    if (el.classList) {
        if (Array.isArray(className)) {
            el.classList.add(...className);
        } else {
            el.classList.add(className);
        }
    } else {
        // Fallback per browser vecchi
        const currentClasses = el.className.split(' ');
        const classesToAdd = Array.isArray(className) ? className : [className];
        classesToAdd.forEach(cls => {
            if (!currentClasses.includes(cls)) {
                currentClasses.push(cls);
            }
        });
        el.className = currentClasses.join(' ').trim();
    }
}

export { addClass };
