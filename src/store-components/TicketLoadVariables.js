const state = {
    type: 1,
    from: '',
    to: '',
    date: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
    list: [
        {NAME: "705К Киев-Пассажирский — Пшемысль", PRICE: 100, FROM: "Uzhgorod", TO: "Kiev", TYPE: 0, FROM_TIME: "06:20", TO_TIME: "12:10", WAY_TIME: "6:10", STATIONS: [{TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}] },
        {NAME: "705К Киев-Пассажирский — Пшемысль", PRICE: 100, FROM: "Uzhgorod", TO: "Kiev", TYPE: 1, FROM_TIME: "06:20", TO_TIME: "12:10", WAY_TIME: "6:10", STATIONS: [{TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}] },
        {NAME: "705К Киев-Пассажирский — Пшемысль", PRICE: 100, FROM: "Uzhgorod", TO: "Kiev", TYPE: 0, FROM_TIME: "06:20", TO_TIME: "12:10", WAY_TIME: "6:10", STATIONS: [{TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}] },
        {NAME: "142П Бахмут — Львов", FROM: "Lviv", PRICE: 200, TO: "Kiev", TYPE: 1, FROM_TIME: "6:00", TO_TIME: "21:15", WAY_TIME: "12:15", STATIONS: [{TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}] }
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
    }
};
const mutations = {
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