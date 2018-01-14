export const SET_NAME = "SET_NAME";
// export const DECREMENT = 'DECREMENT';

export function setName(payload) {
  return { type: SET_NAME, payload };
}

// export function remVal(payload) {
//     return { type: DECREMENT, payload }
// }
