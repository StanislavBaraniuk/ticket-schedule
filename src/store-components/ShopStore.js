
const state = {
    profit: [200,1302,2300,10,5000,0,60000, 600,6,60,67,4000],
    sales: [200,1302,2300,10,5000,0,60000, 600,6,60,67,4000],
    timeLaps: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
    users: [200,1302,2300,10,5000,0,60000, 600,6,60,67,4000],
    usersSex: [122, 433, 500],
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
    user_list: [
        {ID : 0, EMAIL: "ST@gmail.com", F_NAME: "STAS", L_NAME: "STAS", SEX: 1, AVATAR: "/876545.jpg", IS_ADMIN: false, ORDER_ACTIVE: true, ONLINE: true, ORDER_ID: '7ufy5e6767gyf867'},
        {ID : 1, EMAIL: "ST@gmail.com", F_NAME: "STAS", L_NAME: "STAS", SEX: null, AVATAR: "/876545.jpg", IS_ADMIN: false, ORDER_ACTIVE: true, ONLINE: true, ORDER_ID: '7ufy5e6767gyf867'},
        {ID : 2, EMAIL: "ST@gmail.com", F_NAME: "STAS", L_NAME: "STAS", SEX: 2, AVATAR: "/876545.jpg", IS_ADMIN: false, ORDER_ACTIVE: true, ONLINE: true, ORDER_ID: '7ufy5e6767gyf867'}
    ],
    ticketList: [
        {ID: 0, NAME: "705К Киев-Пассажирский — Пшемысль", PRICE: 100, FROM_DATE: "2019-01-01", TO_DATE: "2019-01-03", FROM: "Uzhgorod", TO: "Kiev", TYPE: 0, FROM_TIME: "06:20", TO_TIME: "12:10", WAY_TIME: "6:10", STATIONS: ["Uzhgorod", "Lviv", "Kiev"] },
        {ID: 1, NAME: "705К Киев-Пассажирский — Пшемысль", PRICE: 100, FROM_DATE: "2019-01-01", TO_DATE: "2019-01-03", FROM: "Uzhgorod", TO: "Kiev", TYPE: 1, FROM_TIME: "06:20", TO_TIME: "12:10", WAY_TIME: "6:10", STATIONS: ["Uzhgorod", "Lviv", "Kiev"] },
        {ID: 2, NAME: "705К Киев-Пассажирский — Пшемысль", PRICE: 100, FROM_DATE: "2019-01-01", TO_DATE: "2019-01-03", FROM: "Uzhgorod", TO: "Kiev", TYPE: 0, FROM_TIME: "06:20", TO_TIME: "12:10", WAY_TIME: "6:10", STATIONS: ["Uzhgorod", "Lviv", "Kiev"] },
        {ID: 3, NAME: "142П Бахмут — Львов",  PRICE: 200, FROM_DATE: "2019-01-01", TO_DATE: "2019-01-03", FROM: "Lviv", TO: "Kiev", TYPE: 1, FROM_TIME: "6:00", TO_TIME: "21:15", WAY_TIME: "12:15", STATIONS: ["Uzhgorod", "Lviv", "Kiev"] }
    ]
};
const getters = {
    GET_STATISTIC_PROFIT_LIST: state => {
        return state.profit
    },
    GET_STATISTIC_SALES_LIST: state => {
        return state.sales
    },
    GET_STATISTIC_USER_LIST: state => {
        return state.users
    },
    GET_STATISTIC_TIME_LAPSE_LIST: state => {
        return state.timeLaps
    },
    GET_STATISTIC_USERS_SEX: state => {
        return state.usersSex
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
    GET_USER_LIST: state => {
        return state.user_list
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
    }
};
const actions = {};

export default {
    state,
    getters,
    mutations,
    actions,
};