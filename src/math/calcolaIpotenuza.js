/**
 * Calcola l'ipotenusa di un triangolo rettangolo (Teorema di Pitagora).
 * 
 * @param {number} a - Lunghezza del primo cateto
 * @param {number} b - Lunghezza del secondo cateto
 * @returns {number} La lunghezza dell'ipotenusa
 */
function calcolaIpotenuza(a, b) {
    return Math.sqrt(a * a + b * b);
}

export { calcolaIpotenuza };
