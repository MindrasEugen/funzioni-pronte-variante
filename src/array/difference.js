/**
 * Restituisce gli elementi del primo array che non sono presenti negli altri array.
 * 
 * @param {Array} array - L'array principale
 * @param {...Array} values - Array da escludere
 * @returns {Array} - Un array con gli elementi unici al primo array
 */
function difference(array, ...values) {
    if (!Array.isArray(array)) {
        return [];
    }
    
    const otherValues = values.flat();
    
    return array.filter(item => !otherValues.includes(item));
}

export { difference };
