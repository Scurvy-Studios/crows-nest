export const emailRules = [
  (v) => !!v || 'E-mail is required',
  (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
];

export const firstNameRules = [
  (v) => !!v || 'First Name is required',
];

export const lastNameRules = [
  (v) => !!v || 'Last Name is required',
];
