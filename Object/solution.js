export const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

export function keys(obj) {
    const keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}

export function values(obj) {
    const values = [];
    for (let key in obj) {
        if (typeof obj[key] !== 'function') {
            values.push(obj[key]);
        }
    }
    return values;
}

export function mapObject(obj, cb) {
    const result = {};
    for (let key in obj) {
        result[key] = cb(key, obj[key]);
    }
    return result;
}

export function pairs(obj) {
    const pairs = [];

    for (let key in obj) {
        pairs.push([key,  obj[key]]);
    }
    return pairs;
}

/* STRETCH PROBLEMS */

export function invert(obj) {
    const inverted = {};

    for (let key in obj) {
        inverted[obj[key]] = key;
    }
    return inverted;
}

export function defaults(obj, defaultProps) {
    for (let key in obj) {
        if (obj[key] === undefined) {
            obj[key] = defaultProps[key];
        }
    }
    return obj;
}