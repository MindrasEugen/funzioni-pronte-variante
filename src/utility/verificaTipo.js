/**
 * Verifica e restituisce il tipo di una variabile.
 * 
 * @param {*} valore - Il valore di cui verificare il tipo
 * @returns {string} Il nome del tipo ('string', 'number', 'object', 'array', 'null', ecc.)
 */
function verificaTipo(valore) {
    if (valore === null) return 'null';
    if (Array.isArray(valore)) return 'array';
    return typeof valore;
}

export { verificaTipo };
