/**
 * Masks all characters except the last visibleChars with maskChar.
 * Maschera tutti i caratteri tranne gli ultimi visibleChars con maskChar.
 * 
 * @param {string} str - The string to mask / La stringa da mascherare
 * @param {number} visibleChars - Number of visible characters at the end (default: 4) / Numero di caratteri visibili alla fine
 * @param {string} maskChar - Character to use for masking (default: '*') / Carattere per la maschera
 * @returns {string} Masked string / Stringa mascherata
 */
function maskString(str, visibleChars = 4, maskChar = '*') {
    if (typeof str !== 'string') return '';
    if (str.length <= visibleChars) return str;
    
    const visible = str.slice(-visibleChars);
    const masked = maskChar.repeat(str.length - visibleChars);
    return masked + visible;
}

export { maskString };
