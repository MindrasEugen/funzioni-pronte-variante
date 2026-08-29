/**
 * Checks if a value is a string.
 * Verifica se un valore è una stringa.
 * 
 * @param {*} value - The value to check / Il valore da verificare
 * @returns {boolean} True if string / True se è una stringa
 */
function isString(value) {
    return typeof value === 'string';
}

export { isString };
