import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addVal } from '../actions/addActions';
// import {INCREMENT,DECREMENT} from '../actions/addActions'

class AwesomeComponent extends React.Component {
  constructor(...props) {
    super(props);
  }

  // onLike () {
  //   let newLikesCount = this.state.likesCount + 1;
  //   this.setState({likesCount: newLikesCount});
  // }

  render() {
    return (
      <div>
        Likes : <span>{this.props.value}</span>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => this.props.addCounter(44)}
          >
            Like Me!!!!!
          </button>
        </div>
      </div>
    );
  }
}

AwesomeComponent.propTypes = {
  value: PropTypes.string.isRequired,
  addCounter: PropTypes.func.isRequired
};

const mapToStateProps = state => ({ value: state.counter.value });
const mapDispatcProps = dispatch => ({
  addCounter: (value) => {
    dispatch(addVal({ val: value }));
  }
});
// {
//   return {
//     addCounter: value => {
//       dispatch(addVal({ val: value }));
//     }
//   };
// };
export default connect(mapToStateProps, mapDispatcProps)(AwesomeComponent);
