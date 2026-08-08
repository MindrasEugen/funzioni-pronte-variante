/**
 * Calcola la mediana di un array di numeri.
 * 
 * @param {Array} numbers - L'array di numeri
 * @returns {number} - La mediana
 */
function median(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return NaN;
    }
    
    const sorted = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    
    return sorted[middle];
}

export { median };
