<template>
    <v-container class="tool-block">
        <v-layout row wrap style="max-width: 100vw !important;">
            <v-container style="max-width: 100vw !important;">
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
                            <v-btn :class="{activeBtnMenu: activeBlock === 0}" flat @click="setActiveBlock(0)">квитки       <v-icon class="menu-arrow" v-on:click="openNewTab('/admin?tools=tickets')">fas fa-external-link-square-alt</v-icon></v-btn>
                            <v-btn :class="{activeBtnMenu: activeBlock === 1}" flat @click="setActiveBlock(1)">міста        <v-icon class="menu-arrow" v-on:click="openNewTab('/admin?tools=stations')">fas fa-external-link-square-alt</v-icon></v-btn>
                            <v-btn :class="{activeBtnMenu: activeBlock === 2}" flat @click="setActiveBlock(2)">користувачі  <v-icon class="menu-arrow" v-on:click="openNewTab('/admin?tools=users')">fas fa-external-link-square-alt</v-icon></v-btn>
                            <v-btn :class="{activeBtnMenu: activeBlock === 3}" flat @click="setActiveBlock(3)">замовлення   <v-icon class="menu-arrow" v-on:click="openNewTab('/admin?tools=orders')">fas fa-external-link-square-alt</v-icon></v-btn>
                            <!--<v-btn :class="{activeBtnMenu: activeBlock === 4}" flat @click="setActiveBlock(4)">сайт</v-btn>-->
                        </v-flex>

                        <p style="width: 100%; text-align: center">{{ load_text }}</p>
                    </v-layout>
                </v-card>
            </v-container>

            <ticket-menu v-if="activeBlock === 0" :items="def_stations_list" :tickets="def_tickets" style="max-width: 100vw !important;"></ticket-menu>

            <city-menu v-if="activeBlock === 1" :stations="def_stations_list" style="max-width: 100vw !important;"></city-menu>

            <users-menu v-if="activeBlock === 2" :stations="def_user_list" style="max-width: 100vw !important;"></users-menu>

            <orders-menu v-if="activeBlock === 3" :stations="def_stations" :orders="def_orders" :tickets="def_tickets" :users="def_user_list" style="max-width: 100vw !important;"></orders-menu>

            <!--<site-menu v-if="activeBlock === 4 && isActive['tools']" :status="{v: site_status}" style="max-width: 100vw !important;"></site-menu>-->

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
    import preloader from "../../preloader/Preloader"

    export default {
        name: "ToolTab",
        components: {
            OrdersMenu,
            UsersMenu,
            TicketMenu,
            CityMenu,
            SiteMenu,
            preloader
        },
        data () {
            return {
                menu_a: false,
                modal_a: false,
                menu_d: false,
                modal_d: false,
                activeBlock: 0,
                load_text: ''
            }
        },
        created() {
            let url = window.location.href.split('/');
            let uri = url[url.length-1];
            let element_path = uri.split('?');

            switch (element_path[1].split('=')[1]) {
                case 'tickets' :
                    this.activeBlock = 0;
                    break;
                case 'stations' :
                    this.activeBlock = 1;
                    break;
                case 'users' :
                    this.activeBlock = 2;
                    break;
                case 'orders' :
                    this.activeBlock = 3;
                    break;
                case 'site' :
                    this.activeBlock = 4;
                    break;
                default:
                    this.activeBlock = 0;
                    break;
            }

            let token = window.api.storage.getToken();

            this.LOAD_COLUMNS(this, token, "tickets", 0);
            this.LOAD_COLUMNS(this, token, "stations", 1);
            this.LOAD_COLUMNS(this, token, "users", 2);
            this.LOAD_COLUMNS(this, token, "orders", 3);
            this.LOAD_COLUMNS(this, token, "setting", 4);

            this.GET_STATIONS(this, token);
            this.LOAD_TICKETS(this, token);
            this.LOAD_USERS(this, token);
            this.LOAD_ORDERS(this, token);
            this.LOAD_STATIONS_WITH_KEY(this, token);

        },
        methods: {
            openNewTab: function (url) {
                window.open(url, '_blank');
            },
            setActiveBlock: function (index) {
                this.activeBlock = index;
                switch (index) {
                    case 0 :
                        history.replaceState({} , "tools", "?tools=tickets");
                        break;
                    case 1 :
                        history.replaceState({} , "tools", "?tools=stations");
                        break;
                    case 2 :
                        history.replaceState({} , "tools", "?tools=users");
                        break;
                    case 3 :
                        history.replaceState({} , "tools", "?tools=orders");
                        break;
                    case 4 :
                        history.replaceState({} , "tools", "?tools=site");
                        break;
                }
            },
            GET_STATIONS: async (component, token) => {
                {
                    let data = await window.api.stations.getAll(token);


                    if (data.status === 200) {
                        component.stations  = Object.values(data.data);

                        component.$store.commit('SET_STATIONS',component.stations);
                    }
                }
            },
            LOAD_TICKETS: function (component, token) {
                this.GET_ALL_TICKETS(component, token).then(function (res) {
                    if (res.data !== undefined) {
                        res.this.$store.dispatch("SET_TICKETS", res.data);
                    }
                });
            },
            GET_ALL_TICKETS: async (component, token) => {
                {
                    let data = await window.api.ticket.getAll(token);

                    if (data.status === 200) {
                        return  {this: component, data: data.data};
                    } else {
                        return {this: component, data: undefined};
                    }
                }
            },
            LOAD_USERS: async (component, token) => {
                {
                    let data = await window.api.client.getAll(token);

                    if (data.status === 200) {
                        component.$store.commit('SET_USER_LIST', data.data);
                    }
                }
            },
            LOAD_COLUMNS: async (component, token, table_name, key) => {
                let value = await window.api.user.getColumns(token, table_name);

                component.$store.dispatch('ADD_ADMIN_SEARCH', {key: key, value: value.data});
            },
            LOAD_ORDERS: async (component, token) => {
                let value = await window.api.order.getAll(token);

                component.$store.dispatch('SET_ORDERS', value.data);
            },
            LOAD_STATIONS_WITH_KEY: async (component, token) => {
                {
                    let data = await window.api.stations.getWithKeys(token);


                    if (data.status === 200) {
                        component.$store.commit('SET_STATIONS_LIST', data.data);
                    }
                }
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
                isActive: "IS_BLOCK_LOADER",
                def_tickets: 'GET_ALL_TICKETS',
                def_stations: 'GET_STATIONS',
                def_stations_list: "GET_STATIONS_LIST",
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
            /*width: 1050px*/

        .activeBtnMenu
            background-color: white
            color: #3d4dbc !important

        .search
            padding-top: 15px

        .search-select
            width: 100%

        .menu-arrow
            width: 25px
            margin-left: 10px
</style>