<template>
    <v-container fluid class="a page-container">
        <v-layout row wrap>
            <v-flex xs12 sm12 md3 lg3>
                <info :user="current_user" class="info"></info>
                <all-orders :all_orders="all_orders" :user="current_user" class="all-orders"></all-orders>
            </v-flex>
            <v-flex xs12 sm12 md9 lg9>
                <active-orders :all_orders="all_orders" :user="current_user" :tickets="def_tickets" class="active-orders"></active-orders>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Info from './Info'
    import AllOrders from './AllOrders'
    import ActiveOrders from './ActiveOrders'

    export default {
        name: "Account",
        components: {
            Info,
            AllOrders,
            ActiveOrders
        },
        data() {
            return {
                current_user: null
            }
        },
        created() {
            this.LOAD_USER_INFO(this, window.api.storage.getCookie('token'));
        },
        methods: {
            LOAD_USER_INFO: async (component, token) => {
                {
                    component.$store.dispatch("LOADER_ACTIVATE");

                    let data = await window.api.user.get_info(token);

                    if (data.status === 200) {
                        component.current_user = data.data;
                    } else {
                        component.current_user = {
                            ID: '',
                            FIRST_NAME: '',
                            LAST_NAME: '',
                            EMAIL: '',
                            AVATAR: '',
                            STATUS: '',
                            SEX: '',
                            PHONE: ''
                        };
                    }

                    component.$store.dispatch("LOADER_DEACTIVATE");
                }
            }
        },
        computed: {
            ...mapGetters({
                // current_user: 'GET_CURRENT_USER',
                all_orders: 'GET_ORDERS',
                def_tickets: 'GET_ALL_TICKETS'
            }),
        }
    }
</script>

<style lang="sass" scoped>
    .a
        background-color: #38863d

    .page-container
        padding-top: 70px
        height: 100%

        .info
            height: 45vh
            overflow-y: scroll

        .active-orders
            height: 92vh
            overflow-y: scroll

        .all-orders
            height: 45vh
            overflow-y: scroll




</style>