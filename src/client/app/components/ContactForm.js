import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import showResults from '../showResults';
// import inputText from '../common-components/inputText';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  return errors;
};

const renderInput = ({ input, meta, label }) => {
  const formClasses = classNames({
    'form-group': true,
    'has-error': meta.touched && meta.error
  });
  return (
    <div className={formClasses}>
      <pre>{JSON.stringify(input, 0, 2)}</pre>
      <pre>{JSON.stringify(meta, 0, 2)}</pre>
      <label className="control-label">{label}</label>
      <input className="form-control" {...input} />
      <sub className="pull-right has-error">{meta.touched && meta.error}</sub>
    </div>
  );
};

renderInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string
};

renderInput.defaultProps = {
  input: {},
  meta: {},
  label: ''
};

const ContactForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(showResults)}>
    <Field
      name="firstName"
      label="fefwefwf"
      component={renderInput}
      type="text"
    />
    <button type="submit" className="btm btn primary" disabled={submitting}>
      submit
    </button>
  </form>
);

export default reduxForm({
  form: 'submitValidation',
  destroyOnUnmount: false,
  validate
})(ContactForm);
