/**
 * Calculates the arithmetic average of an array of numbers.
 * 
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The arithmetic average, or 0 if the array is empty
 */
function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

export { calculateAverage };
