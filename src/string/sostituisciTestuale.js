/**
 * Sostituisce un sottotesto con un altro in una stringa.
 * 
 * @param {string} testo - La stringa in cui fare la sostituzione
 * @param {string} vecchio - Il sottotesto da sostituire
 * @param {string} nuovo - Il nuovo testo da inserire
 * @returns {string} La stringa con le sostituzioni effettuate
 */
function sostituisciTestuale(testo, vecchio, nuovo) {
    if (typeof testo !== 'string') return '';
    return testo.split(vecchio).join(nuovo);
}

export { sostituisciTestuale };
