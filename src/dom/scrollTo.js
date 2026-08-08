/**
 * Scorre fluidamente verso un elemento o una posizione specifica.
 * 
 * @param {HTMLElement|number} target - L'elemento DOM o la posizione in pixel (Y)
 * @param {Object} [options] - Opzioni per lo scroll
 * @param {number} [options.duration=1000] - Durata dello scroll in millisecondi
 * @param {boolean} [options.smooth=true] - Se lo scroll deve essere fluido
 * @returns {void}
 */
function scrollTo(target, options = {}) {
    const { duration = 1000, smooth = true } = options;
    
    if (typeof target === 'number') {
        // Scroll verso una posizione Y
        if (smooth) {
            window.scrollTo({
                top: target,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo(0, target);
        }
    } else {
        // Scroll verso un elemento
        if (smooth) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            target.scrollIntoView();
        }
    }
}

export { scrollTo };
