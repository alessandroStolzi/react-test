import React from 'react';
// import PropTypes from 'prop-types';
function submit(props) {
  return (
    <button type="submit" className="btn btn-primary" disabled={props.disabled}>
    submit
    </button>
  );
}

export default submit;
