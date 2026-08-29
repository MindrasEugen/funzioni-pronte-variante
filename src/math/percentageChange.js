/**
 * Returns the percentage change from oldValue to newValue.
 * Restituisce la variazione percentuale da oldValue a newValue.
 * 
 * @param {number} oldValue - The original value / Il valore originale
 * @param {number} newValue - The new value / Il nuovo valore
 * @returns {number} Percentage change / Variazione percentuale
 */
function percentageChange(oldValue, newValue) {
    if (oldValue === 0) return 0;
    return ((newValue - oldValue) / Math.abs(oldValue)) * 100;
}

export { percentageChange };
