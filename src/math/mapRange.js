/**
 * Maps a value from one range to another.
 * Rimappa un valore da un intervallo a un altro.
 * 
 * @param {number} value - The value to map / Il valore da mappare
 * @param {number} inMin - Input range minimum / Minimo intervallo di input
 * @param {number} inMax - Input range maximum / Massimo intervallo di input
 * @param {number} outMin - Output range minimum / Minimo intervallo di output
 * @param {number} outMax - Output range maximum / Massimo intervallo di output
 * @returns {number} Mapped value / Valore mappato
 */
function mapRange(value, inMin, inMax, outMin, outMax) {
    const inRange = inMax - inMin;
    const outRange = outMax - outMin;
    const scaled = (value - inMin) / inRange;
    return outMin + scaled * outRange;
}

export { mapRange };
