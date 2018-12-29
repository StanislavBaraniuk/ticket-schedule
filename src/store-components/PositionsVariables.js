const positions = {
    state: {
        isResize: true
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    },
    watch: {
        isResize: function (newV, oldV) {
            console.log('ttt');
            if (newV !== oldV) {
                alert('true');
                return true;
            } else {
                alert("false");
                return false;
            }
        }
    }
};

export { positions }