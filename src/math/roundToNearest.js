/**
 * Rounds a value to the nearest multiple of the given number.
 * Arrotonda un valore al multiplo piu' vicino del numero dato.
 * 
 * @param {number} value - The value to round / Il valore da arrotondare
 * @param {number} multiple - The multiple to round to / Il multiplo a cui arrotondare
 * @returns {number} Rounded value / Valore arrotondato
 */
function roundToNearest(value, multiple) {
    if (multiple === 0) return value;
    const remainder = value % multiple;
    const half = multiple / 2;
    
    if (remainder >= half) {
        return value + (multiple - remainder);
    } else if (remainder <= -half) {
        return value - (multiple + remainder);
    }
    return value - remainder;
}

export { roundToNearest };
