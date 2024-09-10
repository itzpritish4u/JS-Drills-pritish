import { counterFactory, limitFunctionCallCount, cacheFunction } from './solution.js'

const counter = counterFactory();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
