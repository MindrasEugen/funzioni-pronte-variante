/**
 * Returns a new object with only the specified keys from the original object.
 * Restituisce un nuovo oggetto con solo le chiavi specificate dall'oggetto originale.
 * 
 * @param {Object} obj - The source object / L'oggetto sorgente
 * @param {Array<string>} keys - Array of keys to pick / Array di chiavi da selezionare
 * @returns {Object} New object with picked keys / Nuovo oggetto con le chiavi selezionate
 */
function pick(obj, keys) {
    if (obj == null || typeof obj !== 'object') return {};
    const result = {};
    for (const key of keys) {
        if (key in obj) {
            result[key] = obj[key];
        }
    }
    return result;
}

export { pick };
