/**
 * Creates an object with keys and values swapped. If multiple keys have the same value,
 * the last one wins.
 * Crea un oggetto con chiavi e valori scambiati. Se piu' chiavi hanno lo stesso valore,
 * prevale l'ultima.
 * 
 * @param {Object} obj - The source object / L'oggetto sorgente
 * @returns {Object} New object with inverted keys and values / Nuovo oggetto con chiavi/valori invertiti
 */
function invert(obj) {
    if (obj == null || typeof obj !== 'object') return {};
    const result = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            result[value] = key;
        }
    }
    return result;
}

export { invert };
