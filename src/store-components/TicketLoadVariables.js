const state = {

    main_filter: {
        FROM: "",
        TO: "",
        DATE: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
        TRANSPORT: 1,
    },

    new_ticket: {
        dates: {
            d_time: new Date().getHours() + ":" + new Date().getMinutes(),
            a_time: new Date().getHours() + ":" + new Date().getMinutes(),
            d_date: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
            a_date: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
        },
        name: null,
        price: null
    }

    // all_ways: ["Киев","Киев1","Киев2","Киев3","Киев4","Киев5","Киев6","Киев7","Киев8","Киев9","Киев10","Киев11"],
};
const getters = {
    GET_TYPE: state => {
        return state.main_filter.TRANSPORT;
    },
    GET_FROM: state => {
        return state.main_filter.FROM;
    },
    GET_TO: state => {
        return state.main_filter.TO;
    },
    GET_DATE: state => {
        return state.main_filter.DATE;
    },
    GET_D_TIME: state => {
        return state.new_ticket.dates.d_time
    },
    GET_A_TIME: state => {
        return state.new_ticket.dates.a_time
    },
    GET_A_DATE: state => {
        return state.new_ticket.dates.a_date
    },
    GET_D_DATE: state => {
        return state.new_ticket.dates.d_date
    },
    GET_FILTER: state => {
        return state.main_filter
    }
};
const mutations = {
    SET_A_TIME (state, data) {
        state.new_ticket.dates.a_time = data;
    },
    SET_A_DATE (state, data) {
        state.new_ticket.dates.a_date = data;
    },
    SET_D_TIME (state, data) {
        state.new_ticket.dates.d_time = data;
    },
    SET_D_DATE (state, data) {
        state.new_ticket.dates.d_date = data;
    },
    SET_TYPE (state, data) {
        state.main_filter.TRANSPORT =  data;
    },
    SET_FROM (state, data) {
        state.main_filter.FROM = data;
    },
    SET_TO (state, data) {
        state.main_filter.TO = data;
    },
    SET_DATE (state, data) {
        state.main_filter.DATE = data;
    },
    CLEAR_LIST (state) {
        state.list = [];
    },
};
const actions = {};

export default {
    state,
    getters,
    mutations,
    actions,
};