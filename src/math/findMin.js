/**
 * Finds the minimum value in an array of numbers.
 * 
 * @param {number[]} numbers - Array of numbers
 * @returns {number|undefined} The minimum value, or undefined if the array is empty
 */
function findMin(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) return undefined;
    return Math.min(...numbers);
}

export { findMin };
