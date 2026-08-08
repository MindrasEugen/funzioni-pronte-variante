/**
 * Restituisce una copia dell'array senza gli elementi specificati.
 * 
 * @param {Array} array - L'array originale
 * @param {...*} values - Gli elementi da escludere
 * @returns {Array} - Un array senza gli elementi specificati
 */
function without(array, ...values) {
    if (!Array.isArray(array)) {
        return [];
    }
    
    return array.filter(item => !values.includes(item));
}

export { without };
