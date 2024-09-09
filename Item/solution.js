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







