
const state = {
    statistic: {
        PROFIT: [200,1302,2300,10,5000,0,60000, 600,6,60,67,4000],
        SALES: [200,1302,2300,10,5000,0,60000, 600,6,60,67,4000],
        TIME_LAPSE: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
        USERS: [200,1302,2300,10,5000,0,60000, 600,6,60,67,4000],
        USERS_SEX: [122, 433, 500],
        waysKeys: ["Kиїв - Львів", "Ужгород - Київ", "Запоріжя - Одеса","Kиїв2 - Львів", "Ужгород 2- Київ", "Запоріжя 2- Одеса"],
        usersSexKeys: ['Чоловіки', 'Жінки', 'Не визначились'],
        ways: [23,15,23,10,344,300,1],
    },
    stations: [],
    stations_way: [],
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
    GET_STATIONS_WAY: state => {
        return state.stations_way
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
        state.stations.push(obj);
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
    }
};

const actions = {
    SET_TICKETS (context, list) {
        context.commit("SET_TICKETS", list)
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};