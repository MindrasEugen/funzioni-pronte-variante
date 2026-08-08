/**
 * Pads a string at the end to a specified length.
 * Riempie una stringa alla fine fino a una lunghezza specificata.
 * 
 * @param {string} str - The string to pad / La stringa da riempire
 * @param {number} targetLength - The target length / La lunghezza obiettivo
 * @param {string} [padString=' '] - The string to pad with / La stringa con cui riempire
 * @returns {string} - The padded string / La stringa riempita
 */
function padEnd(str, targetLength, padString = ' ') {
    if (typeof str !== 'string') return '';
    return str.padEnd(targetLength, padString);
}

export { padEnd };
