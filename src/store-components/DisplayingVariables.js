const state = {
    showLoader: false,
    showBlockLoader: { contentBlock: false, menu: false, tools: true},
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
    BLOCK_LOADER_ACTIVATE (state, index) {
        state.showBlockLoader[index] = true;
    },
    BLOCK_LOADER_DEACTIVATE (state, index) {
        state.showBlockLoader[index] = false;
    }
};

const actions = {
    SET_ACTIVE_PAGE (context) {
        context.commit('C_ACTIVE_PAGE');
    },
    LOADER_ACTIVATE (context) {
        context.commit('LOADER_ACTIVATE');
    },
    LOADER_DEACTIVATE (context) {
        context.commit('LOADER_DEACTIVATE');
    },
    BLOCK_LOADER_ACTIVATE (context, index) {
        context.commit('BLOCK_LOADER_ACTIVATE', index);
    },
    BLOCK_LOADER_DEACTIVATE (context, index) {
        context.commit('BLOCK_LOADER_DEACTIVATE', index);
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};