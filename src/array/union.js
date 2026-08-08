/**
 * Crea un array con gli elementi unici di tutti gli array forniti.
 * 
 * @param {...Array} arrays - Gli array da unire
 * @returns {Array} - Un array con tutti gli elementi unici
 */
function union(...arrays) {
    const result = [];
    const seen = new Set();
    
    for (const arr of arrays) {
        if (Array.isArray(arr)) {
            for (const item of arr) {
                if (!seen.has(item)) {
                    seen.add(item);
                    result.push(item);
                }
            }
        }
    }
    
    return result;
}

export { union };
