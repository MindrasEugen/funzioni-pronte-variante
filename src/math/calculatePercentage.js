/**
 * Calculates the percentage of a value.
 * 
 * @param {number} value - The value to calculate percentage of
 * @param {number} percentage - The percentage to apply (e.g., 10 for 10%)
 * @returns {number} The calculated percentage value
 */
function calculatePercentage(value, percentage) {
    return (value * percentage) / 100;
}

export { calculatePercentage };
