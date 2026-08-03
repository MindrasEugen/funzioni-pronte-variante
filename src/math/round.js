/**
 * Rounds a number to N decimal places.
 * Arrotonda un numero a N decimali.
 * 
 * @param {number} number - The number to round / Il numero da arrotondare
 * @param {number} [decimals=0] - The number of decimal places (default: 0) / Il numero di decimali (predefinito: 0)
 * @returns {number} The rounded number / Il numero arrotondato
 */
function round(number, decimals = 0) {
    const factor = Math.pow(10, decimals);
    return Math.round(number * factor) / factor;
}

export { round };
