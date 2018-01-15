import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
// import _ from 'lodash';
import { addVal } from '../actions/addActions';
import { setName } from '../actions/renameActions';

// import {INCREMENT,DECREMENT} from '../actions/addActions'

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      x: event.target.value
    });
  }
  render() {
    return (
      <div>
        Likes : <span>{this.props.value}</span>
        <div>
          <button className="btn btn-primary" onClick={() => this.props.addCounter(44)}>
            Like Me!!!!!
          </button>
        </div>
        <div>
          <pre>{this.state.x}</pre>
          <input type="number" value={this.state.x} onChange={this.handleChange} />
          <button className="btn btn-primary" onClick={() => this.props.setName(this.state.x)}>
            Like Me!!!!!
          </button>
        </div>
      </div>
    );
  }
}

AwesomeComponent.propTypes = {
  value: PropTypes.number.isRequired,
  // value2: PropTypes.number.isRequired,
  addCounter: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired
};

const mapToStateProps = state => ({
  value: state.counter.value
});

function mapDispatchToProps(dispatch) {
  const a = value => dispatch(addVal({ val: value }));
  // const b = value => dispatch(setName(value));
  return { addCounter: a, setName: b };
  // const actionService = {
  //   addCounter: bindActionCreators(addVal({ val: value }, dispatch)
  // };
  // return actionService
  // {
  //    ,
  //   // ,
  //   // counterActions: bindActionCreators(setName(value), dispatch)
  // }
}
// refreshCustomerInfo: (customerPersonalInfo,idContract) => {
  
// const mapDispatchtoProps = dispatch => ({
//   addCounter: value => {
//     dispatch());
//   },
//   setName: value => {
//     dispatch();
//   }
// });

export default connect(mapToStateProps, mapDispatchToProps)(AwesomeComponent);
