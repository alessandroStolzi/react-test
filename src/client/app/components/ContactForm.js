

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import showResults from '../showResults';
import inputText from '../common-components/inputText';
import Submit from '../common-components/Submit';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  return errors;
};
const ContactForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(showResults)}>
    <Field
      name="firstName"
      label="fefwefwf"
      component={inputText}
      type="text"
    />
    <Submit disabled={submitting} />
  </form>
);

export default reduxForm({
  form: 'submitValidation',
  destroyOnUnmount: false,
  validate
})(ContactForm);
