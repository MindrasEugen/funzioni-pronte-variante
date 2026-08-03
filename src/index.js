/**
 * Utility Kit - Entry Point
 * A lightweight JavaScript utility library for modern web development.
 * 
 * @version 1.0.0
 * @author MindrasEugen
 * @license MIT
 */

// Export all from categories
export * from './dom/index.js';
export * from './math/index.js';
export * from './array/index.js';
export * from './string/index.js';
export * from './utils/index.js';
export * from './shortcuts/index.js';

// Also export individually for optimal tree-shaking
// DOM
export { randomBgColor } from './dom/randomBgColor.js';
export { createEl } from './dom/createEl.js';
export { on } from './dom/on.js';
export { fadeIn } from './dom/fadeIn.js';

// Math
export { calculateAverage } from './math/calculateAverage.js';
export { calculatePercentage } from './math/calculatePercentage.js';
export { round } from './math/round.js';
export { sum } from './math/sum.js';
export { findMax } from './math/findMax.js';
export { findMin } from './math/findMin.js';
export { isPrime } from './math/isPrime.js';
export { calculateHypotenuse } from './math/calculateHypotenuse.js';
export { factorial } from './math/factorial.js';
export { power } from './math/power.js';
export { nthRoot } from './math/nthRoot.js';
export { isInRange } from './math/isInRange.js';

// Array
export { filterArray } from './array/filterArray.js';
export { sortArray } from './array/sortArray.js';
export { unique } from './array/unique.js';
export { shuffle } from './array/shuffle.js';

// String
export { reverseString } from './string/reverseString.js';
export { countChars } from './string/countChars.js';
export { capitalize } from './string/capitalize.js';
export { truncate } from './string/truncate.js';
export { includesText } from './string/includesText.js';
export { replaceText } from './string/replaceText.js';

// Utils
export { logColor } from './utils/logColor.js';
export { getType } from './utils/getType.js';
export { generateId } from './utils/generateId.js';
export { randomInt } from './utils/randomInt.js';

// Shortcuts
export { select } from './shortcuts/select.js';
