/**
 * Checks if a value is a number (and not NaN).
 * Verifica se un valore è un numero (e non NaN).
 * 
 * @param {*} value - The value to check / Il valore da verificare
 * @returns {boolean} True if number / True se è un numero
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

export { isNumber };
