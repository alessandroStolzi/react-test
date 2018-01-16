import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const inputText = ({ input, meta, label }) => {
  const formClasses = classNames({
    'form-group': true,
    'has-error': meta.touched && meta.error
  });
  return (
    <div className={formClasses}>
      <pre>{JSON.stringify(meta, 0, 2)}</pre>
      <label className="control-label">{label}</label>
      <input className="form-control" {...input} />
      <sub className="pull-right has-error">{meta.touched && meta.error}</sub>
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

export default { inputText };
