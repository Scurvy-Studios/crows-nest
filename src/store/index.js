
import Vue from 'vue'
import Vuex from 'vuex'
import appointments from './modules/appointments';
import signup from './modules/signup';

Vue.use(Vuex)

const state = { test: 'foo' };
const store = new Vuex.Store({
    state,
    modules: {
        appointments,
        signup,
    }
});

export default store;