/**
 * Pads a string at the start to a specified length.
 * Riempie una stringa all'inizio fino a una lunghezza specificata.
 * 
 * @param {string} str - The string to pad / La stringa da riempire
 * @param {number} targetLength - The target length / La lunghezza obiettivo
 * @param {string} [padString=' '] - The string to pad with / La stringa con cui riempire
 * @returns {string} - The padded string / La stringa riempita
 */
function padStart(str, targetLength, padString = ' ') {
    if (typeof str !== 'string') return '';
    return str.padStart(targetLength, padString);
}

export { padStart };
