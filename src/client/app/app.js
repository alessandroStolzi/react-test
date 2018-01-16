import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import AwesomeComponent from './components/AwesomeComponent';
import ContactForm from './components/ContactForm';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col md-12">
            <p> Hello React Project {this.props.name}</p>
          </div>
        </div>
        <div className="row">
          <div className="col md-12">
            <ContactForm />
            {/* <AwesomeComponent /> */}
          </div>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  name: PropTypes.string.isRequired
};
// const mapToStateProps = (state) => {
//   return {
//     name: state.rename.name
//   };
// };
const mapToStateProps = state => ({ name: state.rename.name });
export default connect(mapToStateProps)(App);
