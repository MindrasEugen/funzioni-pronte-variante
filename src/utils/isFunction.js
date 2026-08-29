/**
 * Checks if a value is a function.
 * Verifica se un valore è una funzione.
 * 
 * @param {*} value - The value to check / Il valore da verificare
 * @returns {boolean} True if function / True se è una funzione
 */
function isFunction(value) {
    return typeof value === 'function';
}

export { isFunction };
