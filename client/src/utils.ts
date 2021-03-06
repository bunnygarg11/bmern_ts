export const isExisty = function (value: unknown) {
  return value !== null && value !== undefined;
};

export const isEmpty = function (value: unknown) {
  if (value instanceof Array) {
    return value.length === 0;
  }
  return value === '' || !isExisty(value);
};


export const isEmptyTrimed = function (value: unknown) {
  if (typeof value === 'string') {
    return value.trim() === '';
  }
  return true;
};

export const matchRegexp = (value: string, regexp: RegExp) => {
  const validationRegexp = (regexp instanceof RegExp ? regexp : (new RegExp(regexp)));
  return (isEmpty(value) || validationRegexp.test(value));
}



// eslint-disable-next-line
export const isEmail = (value: string) => matchRegexp(value, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i)

export const isNumber = (value: string) => matchRegexp(value, /^-?[0-9]\d*(\d+)?$/i)

export const isString = (value: unknown) => !isEmpty(value) && (typeof value === 'string' || value instanceof String)
export const isFile = (value: unknown) => isEmpty(value) || value instanceof File



export const maxFileSize = (value: File, max: string = "5") => isEmpty(value) || (isFile(value) && value.size / 1024 / 1024 <= parseInt(max, 10))
export const allowedExtensions = (value: File, fileTypes: string) => isEmpty(value) || (isFile(value) && fileTypes.split(',').indexOf(value.type) !== -1)
export const isUserImage = (value: File) => isEmpty(value) || allowedExtensions(value, ".png,.jpeg,.jpg") || maxFileSize(value, "5")

export const validations: { [key: string]: any } = {
  firstName: isString,
  lastName: isString,
  email: isEmail,
  password: isString,
  confirmPassword: isString,
  Address: isString,
  mobileNumber: isNumber,
  _id: isString,
  userImage: isString,

};
