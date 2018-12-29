import Vue from 'vue'
import Vuex from 'vuex'
import { display } from './store-components/DisplayingVariables'
import { positions } from './store-components/PositionsVariables'
import { ticket } from './store-components/TicketLoadVariables'

Vue.use(Vuex);

export default new Vuex.Store({
    modules :{
        display: display,
        positions: positions,
        ticket: ticket
    },

})
