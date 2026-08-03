/**
 * Calculates the arithmetic average of an array of numbers.
 * Calcola la media aritmetica di un array di numeri.
 * 
 * @param {number[]} numbers - Array of numbers / Array di numeri
 * @returns {number} The arithmetic average, or 0 if the array is empty / La media aritmetica, o 0 se l'array è vuoto
 */
function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

export { calculateAverage };
