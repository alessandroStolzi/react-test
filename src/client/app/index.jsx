import { createStore ,applyMiddleware,} from 'redux';
import logger from 'redux-logger';
import {addVal,remVal} from './actions/addActions';
import reducer from './reducers/index'


let store = createStore(reducer,applyMiddleware(logger))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch(addVal({val:10}))
// 1
store.dispatch(addVal({val:110}))
// 2
store.dispatch(remVal({val:50}))
// 1
// import React from 'react';
// import {render} from 'react-dom';
// import './scss/main.scss';
// import AwesomeComponent from './AwesomeComponent.jsx';

// class App extends React.Component {
//   render () {
//     return(
//       <div>
//         <p> Hello React Project   aaaaa</p>
//         <AwesomeComponent />
//       </div>
//     );
//   }
// }

// render(<App/>, document.getElementById('app'));