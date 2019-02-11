<template>
        <v-container grid-list-md text-xs-center class="tool-block">
                <v-layout row wrap>
                        <v-flex xs12 sm12 md6 lg6>
                                <count v-bind:list="def_profit_list.COSTS.map(function(value) { return parseInt(value); })" title="Прибуток" symbol="₴" v-bind:time-lapse="def_profit_list.DATES"></count>
                        </v-flex>
                        <v-flex xs12 sm12 md6 lg6>
                                <count v-bind:list="def_sales_list.COUNTS.map(function(value) { return parseInt(value); })" title="Продажі"  symbol="Загалом " v-bind:time-lapse="def_sales_list.DATES"></count>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6>
                                <v-card style="height: 160px; overflow-x: scroll; overflow-y: hidden">
                                        <v-card-text style="font-size: 20px; margin-top: 25px">
                                                <p>Користувачів</p>
                                                <p>{{ def_users }}</p>
                                        </v-card-text>
                                </v-card>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6>
                                <v-card style="height: 160px; overflow-x: scroll; overflow-y: hidden">
                                        <v-card-text style="font-size: 20px; margin-top: 15px">
                                                <p>Користувачів</p>
                                                <p style="font-size: 15px; margin-top: -20px">online</p>
                                                <p>{{ def_users_online }}</p>
                                        </v-card-text>
                                </v-card>
                        </v-flex>
                </v-layout>
        </v-container>
</template>

<script>
        import { mapGetters } from 'vuex';
        import Count from "./components/CountInfo";

        export default {
            name: "StatisticTab",
            components: {
                    Count
            },
            data: () => ({

            }),
            created() {
                    window.api.statistic.from = '1900-01-01';
                    window.api.statistic.to = new Date().toJSON().slice(0,10).replace(/-/g,'-');

                    this.LOAD_PROFIT(this);
                    this.LOAD_ORDER_COUNT(this);
                    this.LOAD_USERS(this);
                    this.LOAD_USERS_ONLINE(this);
                    this.LOAD_USERS_SEX(this);
            },
            computed: {
                    ...mapGetters({
                            def_profit_list: 'GET_STATISTIC_PROFIT_LIST',
                            def_sales_list: 'GET_STATISTIC_SALES_LIST',
                            def_users: 'GET_STATISTIC_USER_LIST',
                            def_users_online: 'GET_STATISTIC_USER_ONLINE'
                    })
            },
            methods: {
                    LOAD_PROFIT: async (component) => {
                            let profit =  await window.api.statistic.order.get_profit(window.api.storage.getCookie("token"));

                            component.$store.dispatch("SET_STATISTIC_PROFIT_LIST", profit.data);
                    },
                    LOAD_ORDER_COUNT: async (component) => {
                            let sales =  await window.api.statistic.order.get_count(window.api.storage.getCookie("token"));

                            component.$store.dispatch("SET_STATISTIC_SALES_LIST", sales.data);
                    },
                    LOAD_USERS: async (component) => {
                            let sales =  await window.api.statistic.client.get_count(window.api.storage.getCookie("token"));

                            component.$store.dispatch("SET_STATISTIC_USER_LIST", sales.data);

                            await window.api.helper.sleep(1000);
                            component.LOAD_USERS(component);
                    },
                    LOAD_USERS_ONLINE: async (component) => {
                            let sales =  await window.api.statistic.client.get_count_online(window.api.storage.getCookie("token"));

                            component.$store.dispatch("SET_STATISTIC_USER_ONLINE", sales.data);

                            await window.api.helper.sleep(1000);
                            component.LOAD_USERS_ONLINE(component);
                    },
                    LOAD_USERS_SEX: async (component) => {
                            let sales =  await window.api.statistic.order.get_count(window.api.storage.getCookie("token"));

                            component.$store.dispatch("SET_STATISTIC_USERS_SEX", sales.data);
                    },
            }
        };
</script>

<style lang="sass" scoped>
        .vh100
                height: 100vh

        .dowm-diagram
                height: 100%
</style>