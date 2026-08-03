/**
 * Finds the maximum value in an array of numbers.
 * 
 * @param {number[]} numbers - Array of numbers
 * @returns {number|undefined} The maximum value, or undefined if the array is empty
 */
function findMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) return undefined;
    return Math.max(...numbers);
}

export { findMax };
