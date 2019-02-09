
const state = {
    statistic: {
        PROFIT: 0,
        SALES: 0,
        ONLINE: 0,
        USERS: 0,
        USERS_SEX: [122, 433, 500],
        waysKeys: ["Kиїв - Львів", "Ужгород - Київ", "Запоріжя - Одеса","Kиїв2 - Львів", "Ужгород 2- Київ", "Запоріжя 2- Одеса"],
        usersSexKeys: ['Чоловіки', 'Жінки', 'Не визначились'],
        ways: [23,15,23,10,344,300,1]
    },
    stations: [],
    orders: [],
    user_list: [],
    ticket_list: [],
    online: true,
    admin_search: {
        SEARCH_BY: [
            ["ID", "NAME", "PRICE", "FROM_DATE", "TO_DATE", "FROM", "TO", "TYPE", "FROM_TIME", "TO_TIME", "WAY_TIME"],
            ["ID", "NAME"],
            ["ID", "EMAIL", "F_NAME", "L_NAME", "SEX", "AVATAR", "IS_ADMIN", "ORDER_ACTIVE", "ONLINE", "ONLINE", "ORDER_ID"],
            ["ID", "CODE", "TICKET_ID", "USER_ID", "STATUS", "DATE", "COST", "FROM", "TO", "PLACE"],
            []
        ],
        SELECT: "",
        TEXT: ""
    }
};

const getters = {
    GET_STATISTIC_PROFIT_LIST: state => {
        return state.statistic.PROFIT
    },
    GET_STATISTIC_SALES_LIST: state => {
        return state.statistic.SALES
    },
    GET_STATISTIC_USER_LIST: state => {
        return state.statistic.USERS
    },
    GET_STATISTIC_USER_ONLINE: state => {
        return state.statistic.ONLINE
    },
    GET_STATISTIC_TIME_LAPSE_LIST: state => {
        return state.statistic.TIME_LAPSE
    },
    GET_STATISTIC_USERS_SEX: state => {
        return state.statistic.USERS_SEX
    },
    GET_STATISTIC_USERS_SEX_KEYS: state => {
        return state.usersSexKeys
    },
    GET_STATISTIC_WAYS: state => {
        return state.ways
    },
    GET_STATISTIC_WAYS_KEYS: state => {
        return state.waysKeys
    },

    GET_ALL_TICKETS: state => {
        return state.ticket_list
    },
    GET_STATIONS: state => {
        return state.stations
    },
    GET_USER_LIST: state => {
        return state.user_list
    },
    GET_SITE_STATUS: state => {
        return state.online
    },
    GET_ORDERS: state => {
        return state.orders
    },
    GET_ADMIN_SEARCH: state => {
        return state.admin_search.SEARCH_BY
    },
    GET_ADMIN_SEARCH_SELECT: state => {
        return state.admin_search.SELECT
    },
    GET_ADMIN_SEARCH_TEXT: state => {
        return state.admin_search.TEXT
    }
};

const mutations = {
    ADD_TICKET: (state, obj) => {
        state.ticket_list.push(obj);
    },
    SET_TICKETS: (state, list) => {
        state.ticket_list = list;
    },
    SET_STATIONS: (state, obj) => {
        state.stations = obj;
    },
    SET_ORDERS: (state, orders) => {
        state.orders = orders;
    },
    ADD_STATIONS: (state, obj) => {
        state.stations.push(obj);
    },
    ADD_USER: (state, obj) => {
        state.user_list.push(obj);
    },
    SET_SITE_STATUS: (state, obj) => {
        state.online = obj;
    },
    SET_ADMIN_SEARCH_SELECT: (state, obj) => {
        state.admin_search.SELECT = obj
    },
    SET_ADMIN_SEARCH_TEXT: (state, obj) => {
        state.admin_search.TEXT = obj
    },
    DELETE_PLACE: (state, data) => {
        alert(state.ticket_list[data.ticket_id]);
        var p = state.ticket_list[data.ticket_id];
        p.slice(0, 1);
    },

    SET_STATISTIC_PROFIT_LIST: (state, obj) => {
        state.statistic.PROFIT = obj;
    },
    SET_STATISTIC_SALES_LIST: (state, obj) => {
        state.statistic.SALES  = obj;
    },
    SET_STATISTIC_USER_LIST: (state, obj) => {
        state.statistic.USERS = obj;
    },
    SET_STATISTIC_USER_ONLINE: (state, obj) => {
        state.statistic.ONLINE = obj;
    },
    SET_STATISTIC_TIME_LAPSE_LIST: (state, obj) => {
        state.statistic.TIME_LAPSE  = obj;
    },
    SET_STATISTIC_USERS_SEX: (state, obj) => {
        state.statistic.USERS_SEX  = obj;
    },
    SET_STATISTIC_USERS_SEX_KEYS: (state, obj) => {
        state.usersSexKeys = obj;
    },
    SET_STATISTIC_WAYS: (state, obj) => {
        state.ways = obj;
    },
    SET_STATISTIC_WAYS_KEYS: (state, obj) => {
        state.waysKeys = obj;
    },
};

const actions = {
    SET_TICKETS (context, list) {
        context.commit("SET_TICKETS", list)
    },
    SET_STATIONS: (context, obj) => {
        context.commit('SET_STATIONS', obj);
    },
    DELETE_PLACE: (context, data) => {
        context.commit('DELETE_PLACE', data);
    },
    SET_ORDERS: (context, orders) => {
        context.commit('SET_ORDERS', orders);
    },

    SET_STATISTIC_PROFIT_LIST: (context, value) => {
        context.commit('SET_STATISTIC_PROFIT_LIST', value);
    },
    SET_STATISTIC_SALES_LIST: (context, value) => {
        context.commit('SET_STATISTIC_SALES_LIST', value);
    },
    SET_STATISTIC_USER_LIST: (context, value) => {
        context.commit('SET_STATISTIC_USER_LIST', value);
    },
    SET_STATISTIC_USER_ONLINE: (context, value) => {
        context.commit('SET_STATISTIC_USER_ONLINE', value);
    },
    SET_STATISTIC_TIME_LAPSE_LIST: (context, value) => {
        context.commit('SET_STATISTIC_TIME_LAPSE_LIST', value);
    },
    SET_STATISTIC_USERS_SEX: (context, value) => {
        context.commit('SET_STATISTIC_USERS_SEX', value);
    },
    SET_STATISTIC_USERS_SEX_KEYS: (context, value) => {
        context.commit('SET_STATISTIC_USERS_SEX_KEYS', value);
    },
    SET_STATISTIC_WAYS:(context, value) => {
        context.commit('SET_STATISTIC_WAYS', value);
    },
    SET_STATISTIC_WAYS_KEYS: (context, value) => {
        context.commit('SET_STATISTIC_WAYS_KEYS', value);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};