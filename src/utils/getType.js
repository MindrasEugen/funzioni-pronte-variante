/**
 * Gets the type of a variable.
 * 
 * @param {*} value - The value to get type of
 * @returns {string} The type name ('string', 'number', 'object', 'array', 'null', etc.)
 */
function getType(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value;
}

export { getType };
