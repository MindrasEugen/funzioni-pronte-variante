/**
 * Aggiunge un event listener a un elemento DOM in modo compatto.
 * Wrapper per addEventListener() che rende il codice più leggibile.
 * 
 * @param {HTMLElement} elemento - L'elemento DOM a cui aggiungere il listener
 * @param {string} evento - Il nome dell'evento (es: 'click', 'mouseover', 'keydown')
 * @param {Function} callback - La funzione da chiamare quando l'evento si verifica
 * @returns {void}
 */
function on(elemento, evento, callback) {
    elemento.addEventListener(evento, callback);
}

export { on };
