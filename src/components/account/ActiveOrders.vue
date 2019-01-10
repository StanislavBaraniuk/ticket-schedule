<template>
    <v-card style="padding: 10px 10px 10px 10px; background-color: whitesmoke" class="padding600">
        <v-layout row wrap>
            <h3 style="margin-bottom: 10px" class="animated bounce delay-2s"><v-chip text-color="white" color="red"><v-icon>shopping_cart</v-icon> {{ all_orders.filter(function( obj ) { return obj.USER_ID === user.ID }).length }}</v-chip>  Активні бронювання</h3>
            <v-flex xs12>
                <v-flex xs12 sm12 md12 lg12  v-for=" (item , index) in getActiveOrders(all_orders, tickets, user)" :key="index" class="animated bounce delay-2s">
                    <v-card>
                        <v-container grid-list-md text-xs-center style="padding: 10px 0 0;">
                            <v-layout row wrap>
                                <v-flex xs12 sm12 md4 lg4>
                                    <v-card-title>
                                        <v-flex xs12 sm1 md1 lg1>
                                            <i class="material-icons" style="margin-left: 8px; margin-top: 10px">{{ item.TYPE === 0 ? "directions_railway" : "directions_bus"}}</i>
                                        </v-flex>
                                        <v-flex xs12 sm11 md11 lg11>
                                            <h3 style="margin-left: 10px">{{ item.NAME }}</h3>
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
                                    <v-card-actions style="padding-right: 20px">
                                        <v-spacer></v-spacer>
                                        <v-btn disabled color="orange" style="font-size: 20px; color: black !important;">{{ item.PRICE }} ₴</v-btn>
                                        <v-btn color="green" dark>Відмінити
                                            <v-icon dark right>delete</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-flex>
                                <v-flex xs12 sm6 md4 lg4 >
                                    <v-stepper vertical style="height: 260px; box-shadow: none">
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
                                    <v-stepper vertical style="height: 260px; overflow-y: scroll; box-shadow: none">
                                        <v-stepper-step complete="" complete-icon="" v-for="(state, s_index) in item.STATIONS" :key="s_index">
                                            {{state}}
                                            <small>Зупинка</small>
                                        </v-stepper-step>

                                        <v-stepper-content >

                                        </v-stepper-content>
                                    </v-stepper>
                                </v-flex>
                                <v-flex xs12 sm12 md4 lg4>
                                    <div style="height: 260px; overflow-y: scroll">
                                        <div style="height: 90%; width: 100%; background-size: contain; background-image: url('http://e-asveta.adu.by/images/content/images/material/QR-cod1.png'); background-position: center">
                                        </div>
                                        <small>78t6r75dtfy878fg</small>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                    <div style="height: 20px"></div>
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
</style>