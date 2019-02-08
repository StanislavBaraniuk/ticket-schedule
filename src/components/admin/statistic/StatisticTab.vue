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
                        <v-flex xs12 sm6 md4 lg4>
                                <count v-bind:list="def_profit_list" title="Прибуток" symbol="₴" v-bind:time-lapse="def_time_lapse_list"></count>
                        </v-flex>
                        <v-flex xs12 sm6 md4 lg4>
                                <count v-bind:list="def_sales_list" title="Продажі" symbol="Загалом " v-bind:time-lapse="def_time_lapse_list"></count>
                        </v-flex>
                        <v-flex xs12 sm12 md4 lg4>
                                <count v-bind:list="def_user_list" title="Користувачі" symbol="Загалом " v-bind:time-lapse="def_time_lapse_list"></count>
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
            }),
            computed: {
                    ...mapGetters({
                            def_profit_list: 'GET_STATISTIC_PROFIT_LIST',
                            def_sales_list: 'GET_STATISTIC_SALES_LIST',
                            def_user_list: 'GET_STATISTIC_USER_LIST',
                            def_time_lapse_list: 'GET_STATISTIC_TIME_LAPSE_LIST',
                            def_users_sex: 'GET_STATISTIC_USERS_SEX',
                            def_users_sex_keys: 'GET_STATISTIC_USERS_SEX_KEYS',
                            def_ways: 'GET_STATISTIC_WAYS',
                            def_ways_keys: 'GET_STATISTIC_WAYS_KEYS'
                    }),
            }
        };
</script>

<style lang="sass" scoped>
        .vh100
                height: 100vh

        .dowm-diagram
                height: 100%
</style>