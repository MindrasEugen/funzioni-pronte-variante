/**
 * Creates a throttled function that only invokes at most once per every wait milliseconds.
 * Crea una funzione throttled che viene invocata al massimo una volta ogni wait millisecondi.
 * 
 * @param {Function} func - The function to throttle / La funzione da throttled
 * @param {number} wait - The number of milliseconds to throttle / Il numero di millisecondi per il throttle
 * @returns {Function} - The throttled function / La funzione throttled
 */
function throttle(func, wait) {
    let lastTime = 0;
    let timeoutId;
    
    return function(...args) {
        const context = this;
        const now = Date.now();
        
        clearTimeout(timeoutId);
        
        if (now - lastTime >= wait) {
            lastTime = now;
            func.apply(context, args);
        } else {
            timeoutId = setTimeout(() => {
                lastTime = Date.now();
                func.apply(context, args);
            }, wait - (now - lastTime));
        }
    };
}

export { throttle };
