import React from "react";

const HorizontalTextField = ({
  input,
  label,
  type,
  labelLength,
  inputLength,
  placeholder,
  meta: { touched, error }
}) =>
  <div className={`form-group ${touched && error ? "has-error" : ""}`}>
    <span className={`control-label col-md-${labelLength ? labelLength : "6"}`}>
      {label}
    </span>
    <div className={`col-md-${inputLength ? inputLength : "6"}`}>
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        className="form-control"
      />
      {touched &&
        error &&
        <span className="field-error-message">
          {error}
        </span>}
    </div>
  </div>;

export default HorizontalTextField;
