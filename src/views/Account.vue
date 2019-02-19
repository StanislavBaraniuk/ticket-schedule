<template>
    <div id="v-app">
        <preloader v-if="is_loader"></preloader>
        <header-block way ></header-block>
        <account-page></account-page>
        <footer-block></footer-block>
    </div>
</template>

<script>
    import HeaderBlock from '../components/standart/Header'
    import FooterBlock from '../components/standart/Footer'
    import AccountPage from '../components/account/AccountPage'
    import Preloader from '../components/preloader/Preloader'

    import { mapGetters } from 'vuex';

    export default {
        name: "Account",
        components: {
            HeaderBlock,
            AccountPage,
            FooterBlock,
            Preloader
        },
        data () {
            return {

            }
        },
        created() {
            this.CHECK_AUTH(this, window.api.storage.getCookie('token') !== undefined ? window.api.storage.getCookie('token') : "0");
        },
        methods: {
            CHECK_AUTH: async (component, token) => {
                {
                    await window.api.user.isAuth(token, '/');
                }
            }
        },
        computed: {
            ...mapGetters({
                all_orders: 'GET_ORDERS',
                def_tickets: 'GET_ALL_TICKETS',
                is_loader: 'IS_LOADER'
            }),
        }
    }
</script>

<style lang="sass">
    #v-app
        height: 90%
        ::-webkit-scrollbar-thumb
            -webkit-border-radius: 0px
            border-radius: 2px
            background-color: rgba(134, 134, 134, 0.34)
            &:hover
                background-color: rgba(193, 193, 194, 0.9)
</style>