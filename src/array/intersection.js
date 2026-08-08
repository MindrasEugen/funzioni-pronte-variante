/**
 * Restituisce l'intersezione tra gli array forniti (elementi comuni a tutti).
 * 
 * @param {...Array} arrays - Gli array da confrontare
 * @returns {Array} - Un array con gli elementi comuni
 */
function intersection(...arrays) {
    if (arrays.length === 0) {
        return [];
    }
    
    if (arrays.length === 1) {
        return arrays[0].slice();
    }
    
    const [first, ...rest] = arrays;
    
    return first.filter(item => {
        return rest.every(arr => arr.includes(item));
    });
}

export { intersection };
