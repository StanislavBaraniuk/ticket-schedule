const state = {
    current_user: {
        ID: null,
        FIRST_NAME: null,
        LAST_NAME: null,
        EMAIL: null,
        STATUS: null,
        SEX: null,
        PHONE: null,
        ONLINE: 0
        // ID: 0,
        // FIRST_NAME: 'Stanislav',
        // LAST_NAME: 'Baraniuk',
        // EMAIL: 'Stanislavbaraniuk@gmail.com',
        // AVATAR: null,
        // STATUS: 'online',
        // SEX: 1,
        // PHONE: '+380 (99) 7747 661'
    }
};
const getters = {
    GET_USER_MENU_LIST: state => {
        return state.user_menu
    },
    GET_USER_FIRST_NAME: state => {
        return state.current_user.FIRST_NAME
    },
    GET_USER_LAST_NAME: state => {
        return state.current_user.LAST_NAME
    },
    GET_USER_EMAIL: state => {
        return state.current_user.EMAIL
    },
    GET_USER_AVATAR: state => {
        return state.current_user.AVATAR
    },
    GET_USER_ONLINE: state => {
        return state.current_user.ONLINE
    },
    IS_ADMIN: state => {
        return state.admin
    },
    GET_CURRENT_USER: state => {
        return state.current_user
    }
};
const mutations = {
    SET_USER_INFO(state, val) {
        state.current_user = val;
    },
    SET_CURRENT_USER_FIRST_NAME(state, val) {
        this.current_user.FIRST_NAME = val;
    },
    SET_CURRENT_USER_LAST_NAME(state, val) {
        this.current_user.LAST_NAME = val;
    },
    SET_CURRENT_USER_EMAIL(state, val) {
        this.current_user.EMAIL = val;
    },
    SET_CURRENT_USER_AVATAR(state, val) {
        this.current_user.AVATAR = val;
    },
    SET_CURRENT_USER_ONLINE(state, val) {
        this.current_user.ONLINE = val;
    },
    SET_CURRENT_USER_SEX(state, val) {
        this.current_user.SEX = val;
    },
    SET_USER_MENU_LIST(state, val) {
        this.user_menu = val;
        console.log (this.user_menu) ;
    }
};
const actions = {
    setActivePage() {
        this.commit('setActivePage');
    },
    LOAD_USER_MENU_LIST: async (context, token) => {
        {
            let data = await window.api.user.get_menu(token);

            if (data.status === 200) {
                context.commit('SET_USER_MENU_LIST', data.data);
            }
        }
    },
    SET_USER_INFO(context, val) {
        context.commit('SET_USER_INFO', val);
    },
    SET_CURRENT_USER_ONLINE: (context, val) => {
        context.commit('SET_CURRENT_USER_ONLINE', val);
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};