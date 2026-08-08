/**
 * Repeats a string n times.
 * Ripete una stringa n volte.
 * 
 * @param {string} str - The string to repeat / La stringa da ripetere
 * @param {number} n - The number of times to repeat / Il numero di volte da ripetere
 * @returns {string} - The repeated string / La stringa ripetuta
 */
function repeat(str, n) {
    if (typeof str !== 'string' || n < 0) return '';
    return str.repeat(n);
}

export { repeat };
