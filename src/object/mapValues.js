/**
 * Creates an object with the same keys as the original, but with values transformed by the function.
 * Crea un oggetto con le stesse chiavi dell'originale, ma con valori trasformati dalla funzione.
 * 
 * @param {Object} obj - The source object / L'oggetto sorgente
 * @param {Function} fn - Transform function (value, key, obj) / Funzione di trasformazione (valore, chiave, obj)
 * @returns {Object} New object with transformed values / Nuovo oggetto con valori trasformati
 */
function mapValues(obj, fn) {
    if (obj == null || typeof obj !== 'object') return {};
    const result = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = fn(obj[key], key, obj);
        }
    }
    return result;
}

export { mapValues };
