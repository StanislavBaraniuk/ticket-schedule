<template>
    <v-container grid-list-md class="tool-block">
        <v-layout row wrap>

            <v-container>
                <v-card
                        dark
                        color="indigo"
                        flat
                >
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md12 lg12 style="padding-top: 15px"><h3>Пошук</h3></v-flex>

                        <v-flex xs10 sm5 md5 lg5 offset-xs1>
                            <v-autocomplete
                                    :items="items"
                                    :search-input.sync="search"
                                    v-model="select"
                                    cache-items
                                    flat
                                    hide-no-data
                                    hide-details
                                    label="Оберіть критерій"
                                    solo-inverted
                                    style="width: 100%"
                            ></v-autocomplete>
                        </v-flex>
                        <v-flex xs10 sm5 md5 lg5 offset-xs1 offset-sm0>
                            <v-text-field
                                    :items="items"
                                    :search-input.sync="search"
                                    v-model="select"
                                    cache-items
                                    class="mx-2"
                                    flat
                                    hide-no-data
                                    hide-details
                                    label="Пошук..."
                                    solo-inverted
                            ></v-text-field>
                        </v-flex>

                        <v-spacer></v-spacer>

                        <v-flex xs12 sm12 md12 lg12 >
                            <v-btn flat @click="activeBlock = 0">квитки</v-btn>
                            <v-btn flat @click="activeBlock = 1">міста</v-btn>
                            <v-btn flat @click="activeBlock = 2">адміністратори</v-btn>
                            <v-btn flat @click="activeBlock = 3">сайт</v-btn>
                        </v-flex>

                    </v-layout>
                </v-card>
            </v-container>
            <ticket-menu :items="items" :tickets="def_tickets" v-if="activeBlock === 0"></ticket-menu>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex';
    import TicketMenu from './Ticket/TicketMenu';

    export default {
        name: "ToolTab",
        components: {
            TicketMenu,

        },
        data () {
            return {
                chips: [],
                items: ['Lviv', 'Kiev', 'Uzhgorod', 'Moscov'],
                menu_a: false,
                modal_a: false,
                menu_d: false,
                modal_d: false,
                activeBlock: 0
            }
        },
        methods: {

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
            }),
        }

    }
</script>

<style lang="sass" >
        .activeBtn
            background-color: #00b33f
            color: white !important
</style>