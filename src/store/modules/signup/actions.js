/* eslint-disable */
export default {
  async signup({ getters }) {
    const data = {
      email: getters.getSignUpEmail,
      given_name: getters.getSignUpFirstName,
      family_name: getters.getSignUpLastName,
      name: `${getters.getSignUpFirstName} ${getters.getSignUpLastName}`,
      client_id: getters.getSignUpClientId,
      connection: getters.getSignUpConnection,
      password: getters.getSignUpPassword,
    };
    return this._vm.axios({
      method: 'post',
      url: `https://${process.env.VUE_APP_AUTH0_DOMAIN}/dbconnections/signup`,
      data,
    });
  },
};
