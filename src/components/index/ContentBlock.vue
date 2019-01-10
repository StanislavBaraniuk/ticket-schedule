<template>
    <v-container style="margin-top: -50px">
        <div v-if="!isActive" style="position: absolute; width: 100%; margin-right: auto; margin-left: auto;">

        </div>
        <v-container v-if="isActive" grid-list-md text-xs-center style="padding: 0px">
            <v-layout row wrap>
                <v-flex xs12 sm12 md12 lg8 offset-lg2  v-for=" (item , index) in tickets.filter(function(obj) { return obj.FROM === filter.FROM && obj.TO === filter.TO && obj.FROM_DATE === filter.DATE && obj.TYPE === filter.TRANSPORT})" :key="index">
                    <v-card style="margin-top: 20px">
                        <v-container grid-list-md text-xs-center style="padding: 10px 0 0;">
                            <v-layout row wrap>
                                <v-flex xs12 sm6 md6 lg6>
                                    <v-card-title>
                                        <v-flex xs12 sm1 md1 lg1>
                                            <i class="material-icons" style="margin-left: 8px; margin-top: 10px">{{ item.TYPE === 0 ? "directions_railway" : "directions_bus"}}</i>
                                        </v-flex>
                                        <v-flex xs12 sm11 md11 lg11>
                                            <h3 style="margin-left: 10px">{{ item.NAME }}</h3>
                                        </v-flex>
                                    </v-card-title>
                                </v-flex>
                                <v-flex xs12 sm6 md6 lg6>
                                    <v-card-actions style="padding-right: 20px">
                                        <v-spacer></v-spacer>
                                        <v-btn disabled color="orange" style="font-size: 20px; color: black !important;">{{ item.PRICE }} ₴</v-btn>
                                        <v-btn color="green" dark>Забронювати
                                            <v-icon dark right>add_shopping_cart</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-flex>
                                <v-flex xs12 sm6 md6 lg6>
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
                                <v-flex xs12 sm6 md6 lg6>
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
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container v-if="tickets.filter(function(obj) { return obj.FROM === filter.FROM && obj.TO === filter.TO && obj.FROM_DATE === filter.DATE }).length < 1 && isActive" grid-list-md text-xs-center style="padding: 0px">
            <v-layout row wrap>
                <v-flex xs12 sm12 md12 lg8 offset-lg2>
                    <div class="text-xs-center" style="margin-top: 6vh">
                        <v-chip color="orange" text-color="white" style="padding: 10px">
                            <h1>Квитків не знайдено</h1>
                        </v-chip>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex';


    export default {
        name: "ContentBlock",
        data: () => ({

        }),
        computed: {
            ...mapGetters({
                tickets: "GET_ALL_TICKETS",
                filter: "GET_FILTER",
                isActive: "GET_IS_ACTIVE"
            })
        }
    }
</script>

<style scoped>

</style>