import { counterFactory, limitFunctionCallCount, cacheFunction } from './solution.js'

const counter = counterFactory();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

const limitedAdd = limitFunctionCallCount((a, b) => a + b, 3);
console.log(limitedAdd(1, 2));
console.log(limitedAdd(3, 4));

const cachedSum = cacheFunction((a, b) => a + b);
console.log(cachedSum(1, 2));
console.log(cachedSum(3, 4));