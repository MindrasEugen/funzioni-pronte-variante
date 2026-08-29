/**
 * Checks if value is a plain object (object literal).
 * Verifica se il valore è un oggetto letterale semplice.
 * 
 * @param {*} value - Value to check / Valore da verificare
 * @returns {boolean} True if plain object / True se è un oggetto semplice
 */
function isPlainObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}

export { isPlainObject };
