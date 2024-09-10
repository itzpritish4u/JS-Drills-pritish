export function counterFactory() {
    let counter = 0;
    const obj = {
        increment : () => ++counter,
        decrement : () => --counter
    }
    return obj;
}

export function limitFunctionCallCount(cb, n) {
    let callCount = 0;

    return function (...args) {
        if (callCount < n) {
            callCount += 1;
            return cb(...args);
        }
        return null;
    }
}

export function cacheFunction(cb) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.hasOwnProperty(key)) {
            return cache[key];
        }
        const result = cb(...args);
        cache[key] = result;
        return result;
    }
}