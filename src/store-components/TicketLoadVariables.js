const state = {
    type: 1,
    from: '',
    to: '',
    date: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
    new_time_d: new Date().getHours() + ":" + new Date().getMinutes(),
    new_time_a: new Date().getHours() + ":" + new Date().getMinutes(),
    new_date_d: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
    new_date_a: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
    new_name: null,
    new_price: null,

    all_ways: ["Киев","Киев1","Киев2","Киев3","Киев4","Киев5","Киев6","Киев7","Киев8","Киев9","Киев10","Киев11"],
    list: [
        {ID: 0, NAME: "705К Киев-Пассажирский — Пшемысль", PRICE: 100, FROM: "Uzhgorod", TO: "Kiev", TYPE: 0, FROM_TIME: "06:20", TO_TIME: "12:10", WAY_TIME: "6:10", STATIONS: ["Uzhgorod", "Lviv", "Kiev"] },
        {ID: 3, NAME: "705К Киев-Пассажирский — Пшемысль", PRICE: 100, FROM: "Uzhgorod", TO: "Kiev", TYPE: 1, FROM_TIME: "06:20", TO_TIME: "12:10", WAY_TIME: "6:10", STATIONS: ["Uzhgorod", "Lviv", "Kiev"] },
        {ID: 5, NAME: "705К Киев-Пассажирский — Пшемысль", PRICE: 100, FROM: "Uzhgorod", TO: "Kiev", TYPE: 0, FROM_TIME: "06:20", TO_TIME: "12:10", WAY_TIME: "6:10", STATIONS: ["Uzhgorod", "Lviv", "Kiev"] },
        {ID: 13, NAME: "142П Бахмут — Львов", FROM: "Lviv", PRICE: 200, TO: "Kiev", TYPE: 1, FROM_TIME: "6:00", TO_TIME: "21:15", WAY_TIME: "12:15", STATIONS: ["Uzhgorod", "Lviv", "Kiev"]}
    ]
};
const getters = {
    IS_LIST_EMPTY: state => {
        return !(typeof state.list != "undefined" && state.list != null && state.list.length != null && state.list.length > 0);
    },
    GET_LIST: state => {
        return state.list;
    },
    GET_TYPE: state => {
        return state.type;
    },
    GET_FROM: state => {
        return state.from;
    },
    GET_TO: state => {
        return state.to;
    },
    GET_DATE: state => {
        return state.date;
    },
    GET_D_TIME: state => {
        return state.new_time_d
    },
    GET_A_TIME: state => {
        return state.new_time_a
    },
    GET_A_DATE: state => {
        return state.new_date_a
    },
    GET_D_DATE: state => {
        return state.new_date_d
    },
    GET_ALL_WAYS: state => {
        return state.all_ways
    }
};
const mutations = {
    SET_A_TIME (state, data) {
        state.new_time_a = data;
    },
    SET_A_DATE (state, data) {
        state.new_date_a = data;
    },
    SET_D_TIME (state, data) {
        state.new_time_d = data;
    },
    SET_D_DATE (state, data) {
        state.new_date_d = data;
    },
    SET_TYPE (state, data) {
        state.type =  data;
    },
    SET_FROM (state, data) {
        state.from = data;
    },
    SET_TO (state, data) {
        state.to = data;
    },
    SET_DATE (state, data) {
        state.date = data;
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