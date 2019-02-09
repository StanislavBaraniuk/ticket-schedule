<template>
        <v-container grid-list-md text-xs-center class="tool-block">
                <v-layout row wrap>
                        <v-flex xs12 >
                                <v-layout row wrap>
                                        <v-flex xs2>
                                                <v-card-text class="text-xs-center"><h1>Оберіть період</h1></v-card-text>
                                        </v-flex>
                                        <v-spacer></v-spacer>
                                        <v-flex xs2>
                                                <v-menu :close-on-content-click="false" :nudge-right="40"
                                                        lazy
                                                        transition="scale-transition"
                                                        offset-y
                                                        full-width
                                                        min-width="290px"
                                                >
                                                        <v-text-field
                                                                slot="activator"
                                                                v-model="date"
                                                                label="Коли?"
                                                                placeholder="День відправки"
                                                                readonly
                                                        ></v-text-field>
                                                        <v-date-picker v-model="date"></v-date-picker>
                                                </v-menu>
                                        </v-flex>
                                        <v-flex xs2>
                                                <v-menu :close-on-content-click="false" :nudge-right="40"
                                                        lazy
                                                        transition="scale-transition"
                                                        offset-y
                                                        full-width
                                                        min-width="290px"
                                                >
                                                        <v-text-field
                                                                slot="activator"
                                                                v-model="date2"
                                                                label="Коли?"
                                                                placeholder="День відправки"
                                                                readonly
                                                        ></v-text-field>
                                                        <v-date-picker v-model="date"></v-date-picker>
                                                </v-menu>
                                        </v-flex>
                                </v-layout>
                        </v-flex>
                        <v-flex xs12 sm12 md6 lg4>
                                <count v-bind:list="def_profit_list.COSTS.map(function(value) { return parseInt(value); })" title="Прибуток" symbol="₴" v-bind:time-lapse="def_profit_list.DATES"></count>
                        </v-flex>
                        <v-flex xs12 sm12 md6 lg4>
                                <count v-bind:list="def_sales_list.COUNTS.map(function(value) { return parseInt(value); })" title="Продажі"  symbol="Загалом " v-bind:time-lapse="def_sales_list.DATES"></count>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg2>
                                <v-card style="height: 160px; overflow-x: scroll; overflow-y: hidden">
                                        <v-card-text style="font-size: 20px; margin-top: 25px">
                                                <p>Користувачів</p>
                                                <p>{{ def_users }}</p>
                                        </v-card-text>
                                </v-card>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg2>
                                <v-card style="height: 160px; overflow-x: scroll; overflow-y: hidden">
                                        <v-card-text style="font-size: 20px; margin-top: 15px">
                                                <p>Користувачів</p>
                                                <p style="font-size: 15px; margin-top: -20px">online</p>
                                                <p>{{ def_users_online }}</p>
                                        </v-card-text>
                                </v-card>
                        </v-flex>
                </v-layout>

                <v-layout row wrap>
                        <v-flex xs12 sm12 md12 lg4>
                                <circle-diagram class="dowm-diagram" v-bind:value_list="def_users_sex" v-bind:key_list="def_users_sex_keys" title="Співвідношення статей"></circle-diagram>
                        </v-flex>
                        <v-flex xs12 sm12 md12 lg8>
                                <column-info class="dowm-diagram" v-bind:value_list="def_ways" v-bind:key_list="def_ways_keys" title=""></column-info>
                        </v-flex>
                </v-layout>
        </v-container>
</template>

<script>
        import { mapGetters } from 'vuex';
        import Count from "./components/CountInfo";
        import CircleDiagram from "./components/CircleInfo";
        import ColumnInfo from "./components/ColumnInfo";



        export default {
            name: "StatisticTab",
            components: {
                    Count,
                    CircleDiagram,
                    ColumnInfo
            },
            data: () => ({
                    date: '',
                    date2: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
                    // def_profit_list: {
                    //         DATES: ["2019-02-09", "2019-02-10", "2019-02-11"],
                    //         COSTS: [45, 90, 100]
                    // }
            }),
            created() {
                    // this.$store.dispatch("SET_STATISTIC_PROFIT_LIST");

                    window.api.statistic.from = this.date.length === 10 ? this.date : '1900-01-01';
                    window.api.statistic.to = this.date2;

                    // alert("s" + window.api.statistic.to + " ss" + window.api.statistic.from );

                    this.LOAD_PROFIT(this);
                    this.LOAD_ORDER_COUNT(this);
                    this.LOAD_USERS(this);
                    this.LOAD_USERS_ONLINE(this);
            },
            computed: {
                    ...mapGetters({
                            def_profit_list: 'GET_STATISTIC_PROFIT_LIST',
                            def_sales_list: 'GET_STATISTIC_SALES_LIST',
                            def_users: 'GET_STATISTIC_USER_LIST',
                            def_users_online: 'GET_STATISTIC_USER_ONLINE',
                            def_time_lapse_list: 'GET_STATISTIC_TIME_LAPSE_LIST',
                            def_users_sex: 'GET_STATISTIC_USERS_SEX',
                            def_users_sex_keys: 'GET_STATISTIC_USERS_SEX_KEYS',
                            def_ways: 'GET_STATISTIC_WAYS',
                            def_ways_keys: 'GET_STATISTIC_WAYS_KEYS'
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
                    },
                    LOAD_USERS_ONLINE: async (component) => {
                            let sales =  await window.api.statistic.client.get_count_online(window.api.storage.getCookie("token"));

                            component.$store.dispatch("SET_STATISTIC_USER_ONLINE", sales.data);
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