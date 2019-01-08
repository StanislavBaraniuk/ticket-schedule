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
                                    :items="search_rows"
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
                            <v-btn flat @click="activeBlock = 2">користувачі</v-btn>
                            <v-btn flat @click="activeBlock = 3">сайт</v-btn>
                        </v-flex>

                    </v-layout>
                </v-card>
            </v-container>
            <ticket-menu v-if="activeBlock === 0" :items="def_stations" :tickets="def_tickets"></ticket-menu>
            <city-menu v-if="activeBlock === 1" :stations="def_stations"></city-menu>
            <users-menu v-if="activeBlock === 2" :stations="def_user_list"></users-menu>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex';
    import TicketMenu from './Ticket/TicketMenu';
    import CityMenu from './City/CityMenu';
    import UsersMenu from './Users/UsersMenu';

    export default {
        name: "ToolTab",
        components: {
            UsersMenu,
            TicketMenu,
            CityMenu
        },
        data () {
            return {
                search_rows: ['id','test','zalupka'],
                menu_a: false,
                modal_a: false,
                menu_d: false,
                modal_d: false,
                activeBlock: 2
            }
        },
        methods: {

        },
        computed: {
            ...mapGetters({
                def_tickets: 'GET_ALL_TICKETS',
                def_stations: 'GET_STATIONS',
                def_user_list: 'GET_USER_LIST',
            }),
        }

    }
</script>

<style lang="sass" >
        .activeBtn
            background-color: #00b33f
            color: white !important
</style>