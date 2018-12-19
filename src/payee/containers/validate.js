const validate = values => {
  console.log("validate values **********************", values);
  const errors = {};
  if (values.tins && values.tins.length === 0) {
    errors.tins = "Required";
  }
  if (values.payers && values.payers.length === 0) {
    errors.payers = "Required";
  }
  console.log("errors", errors);
  return errors;
};

export default validate;
