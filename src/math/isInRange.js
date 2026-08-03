/**
 * Checks if a number is within a range (inclusive).
 * Verifica se un numero è compreso in un intervallo (inclusivo).
 * 
 * @param {number} number - The number to check / Il numero da verificare
 * @param {number} min - The minimum value of the range (inclusive) / Il valore minimo dell'intervallo (inclusivo)
 * @param {number} max - The maximum value of the range (inclusive) / Il valore massimo dell'intervallo (inclusivo)
 * @returns {boolean} True if the number is in range, false otherwise / True se il numero è nell'intervallo, false altrimenti
 */
function isInRange(number, min, max) {
    return number >= min && number <= max;
}

export { isInRange };
