// const display = {
//     state: {
//         isActive: true,
//         dialog: false
//     },
//     mutations: {
//         setActivePage () {
//             this.state.isActive = true;
//         }
//     },
//     actions: {
//         setActivePage () {
//             display.commit('setActivePage');
//         }
//     },
//     getters: {
//
//     }
// };

const state = {
    isActive: false,
    dialog: false
};
const getters = {};
const mutations = {
    setActivePage () {
        this.state.isActive = true;
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