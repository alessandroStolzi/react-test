import React from 'react';
import {render} from 'react-dom';
import './scss/main.scss';
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return(
      <div>
        <p> Hello React Project   aaaaa</p>
        <AwesomeComponent />
        
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));