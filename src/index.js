/**
 * Utility Kit - Entry Point
 * A lightweight JavaScript utility library for modern web development.
 * 
 * Utility Kit - Punto di ingresso
 * Una libreria utility JavaScript leggera per lo sviluppo web moderno.
 * 
 * @version 1.0.0
 * @author MindrasEugen
 * @license MIT
 */

// Export all from categories
// Esporta tutto dalle categorie
export * from './dom/index.js';
export * from './math/index.js';
export * from './array/index.js';
export * from './string/index.js';
export * from './utils/index.js';
export * from './shortcuts/index.js';

// Also export individually for optimal tree-shaking
// Esporta anche singolarmente per tree-shaking ottimale
// DOM
// DOM
export { randomBgColor } from './dom/randomBgColor.js';
export { createEl } from './dom/createEl.js';
export { on } from './dom/on.js';
export { fadeIn } from './dom/fadeIn.js';
export { removeEl } from './dom/removeEl.js';
export { toggleClass } from './dom/toggleClass.js';
export { hasClass } from './dom/hasClass.js';
export { addClass } from './dom/addClass.js';
export { removeClass } from './dom/removeClass.js';
export { getStyle } from './dom/getStyle.js';
export { setStyle } from './dom/setStyle.js';
export { scrollTo } from './dom/scrollTo.js';

// Math
// Matematica
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
export { clamp } from './math/clamp.js';
export { randomFloat } from './math/randomFloat.js';
export { toDegrees } from './math/toDegrees.js';
export { toRadians } from './math/toRadians.js';
export { median } from './math/median.js';
export { mode } from './math/mode.js';
export { standardDeviation } from './math/standardDeviation.js';
export { gcd } from './math/gcd.js';
export { lcm } from './math/lcm.js';
export { isEven } from './math/isEven.js';
export { isOdd } from './math/isOdd.js';
export { toFixed } from './math/toFixed.js';
export { modulo } from './math/modulo.js';
export { abs } from './math/abs.js';
export { ceil } from './math/ceil.js';

// Array
// Array
export { filterArray } from './array/filterArray.js';
export { sortArray } from './array/sortArray.js';
export { unique } from './array/unique.js';
export { shuffle } from './array/shuffle.js';
export { chunk } from './array/chunk.js';
export { flatten } from './array/flatten.js';
export { groupBy } from './array/groupBy.js';
export { keyBy } from './array/keyBy.js';
export { difference } from './array/difference.js';
export { intersection } from './array/intersection.js';
export { union } from './array/union.js';
export { without } from './array/without.js';
export { first } from './array/first.js';
export { last } from './array/last.js';
export { tail } from './array/tail.js';
export { take } from './array/take.js';
export { drop } from './array/drop.js';
export { compact } from './array/compact.js';
export { fill } from './array/fill.js';
export { range } from './array/range.js';
export { concat } from './array/concat.js';
export { indexOf } from './array/indexOf.js';
export { lastIndexOf } from './array/lastIndexOf.js';

// String
// Stringhe
export { reverseString } from './string/reverseString.js';
export { countChars } from './string/countChars.js';
export { capitalize } from './string/capitalize.js';
export { truncate } from './string/truncate.js';
export { includesText } from './string/includesText.js';
export { replaceText } from './string/replaceText.js';
export { camelCase } from './string/camelCase.js';
export { snakeCase } from './string/snakeCase.js';
export { kebabCase } from './string/kebabCase.js';
export { pascalCase } from './string/pascalCase.js';
export { trimStart } from './string/trimStart.js';
export { trimEnd } from './string/trimEnd.js';
export { repeat } from './string/repeat.js';
export { words } from './string/words.js';
export { startsWith } from './string/startsWith.js';
export { endsWith } from './string/endsWith.js';
export { padStart } from './string/padStart.js';
export { padEnd } from './string/padEnd.js';
export { toLower } from './string/toLower.js';
export { toUpper } from './string/toUpper.js';
export { trim } from './string/trim.js';
export { split } from './string/split.js';
export { join } from './string/join.js';
export { slice } from './string/slice.js';

// Utils
// Utilità
export { logColor } from './utils/logColor.js';
export { getType } from './utils/getType.js';
export { generateId } from './utils/generateId.js';
export { randomInt } from './utils/randomInt.js';
export { debounce } from './utils/debounce.js';
export { throttle } from './utils/throttle.js';
export { once } from './utils/once.js';
export { memoize } from './utils/memoize.js';
export { deepClone } from './utils/deepClone.js';
export { deepEqual } from './utils/deepEqual.js';
export { isEmpty } from './utils/isEmpty.js';
export { isNull } from './utils/isNull.js';
export { isUndefined } from './utils/isUndefined.js';
export { sleep } from './utils/sleep.js';

// Shortcuts
// Scorciatoie
export { select } from './shortcuts/select.js';
