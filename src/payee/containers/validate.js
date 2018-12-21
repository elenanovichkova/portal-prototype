const validate = values => {
  console.log("validate values **********************", values);
  const errors = {};
  if (values.tins && values.tins.length === 0) {
    errors.tins = "Required";
  }
  if (values.payers && values.payers.length === 0) {
    errors.payers = "Required";
  }

  if (
    (!values.includenpi || values.includenpi === "NONE") &&
    (values.npis && values.npis.length !== 0)
  ) {
    errors.includenpi = "Required if NPIs are selected";
  }
  console.log("errors", errors);
  return errors;
};

export default validate;
