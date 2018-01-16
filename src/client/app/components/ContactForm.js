import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import showResults from '../showResults';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  return errors;
};

const renderInput = ({ input, meta, label }) => (
  <div className="form-group invalid ">
    <pre>{JSON.stringify(meta, 0, 2)}</pre>
    <label className="control-label">{label}</label>
    <input className="form-control" {...input} />
    <span>{meta.error}</span>
  </div>
);
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

let ContactForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(showResults)}>
    <Field name="firstName" label="fefwefwf" component={renderInput} type="text" />

    <button type="submit" className="btm btn primary" disabled={submitting}>
      submit
    </button>
  </form>
);
// const { handleSubmit } = props;
// return <form onSubmit={handleSubmit}>{/* form body */}</form>;
ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.func
};

ContactForm.defaultProps = {
  handleSubmit: () => {},
  submitting: () => {}
};

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact',
  destroyOnUnmount: false,
  validate
})(ContactForm);

export default ContactForm;
