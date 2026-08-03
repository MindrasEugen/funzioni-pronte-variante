/**
 * Shortcut per document.querySelector().
 * 
 * ATTENZIONE: Il nome 'query' è stato scelto per evitare conflitti con jQuery ($).
 * 
 * @param {string} selettore - Un selettore CSS valido (es: '#id', '.classe', 'div')
 * @returns {HTMLElement|null} Il primo elemento che matcha il selettore, o null se non trovato
 */
function query(selettore) {
    return document.querySelector(selettore);
}

export { query };
