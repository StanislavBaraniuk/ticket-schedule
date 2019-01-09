<template>
    <v-card style="padding: 20px 10px 10px 10px; margin-top: 20px; background-color: whitesmoke">
        <v-layout row wrap>
            <h3 style="margin-bottom: 10px">Використані квитки</h3>
            <v-flex xs12 v-for="(item, index) in all_orders.filter(function( obj ) { return obj.USER_ID === user.ID })" :key="index">
                <v-card class="animated slideInLeft delay-1s">
                    <v-card-text>
                        <v-layout row wrap>
                            <v-flex xs6 class="text-xs-left">
                                <v-chip outline color="primary">{{ item.CODE }}</v-chip>
                            </v-flex>
                            <v-flex xs6 class="text-xs-right" style="margin-top: -5px">
                                <v-card-text>{{ item.COST }} ₴</v-card-text>
                            </v-flex>
                            <v-flex xs12>
                            <v-stepper>
                                <v-stepper-header>
                                    <v-stepper-step
                                            complete
                                            step="1"
                                    >
                                        {{ item.FROM }}
                                    </v-stepper-step>

                                    <v-divider></v-divider>

                                    <v-stepper-step
                                            complete
                                            step="2"
                                    >{{ item.TO }}</v-stepper-step>
                                </v-stepper-header>
                            </v-stepper>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
                <div v-if="index+1 % 2 !== 0" style="height: 20px;"></div>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
    export default {
        name: "AllOrders",
        props: {
            user: {

            },
            all_orders: {

            }
        }
    }
</script>

<style scoped>

</style>