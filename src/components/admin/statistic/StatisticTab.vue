<template>
        <v-container grid-list-md text-xs-center class="tool-block">
                <v-layout row wrap>
                        <v-flex xs12 >
                                <!--<v-card style="padding: 10px">-->
                                        <v-layout row wrap>
                                                <v-flex xs2>
                                                        <v-card-text class="text-xs-center"><h1>Оберіть період</h1></v-card-text>
                                                </v-flex>
                                                <v-spacer></v-spacer>
                                                <v-flex xs2>
                                                        <v-menu
                                                                ref="menu"
                                                                :close-on-content-click="false"
                                                                v-model="menu"
                                                                :nudge-right="40"
                                                                :return-value.sync="date"
                                                                lazy
                                                                transition="scale-transition"
                                                                offset-y
                                                                full-width
                                                                max-width="290px"
                                                                min-width="290px"
                                                        >
                                                                <v-text-field
                                                                        slot="activator"
                                                                        v-model="date"
                                                                        label="Picker in menu"
                                                                        prepend-icon="event"
                                                                        readonly
                                                                ></v-text-field>
                                                                <v-date-picker
                                                                        v-model="date"
                                                                        type="month"
                                                                        no-title
                                                                        scrollable
                                                                >
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                                                        <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                                                </v-date-picker>
                                                        </v-menu>
                                                </v-flex>
                                                <v-flex xs2>
                                                        <v-menu
                                                                ref="menu"
                                                                :close-on-content-click="false"
                                                                v-model="menu2"
                                                                :nudge-right="40"
                                                                :return-value.sync="date2"
                                                                lazy
                                                                transition="scale-transition"
                                                                offset-y
                                                                full-width
                                                                max-width="290px"
                                                                min-width="290px"
                                                        >
                                                                <v-text-field
                                                                        slot="activator"
                                                                        v-model="date2"
                                                                        label="Picker in menu"
                                                                        prepend-icon="event"
                                                                        readonly
                                                                ></v-text-field>
                                                                <v-date-picker
                                                                        v-model="date2"
                                                                        type="month"
                                                                        no-title
                                                                        scrollable
                                                                >
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
                                                                        <v-btn flat color="primary" @click="$refs.menu2.save(date2)">OK</v-btn>
                                                                </v-date-picker>
                                                        </v-menu>
                                                </v-flex>
                                        </v-layout>
                                <!--</v-card>-->
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
                                <circle-diagram style="height: 100%" v-bind:value_list="def_users_sex" v-bind:key_list="def_users_sex_keys" title="Співвідношення статей"></circle-diagram>
                        </v-flex>
                        <v-flex xs12 sm12 md12 lg8>
                                <column-info style="height: 100%" v-bind:value_list="def_ways" v-bind:key_list="def_ways_keys" title=""></column-info>
                        </v-flex>
                </v-layout>
        </v-container>
</template>

<script>
        import { mapGetters } from 'vuex';
        import Count from "./CountInfo";
        import CircleDiagram from "./CircleInfo";
        import ColumnInfo from "./ColumnInfo";



        export default {
            name: "StatisticTab",
            components: {
                    Count,
                    CircleDiagram,
                    ColumnInfo
            },
            data: () => ({
                    date: new Date().toISOString().substr(0, 7),
                    menu: false,
                    modal: false,
                    date2: new Date().toISOString().substr(0, 7),
                    menu2: false,
                    modal2: false
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
</style>