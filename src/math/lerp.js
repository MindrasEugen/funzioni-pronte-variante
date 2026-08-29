/**
 * Linear interpolation between start and end values.
 * Interpolazione lineare tra valori di inizio e fine.
 * 
 * @param {number} start - Start value / Valore iniziale
 * @param {number} end - End value / Valore finale
 * @param {number} t - Interpolation factor (0-1) / Fattore di interpolazione (0-1)
 * @returns {number} Interpolated value / Valore interpolato
 */
function lerp(start, end, t) {
    return start + (end - start) * t;
}

export { lerp };
