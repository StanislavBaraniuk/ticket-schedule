const display = {
    state: {
        isActive: false,
        dialog: false
    },
    mutations: {
        setActivePage () {
            this.state.isActive = true;
        }
    },
    actions: {
        setActivePage () {
            display.commit('setActivePage');
        }
    },
    getters: {

    }
};

export { display }