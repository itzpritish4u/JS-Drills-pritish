import { each, map, reduce, find, filter, flatten, items, nestedArray } from './solution.js';

each(items, (element, index) => {
  console.log(`Element: ${element}, Index: ${index}`);
});

const mapped = map(items, (element) => element * 2);
console.log("\nMapped Array:", mapped);







