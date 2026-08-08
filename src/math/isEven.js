/**
 * Verifica se un numero è pari.
 * 
 * @param {number} num - Il numero da verificare
 * @returns {boolean} - True se il numero è pari, False altrimenti
 */
function isEven(num) {
    return Number.isInteger(num) && num % 2 === 0;
}

export { isEven };
