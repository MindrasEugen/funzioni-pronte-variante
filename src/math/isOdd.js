/**
 * Verifica se un numero è dispari.
 * 
 * @param {number} num - Il numero da verificare
 * @returns {boolean} - True se il numero è dispari, False altrimenti
 */
function isOdd(num) {
    return Number.isInteger(num) && num % 2 !== 0;
}

export { isOdd };
