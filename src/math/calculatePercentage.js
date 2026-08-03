/**
 * Calculates the percentage of a value.
 * Calcola la percentuale di un valore.
 * 
 * @param {number} value - The value to calculate percentage of / Il valore di cui calcolare la percentuale
 * @param {number} percentage - The percentage to apply (e.g., 10 for 10%) / La percentuale da applicare (es. 10 per 10%)
 * @returns {number} The calculated percentage value / Il valore percentuale calcolato
 */
function calculatePercentage(value, percentage) {
    return (value * percentage) / 100;
}

export { calculatePercentage };
