/**
 * Recursively merges two objects. For plain object keys present in both,
 * it recursively deep merges. For other types (including arrays), source overwrites target.
 * Fonde ricorsivamente due oggetti. Per chiavi con oggetti semplici in entrambi,
 * esegue merge ricorsivo. Per altri tipi (inclusi array), il source sovrascrive il target.
 * 
 * @param {Object} target - Target object / Oggetto target
 * @param {Object} source - Source object / Oggetto source
 * @returns {Object} New deep merged object / Nuovo oggetto fuso profondamente
 */
function deepMerge(target, source) {
    if (target == null || typeof target !== 'object') return source != null ? source : {};
    if (source == null || typeof source !== 'object') return { ...target };
    
    const result = { ...target };
    
    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            const targetValue = target[key];
            const sourceValue = source[key];
            
            const isPlainObject = (val) => Object.prototype.toString.call(val) === '[object Object]';
            if (isPlainObject(targetValue) && isPlainObject(sourceValue)) {
                result[key] = deepMerge(targetValue, sourceValue);
            } else {
                result[key] = sourceValue;
            }
        }
    }
    
    return result;
}

export { deepMerge };
