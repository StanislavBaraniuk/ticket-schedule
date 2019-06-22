<template>
    <v-card class="all-orders">
        <v-layout row wrap>
            <h3 class="text">Використані квитки</h3>
            <v-flex xs12 class="if-not-found" v-if="orders.filter(function(order) {return order.ORDER.STATUS === 0; }).length === 0">
                Відсутні
            </v-flex>

            <v-flex xs12 v-for="(item, index) in orders.filter(function(order) {return order.ORDER.STATUS === 0; })" :key="index">
                <v-card class="">
                    <v-card-text>
                        <v-layout row wrap>
                            <v-flex xs6 class="text-xs-left">
                                <v-chip outline color="primary">{{ item.ORDER.CODE }}</v-chip>
                            </v-flex>
                            <v-flex xs6 class="text-xs-right cost">
                                <v-card-text>{{ item.ORDER.COST }} ₴</v-card-text>
                            </v-flex>
                            <v-flex xs12>
                            <v-stepper>
                                <v-stepper-header>
                                    <v-stepper-step
                                            complete
                                            step="1"
                                    >
                                        {{ item.ORDER.FROM_PLACE }}
                                    </v-stepper-step>

                                    <v-divider></v-divider>

                                    <v-stepper-step
                                            complete
                                            step="2"
                                    >{{ item.ORDER.TO_PLACE }}</v-stepper-step>
                                </v-stepper-header>
                            </v-stepper>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
                <div v-if="index+1 % 2 !== 0" class="space"></div>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        name: "AllOrders",
        props: {
            user: {

            },
            all_orders: {

            }
        },
        created() {

            this.LOAD_ORDERS(this, window.api.storage.getToken())

        },
        methods: {
            LOAD_ORDERS: async (component, token) => {
                {
                    let data = await window.api.user.getAllOrders(token);

                    if (data.status === 200) {
                        component.$store.dispatch("SET_ORDERS", data.data);
                    } else {
                        component.$store.dispatch("SET_ORDERS", []);
                    }

                }
            }
        },
        computed: {
            ... mapGetters ({
                orders: "GET_ORDERS"
            })
        }
    }
</script>

<style lang="sass" scoped>
    .all-orders
        padding: 20px 10px 10px 10px
        margin-top: 20px
        background-color: whitesmoke

        .text
            margin-bottom: 10px

        .cost
            margin-top: -5px

        .space
            height: 20px

        .if-not-found
            width: 100%
            left: 0
            margin-top: 43%
            text-align: center
            position: absolute
            font-size: 20px
            color: darkgray
            font-weight: bold

</style>