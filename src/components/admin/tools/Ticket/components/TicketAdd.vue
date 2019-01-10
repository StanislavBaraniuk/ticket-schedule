<template>
        <v-card class="ticket-add" v-if="addActive.v">

            <v-layout row wrap>

                <v-flex xs12 sm12 md5 lg5>
                    <v-text-field
                            label="Назва"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md5 lg5>
                    <v-text-field
                            label="Ціна"
                            type="number"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md2 lg2>
                    <v-autocomplete
                            :items="[1,2]"
                            label="Транспорт"
                            type="number"
                            :readonly="false"
                    ></v-autocomplete>
                </v-flex>

                <v-flex xs12 sm12 md12 lg8>
                    <v-autocomplete
                            :items="items"

                            label="Місце відправлення"
                            :readonly="false"
                    ></v-autocomplete>
                </v-flex>

                <v-flex xs12 sm12 md6 lg2>
                    <v-menu :close-on-content-click="false" :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                    >
                        <v-text-field
                                slot="activator"
                                :value="d_time"
                                label="Час відправлення"
                                placeholder="День відправки"
                                readonly
                        ></v-text-field>
                        <v-time-picker v-model="d_time" format="24hr"></v-time-picker>
                    </v-menu>
                </v-flex>

                <v-flex xs12 sm12 md6 lg2>
                    <v-menu :close-on-content-click="false" :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                    >
                        <v-text-field
                                slot="activator"
                                v-model="d_date"
                                label="День відправлення"
                                placeholder=""
                                readonly
                        ></v-text-field>
                        <v-date-picker v-model="d_date"></v-date-picker>
                    </v-menu>
                </v-flex>

                <v-flex xs12 sm12 md12 lg8>
                    <v-autocomplete
                            :items="items"
                            :readonly="false"
                            label="Місце прибуття"
                    ></v-autocomplete>
                </v-flex>

                <v-flex xs12 sm12 md6 lg2>
                    <v-menu :close-on-content-click="false" :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                    >
                        <v-text-field
                                slot="activator"
                                :value="a_time"
                                label="Час прибуття"
                                placeholder=""
                                readonly
                        ></v-text-field>
                        <v-time-picker v-model="a_time" format="24hr"></v-time-picker>
                    </v-menu>
                </v-flex>

                <v-flex xs12 sm12 md6 lg2>
                    <v-menu :close-on-content-click="false" :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                    >
                        <v-text-field
                                slot="activator"
                                v-model="a_date"
                                label="День прибуття"
                                placeholder=""
                                readonly
                        ></v-text-field>
                        <v-date-picker v-model="a_date"></v-date-picker>
                    </v-menu>
                </v-flex>

                <v-combobox
                        v-model="chips"
                        :items="items"
                        label="Вкажіть міста для створення маршруту"
                        chips
                        clearable
                        solo
                        multiple
                >
                    <template slot="selection" slot-scope="data">
                        <v-chip
                                :selected="data.selected"
                                close
                                @input="remove(data.item)"
                        >
                            <strong>{{ data.item.NAME }}</strong>&nbsp;
                            <span></span>
                        </v-chip>
                    </template>
                </v-combobox>

            </v-layout>

            <v-flex xs12>
                <v-btn dark color="indigo" @click="addTicket">Додати</v-btn>
            </v-flex>

        </v-card>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "ticket",
        data: function () {
            return {
                priceRules: [
                    v => !!v || 'Введіть ціну',
                    v => /.[\d]/.test(v) || 'Ціна помилкова'
                ]
            }
        },
        props: {
            addActive: {

            },
            chips: {
                default: []
            },
            items: {
                default: null
            }
        },
        computed: {
            d_time: {
                get () {
                    return this.def_d_time;
                },
                set (value) {
                    this.$store.commit('SET_D_TIME', value)
                }
            },
            a_time: {
                get () {
                    return this.def_a_time;
                },
                set (value) {
                    this.$store.commit('SET_A_TIME', value)
                }
            },
            a_date: {
                get () {
                    return this.def_a_date;
                },
                set (value) {
                    this.$store.commit('SET_A_DATE', value)
                }
            },
            d_date: {
                get () {
                    return this.def_d_date;
                },
                set (value) {
                    this.$store.commit('SET_D_DATE', value)
                }
            },
            ...mapGetters({
                def_tickets: 'GET_ALL_TICKETS',
                def_d_time: 'GET_D_TIME',
                def_a_time: 'GET_A_TIME',
                def_a_date: 'GET_A_DATE',
                def_d_date: 'GET_D_DATE',
            })
        }

    }
</script>

<style lang="sass" scoped>
    .ticket-add
        padding: 30px
</style>