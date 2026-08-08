/**
 * Converts a string to snake_case.
 * Converte una stringa in snake_case.
 * 
 * @param {string} str - The string to convert / La stringa da convertire
 * @returns {string} - The snake_case string / La stringa in snake_case
 */
function snakeCase(str) {
    if (typeof str !== 'string') return '';
    
    return str
        .replace(/([A-Z])/g, '_$1')
        .replace(/[^a-zA-Z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '')
        .toLowerCase();
}

export { snakeCase };
