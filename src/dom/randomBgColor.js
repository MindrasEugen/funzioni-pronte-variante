/**
 * Randomly changes the background color of an HTML element.
 * Generates a random RGB color and applies it to the specified element.
 * 
 * @param {HTMLElement} element - The HTML element to change background color of
 * @returns {void}
 */
function randomBgColor(element) {
    const color = `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}
    )`;
    element.style.backgroundColor = color;
}

export { randomBgColor };
