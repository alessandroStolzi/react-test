
// import { connect } from 'react-redux';
import { setName } from './actions/renameActions';

// const showResults = values => setName(values.firstName);
export default function showResults(values, dispatch) {
  //   new Promise((resolve) => {
  //   setTimeout(() => {
  //     // simulate server latency
  //     window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);

  //     resolve({ uno: values.firstName, due: values.sec });
  //   }, 500);
  // });
  return dispatch(setName(`bar ${values.firstName} baz`));
}

// function mapDispatchToProps(dispatch) {
//   return {
//     setName: value => dispatch(setName(value))
//   };
// }

// export default connect(mapDispatchToProps)(showResults);

// export default showResults;
