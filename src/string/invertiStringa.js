/**
 * Inverte una stringa.
 * 
 * @param {string} testo - La stringa da invertire
 * @returns {string} La stringa invertita
 */
function invertiStringa(testo) {
    if (typeof testo !== 'string') return '';
    return testo.split('').reverse().join('');
}

export { invertiStringa };
