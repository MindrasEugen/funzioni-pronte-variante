/**
 * Returns a new object with all keys except the specified ones.
 * Restituisce un nuovo oggetto senza le chiavi specificate.
 * 
 * @param {Object} obj - The source object / L'oggetto sorgente
 * @param {Array<string>} keys - Array of keys to omit / Array di chiavi da escludere
 * @returns {Object} New object without omitted keys / Nuovo oggetto senza le chiavi escluse
 */
function omit(obj, keys) {
    if (obj == null || typeof obj !== 'object') return {};
    const result = {};
    const keysToOmit = new Set(keys);
    for (const key in obj) {
        if (!keysToOmit.has(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

export { omit };
