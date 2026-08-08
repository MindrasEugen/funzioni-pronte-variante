/**
 * Concatena più array e/o valori in un singolo array.
 * 
 * @param {...*} args - Array e/o valori da concatenare
 * @returns {Array} - Un array con tutti gli elementi concatenati
 */
function concat(...args) {
    return args.flat();
}

export { concat };
