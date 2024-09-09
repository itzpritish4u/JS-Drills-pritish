import { each, map, reduce, find, filter, flatten, items, nestedArray } from './solution.js';

each(items, (element, index) => {
  console.log(`Element: ${element}, Index: ${index}`);
});

const mapped = map(items, (element) => element * 2);
console.log("\nMapped Array:", mapped);

const sum = reduce(items, (accumulator, element) => accumulator + element, 0);
console.log("\nSum of Items:", sum);

const foundElement = find(items, (element) => element > 3);
console.log("\nFound Element:", foundElement);

const filteredItems = filter(items, (element) => element > 3);
console.log("\nFiltered Items:", filteredItems);

const flatArray = flatten(nestedArray);
console.log("\nFlattened Array:", flatArray);