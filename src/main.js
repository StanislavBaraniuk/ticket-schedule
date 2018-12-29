import Vue from 'vue'
import App from './App.vue'
import Login from './Login'
import NotFound from './404'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'vue-resize/dist/vue-resize.css'
import VueResize from 'vue-resize'
import store from './store'

Vue.use(Vuetify);
Vue.use(VueResize);

Vue.config.productionTip = false;

const routes = {
  '/': App,
  '/login': Login
};


new Vue({
  el: '#app',
  store: store,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
});