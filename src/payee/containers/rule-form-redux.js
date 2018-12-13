import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import asyncValidate from "./asyncValidate";
import Select2wrap from "../components/select2wrap.js";
import Select from "../components/select-field.js";

const renderField = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? "async-validating" : ""}>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const RuleFormRedux = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  console.log("registereTINs", props.registeredTins);
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          * TIN (All available payees with a selected TIN will be auto-enrolled
          for EFT going forward)
        </label>
        <div>
          <Field
            name="tins"
            data={props.registeredTins}
            multiple={true}
            component={Select2wrap}
            options={{
              placeholder: "search tins"
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <label>
          * INCLUDE PAYERS (Selected TINs above will be auto-enrolled for EFT
          with these payers going forward)
        </label>
        <div>
          <Field
            name="payers"
            data={props.payers}
            multiple={true}
            component={Select2wrap}
            options={{
              placeholder: "search payers"
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-md-2">
            <label>NPI</label>
            <div>
              <Field
                name="includenpi"
                multiple={false}
                data={[
                  { text: "include", id: "include" },
                  { text: "exclude", id: "exclude" }
                ]}
                component={Select2wrap}
                options={{
                  placeholder: "select",
                  minimumResultsForSearch: "Infinity"
                }}
              />
            </div>
          </div>
          <div className="col-md-10">
            <label>
              If a payer does not provide NPIs, any designated NPI rules may not
              apply
            </label>
            <div>
              <Field
                name="npis"
                multiple={true}
                component={Select2wrap}
                options={{
                  placeholder: "select npi",
                  tags: true,
                  tokenSeparators: [",", " "]
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="row">
          <button
            className="btn btn-primary btn-margin-left-right-15"
            type="submit"
            disabled={submitting}
          >
            VALIDATE RULE
          </button>
          <button
            className="btn btn-default btn-margin-left-right-15"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            CLEAR VALUES
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "rule-redux-form", // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ["username"]
})(RuleFormRedux);
