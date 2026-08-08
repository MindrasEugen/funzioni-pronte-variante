/**
 * Crea un array con una sequenza di numeri da start a end (esclusivo).
 * 
 * @param {number} start - Il numero di inizio
 * @param {number} end - Il numero di fine (esclusivo)
 * @param {number} [step=1] - Il passo tra un numero e l'altro
 * @returns {Array} - Un array con la sequenza di numeri
 */
function range(start, end, step = 1) {
    if (step === 0) {
        return [];
    }
    
    const result = [];
    
    if (step > 0) {
        for (let i = start; i < end; i += step) {
            result.push(i);
        }
    } else {
        for (let i = start; i > end; i += step) {
            result.push(i);
        }
    }
    
    return result;
}

export { range };
