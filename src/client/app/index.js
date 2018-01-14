import { createStore, applyMiddleware, } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers/index'
import App from './app'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux' 
import './scss/main.scss';




let store = createStore(reducer, applyMiddleware(logger))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch(addVal({ val: 10 }))
// // 1
// store.dispatch(addVal({ val: 110 }))
// // 2
// store.dispatch(remVal({ val: 50 }))
// // 1

class Container extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

render(<Container />, document.getElementById('root'));