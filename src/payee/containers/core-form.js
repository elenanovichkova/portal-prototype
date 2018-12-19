import React from "react";
import { Field, reduxForm } from "redux-form";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const CoreForm = props => {
  const { handleSubmit, previousPage, tins, payers } = props;
  return (
    <div>
      <div>Core Form</div>
      <div>{tins}</div>
      <div>{payers}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" className="next">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "wizard-rule-form", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(CoreForm);
