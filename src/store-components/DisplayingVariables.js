const state = {
    showLoader: false,
    showBlockLoader: false,
    IS_ACTIVE: false,
    dialog: false,
    activeAE: 0,
    activeAEN: ["Статистика", "Інструменти"]
};

const getters = {
    GET_AVTIVE_ADMIN_ELEMENT: state => {
        return state.activeAE
    },
    GET_AVTIVE_ADMIN_ELEMENT_NAMES: state => {
        return state.activeAEN[state.activeAE]
    },
    GET_IS_ACTIVE: state => {
        return state.IS_ACTIVE
    },
    IS_LOADER: state => {
        return state.showLoader;
    },
    IS_BLOCK_LOADER: state => {
        return state.showBlockLoader;
    }
};

const mutations = {
    C_ACTIVE_PAGE (state) {
        state.IS_ACTIVE = true;
    },
    C_ACTIVE_ADMIN_ELEMENT (state, value) {
        state.activeAE = value
    },
    LOADER_ACTIVATE (state) {
        state.showLoader = true;
    },
    LOADER_DEACTIVATE (state) {
        state.showLoader = false;
    },
    BLOCK_LOADER_ACTIVATE (state) {
        state.showBlockLoader = true;
    },
    BLOCK_LOADER_DEACTIVATE (state) {
        state.showBlockLoader = false;
    }
};

const actions = {
    SET_ACTIVE_PAGE () {
        this.commit('C_ACTIVE_PAGE');
    },
    LOADER_ACTIVATE () {
        this.commit('LOADER_ACTIVATE');
    },
    LOADER_DEACTIVATE () {
        this.commit('LOADER_DEACTIVATE');
    },
    BLOCK_LOADER_ACTIVATE () {
        this.commit('BLOCK_LOADER_ACTIVATE');
    },
    BLOCK_LOADER_DEACTIVATE () {
        this.commit('BLOCK_LOADER_DEACTIVATE');
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};