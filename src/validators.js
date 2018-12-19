export const required = value => (value ? undefined : "Required");

const exactLength = length => value =>
  value && value.length != length ? `Must be ${length} characters` : undefined;

export const length9 = exactLength(9);

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength9 = maxLength(9);
export const maxLength12 = maxLength(12);
export const maxLength32 = maxLength(32);
export const maxLength64 = maxLength(64);
export const maxLength120 = maxLength(120);
export const maxLength128 = maxLength(128);

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength3 = minLength(3);
export const minLength9 = minLength(9);

export const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;

export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const minValue9 = minValue(9);

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

export const tooOld = value =>
  value && value > 65 ? "You might be too old for this" : undefined;

export const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;

export const fax = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Invalid fax, must be 10 digits"
    : undefined;

export const extPhoneNumber = value =>
  value &&
  !/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#\.?|x\.?|ext\.?|extension\.?)\s*(\d+))?$/.test(
    value
  )
    ? "Invalid phone number, must be 10 digits and optionally extention"
    : undefined;

export const zip = value =>
  value && !/^\d{5}(?:[-\s]\d{4})?$/.test(value) ? "Invalid zip" : undefined;

export const abbreviation = value =>
  value && !/^[A-Z]+[0-9]?_?[A-Z0-9]+$/.test(value)
    ? "Invalid abbreviation"
    : undefined;

//validator for select2 form control
export const validateNpi = param => {
  // Don't offset to create a tag if it is not a valid
  var npi = param.term;
  var tmp;
  var sum;
  var i;
  var j;
  i = npi.length;
  if (i == 15 && npi.indexOf("80840", 0, 5) == 0) sum = 0;
  else if (i == 10) sum = 24;
  else return null;
  j = 0;
  while (i != 0) {
    tmp = npi.charCodeAt(i - 1) - "0".charCodeAt(0);
    if (j++ % 2 != 0) {
      if ((tmp <<= 1) > 9) {
        tmp -= 10;
        tmp++;
      }
    }
    sum += tmp;
    i--;
  }
  if (sum % 10 == 0)
    return {
      id: npi,
      text: npi,
      newTag: true
    };
  else return null;
};
