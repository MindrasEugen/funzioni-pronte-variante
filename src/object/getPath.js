/**
 * Safely accesses nested properties using dot notation.
 * Accede in modo sicuro a proprietà annidate usando la notazione a punti.
 * 
 * @param {Object} obj - The source object / L'oggetto sorgente
 * @param {string} path - Dot notation path (e.g. 'a.b.c') / Percorso in notazione a punti
 * @param {*} defaultValue - Default value if path doesn't exist (default: undefined) / Valore predefinito
 * @returns {*} Value at path or defaultValue / Valore al percorso o valore predefinito
 */
function getPath(obj, path, defaultValue) {
    if (obj == null) return defaultValue;
    if (path === '') return obj;

    const keys = path.split('.');
    let current = obj;
    
    for (const key of keys) {
        if (current == null || typeof current !== 'object') {
            return defaultValue;
        }
        if (!(key in current)) {
            return defaultValue;
        }
        current = current[key];
    }
    
    return current !== undefined ? current : defaultValue;
}

export { getPath };
