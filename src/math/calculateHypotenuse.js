/**
 * Calculates the hypotenuse of a right triangle (Pythagorean theorem).
 * Calcola l'ipotenusa di un triangolo rettangolo (teorema di Pitagora).
 * 
 * @param {number} a - Length of the first leg / Lunghezza del primo cateto
 * @param {number} b - Length of the second leg / Lunghezza del secondo cateto
 * @returns {number} The length of the hypotenuse / La lunghezza dell'ipotenusa
 */
function calculateHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
}

export { calculateHypotenuse };
