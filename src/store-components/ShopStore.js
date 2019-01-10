
const state = {
    statistic: {
        PROFIT: [200,1302,2300,10,5000,0,60000, 600,6,60,67,4000],
        SALES: [200,1302,2300,10,5000,0,60000, 600,6,60,67,4000],
        TIME_LAPSE: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
        USERS: [200,1302,2300,10,5000,0,60000, 600,6,60,67,4000],
        USERS_SEX: [122, 433, 500],
    },
    usersSexKeys: ['Чоловіки', 'Жінки', 'Не визначились'],
    ways: [23,15,23,10,344,300,1],
    waysKeys: ["Kиїв - Львів", "Ужгород - Київ", "Запоріжя - Одеса","Kиїв2 - Львів", "Ужгород 2- Київ", "Запоріжя 2- Одеса"],
    stations: [
        {ID: 1, NAME: "5"},
        {ID: 2, NAME: "4"},
        {ID: 3, NAME: "3"},
        {ID: 4, NAME: "2"},
        {ID: 5, NAME: "1"},
    ],
    stations_way: [
        "5","4","3","2","1","-1","0","5"
    ],
    orders: [
        {ID: 0, CODE: "32df243r2r3f13", TICKET_ID: 0, USER_ID: 0, STATUS: "active", DATE: "2019-01-01", COST: 100, FROM: "Russia", TO: "Ukraine", PLACE: "B1"},
        {ID: 1, CODE: "32df243r2r3f13", TICKET_ID: 3, USER_ID: 1, STATUS: "active", DATE: "2019-01-01", COST: 200, FROM: "Russia", TO: "Ukraine", PLACE: "B1"},
        {ID: 2, CODE: "32df243r2r3f13", TICKET_ID: 1, USER_ID: 0, STATUS: "active", DATE: "2019-01-01", COST: 300, FROM: "Russia", TO: "Ukraine", PLACE: "B1"},
        {ID: 3, CODE: "32df243r2r3f13", TICKET_ID: 3, USER_ID: 1, STATUS: "active", DATE: "2019-01-01", COST: 400, FROM: "Russia", TO: "Ukraine", PLACE: "B1"},
        {ID: 4, CODE: "32df243r2r3f13", TICKET_ID: 2, USER_ID: 0, STATUS: "active", DATE: "2019-01-01", COST: 500, FROM: "Russia", TO: "Ukraine", PLACE: "B1"}

    ],
    user_list: [
        {ID : 0, EMAIL: "ST@gmail.com", F_NAME: "STAS", L_NAME: "STAS", SEX: 1, AVATAR: "/876545.jpg", IS_ADMIN: false, ORDER_ACTIVE: true, ONLINE: true, ORDER_ID: '7ufy5e6767gyf867'},
        {ID : 1, EMAIL: "ST2@gmail.com", F_NAME: "STAS", L_NAME: "STAS", SEX: null, AVATAR: "/876545.jpg", IS_ADMIN: false, ORDER_ACTIVE: true, ONLINE: true, ORDER_ID: '7ufy5e6767gyf867'},
        {ID : 2, EMAIL: "ST@gmail.com", F_NAME: "STAS", L_NAME: "STAS", SEX: 2, AVATAR: "/876545.jpg", IS_ADMIN: false, ORDER_ACTIVE: true, ONLINE: true, ORDER_ID: '7ufy5e6767gyf867'}
    ],
    ticketList: [
        {ID: 0, NAME: "705К Киев-Пассажирский — Пшемысль", PRICE: 100, FROM_DATE: "2019-01-01", TO_DATE: "2019-01-03", FROM: "2", TO: "5", TYPE: 1, FROM_TIME: "06:20", TO_TIME: "12:10", WAY_TIME: "6:10", STATIONS: ["Uzhgorod", "Lviv", "Kiev"]},
        {ID: 1, NAME: "705К2 Киев-Пассажирский — Пшемысль", PRICE: 100, FROM_DATE: "2019-01-01", TO_DATE: "2019-01-03", FROM: "2", TO: "3", TYPE: 2, FROM_TIME: "06:20", TO_TIME: "12:10", WAY_TIME: "6:10", STATIONS: ["Uzhgorod", "Lviv", "Kiev"]},
        {ID: 2, NAME: "705К3 Киев-Пассажирский — Пшемысль", PRICE: 100, FROM_DATE: "2019-01-01", TO_DATE: "2019-01-03", FROM: "1", TO: "3", TYPE: 1, FROM_TIME: "06:20", TO_TIME: "12:10", WAY_TIME: "6:10", STATIONS: ["Uzhgorod", "Lviv", "Kiev"]},
        {ID: 3, NAME: "142П Бахмут — Львов",  PRICE: 200, FROM_DATE: "2019-01-01", TO_DATE: "2019-01-03", FROM: "1", TO: "2", TYPE: 2, FROM_TIME: "6:00", TO_TIME: "21:15", WAY_TIME: "12:15", STATIONS: ["Uzhgorod", "Lviv", "Kiev"]},
    ],

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
        return state.ticketList
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
        state.ticketList.push(obj);
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

const actions = {};

export default {
    state,
    getters,
    mutations,
    actions,
};