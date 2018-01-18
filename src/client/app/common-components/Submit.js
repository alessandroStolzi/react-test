import React from 'react';
// import PropTypes from 'prop-types';
function submit(props) {
  return (
    <div>
      <button type="submit" className="btn btn-primary" disabled={props.disabled}>
      submit
      </button>
    </div>
    // {props.disabled)?'pippo':''}
  );
}

export default submit;
