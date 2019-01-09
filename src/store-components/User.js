const state = {
    current_user: {
        // ID: null,
        // FIRST_NAME: null,
        // LAST_NAME: null,
        // EMAIL: null,
        // AVATAR: null,
        // STATUS: null,
        // SEX: null,
        // PHONE: null
        ID: 0,
        FIRST_NAME: 'Stanislav',
        LAST_NAME: 'Baraniuk',
        EMAIL: 'Stanislavbaraniuk@gmail.com',
        AVATAR: null,
        STATUS: 'online',
        SEX: 1,
        PHONE: '+380 (99) 7747 661'
    },
    admin: true,
    user_menu: [
        { title: 'Головна', icon: 'home', path: '/' },
        { title: 'Ввійти', icon: 'fas fa-sign-in-alt', path: "/login" },
        { title: 'Аккаунт', icon: 'account_circle', path: "/account"  },
        { title: 'Адмін панель', icon: 'fas fa-tools', path: "/tools"  },
        { title: 'Вихід', icon: 'fas fa-sign-out-alt', path: "/logout"  },
        { title: 'Корзина', icon: 'fas fa-shopping-cart', path: "/book"  }

    ]
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
    GET_USER_STATUS: state => {
        return state.current_user.STATUS
    },
    IS_ADMIN: state => {
        return state.admin
    },
    GET_CURRENT_USER: state => {
        return state.current_user
    }
};
const mutations = {
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
    SET_CURRENT_USER_STATUS(state, val) {
        this.current_user.STATUS = val;
    },
    SET_CURRENT_USER_SEX(state, val) {
        this.current_user.SEX = val;
    }
};
const actions = {
    setActivePage () {
        this.commit('setActivePage');
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};