/**
 * Conta il numero di caratteri in una stringa.
 * 
 * @param {string} testo - La stringa di cui contare i caratteri
 * @returns {number} Il numero di caratteri
 */
function conteggioCaratteri(testo) {
    if (typeof testo !== 'string') return 0;
    return testo.length;
}

export { conteggioCaratteri };
