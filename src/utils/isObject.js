/**
 * Checks if a value is an object (but not null or array).
 * Verifica se un valore è un oggetto (ma non null o array).
 * 
 * @param {*} value - The value to check / Il valore da verificare
 * @returns {boolean} True if object / True se è un oggetto
 */
function isObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export { isObject };
