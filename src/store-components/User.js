const user = {
    state: {
        first_name: "",
        last_name: "",
        email: "",
        avatar: "",
        active_order: "",
        user_menu: [
            { title: 'Ввійти', icon: 'fas fa-sign-in-alt' },
            { title: 'Зареєструватись', icon: 'question_answer' },
            { title: 'Налаштування', icon: 'settings_applications' },
            { title: 'Адмін панель', icon: 'fas fa-tools' },
            { title: 'Вихід', icon: 'fas fa-sign-out-alt' },
            { title: 'Корзина', icon: 'fas fa-shopping-cart' }

        ]
    },
    mutations: {
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
        },
        get(state) {
            axios.get('http://localhost:3000/posts')
                .then(response => (console.log(response)))
                .catch(error => {
                    console.log(error)
                });

        }
    },
    actions: {
        loadUserInfo () {
            console.log('d');

        }
    },
    getters: {

    }
};

export { user }