import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import routes from './routes';
import store from './store';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
const router = new VueRouter({
  routes,
  mode: 'history',
})
Vue.use(VueRouter)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
