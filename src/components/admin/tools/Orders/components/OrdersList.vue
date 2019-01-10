<template>
    <v-expansion-panel class="order-list">
        <v-expansion-panel-content
                v-for="(item,index) in orders.filter(function(obj) {
                  return obj[search_s] == search_t || search_t.length < 1
                })"
                :key="index"
        >
            <div slot="header">#{{ item.ID }} : {{ item.DATE }}</div>
            <v-card>
                <v-card-text>Бронювання</v-card-text>
                <v-card-text class="order">
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md2 lg1>Id: {{ item.ID }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Id квитка: {{ item.TICKET_ID }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Код квитка: {{ item.CODE }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Id покупця: {{ item.USER_ID }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Сумма: {{ item.COST }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Відправлення: {{ item.FROM }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Прибуття: {{ item.TO }}</v-flex>
                        <v-spacer></v-spacer>
                        <v-flex xs12 sm12 md2 lg1><v-icon class="delete-icon">fas fa-trash</v-icon></v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
            <v-card v-for="(item, index) in users.filter(function( obj ) { return obj.ID === item.USER_ID })" :key="index">
                <v-card-text>Інформація користувача</v-card-text>
                <v-card-text class="user-info">
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md2 lg1>Id: {{ item.ID }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Імя: {{ item.F_NAME }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Фамілія: {{ item.L_NAME }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Email: {{ item.EMAIL }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Стать: {{ item.SEX === 1 ? "чоловік" : item.SEX === 2 ? "жінка" : "Не визначено"}}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Активність: {{ item.ONLINE ? "online" : "offline" }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Активне замовлення: {{ item.ORDER_ACTIVE ? item.ORDER_ID : "відсутнє" }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Аватар: {{ item.AVATAR }}</v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
            <div v-for="(item, index) in tickets.filter(function( obj ) { return obj.ID === item.TICKET_ID })" :key="index">
                <v-card class="ticket">
                    <v-card-text>Квиток</v-card-text>
                    <v-container grid-list-md text-xs-center class="ticket-container">
                        <v-layout row wrap>
                            <v-flex xs12 sm6 md6 lg6>
                                <v-card-title>
                                    <v-flex xs12 sm1 md1 lg1>
                                        <i class="material-icons type">{{ item.TYPE === 0 ? "directions_railway" : "directions_bus"}}</i>
                                    </v-flex>
                                    <v-flex xs12 sm11 md11 lg11>
                                        <h3 class="name">{{ item.NAME }}</h3>
                                    </v-flex>
                                </v-card-title>
                            </v-flex>
                            <v-flex xs12 sm6 md6 lg6>
                                <v-card-actions class="order-button-block">
                                    <v-spacer></v-spacer>
                                    <v-btn disabled color="orange" class="price">{{ item.PRICE }} ₴</v-btn>
                                    <v-btn color="green" disabled>Забронювати
                                        <v-icon dark right>add_shopping_cart</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                            <v-flex xs12 sm6 md6 lg6 >
                                <v-stepper vertical class="from">
                                    <v-stepper-step complete="" complete-icon="">
                                        {{ item.FROM }}
                                        <small>{{ item.FROM_TIME }}</small>
                                    </v-stepper-step>

                                    <v-stepper-content >

                                    </v-stepper-content>

                                    <v-stepper-step complete="" complete-icon="">
                                        {{ item.WAY_TIME }}
                                        <small>час у дорозі</small>
                                    </v-stepper-step>

                                    <v-stepper-content>

                                    </v-stepper-content>

                                    <v-stepper-step complete="" complete-icon="">
                                        {{ item.TO }}
                                        <small>{{ item.TO_TIME }}</small>
                                    </v-stepper-step>
                                </v-stepper>
                            </v-flex>
                            <v-flex xs12 sm6 md6 lg6>
                                Маршрут
                                <v-stepper vertical class="stations">
                                    <v-stepper-step complete="" complete-icon="" v-for="(state, s_index) in item.STATIONS" :key="s_index">
                                        {{state}}
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
        }
    }
</script>

<style lang="sass" scoped>
    .order-list
        margin-top: 20px

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