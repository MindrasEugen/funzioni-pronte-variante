/**
 * Finds the maximum value in an array of numbers.
 * Trova il valore massimo in un array di numeri.
 * 
 * @param {number[]} numbers - Array of numbers / Array di numeri
 * @returns {number|undefined} The maximum value, or undefined if the array is empty / Il valore massimo, o undefined se l'array è vuoto
 */
function findMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) return undefined;
    return Math.max(...numbers);
}

export { findMax };
