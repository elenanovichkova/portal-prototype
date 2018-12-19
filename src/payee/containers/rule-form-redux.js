import React from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import validate from "./validate";
import asyncValidate from "./asyncValidate";
import Select2wrap from "../components/select2wrap.js";
import Select2tokenwrap from "../components/select2tokenwrap.js";

import { validateNpi, required } from "../../validators.js";

let RuleFormRedux = props => {
  const { handleSubmit, pristine, reset, submitting, invalid } = props;
  console.log("async validate", props.asyncValidate);
  return (
    <form id="enroll-payee-rule-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <div>
          <Field
            name="tins"
            label={`* TIN (All available payees with a selected TIN will be auto-enrolled for EFT going forward)`}
            data={props.registeredTins}
            multiple={true}
            component={Select2wrap}
            validate={[required]}
            options={{
              placeholder: "search tins"
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <div>
          <Field
            name="payers"
            label={`* INCLUDE PAYERS (Selected TINs above will be auto-enrolled for EFT with these payers going forward)`}
            data={props.payers}
            multiple={true}
            component={Select2wrap}
            options={{
              placeholder: "search payers"
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-2">
          <div className="form-group">
            <Field
              name="includenpi"
              label={`NPI`}
              multiple={false}
              data={[
                { text: "SELECT", id: "NONE" },
                { text: "INCLUDE", id: "INCLUDE" },
                { text: "EXCLUDE", id: "EXCLUDE" }
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
          <div className="from-group">
            <Field
              name="npis"
              label={`If a payer does not provide NPIs, any designated NPI rules may not apply`}
              multiple={true}
              data={
                props.initialValues && props.initialValues.npis
                  ? props.initialValues.npis.map(npi => {
                      let option = {
                        id: npi,
                        text: npi
                      };
                      return option;
                    })
                  : []
              }
              component={Select2tokenwrap}
              createTag={validateNpi}
              options={{
                placeholder: "enter NPI",
                tags: true,
                tokenSeparators: [",", " "]
              }}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="row text-center">
          <button
            className="btn btn-default btn-margin-left-right-15"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            UNDO CHAGES
          </button>
          <button
            type="button"
            className="btn btn-default btn-margin-left-right-15"
            onClick={() => props.handleCloseModal(props)}
          >
            CANCEL
          </button>
          <button
            className="btn btn-primary btn-margin-left-right-15"
            type="submit"
            disabled={pristine || submitting || invalid}
          >
            VALIDATE RULE
          </button>
        </div>
      </div>
      <div className="form-group">
        <p className="rule-form-required-field-message">
          * This fields are required
        </p>
      </div>
    </form>
  );
};

RuleFormRedux = reduxForm({
  form: "wizard-rule-form", // a unique identifier for this form
  validate,
  touchOnChange: true,
  touchOnBlur: true,
  asyncValidate,
  asyncChangeFields: ["npis"],
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RuleFormRedux);

export default connect(state => ({
  initialValues: state.payee.domainRule.data
}))(RuleFormRedux);
