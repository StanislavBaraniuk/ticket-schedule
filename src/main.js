import Vue from "vue";
import Vuetify from 'vuetify'
import VueResize from 'vue-resize'
import VueApexCharts from 'vue-apexcharts'

import store from './store'
import axios from 'axios'
import api from './api/api'
import router from "./router";

import App from './App.vue'

import 'vuetify/dist/vuetify.min.css'
import 'vue-resize/dist/vue-resize.css'

Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

window.axios = axios;
window.api = api;
window.store = store;

Vue.use(Vuetify);
Vue.use(VueResize);
Vue.config.productionTip = false;

// Vue.filter('toStation', function (value) {
//   if (!value) return '';
//   let stations = api.stations.get_all('0');
//   value = stations[value];
//   return value.charAt(0).toUpperCase() + value.slice(1)
// });

Vue.filter('timeNormalizer', function (value) {
  if (!value) return '';
  value = (value[0] === '0' ? value[1] : value[0] + value[1]) + ":" + value[3] + value[4];
  return value;
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
}).$mount('#app');
