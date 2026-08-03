/**
 * Calcola la percentuale di un valore.
 * 
 * @param {number} valore - Il valore di cui calcolare la percentuale
 * @param {number} percentuale - La percentuale da applicare (es: 10 per 10%)
 * @returns {number} Il valore percentuale calcolato
 */
function calcolaPercentuale(valore, percentuale) {
    return (valore * percentuale) / 100;
}

export { calcolaPercentuale };
