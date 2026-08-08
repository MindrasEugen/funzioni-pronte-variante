/**
 * Crea un oggetto con chiavi basate su una proprietà specifica degli elementi dell'array.
 * 
 * @param {Array} array - L'array da convertire
 * @param {string|Function} key - La proprietà o funzione per creare le chiavi
 * @returns {Object} - Un oggetto con le chiavi create dall'array
 */
function keyBy(array, key) {
    if (!Array.isArray(array)) {
        return {};
    }
    
    const getKey = typeof key === 'function' ? key : (item) => item[key];
    
    return array.reduce((acc, item) => {
        const objKey = getKey(item);
        acc[objKey] = item;
        return acc;
    }, {});
}

export { keyBy };
