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

Vue.filter('timeNormalizer', function (value) {
  if (!value) return '';
  value = value[0] + value[1] + ":" + value[3] + value[4];
  return value;
});

window.onfocus = async () => {
  let online = await api.user.on_online(api.storage.getCookie('token') !== undefined ? api.storage.getCookie('token') : "0");

  if (online !== undefined) {
    store.dispatch("SET_CURRENT_USER_ONLINE", 1)
  }
};

window.onblur = async () => {
    let online = await api.user.off_online(api.storage.getCookie('token') !== undefined ? api.storage.getCookie('token') : "0");

    if (online !== undefined) {
      store.dispatch("SET_CURRENT_USER_ONLINE", 0)
    }
};

let MODE = 'D';

if (MODE === "P") {
  (function () {
    var method;
    var noop = function noop() {
    };
    var methods = [
      'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
      'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
      'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
      'timeStamp', 'trace', 'warn', 'log'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
      method = methods[length];
      console[method] = noop;
    }
  }());
}

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
}).$mount('#app');
