export default {
  getSignUpConnection(state) {
    return state.connection;
  },
  getSignUpClientId(state) {
    return state.clientId;
  },
  getSignUpEmail(state) {
    return state.email;
  },
  getSignUpFirstName(state) {
    return state.firstName;
  },
  getSignUpLastName(state) {
    return state.lastName;
  },
  getSignUpPassword(state) {
    return state.password;
  },
  getSignUpProcessing(state) {
    console.log(state);
    return state.processing;
  },
};
