/**
 * Generates a random integer between two values (inclusive).
 * 
 * @param {number} [min=0] - The minimum value (inclusive)
 * @param {number} [max=100] - The maximum value (inclusive)
 * @returns {number} A random integer between min and max
 */
function randomInt(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { randomInt };
