/**
 * Checks if a value is a multiple of a divisor.
 * Verifica se un valore è un multiplo di un divisore.
 * 
 * @param {number} value - The value to check / Il valore da verificare
 * @param {number} divisor - The divisor / Il divisore
 * @returns {boolean} True if value is a multiple of divisor / True se il valore è un multiplo
 */
function isMultipleOf(value, divisor) {
    if (divisor === 0) return false;
    return value % divisor === 0;
}

export { isMultipleOf };
