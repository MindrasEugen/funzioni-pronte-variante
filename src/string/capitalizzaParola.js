/**
 * Capitalizza la prima lettera di una stringa.
 * 
 * @param {string} testo - La stringa da capitalizzare
 * @returns {string} La stringa con la prima lettera maiuscola e il resto minuscolo
 */
function capitalizzaParola(testo) {
    if (typeof testo !== 'string') return '';
    if (testo.length === 0) return '';
    return testo.charAt(0).toUpperCase() + testo.slice(1).toLowerCase();
}

export { capitalizzaParola };
