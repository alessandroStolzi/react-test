import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const inputText = (props) => {
  const formClasses = classNames({
    'form-group': true,
    'has-error': props.meta.touched && props.meta.error
  });
  return (
    <div>
      <div className={formClasses}>
        <label className="control-label">{props.label}</label>
        <input className="form-control" {...props.input} />
      </div>
      <sub className="pull-right has-error">{props.meta.touched && props.meta.error}</sub>
    </div>
  );
};
inputText.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string
};

inputText.defaultProps = {
  input: {},
  meta: {},
  label: ''
};

export default inputText;
