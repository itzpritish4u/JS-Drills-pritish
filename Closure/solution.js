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

