/**
 * Converte radianti in gradi.
 * 
 * @param {number} radians - I radianti da convertire
 * @returns {number} - I gradi equivalenti
 */
function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

export { toDegrees };
