/**
 * Restituisce tutti gli elementi di un array tranne il primo.
 * 
 * @param {Array} array - L'array di riferimento
 * @returns {Array} - Un array con tutti gli elementi tranne il primo
 */
function tail(array) {
    if (!Array.isArray(array)) {
        return [];
    }
    return array.slice(1);
}

export { tail };
