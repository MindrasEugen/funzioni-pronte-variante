/**
 * Calculates the nth root of a number.
 * 
 * @param {number} number - The number to calculate the root of
 * @param {number} [index=2] - The root index (default: 2 for square root)
 * @returns {number} The result of the root operation
 */
function nthRoot(number, index = 2) {
    return Math.pow(number, 1 / index);
}

export { nthRoot };
