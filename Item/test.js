import { each, map, reduce, find, filter, flatten, items, nestedArray } from './solution.js';

each(items, (element, index) => {
  console.log(`Element: ${element}, Index: ${index}`);
});

const mapped = map(items, (element) => element * 2);
console.log("\nMapped Array:", mapped);

const sum = reduce(items, (accumulator, element) => accumulator + element, 0);
console.log("\nSum of Items:", sum);





