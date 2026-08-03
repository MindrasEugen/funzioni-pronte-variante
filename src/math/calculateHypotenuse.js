/**
 * Calculates the hypotenuse of a right triangle (Pythagorean theorem).
 * 
 * @param {number} a - Length of the first leg
 * @param {number} b - Length of the second leg
 * @returns {number} The length of the hypotenuse
 */
function calculateHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
}

export { calculateHypotenuse };
