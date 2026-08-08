/**
 * Checks if a value is empty (null, undefined, empty string, empty array, empty object).
 * Verifica se un valore è vuoto (null, undefined, stringa vuota, array vuoto, oggetto vuoto).
 * 
 * @param {*} value - The value to check / Il valore da verificare
 * @returns {boolean} - True if the value is empty / True se il valore è vuoto
 */
function isEmpty(value) {
    if (value === null || value === undefined) return true;
    
    if (typeof value === 'string') return value.length === 0;
    
    if (Array.isArray(value)) return value.length === 0;
    
    if (typeof value === 'object') return Object.keys(value).length === 0;
    
    return false;
}

export { isEmpty };
