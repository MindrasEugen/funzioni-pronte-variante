/**
 * Checks if a value is a boolean.
 * Verifica se un valore è un booleano.
 * 
 * @param {*} value - The value to check / Il valore da verificare
 * @returns {boolean} True if boolean / True se è un booleano
 */
function isBoolean(value) {
    return typeof value === 'boolean';
}

export { isBoolean };
