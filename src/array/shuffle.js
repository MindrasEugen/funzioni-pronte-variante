/**
 * Randomly shuffles the elements of an array (Fisher-Yates algorithm).
 * 
 * @param {Array} array - The array to shuffle
 * @returns {Array} A new array with shuffled elements
 */
function shuffle(array) {
    if (!Array.isArray(array)) return [];
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export { shuffle };
