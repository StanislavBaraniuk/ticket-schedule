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
                        <v-flex xs12 sm12 md12 lg12 class="search"><h3>Пошук</h3></v-flex>

                        <v-flex xs10 sm5 md5 lg5 offset-xs1>
                            <v-autocomplete
                                    :items="search[activeBlock]"
                                    :readonly="false"
                                    v-model="select"
                                    flat
                                    hide-no-data
                                    hide-details
                                    label="Оберіть критерій"
                                    solo-inverted
                                    class="search-select"
                            ></v-autocomplete>
                        </v-flex>
                        <v-flex xs10 sm5 md5 lg5 offset-xs1 offset-sm0>
                            <v-text-field
                                    v-model="text"
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
                            <v-btn flat @click="activeBlock = 3">замовлення</v-btn>
                            <v-btn flat @click="activeBlock = 4">сайт</v-btn>
                        </v-flex>

                    </v-layout>
                </v-card>
            </v-container>

            <ticket-menu v-if="activeBlock === 0" :items="def_stations_way" :tickets="def_tickets"></ticket-menu>

            <city-menu v-if="activeBlock === 1" :stations="def_stations"></city-menu>

            <users-menu v-if="activeBlock === 2" :stations="def_user_list"></users-menu>

            <orders-menu v-if="activeBlock === 3" :orders="def_orders" :tickets="def_tickets" :users="def_user_list"></orders-menu>

            <site-menu v-if="activeBlock === 4" :status="{v: site_status}"></site-menu>

        </v-layout>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex';
    import TicketMenu from './Ticket/TicketMenu';
    import CityMenu from './City/CityMenu';
    import UsersMenu from './Users/UsersMenu';
    import SiteMenu from './Site/SiteMenu';
    import OrdersMenu from "./Orders/OrdersMenu";

    export default {
        name: "ToolTab",
        components: {
            OrdersMenu,
            UsersMenu,
            TicketMenu,
            CityMenu,
            SiteMenu
        },
        data () {
            return {
                menu_a: false,
                modal_a: false,
                menu_d: false,
                modal_d: false,
                activeBlock: 0,
            }
        },
        computed: {
            text: {
                get () {
                    return this.search_t;
                },
                set (value) {
                    this.$store.commit('SET_ADMIN_SEARCH_TEXT', value)
                }
            },
            select: {
                get () {
                    return this.search_s;
                },
                set (value) {
                    this.$store.commit('SET_ADMIN_SEARCH_SELECT', value)
                }
            },
            ...mapGetters({
                def_tickets: 'GET_ALL_TICKETS',
                def_stations: 'GET_STATIONS',
                def_stations_way: 'GET_STATIONS_WAY',
                def_user_list: 'GET_USER_LIST',
                site_status: 'GET_SITE_STATUS',
                def_orders: 'GET_ORDERS',
                search: "GET_ADMIN_SEARCH",
                search_t: "GET_ADMIN_SEARCH_TEXT",
                search_s: "GET_ADMIN_SEARCH_SELECT"
            }),
        }

    }
</script>

<style lang="sass" >
        .activeBtn
            background-color: #00b33f
            color: white !important

        .search
            padding-top: 15px

        .search-select
            width: 100%
</style>