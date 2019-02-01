<template>
    <v-card class="padding600 active-orders-card">
        <v-layout row wrap>
            <h3 class="main-h"><v-chip text-color="white" color="red"><v-icon>shopping_cart</v-icon> {{ all_orders.filter(function( obj ) { return obj.USER_ID === user.ID }).length }}</v-chip>  Активні бронювання</h3>
            <v-flex xs12>
                <v-flex xs12 sm12 md12 lg12  v-for="(item , index) in getActiveOrders(all_orders, tickets, user)" :key="index" class="">
                    <v-card>
                        <v-container grid-list-md text-xs-center class="active-orders-card-container">
                            <v-layout row wrap>
                                <v-flex xs12 sm12 md4 lg4>
                                    <v-card-title>
                                        <v-flex xs12 sm1 md1 lg1>
                                            <i class="material-icons t-icon">{{ item.TYPE === 0 ? "directions_railway" : "directions_bus"}}</i>
                                        </v-flex>
                                        <v-flex xs12 sm11 md11 lg11>
                                            <h3 class="t-name">{{ item.NAME }}</h3>
                                        </v-flex>
                                    </v-card-title>
                                </v-flex>
                                <v-flex xs12 sm12 md1 lg1>
                                    <div>
                                        <small>Місце</small>
                                        <h1>B4</h1>
                                    </div>
                                </v-flex>
                                <v-flex xs12 sm12 md7 lg7>
                                    <v-card-actions class="card-actions">
                                        <v-spacer></v-spacer>
                                        <v-btn disabled color="orange" class="price">{{ item.PRICE }} ₴</v-btn>
                                        <v-btn color="green" dark>Відмінити
                                            <v-icon dark right>delete</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-flex>
                                <v-flex xs12 sm6 md4 lg4 >
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
                                <v-flex xs12 sm6 md4 lg4>
                                    Маршрут
                                    <v-stepper vertical class="way-stepper">
                                        <v-stepper-step complete="" complete-icon="" v-for="(state, s_index) in item.STATIONS" :key="s_index">
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
                                        </div>
                                        <small>78t6r75dtfy878fg</small>
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
    import 'animate.css'

    export default {
        name: "ActiveOrders",
        props: {
            user: {

            },
            all_orders: {

            },
            tickets: {

            }
        },
        methods: {
            getActiveOrders(orders, tickets, user) {
                let ret = [];
                console.log("0");
                orders.forEach(function(order) {
                    if (order.USER_ID === user.ID && order.STATUS === 'active') {
                        console.log("1 :" + order.USER_ID);
                        tickets.forEach(function(ticket) {
                            if (ticket.ID === order.TICKET_ID) {
                                console.log("2 :" + ticket.ID);
                                ret.push(ticket);
                            }
                        })
                    }
                });

                return ret
            }
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

</style>