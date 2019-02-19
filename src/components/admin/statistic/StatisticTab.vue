<template>
        <v-container grid-list-md text-xs-center class="tool-block">
                <v-layout row wrap>
                        <v-flex xs12 sm12 md6 lg6>
                                <count v-bind:list="def_profit_list.VAL.map(function(value) { return parseInt(value); })" title="Прибуток" symbol="₴" v-bind:time-lapse="def_profit_list.DATES"></count>
                        </v-flex>
                        <v-flex xs12 sm12 md6 lg6>
                                <count v-bind:list="def_sales_list.VAL.map(function(value) { return parseInt(value); })" title="Продажі"  symbol="Загалом " v-bind:time-lapse="def_sales_list.DATES"></count>
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

                    let token = window.api.storage.getToken();

                    this.LOAD_PROFIT(this, token);
                    this.LOAD_ORDER_COUNT(this, token);
                    this.LOAD_USERS(this, token);
                    this.LOAD_USERS_ONLINE(this, token);
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
                    LOAD_PROFIT: async (component, token) => {
                            let resp =  await window.api.statistic.order.getProfit(token);

                            if (resp.status === 200) {
                                    component.$store.dispatch("SET_STATISTIC_PROFIT_LIST", resp.data);
                            } else {
                                    component.$store.dispatch("SET_STATISTIC_PROFIT_LIST", {DATES: ["0"], VAL: [0]});
                            }

                    },
                    LOAD_ORDER_COUNT: async (component, token) => {
                            let resp =  await window.api.statistic.order.getCount(token);

                            if (resp.status === 200) {
                                    component.$store.dispatch("SET_STATISTIC_SALES_LIST", resp.data);
                            } else {
                                    component.$store.dispatch("SET_STATISTIC_SALES_LIST", {DATES: ["0"], VAL: [0]});
                            }
                    },
                    LOAD_USERS: async (component, token) => {
                            let resp =  await window.api.statistic.client.getCount(token);

                            component.$store.dispatch("SET_STATISTIC_USER_LIST", resp.data);

                            await window.api.helper.sleep(1000);
                            component.LOAD_USERS(component, token);
                    },
                    LOAD_USERS_ONLINE: async (component, token) => {
                            let resp =  await window.api.statistic.client.getCountOnline(token);

                            component.$store.dispatch("SET_STATISTIC_USER_ONLINE", resp.data);

                            await window.api.helper.sleep(1000);
                            component.LOAD_USERS_ONLINE(component, token);
                    }
            }
        };
</script>

<style lang="sass" scoped>
        .vh100
                height: 100vh

        .dowm-diagram
                height: 100%
</style>