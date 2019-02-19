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
let MODE = 'P';

Vue.use(Vuetify);
Vue.use(VueResize);
Vue.config.productionTip = false;

Vue.filter('timeNormalizer', function (value) {
  if (!value) return '';
  value = value[0] + value[1] + ":" + value[3] + value[4];
  return value;
});

window.onfocus = async () => {
  let online = await api.user.onOnline(api.storage.getToken());

  if (online !== undefined) {
    store.dispatch("SET_CURRENT_USER_ONLINE", 1)
  }
};

screen.orientation.lock("natural");

window.onblur = async () => {
    let online = await api.user.offOnline(api.storage.getToken());

    if (online !== undefined) {
      store.dispatch("SET_CURRENT_USER_ONLINE", 0)
    }
};

String.prototype.toHHMMSS = function () {
  var sec_num = parseInt(this, 10); // don't forget the second param
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return hours+':'+minutes+':'+seconds;
};

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
