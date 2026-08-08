/**
 * Calcola il modulo di due numeri (sempre positivo).
 * 
 * @param {number} a - Il dividendo
 * @param {number} b - Il divisore
 * @returns {number} - Il modulo (sempre positivo, 0 <= risultato < |b|)
 */
function modulo(a, b) {
    if (b === 0) return NaN;
    const absB = Math.abs(b);
    return ((a % absB) + absB) % absB;
}

export { modulo };
