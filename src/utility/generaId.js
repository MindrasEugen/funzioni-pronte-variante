/**
 * Genera un ID casuale alfanumerico.
 * 
 * @param {number} [lunghezza=8] - La lunghezza dell'ID da generare
 * @returns {string} L'ID casuale generato
 */
function generaId(lunghezza = 8) {
    const caratteri = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < lunghezza; i++) {
        id += caratteri.charAt(Math.floor(Math.random() * caratteri.length));
    }
    return id;
}

export { generaId };
