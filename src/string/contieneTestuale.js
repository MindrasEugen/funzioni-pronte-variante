/**
 * Verifica se una stringa contiene un sottotesto.
 * 
 * @param {string} testo - La stringa in cui cercare
 * @param {string} sottotesto - Il sottotesto da cercare
 * @returns {boolean} True se il sottotesto è contenuto nel testo
 */
function contieneTestuale(testo, sottotesto) {
    if (typeof testo !== 'string' || typeof sottotesto !== 'string') return false;
    return testo.includes(sottotesto);
}

export { contieneTestuale };
