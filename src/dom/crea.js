/**
 * Crea un nuovo elemento HTML con tag, classe e testo opzionali.
 * 
 * @param {string} tag - Il tag HTML dell'elemento da creare (es: 'div', 'span', 'p')
 * @param {string} [classe=''] - La classe CSS da applicare all'elemento
 * @param {string} [testo=''] - Il contenuto testuale dell'elemento
 * @returns {HTMLElement} L'elemento DOM creato
 */
function crea(tag, classe = '', testo = '') {
    const el = document.createElement(tag);
    if (classe) el.className = classe;
    if (testo) el.textContent = testo;
    return el;
}

export { crea };
