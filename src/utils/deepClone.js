/**
 * Creates a deep clone of an object.
 * Crea una copia profonda di un oggetto.
 * 
 * @param {*} obj - The object to clone / L'oggetto da clonare
 * @returns {*} - The cloned object / L'oggetto clonato
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }
    
    if (obj instanceof Date) {
        return new Date(obj);
    }
    
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    
    const cloned = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}

export { deepClone };
