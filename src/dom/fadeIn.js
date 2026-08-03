/**
 * Applica un effetto fade-in (dissolvenza in entrata) a un elemento DOM.
 * 
 * @param {HTMLElement} el - L'elemento DOM a cui applicare l'animazione
 * @param {number} [durata=2000] - La durata dell'animazione in millisecondi
 * @returns {void}
 */
function fadeIn(el, durata = 2000) {
    el.style.opacity = 0;
    el.style.transition = `opacity ${durata}ms ease`;
    requestAnimationFrame(() => el.style.opacity = 1);
}

export { fadeIn };
