export function counterFactory() {
    let counter = 0;
    const obj = {
        increment : () => ++counter,
        decrement : () => --counter
    }
    return obj;
}
