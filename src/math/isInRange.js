/**
 * Checks if a number is within a range (inclusive).
 * 
 * @param {number} number - The number to check
 * @param {number} min - The minimum value of the range (inclusive)
 * @param {number} max - The maximum value of the range (inclusive)
 * @returns {boolean} True if the number is in range, false otherwise
 */
function isInRange(number, min, max) {
    return number >= min && number <= max;
}

export { isInRange };
