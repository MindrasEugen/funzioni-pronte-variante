/**
 * Raggruppa gli elementi di un array per una proprietà specifica.
 * 
 * @param {Array} array - L'array da raggruppare
 * @param {string|Function} key - La proprietà o funzione per raggruppare
 * @returns {Object} - Un oggetto con le chiavi di raggruppamento
 */
function groupBy(array, key) {
    if (!Array.isArray(array)) {
        return {};
    }
    
    const getKey = typeof key === 'function' ? key : (item) => item[key];
    
    return array.reduce((acc, item) => {
        const groupKey = getKey(item);
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(item);
        return acc;
    }, {});
}

export { groupBy };
