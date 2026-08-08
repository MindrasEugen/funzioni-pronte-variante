/**
 * Performs a deep equality check between two values.
 * Esegue un controllo di uguaglianza profonda tra due valori.
 * 
 * @param {*} a - First value / Primo valore
 * @param {*} b - Second value / Secondo valore
 * @returns {boolean} - True if values are deeply equal / True se i valori sono profondamente uguali
 */
function deepEqual(a, b) {
    if (a === b) return true;
    
    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
        return false;
    }
    
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }
    
    if (a instanceof RegExp && b instanceof RegExp) {
        return a.toString() === b.toString();
    }
    
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    
    if (keysA.length !== keysB.length) return false;
    
    for (const key of keysA) {
        if (!keysB.includes(key)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }
    
    return true;
}

export { deepEqual };
