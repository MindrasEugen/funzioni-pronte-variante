/**
 * Calcola la moda (valore più frequente) di un array di numeri.
 * Se ci sono più mode, restituisce la prima trovata.
 * 
 * @param {Array} numbers - L'array di numeri
 * @returns {number} - La moda
 */
function mode(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return NaN;
    }
    
    const frequencyMap = {};
    let maxCount = 0;
    let modeValue = numbers[0];
    
    for (const num of numbers) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            modeValue = num;
        }
    }
    
    return modeValue;
}

export { mode };
