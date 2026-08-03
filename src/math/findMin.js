/**
 * Finds the minimum value in an array of numbers.
 * Trova il valore minimo in un array di numeri.
 * 
 * @param {number[]} numbers - Array of numbers / Array di numeri
 * @returns {number|undefined} The minimum value, or undefined if the array is empty / Il valore minimo, o undefined se l'array è vuoto
 */
function findMin(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) return undefined;
    return Math.min(...numbers);
}

export { findMin };
