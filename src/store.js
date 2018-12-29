import Vue from 'vue'
import Vuex from 'vuex'
import display from './store-components/DisplayingVariables'
import { positions } from './store-components/PositionsVariables'
import ticket from './store-components/TicketLoadVariables'
import { user } from './store-components/User'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules :{
        display: display,
        positions: positions,
        ticket: ticket,
        user: user
    }
})
