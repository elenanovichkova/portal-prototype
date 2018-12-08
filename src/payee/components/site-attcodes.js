import React from "react";
import { Field } from "redux-form";

const renderField = ({ input, label, type, meta: { touched, error } }) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched &&
        error &&
        <span>
          {error}
        </span>}
    </div>
  </div>;

const AttachmentCodes = ({
  fields,
  title,
  formConfig,
  meta: { error, submitFailed }
}) => {
  {
    fields.map((member, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Code"
          onClick={() => fields.remove(index)}
        />
        <h4>
          Member #{index + 1}
        </h4>
        <Field
          name={`${member}.code`}
          type="text"
          component={renderField}
          label="Code"
        />
        <Field
          name={`${member}.val1`}
          type="text"
          component={renderField}
          label="Val1"
        />
        <Field
          name={`${member}.val2`}
          type="text"
          component={renderField}
          label="Val2"
        />
      </li>
    );
  }
};

export default AttachmentCodes;
