/**
 * Mescola casualmente gli elementi di un array (Algoritmo Fisher-Yates).
 * 
 * @param {Array} array - L'array da mescolare
 * @returns {Array} Un nuovo array con gli elementi mescolati
 */
function mescolaArray(array) {
    if (!Array.isArray(array)) return [];
    const mescolato = [...array];
    for (let i = mescolato.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mescolato[i], mescolato[j]] = [mescolato[j], mescolato[i]];
    }
    return mescolato;
}

export { mescolaArray };
