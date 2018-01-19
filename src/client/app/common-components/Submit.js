import React from 'react';
// import PropTypes from 'prop-types';
const submit = props => (
  <div>
    <button type="submit" className="btn btn-primary" disabled={props.disabled}>
      submit
    </button>
  </div>
);
export default submit;
