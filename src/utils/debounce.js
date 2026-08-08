/**
 * Creates a debounced function that delays invoking until after wait milliseconds have elapsed.
 * Crea una funzione debounced che ritarda l'invocazione fino a quando non sono trascorsi wait millisecondi.
 * 
 * @param {Function} func - The function to debounce / La funzione da debounce
 * @param {number} wait - The number of milliseconds to delay / Il numero di millisecondi di attesa
 * @returns {Function} - The debounced function / La funzione debounced
 */
function debounce(func, wait) {
    let timeoutId;
    
    return function(...args) {
        const context = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

export { debounce };
