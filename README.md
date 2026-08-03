# Utility Kit

[![npm version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/@mindraseugen/utility-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tests: 110 passed](https://img.shields.io/badge/Tests-110%20passed-brightgreen.svg)](https://github.com/MindrasEugen/utility-kit/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Supported-3178c6.svg)](https://www.typescriptlang.org/)

**A lightweight JavaScript utility library for modern web development.**

A collection of 28+ ready-to-use, categorized, and well-tested functions to speed up your web application development.

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
import { randomBgColor, createEl, on, fadeIn } from '@mindraseugen/utility-kit/dom';
import { calculateAverage, sum, findMax, findMin, round, calculatePercentage, isPrime, calculateHypotenuse, factorial, power, nthRoot, isInRange } from '@mindraseugen/utility-kit/math';
import { filterArray, sortArray, unique, shuffle } from '@mindraseugen/utility-kit/array';
import { reverseString, countChars, capitalize, truncate, includesText, replaceText } from '@mindraseugen/utility-kit/string';
import { logColor, getType, generateId, randomInt } from '@mindraseugen/utility-kit/utils';
import { select } from '@mindraseugen/utility-kit/shortcuts';
```

### CDN (for browser)
```html
<script src="https://unpkg.com/@mindraseugen/utility-kit@1.0.0/dist/utility-kit.min.js"></script>
<script>
  UtilityKit.randomBgColor(document.body);
</script>
```

## 📁 Categories

| Category | Functions | Description |
|-----------|----------|-------------|
| **DOM** | `randomBgColor`, `createEl`, `on`, `fadeIn` | DOM manipulation and animations |
| **Math** | `calculateAverage`, `sum`, `findMax`, `findMin`, `round`, `calculatePercentage`, `isPrime`, `calculateHypotenuse`, `factorial`, `power`, `nthRoot`, `isInRange` | Mathematical operations |
| **Array** | `filterArray`, `sortArray`, `unique`, `shuffle` | Array manipulation |
| **String** | `reverseString`, `countChars`, `capitalize`, `truncate`, `includesText`, `replaceText` | String manipulation |
| **Utils** | `logColor`, `getType`, `generateId`, `randomInt` | General utilities |
| **Shortcuts** | `select` | DOM element selection |

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

1. Fork the repository
2. Create a branch (`git checkout -b feature/new-function`)
3. Add your function in `src/` following the conventions
4. Add tests in `tests/`
5. Run `npm run build && npm test`
6. Make a pull request

## 📜 License

MIT License - see [LICENSE](LICENSE) for details.

---

**Author:** MindrasEugen  
**Version:** 1.0.0  
**Last updated:** 2026-08-03
