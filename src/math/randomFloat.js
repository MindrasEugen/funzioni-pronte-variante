/**
 * Genera un numero casuale float tra min e max (inclusi).
 * 
 * @param {number} min - Il valore minimo
 * @param {number} max - Il valore massimo
 * @returns {number} - Un numero casuale float
 */
function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

export { randomFloat };
