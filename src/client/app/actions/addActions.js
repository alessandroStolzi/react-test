export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function addVal(payload) {
    return { type: INCREMENT, payload }
}

export function remVal(payload) {
    return { type: DECREMENT, payload }
}