import Vue from "vue";
import Vuetify from 'vuetify'
import VueResize from 'vue-resize'
import VueApexCharts from 'vue-apexcharts'

import store from './store'
import axios from 'axios'
import router from "./router";

import App from './App.vue'

import 'vuetify/dist/vuetify.min.css'
import 'vue-resize/dist/vue-resize.css'


Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

window.axios = axios;
window.store = store;

Vue.use(Vuetify);
Vue.use(VueResize);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
}).$mount('#app');
