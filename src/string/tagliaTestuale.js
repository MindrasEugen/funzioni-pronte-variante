/**
 * Taglia una stringa a un numero massimo di caratteri.
 * 
 * @param {string} testo - La stringa da tagliare
 * @param {number} max - Il numero massimo di caratteri
 * @returns {string} La stringa tagliata
 */
function tagliaTestuale(testo, max) {
    if (typeof testo !== 'string') return '';
    if (max <= 0) return '';
    if (testo.length <= max) return testo;
    return testo.slice(0, max);
}

export { tagliaTestuale };
