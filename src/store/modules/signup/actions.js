export default {
    // authorizeApplication(state) {
    //     return this._vm.axios({
    //         method: 'get',
    //         url:
    //     })
    // },
    signup({ getters }) {
        const data = {
            email: getters.getSignUpEmail,
            given_name: getters.getSignUpFirstName,
            family_name: getters.getSignUpLastName,
            name: `${getters.getSignUpFirstName} ${getters.getSignUpLastName}`,
            client_id: getters.getSignUpClientId,
            connection: getters.getSignUpConnection,
            password: getters.getSignUpPassword,
        };
        console.log(data);
        return this._vm.axios({
            method: 'post',
            url: `https://${process.env.VUE_APP_AUTH0_DOMAIN}/dbconnections/signup`,
            data,
        });
    },
};
