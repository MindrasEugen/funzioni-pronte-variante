/**
 * Creates a function that can only be called once.
 * Crea una funzione che può essere chiamata una sola volta.
 * 
 * @param {Function} func - The function to call once / La funzione da chiamare una volta
 * @returns {Function} - The function that can only be called once / La funzione che può essere chiamata una volta sola
 */
function once(func) {
    let called = false;
    let result;
    
    return function(...args) {
        if (!called) {
            called = true;
            result = func.apply(this, args);
        }
        return result;
    };
}

export { once };
