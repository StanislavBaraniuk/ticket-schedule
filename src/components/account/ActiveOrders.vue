<template>
    <v-card class="padding600 active-orders-card">
        <v-layout row wrap>
            <h3 class="main-h"><v-chip text-color="white" color="red"><v-icon>shopping_cart</v-icon> {{ orders.length }}</v-chip>  Активні бронювання</h3>
            <v-flex xs12>
                <v-flex xs12 class="if-not-found" v-if="orders.filter(function(order) {return order.ORDER.STATUS === 1; }).length === 0">
                    Відсутні
                </v-flex>
                <v-flex xs12 sm12 md12 lg12 v-for="(item , index) in orders.filter(function(order) {return order.ORDER.STATUS === 1; })" :key="index" class="">
                    <v-card>
                        <v-container grid-list-md text-xs-center class="active-orders-card-container">
                            <v-layout row wrap>
                                <v-flex xs12 sm12 md4 lg4>
                                    <v-card-title>
                                        <v-flex xs12 sm1 md1 lg1>
                                            <i class="material-icons t-icon">{{ item.TICKET.TYPE === 1 ? "directions_railway" : "directions_bus"}}</i>
                                        </v-flex>
                                        <v-flex xs12 sm11 md11 lg11>
                                            <h3 class="t-name">{{ item.TICKET.NAME }}</h3>
                                        </v-flex>
                                    </v-card-title>
                                </v-flex>
                                <v-flex xs12 sm12 md1 lg1>
                                    <div>
                                        <small>Місце</small>
                                        <h1>{{ item.ORDER.PLACE }}</h1>
                                    </div>
                                </v-flex>
                                <v-flex xs12 sm12 md7 lg7>
                                    <v-card-actions class="card-actions">
                                        <v-spacer></v-spacer>
                                        <v-btn disabled color="orange" class="price">{{ item.TICKET.PRICE }} ₴</v-btn>
                                        <v-btn color="green" dark v-on:click="cacnel(item.ORDER.CODE, index)">Відмінити
                                            <v-icon dark right>delete</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-flex>
                                <v-flex xs12 sm6 md4 lg4 >
                                    <v-stepper vertical class="from">
                                        <v-stepper-step complete="" complete-icon="">
                                            {{ item.TICKET.FROM_PLACE }}
                                            <small>{{ item.TICKET.FROM_TIME | timeNormalizer }}</small>
                                        </v-stepper-step>

                                        <v-stepper-content >

                                        </v-stepper-content>

                                        <v-stepper-step complete="" complete-icon="">
                                            {{ item.TICKET.WAY_TIME | timeNormalizer }}
                                            <small>час у дорозі</small>
                                        </v-stepper-step>

                                        <v-stepper-content>

                                        </v-stepper-content>

                                        <v-stepper-step complete="" complete-icon="">
                                            {{ item.TICKET.TO_PLACE }}
                                            <small>{{ item.TICKET.TO_TIME | timeNormalizer }}</small>
                                        </v-stepper-step>
                                    </v-stepper>
                                </v-flex>
                                <v-flex xs12 sm6 md4 lg4>
                                    Маршрут
                                    <v-stepper vertical class="way-stepper">
                                        <v-stepper-step complete="" complete-icon="" v-for="(state, s_index) in item.TICKET.STATIONS" :key="s_index">
                                            {{state}}
                                            <small>Зупинка</small>
                                        </v-stepper-step>

                                        <v-stepper-content >

                                        </v-stepper-content>
                                    </v-stepper>
                                </v-flex>
                                <v-flex xs12 sm12 md4 lg4>
                                    <div class="QR-block">
                                        <div class="QR">
                                            <img :src=" 'https://api.qrserver.com/v1/create-qr-code/?size=230x230&data=' + item.ORDER.CODE " alt="">
                                        </div>
                                        <small>{{ item.ORDER.CODE }}</small>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                    <div class="space"></div>
                </v-flex>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
    import {mapGetters} from 'vuex'
    import 'animate.css'

    export default {
        name: "ActiveOrders",
        props: {
            all_orders: {

            }
        },
        created() {

                this.LOAD_ORDERS(this, window.api.storage.getCookie('token') !== undefined ? window.api.storage.getCookie('token') : "0")

        },
        methods: {
            cacnel: function (code, index) {
                this.CANCEL_ORDER(this, window.api.storage.getCookie('token') !== undefined ? window.api.storage.getCookie('token') : "0", code, index)
            },
            LOAD_ORDERS: async (component, token) => {
                {
                    let data = await window.api.user.get_all_orders(token);

                    if (data.status === 200) {
                        component.$store.dispatch("SET_ORDERS", data.data);
                    } else {
                        component.$store.dispatch("SET_ORDERS", []);
                    }

                }
            },
            CANCEL_ORDER: async (component, token, code, index) => {
                {

                    let data = await window.api.user.cancel_order(token, code);

                    if (data.status === 200) {
                        component.orders.splice(index, 1);
                    }

                }
            },
        },
        computed: {
            ... mapGetters ({
                orders: "GET_ORDERS"
            })
        }

    }
</script>

<style lang="sass" scoped>
    .padding600
        @media all and (min-width: 960px)
            margin-left: 20px
        @media all and (max-width: 960px)
            margin-top: 20px

    .active-orders-card
        padding: 10px 10px 10px 10px
        background-color: whitesmoke

        .main-h
            margin-bottom: 10px

        .active-orders-card-container
            padding: 10px 0 0

            .t-icon
                margin-left: 8px
                margin-top: 10px

            .t-name
                margin-top: 10px
                text-align: center

            .card-actions
                padding-right: 20px

            .price
                font-size: 20px
                color: black !important

            .from
                height: 260px
                box-shadow: none

            .way-stepper
                height: 260px
                overflow-y: scroll
                box-shadow: none

            .QR-block
                height: 260px
                overflow-y: scroll

                .QR
                    height: 90%
                    width: 100%
                    background-size: contain
                    background-image: url('http://e-asveta.adu.by/images/content/images/material/QR-cod1.png')
                    background-position: center

    .space
        height: 20px

    .if-not-found
        width: 100%
        left: 0
        margin-top: 30%
        text-align: center
        position: absolute
        font-size: 20px
        color: darkgray
        font-weight: bold

</style>