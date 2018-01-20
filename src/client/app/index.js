import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import reducer from './reducers/index';
import App from './app';
import helloSaga from './sagas/helloSaga';
import './scss/main.scss';


const sagaMiddleware = createSagaMiddleware();


const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(helloSaga);

class Container extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

render(<Container />, document.getElementById('root'));
