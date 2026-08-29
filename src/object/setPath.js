/**
 * Sets a value at a nested path using dot notation. Creates intermediate objects if missing.
 * Imposta un valore in un percorso annidato usando la notazione a punti. Crea oggetti intermedi se mancanti.
 * 
 * @param {Object} obj - The target object / L'oggetto target
 * @param {string} path - Dot notation path (e.g. 'a.b.c') / Percorso in notazione a punti
 * @param {*} value - Value to set / Valore da impostare
 * @returns {Object} The modified object / L'oggetto modificato
 */
function setPath(obj, path, value) {
    if (obj == null || typeof obj !== 'object') return obj;
    
    const keys = path.split('.');
    let current = obj;
    
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!(key in current) || typeof current[key] !== 'object' || current[key] === null) {
            current[key] = {};
        }
        current = current[key];
    }
    
    current[keys[keys.length - 1]] = value;
    return obj;
}

export { setPath };
