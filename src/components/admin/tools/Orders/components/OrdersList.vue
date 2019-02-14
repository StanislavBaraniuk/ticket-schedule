<template>
    <v-expansion-panel class="order-list">
        <v-expansion-panel-content
                v-for="(item,index) in orders.filter(function(obj) {
                  return String(obj[search_s]).indexOf(String(search_t)) !== -1 || search_t.length < 1
                })"
                :key="index"
        >
            <div slot="header">#{{ item.ID }} : {{ item.CODE }}</div>
            <hr>
            <v-flex xs12 sm12 md2 lg1 style="padding-top: 10px; padding-bottom: 10px"><v-icon class="delete-icon" v-on:click="CANCEL_ORDER(item.CODE)">fas fa-trash</v-icon></v-flex>
            <hr>
            <v-card>
                <v-card-text>Бронювання</v-card-text>
                <v-card-text class="order">
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md4 lg2>Id: {{ item.ID }}</v-flex>
                        <v-flex xs12 sm12 md4 lg2>Id квитка: {{ item.TICKET_ID }}</v-flex>
                        <v-flex xs12 sm12 md4 lg2>Id покупця: {{ item.USER_ID }}</v-flex>
                        <v-flex xs12 sm12 md12 lg2>Код квитка: {{ item.CODE }}</v-flex>
                        <v-flex xs12 sm12 md4 lg2>Сумма: {{ item.COST }}</v-flex>
                        <v-flex xs12 sm12 md4 lg2>Відправлення: {{ item.FROM_PLACE }}</v-flex>
                        <v-flex xs12 sm12 md4 lg2>Прибуття: {{ item.TO_PLACE }}</v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
            <hr>
            <v-card v-for="(user, index) in users.filter(function( obj ) { return obj.ID === item.USER_ID })" :key="index">
                <v-card-text>Інформація користувача</v-card-text>
                <v-card-text class="user-info">
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md4 lg2>Id: {{ user.ID }}</v-flex>
                        <v-flex xs12 sm12 md4 lg2>Імя: {{ user.FIRST_NAME }}</v-flex>
                        <v-flex xs12 sm12 md4 lg2>Фамілія: {{ user.LAST_NAME }}</v-flex>
                        <v-flex xs12 sm12 md4 lg2>Email: {{ user.EMAIL }}</v-flex>
                        <v-flex xs12 sm12 md4 lg2>Стать: {{ user.SEX === 1 ? "чоловік" : user.SEX === 2 ? "жінка" : "Не визначено"}}</v-flex>
                        <v-flex xs12 sm12 md4 lg2>Активність: {{ user.ONLINE ? "online" : "offline" }}</v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
            <hr>
            <div v-for="(ticket, index) in tickets.filter(function( obj ) { return obj.ID === item.TICKET_ID })" :key="index">
                <v-card class="ticket">
                    <v-card-text>Квиток</v-card-text>
                    <v-container grid-list-md text-xs-center class="ticket-container">
                        <v-layout row wrap>
                            <v-flex xs12 sm6 md6 lg6>
                                <v-card-title>
                                    <v-flex xs12 sm12 md1 lg1>
                                        <i class="material-icons type">{{ ticket.TYPE === 0 ? "directions_railway" : "directions_bus"}}</i>
                                    </v-flex>
                                    <v-flex xs12 sm12 md11 lg11>
                                        <h3 class="name">{{ ticket.NAME }}</h3>
                                    </v-flex>
                                </v-card-title>
                            </v-flex>
                            <v-flex xs12 sm6 md6 lg6>
                                <v-card-actions class="order-button-block">
                                    <v-spacer></v-spacer>
                                    <v-btn disabled color="orange" class="price">{{ ticket.PRICE }} ₴</v-btn>
                                </v-card-actions>
                            </v-flex>
                            <v-flex xs12 sm6 md6 lg6 >
                                <v-stepper vertical class="from">
                                    <v-stepper-step complete="" complete-icon="">
                                        {{ stations[ticket.FROM_PLACE-1] }}
                                        <small>{{ ticket.FROM_TIME | timeNormalizer }}</small>
                                    </v-stepper-step>

                                    <v-stepper-content >

                                    </v-stepper-content>

                                    <v-stepper-step complete="" complete-icon="">
                                        {{ ticket.WAY_TIME }}
                                        <small>час у дорозі</small>
                                    </v-stepper-step>

                                    <v-stepper-content>

                                    </v-stepper-content>

                                    <v-stepper-step complete="" complete-icon="">
                                        {{ stations[ticket.TO_PLACE-1] }}
                                        <small>{{ ticket.TO_TIME }}</small>
                                    </v-stepper-step>
                                </v-stepper>
                            </v-flex>
                            <v-flex xs12 sm6 md6 lg6>
                                Маршрут
                                <v-stepper vertical class="stations">
                                    <v-stepper-step complete="" complete-icon="" v-for="(state, s_index) in ticket.STATIONS" :key="s_index">
                                        {{ stations[state-1] }}
                                        <small>Зупинка</small>
                                    </v-stepper-step>

                                    <v-stepper-content >

                                    </v-stepper-content>
                                </v-stepper>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </div>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "OrdersList",
        props: {
            stations: {

            },
            orders:{

            },
            tickets: {

            },
            users: {

            }
        },
        computed:{
            ...mapGetters({
                search_t: "GET_ADMIN_SEARCH_TEXT",
                search_s: "GET_ADMIN_SEARCH_SELECT"
            })
        },
        methods: {
            CANCEL_ORDER: async (code) => {
                {

                    let resp = await window.api.user.cancel_order(window.api.storage.getCookie('token') !== undefined ? window.api.storage.getCookie('token') : "0", code);

                    if (resp.status === 200) {
                        window.location.reload();
                    }

                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    .order-list
        margin-top: 20px
        display: -webkit-flex /* Safari */
        -webkit-flex-wrap: wrap /* Safari 6.1+ */
        display: flex
        flex-wrap: wrap

        .order
            margin-left: 20px

        .delete-icon
            padding-left: 20px

        .user-info
            margin-left: 20px

        .ticket
            margin-top: 20px

            .ticket-container
                padding: 10px 0 0

            .type
                margin-left: 8px
                margin-top: 10px

            .name
                margin-left: 10px

            .order-button-block
                padding-right: 20px

                .price
                    font-size: 20px
                    color: black !important

            .from
                height: 260px
                box-shadow: none

            .stations
                height: 260px
                overflow-y: scroll
                box-shadow: none



</style>