<template>
    <v-container fluid class="a" style="padding-top:70px; height: 100%">
        <v-layout row wrap>
            <v-flex xs12 sm12 md3 lg3>
                <info :user="current_user" style="height: 45vh; overflow-y: scroll"></info>
                <all-orders :all_orders="all_orders" :user="current_user" style="height: 45vh; overflow-y: scroll"></all-orders>
            </v-flex>
            <v-flex xs12 sm12 md9 lg9>
                <active-orders :all_orders="all_orders" :user="current_user" :tickets="def_tickets" style="height: 92vh; overflow-y: scroll"></active-orders>
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
        computed: {
            ...mapGetters({
                current_user: 'GET_CURRENT_USER',
                all_orders: 'GET_ORDERS',
                def_tickets: 'GET_ALL_TICKETS'
            }),
        }
    }
</script>

<style lang="sass" scoped>
    .a
        /*background-color: #4caf50*/
        background-color: #38863d
</style>