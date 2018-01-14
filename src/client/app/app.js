import React from 'react';
import AwesomeComponent from './components/AwesomeComponent';
import { connect } from 'React-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        // this.state = {likesCount : 0};
        // this.onLike = this.onLike.bind(this);
    }
 render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col md-12">
                        <p> Hello React Project {this.props.name}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col md-12">
                        <AwesomeComponent />
                    </div>
                </div>
            </div>
        );
    }

}
const mapToStateProps =(state)=>{
    return {
        name : state.rename.name
    }
}

export default connect(mapToStateProps)(App);