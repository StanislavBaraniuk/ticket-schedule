const state = {
    isActive: false,
    dialog: false,
    activeAE: 1,
    activeAEN: ["Статистика", "Інструменти"]
};

const getters = {
    GET_AVTIVE_ADMIN_ELEMENT: state => {
        return state.activeAE
    },
    GET_AVTIVE_ADMIN_ELEMENT_NAMES: state => {
        return state.activeAEN[state.activeAE]
    }
};

const mutations = {
    C_ACTIVE_PAGE () {
        this.state.isActive = true;
    },
    C_ACTIVE_ADMIN_ELEMENT (state, value) {
        state.activeAE = value
    },
};

const actions = {
    setActivePage () {
        this.commit('C_ACTIVE_PAGE');
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};