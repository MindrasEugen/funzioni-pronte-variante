/**
 * Performs a shallow merge of multiple objects. Later values overwrite earlier ones.
 * Esegue un merge superficiale di piu' oggetti. I valori successivi sovrascrivono i precedenti.
 * 
 * @param {...Object} objects - Objects to merge / Oggetti da fondere
 * @returns {Object} New merged object / Nuovo oggetto fuso
 */
function merge(...objects) {
    let result = {};
    for (const obj of objects) {
        if (obj == null || typeof obj !== 'object') continue;
        Object.assign(result, obj);
    }
    return result;
}

export { merge };
