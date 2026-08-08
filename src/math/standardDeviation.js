/**
 * Calcola la deviazione standard di un array di numeri.
 * 
 * @param {Array} numbers - L'array di numeri
 * @returns {number} - La deviazione standard
 */
function standardDeviation(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return NaN;
    }
    
    const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    const squaredDifferences = numbers.map(num => Math.pow(num - mean, 2));
    const variance = squaredDifferences.reduce((sum, diff) => sum + diff, 0) / numbers.length;
    
    return Math.sqrt(variance);
}

export { standardDeviation };
