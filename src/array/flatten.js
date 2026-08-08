/**
 * Appiattisce un array nested in un solo livello.
 * 
 * @param {Array} array - L'array da appiattire
 * @returns {Array} - L'array appiattito
 */
function flatten(array) {
    if (!Array.isArray(array)) {
        return [];
    }
    
    return array.reduce((acc, val) => {
        if (Array.isArray(val)) {
            return acc.concat(val);
        }
        return acc.concat([val]);
    }, []);
}

export { flatten };
