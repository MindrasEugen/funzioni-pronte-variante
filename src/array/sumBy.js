/**
 * Returns the sum of values returned by the function for each element.
 * Restituisce la somma dei valori restituiti dalla funzione per ogni elemento.
 * 
 * @param {Array} array - The array to process / L'array da elaborare
 * @param {Function} fn - Function to transform each element to a number / Funzione per trasformare ogni elemento in numero
 * @returns {number} Sum of transformed values / Somma dei valori trasformati
 */
function sumBy(array, fn) {
    if (!Array.isArray(array) || typeof fn !== 'function') return 0;
    
    let sum = 0;
    for (const element of array) {
        const value = fn(element);
        if (typeof value === 'number' && !isNaN(value)) {
            sum += value;
        }
    }
    
    return sum;
}

export { sumBy };
