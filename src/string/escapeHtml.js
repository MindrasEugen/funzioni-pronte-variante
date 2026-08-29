/**
 * Escapes HTML special characters to their entity equivalents.
 * Converte caratteri speciali HTML nelle loro entità equivalenti.
 * 
 * @param {string} str - The string to escape / La stringa da convertire
 * @returns {string} Escaped string / Stringa convertita
 */
function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}

export { escapeHtml };
