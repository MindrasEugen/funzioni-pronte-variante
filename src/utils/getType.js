/**
 * Gets the type of a variable.
 * Ottiene il tipo di una variabile.
 * 
 * @param {*} value - The value to get type of / Il valore di cui ottenere il tipo
 * @returns {string} The type name ('string', 'number', 'object', 'array', 'null', etc.) / Il nome del tipo ('string', 'number', 'object', 'array', 'null', ecc.)
 */
function getType(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value;
}

export { getType };
