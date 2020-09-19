import Vue from 'vue';
import Vuex from 'vuex';
import appointments from './modules/appointments';
import signup from './modules/signup';

Vue.use(Vuex);

const state = {};
const store = new Vuex.Store({
  state,
  modules: {
    appointments,
    signup,
  },
});

export default store;
