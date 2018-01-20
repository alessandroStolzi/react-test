export default function showResults(values, dispatch) {
  return new Promise((resolve) => {
    const payload = (`bar ${values.firstName} baz`);
    dispatch({ type: 'RENAME_ASYNC', payload, resolve });
  });
}

