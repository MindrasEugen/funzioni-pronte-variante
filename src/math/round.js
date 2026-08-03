/**
 * Rounds a number to N decimal places.
 * 
 * @param {number} number - The number to round
 * @param {number} [decimals=0] - The number of decimal places (default: 0)
 * @returns {number} The rounded number
 */
function round(number, decimals = 0) {
    const factor = Math.pow(10, decimals);
    return Math.round(number * factor) / factor;
}

export { round };
