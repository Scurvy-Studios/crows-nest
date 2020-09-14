
import Vue from 'vue'
import Vuex from 'vuex'
import appointments from './modules/appointments';

Vue.use(Vuex)

const state = { test: 'foo' };
console.log(appointments);
export default new Vuex.Store({
    state,
    modules: {
        appointments
    }
})