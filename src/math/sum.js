/**
 * Calculates the sum of an array of numbers.
 * Calcola la somma di un array di numeri.
 * 
 * @param {number[]} numbers - Array of numbers / Array di numeri
 * @returns {number} The sum of the numbers, or 0 if not an array / La somma dei numeri, o 0 se non è un array
 */
function sum(numbers) {
    if (!Array.isArray(numbers)) return 0;
    return numbers.reduce((acc, num) => acc + num, 0);
}

export { sum };
