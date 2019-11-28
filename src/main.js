import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './routes.js';
import store from './store/store.js';

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
