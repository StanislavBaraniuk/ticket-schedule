import Vue from 'vue'
import Vuex from 'vuex'
import display from './store-components/DisplayingVariables'
import { positions } from './store-components/PositionsVariables'
import ticket from './store-components/TicketLoadVariables'
import user from './store-components/User'
import shop from './store-components/ShopStore'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        path: '/'
    },
    getters: {},
    mutations: {
        SET_PATH: (state, new_path) => {
            state.path = new_path;
            window.location.href = new_path
        }
    },
    actions: {

    },
    modules :{
        display: display,
        positions: positions,
        ticket: ticket,
        user: user,
        shop: shop
    },
    devtools: false
})
