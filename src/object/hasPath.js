/**
 * Checks if a nested path exists and is not undefined.
 * Verifica se un percorso annidato esiste e non è undefined.
 * 
 * @param {Object} obj - The source object / L'oggetto sorgente
 * @param {string} path - Dot notation path (e.g. 'a.b.c') / Percorso in notazione a punti
 * @returns {boolean} True if path exists and is not undefined / True se il percorso esiste e non è undefined
 */
function hasPath(obj, path) {
    if (obj == null) return false;
    
    const keys = path.split('.');
    let current = obj;
    
    for (const key of keys) {
        if (current == null || typeof current !== 'object') {
            return false;
        }
        if (!(key in current)) {
            return false;
        }
        current = current[key];
    }
    
    return current !== undefined;
}

export { hasPath };
