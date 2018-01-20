import { delay } from 'redux-saga';
import { put, all, takeEvery, call } from 'redux-saga/effects';
import { setName } from '../actions/renameActions';


function* incrementAsync({ payload, resolve }) {
  // try {
  yield delay(5000);
  yield put(setName(`1x1 ${payload} `));
  yield call(resolve);
  // } catch (error) {
  // yield call(reject, error);
  // }
}

function* watchIncrementAsync() {
  yield takeEvery('RENAME_ASYNC', incrementAsync);
}

function* helloSaga() {
  // yield 5;
  console.log('Hello Sagas!');
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ]);
}
