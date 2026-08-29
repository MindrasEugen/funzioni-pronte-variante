# Utility Kit

[![npm version](https://img.shields.io/badge/npm-v1.2.0-blue.svg)](https://www.npmjs.com/package/@mindraseugen/utility-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tests: 552 passed](https://img.shields.io/badge/Tests-552%20passed-brightgreen.svg)](https://github.com/MindrasEugen/utility-kit/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Supported-3178c6.svg)](https://www.typescriptlang.org/)

**A lightweight JavaScript utility library for modern web development.**

A collection of **150 ready-to-use, categorized, and well-tested functions** to speed up your web application development.

## 🚀 Installation

```bash
npm install @mindraseugen/utility-kit
# or
yarn add @mindraseugen/utility-kit
# or
pnpm add @mindraseugen/utility-kit
```

## 📦 Import

### Full Import
```javascript
import * as uk from '@mindraseugen/utility-kit';
uk.randomBgColor(document.body);
uk.calculateAverage([10, 20, 30]);
```

### Category-based Import (Tree-shaking optimized)
```javascript
import { randomBgColor, createEl, on, fadeIn, removeEl, toggleClass, hasClass, addClass, removeClass, getStyle, setStyle, scrollTo } from '@mindraseugen/utility-kit/dom';
import { calculateAverage, sum, findMax, findMin, round, calculatePercentage, isPrime, calculateHypotenuse, factorial, power, nthRoot, isInRange, clamp, randomFloat, toDegrees, toRadians, median, mode, standardDeviation, gcd, lcm, isEven, isOdd, toFixed, modulo, abs, ceil, lerp, mapRange, roundToNearest, isMultipleOf, sign, weightedRandom, percentageChange } from '@mindraseugen/utility-kit/math';
import { filterArray, sortArray, unique, shuffle, chunk, flatten, groupBy, keyBy, difference, intersection, union, without, first, last, tail, take, drop, compact, fill, range, concat, indexOf, lastIndexOf, sample, sampleSize, partition, zip, rotate, move, countBy, sumBy } from '@mindraseugen/utility-kit/array';
import { reverseString, countChars, capitalize, truncate, includesText, replaceText, camelCase, snakeCase, kebabCase, pascalCase, trimStart, trimEnd, repeat, words, startsWith, endsWith, padStart, padEnd, toLower, toUpper, trim, split, join, slice, escapeHtml, unescapeHtml, stripHtml, isEmail, isURL, maskString, wordCount, ellipsis } from '@mindraseugen/utility-kit/string';
import { logColor, getType, generateId, randomInt, debounce, throttle, once, memoize, deepClone, deepEqual, isEmpty, isNull, isUndefined, sleep, uuid, isFunction, isArray, isObject, isString, isNumber, isBoolean } from '@mindraseugen/utility-kit/utils';
import { select } from '@mindraseugen/utility-kit/shortcuts';
import { pick, omit, merge, deepMerge, mapValues, invert, getPath, setPath, hasPath, isPlainObject } from '@mindraseugen/utility-kit/object';
import { formatDate, addDays, subDays, addMonths, diffInDays, isToday, isWeekend, startOfDay, endOfDay, daysInMonth } from '@mindraseugen/utility-kit/date';
```

### CDN (for browser)
```html
<script src="https://unpkg.com/@mindraseugen/utility-kit@1.2.0/dist/utility-kit.min.js"></script>
<script>
  UtilityKit.randomBgColor(document.body);
</script>
```

## 📁 Categories

| Category | Functions | Description |
|-----------|----------|-------------|
| **DOM** | `randomBgColor`, `createEl`, `on`, `fadeIn`, `removeEl`, `toggleClass`, `hasClass`, `addClass`, `removeClass`, `getStyle`, `setStyle`, `scrollTo` | DOM manipulation and animations |
| **Math** | `calculateAverage`, `sum`, `findMax`, `findMin`, `round`, `calculatePercentage`, `isPrime`, `calculateHypotenuse`, `factorial`, `power`, `nthRoot`, `isInRange`, `clamp`, `randomFloat`, `toDegrees`, `toRadians`, `median`, `mode`, `standardDeviation`, `gcd`, `lcm`, `isEven`, `isOdd`, `toFixed`, `modulo`, `abs`, `ceil`, `lerp`, `mapRange`, `roundToNearest`, `isMultipleOf`, `sign`, `weightedRandom`, `percentageChange` | Mathematical operations |
| **Array** | `filterArray`, `sortArray`, `unique`, `shuffle`, `chunk`, `flatten`, `groupBy`, `keyBy`, `difference`, `intersection`, `union`, `without`, `first`, `last`, `tail`, `take`, `drop`, `compact`, `fill`, `range`, `concat`, `indexOf`, `lastIndexOf`, `sample`, `sampleSize`, `partition`, `zip`, `rotate`, `move`, `countBy`, `sumBy` | Array manipulation |
| **String** | `reverseString`, `countChars`, `capitalize`, `truncate`, `includesText`, `replaceText`, `camelCase`, `snakeCase`, `kebabCase`, `pascalCase`, `trimStart`, `trimEnd`, `repeat`, `words`, `startsWith`, `endsWith`, `padStart`, `padEnd`, `toLower`, `toUpper`, `trim`, `split`, `join`, `slice`, `escapeHtml`, `unescapeHtml`, `stripHtml`, `isEmail`, `isURL`, `maskString`, `wordCount`, `ellipsis` | String manipulation |
| **Utils** | `logColor`, `getType`, `generateId`, `randomInt`, `debounce`, `throttle`, `once`, `memoize`, `deepClone`, `deepEqual`, `isEmpty`, `isNull`, `isUndefined`, `sleep`, `uuid`, `isFunction`, `isArray`, `isObject`, `isString`, `isNumber`, `isBoolean` | General utilities |
| **Shortcuts** | `select` | DOM element selection |
| **Object** | `pick`, `omit`, `merge`, `deepMerge`, `mapValues`, `invert`, `getPath`, `setPath`, `hasPath`, `isPlainObject` | Object manipulation |
| **Date** | `formatDate`, `addDays`, `subDays`, `addMonths`, `diffInDays`, `isToday`, `isWeekend`, `startOfDay`, `endOfDay`, `daysInMonth` | Date utilities |

## 🎯 Usage Examples

### React
```jsx
import { randomBgColor } from '@mindraseugen/utility-kit';

function MyComponent() {
  return <div onClick={() => randomBgColor(document.body)}>Click me!</div>;
}
```

### Vue
```vue
<script setup>
import { calculateAverage } from '@mindraseugen/utility-kit';
const average = calculateAverage([25, 30, 28]);
</script>
<template><p>Average: {{ average }}</p></template>
```

### Vanilla JavaScript
```javascript
import { generateId, randomInt } from '@mindraseugen/utility-kit';
const userId = generateId(16);
const randomNum = randomInt(1, 100);
```

## 🔧 Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Create bundles in `/dist/` |
| `npm test` | Run all tests |
| `npm run test:coverage` | Run tests with coverage |
| `npm run dev` | Build in watch mode |

## 📁 Project Structure

```
utility-kit/
├── src/                          # Source code
│   ├── dom/                      # DOM Functions
│   ├── math/                     # Math Functions
│   ├── array/                    # Array Functions
│   ├── string/                   # String Functions
│   ├── utils/                     # Utility Functions
│   ├── shortcuts/                # Shortcuts
│   ├── object/                   # Object Functions
│   ├── date/                     # Date Functions
│   └── index.js                  # Entry point
├── dist/                         # Build output
├── types/                       # TypeScript definitions
├── tests/                        # Unit tests
├── demo/                         # Interactive demos
├── package.json
├── rollup.config.js
├── tsconfig.json
└── README.md
```

## 🤝 Contributing

For detailed contribution guidelines, please see [CONTRIBUTION.md](CONTRIBUTION.md).

For a quick start:
1. Fork the repository
2. Create a branch (`git checkout -b feature/new-function`)
3. Add your function in `src/` following the conventions
4. Add tests in `tests/`
5. Run `npm run build && npm test`
6. Make a pull request

**Note:** You can also create new categories if you believe it improves organization.

## 📜 License

MIT License - see [LICENSE](LICENSE) for details.

---

# Utility Kit - Versione Italiana

[![npm version](https://img.shields.io/badge/npm-v1.2.0-blue.svg)](https://www.npmjs.com/package/@mindraseugen/utility-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tests: 552 passed](https://img.shields.io/badge/Tests-552%20passed-brightgreen.svg)](https://github.com/MindrasEugen/utility-kit/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Supported-3178c6.svg)](https://www.typescriptlang.org/)

**Una libreria utility JavaScript leggera per lo sviluppo web moderno.**

Una raccolta di **150 funzioni pronte all'uso, categorizzate e ben testate** per accelerare lo sviluppo della tua applicazione web.

## 🚀 Installazione

```bash
npm install @mindraseugen/utility-kit
# o
yarn add @mindraseugen/utility-kit
# o
pnpm add @mindraseugen/utility-kit
```

## 📦 Importa

### Importazione completa
```javascript
import * as uk from '@mindraseugen/utility-kit';
uk.randomBgColor(document.body);
uk.calculateAverage([10, 20, 30]);
```

### Importazione basata su categorie (ottimizzato per tree-shaking)
```javascript
import { randomBgColor, createEl, on, fadeIn, removeEl, toggleClass, hasClass, addClass, removeClass, getStyle, setStyle, scrollTo } from '@mindraseugen/utility-kit/dom';
import { calculateAverage, sum, findMax, findMin, round, calculatePercentage, isPrime, calculateHypotenuse, factorial, power, nthRoot, isInRange, clamp, randomFloat, toDegrees, toRadians, median, mode, standardDeviation, gcd, lcm, isEven, isOdd, toFixed, modulo, abs, ceil, lerp, mapRange, roundToNearest, isMultipleOf, sign, weightedRandom, percentageChange } from '@mindraseugen/utility-kit/math';
import { filterArray, sortArray, unique, shuffle, chunk, flatten, groupBy, keyBy, difference, intersection, union, without, first, last, tail, take, drop, compact, fill, range, concat, indexOf, lastIndexOf, sample, sampleSize, partition, zip, rotate, move, countBy, sumBy } from '@mindraseugen/utility-kit/array';
import { reverseString, countChars, capitalize, truncate, includesText, replaceText, camelCase, snakeCase, kebabCase, pascalCase, trimStart, trimEnd, repeat, words, startsWith, endsWith, padStart, padEnd, toLower, toUpper, trim, split, join, slice, escapeHtml, unescapeHtml, stripHtml, isEmail, isURL, maskString, wordCount, ellipsis } from '@mindraseugen/utility-kit/string';
import { logColor, getType, generateId, randomInt, debounce, throttle, once, memoize, deepClone, deepEqual, isEmpty, isNull, isUndefined, sleep, uuid, isFunction, isArray, isObject, isString, isNumber, isBoolean } from '@mindraseugen/utility-kit/utils';
import { select } from '@mindraseugen/utility-kit/shortcuts';
import { pick, omit, merge, deepMerge, mapValues, invert, getPath, setPath, hasPath, isPlainObject } from '@mindraseugen/utility-kit/object';
import { formatDate, addDays, subDays, addMonths, diffInDays, isToday, isWeekend, startOfDay, endOfDay, daysInMonth } from '@mindraseugen/utility-kit/date';
```

### CDN (per browser)
```html
<script src="https://unpkg.com/@mindraseugen/utility-kit@1.2.0/dist/utility-kit.min.js"></script>
<script>
  UtilityKit.randomBgColor(document.body);
</script>
```

## 📁 Categorie

| Categoria | Funzioni | Descrizione |
|-----------|----------|-------------|
| **DOM** | `randomBgColor`, `createEl`, `on`, `fadeIn`, `removeEl`, `toggleClass`, `hasClass`, `addClass`, `removeClass`, `getStyle`, `setStyle`, `scrollTo` | Manipolazione DOM e animazioni |
| **Math** | `calculateAverage`, `sum`, `findMax`, `findMin`, `round`, `calculatePercentage`, `isPrime`, `calculateHypotenuse`, `factorial`, `power`, `nthRoot`, `isInRange`, `clamp`, `randomFloat`, `toDegrees`, `toRadians`, `median`, `mode`, `standardDeviation`, `gcd`, `lcm`, `isEven`, `isOdd`, `toFixed`, `modulo`, `abs`, `ceil`, `lerp`, `mapRange`, `roundToNearest`, `isMultipleOf`, `sign`, `weightedRandom`, `percentageChange` | Operazioni matematiche |
| **Array** | `filterArray`, `sortArray`, `unique`, `shuffle`, `chunk`, `flatten`, `groupBy`, `keyBy`, `difference`, `intersection`, `union`, `without`, `first`, `last`, `tail`, `take`, `drop`, `compact`, `fill`, `range`, `concat`, `indexOf`, `lastIndexOf`, `sample`, `sampleSize`, `partition`, `zip`, `rotate`, `move`, `countBy`, `sumBy` | Manipolazione array |
| **String** | `reverseString`, `countChars`, `capitalize`, `truncate`, `includesText`, `replaceText`, `camelCase`, `snakeCase`, `kebabCase`, `pascalCase`, `trimStart`, `trimEnd`, `repeat`, `words`, `startsWith`, `endsWith`, `padStart`, `padEnd`, `toLower`, `toUpper`, `trim`, `split`, `join`, `slice`, `escapeHtml`, `unescapeHtml`, `stripHtml`, `isEmail`, `isURL`, `maskString`, `wordCount`, `ellipsis` | Manipolazione stringhe |
| **Utils** | `logColor`, `getType`, `generateId`, `randomInt`, `debounce`, `throttle`, `once`, `memoize`, `deepClone`, `deepEqual`, `isEmpty`, `isNull`, `isUndefined`, `sleep`, `uuid`, `isFunction`, `isArray`, `isObject`, `isString`, `isNumber`, `isBoolean` | Utilità generiche |
| **Shortcuts** | `select` | Selezione elementi DOM |
| **Object** | `pick`, `omit`, `merge`, `deepMerge`, `mapValues`, `invert`, `getPath`, `setPath`, `hasPath`, `isPlainObject` | Manipolazione oggetti |
| **Date** | `formatDate`, `addDays`, `subDays`, `addMonths`, `diffInDays`, `isToday`, `isWeekend`, `startOfDay`, `endOfDay`, `daysInMonth` | Utilità per le date |

## 🎯 Esempi di utilizzo

### React
```jsx
import { randomBgColor } from '@mindraseugen/utility-kit';

function MyComponent() {
  return <div onClick={() => randomBgColor(document.body)}>Cliccami!</div>;
}
```

### Vue
```vue
<script setup>
import { calculateAverage } from '@mindraseugen/utility-kit';
const average = calculateAverage([25, 30, 28]);
</script>
<template><p>Media: {{ average }}</p></template>
```

### JavaScript puro
```javascript
import { generateId, randomInt } from '@mindraseugen/utility-kit';
const userId = generateId(16);
const randomNum = randomInt(1, 100);
```

## 🔧 Script

| Script | Descrizione |
|--------|-------------|
| `npm run build` | Crea bundle in `/dist/` |
| `npm test` | Esegui tutti i test |
| `npm run test:coverage` | Esegui test con coverage |
| `npm run dev` | Build in modalità watch |

## 📁 Struttura del progetto

```
utility-kit/
├── src/                          # Codice sorgente
│   ├── dom/                      # Funzioni DOM
│   ├── math/                     # Funzioni Matematiche
│   ├── array/                    # Funzioni Array
│   ├── string/                   # Funzioni Stringhe
│   ├── utils/                     # Funzioni di Utilità
│   ├── shortcuts/                # Scorciatoie
│   ├── object/                   # Funzioni Oggetti
│   ├── date/                     # Funzioni Data
│   └── index.js                  # Punto di ingresso
├── dist/                         # Output della build
├── types/                       # Definizioni TypeScript
├── tests/                        # Test unitari
├── demo/                         # Demo interattive
├── package.json
├── rollup.config.js
├── tsconfig.json
└── README.md
```

## 🤝 Contribuire

Per linee guida dettagliate, vedi [CONTRIBUTION.md](CONTRIBUTION.md).

Per iniziare velocemente:
1. Fai fork del repository
2. Crea un branch (`git checkout -b feature/new-function`)
3. Aggiungi la tua funzione in `src/` seguendo le convenzioni
4. Aggiungi test in `tests/`
5. Esegui `npm run build && npm test`
6. Fai una pull request

**Nota:** Puoi anche creare nuove categorie se ritieni che migliorino l'organizzazione.

## 📜 Licenza

Licenza MIT - vedi [LICENSE](LICENSE) per i dettagli.

---

**Author:** MindrasEugen
**Version:** 1.2.0
**Last updated:** 2026-08-29
