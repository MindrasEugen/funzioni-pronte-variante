/**
 * Calculates the sum of an array of numbers.
 * 
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The sum of the numbers, or 0 if not an array
 */
function sum(numbers) {
    if (!Array.isArray(numbers)) return 0;
    return numbers.reduce((acc, num) => acc + num, 0);
}

export { sum };
