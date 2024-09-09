export const items = [1, 2, 3, 4, 5, 5];

export function each(elements, cb) {
    for (let i = 0; i < elements.length; ++i) {
        cb(elements[i], i);
    }
}

export function map(elements, cb) {
    const result = [];
    for (let i = 0; i < elements.length; ++i) {
        result[i] = cb(elements[i], i);
    }
    return result;
}

export function reduce(elements, cb, startingValue) {
    let accumulator = startingValue === undefined ? elements[0] : startingValue;
    let i = startingValue === undefined ? 1 : 0;
    
    for (; i < elements.length; ++i) {
        accumulator = cb(accumulator, elements[i]);
    }
    return accumulator;
}

export function find(elements, cb) {
    for (let i = 0; i < elements.length; ++i) {
        if (cb(elements[i], i)) {
            return elements[i];
        }
    }
    return undefined;
}

export function filter(elements, cb) {
    const result = [];
    for (let i = 0; i < elements.length; ++i) {
        if (cb(elements[i], i)) {
            result.push(elements[i]);
        }
    }
    return result;
}

