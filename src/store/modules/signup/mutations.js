export default {
    updateEmail(state, payload) {
        state.email = payload;
    },
    updateFirstName(state, payload) {
        state.firstName = payload;
    },
    updateLastName(state, payload) {
        state.lastName = payload;
    },
    updatePassword(state, payload) {
        state.password = payload;
    },
};
