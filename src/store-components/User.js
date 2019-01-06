const state = {
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
    active_order: "",
    status: "",
    admin: true,
    user_menu: [
        { title: 'Ввійти', icon: 'fas fa-sign-in-alt', path: "/login" },
        { title: 'Налаштування', icon: 'settings_applications', path: "/setting"  },
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
        return state.first_name
    },
    GET_USER_LAST_NAME: state => {
        return state.last_name
    },
    GET_USER_EMAIL: state => {
        return state.email
    },
    GET_USER_AVATAR: state => {
        return state.avatar
    },
    GET_USER_STATUS: state => {
        return state.status
    },
    IS_ADMIN: state => {
        return state.admin
    }
};
const mutations = {
    setUserFN(state) {
        this.first_name = state;
    },
    setUserLN(state) {
        this.first_name = state['first_name'];
    },
    setUserE(state) {
        this.first_name = state['first_name'];
    },
    setUserA(state) {
        this.first_name = state['first_name'];
    },
    setUserAO(state) {
        this.first_name = state['first_name'];
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