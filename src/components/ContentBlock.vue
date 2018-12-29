<template>
    <v-container>
        <div v-if="!this.$store.state.display.isActive" style="position: absolute; width: 100%; margin-right: auto; margin-left: auto;" :style="setMarginTop">

        </div>
        <v-container v-if="this.$store.state.display.isActive" grid-list-md text-xs-center style="padding: 0px">
            <v-layout row wrap>
                <v-flex xs12 sm12 md12 lg8 offset-lg2  v-for=" (item , index) in tickets" :key="index">
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
                                <v-flex xs12 sm6 md6 lg6 >
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
                                            {{state.NAME}}
                                            <small>{{state.TYPE}}</small>
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
        <v-container v-if="isListEmpty" grid-list-md text-xs-center style="padding: 0px">
            <v-layout row wrap>
                <v-flex xs12 sm12 md12 lg8 offset-lg2>
                    <div class="text-xs-center">
                        qwdas
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>

    // let tickets = [
    //     {NAME: "705К Киев-Пассажирский — Пшемысль", PRICE: 100, FROM: "Uzhgorod", TO: "Kiev", TYPE: 0, FROM_TIME: "06:20", TO_TIME: "12:10", WAY_TIME: "6:10", STATIONS: [{TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}] },
    //     {NAME: "705К Киев-Пассажирский — Пшемысль", PRICE: 100, FROM: "Uzhgorod", TO: "Kiev", TYPE: 1, FROM_TIME: "06:20", TO_TIME: "12:10", WAY_TIME: "6:10", STATIONS: [{TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}] },
    //     {NAME: "705К Киев-Пассажирский — Пшемысль", PRICE: 100, FROM: "Uzhgorod", TO: "Kiev", TYPE: 0, FROM_TIME: "06:20", TO_TIME: "12:10", WAY_TIME: "6:10", STATIONS: [{TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}] },
    //     {NAME: "142П Бахмут — Львов", FROM: "Lviv", PRICE: 200, TO: "Kiev", TYPE: 1, FROM_TIME: "6:00", TO_TIME: "21:15", WAY_TIME: "12:15", STATIONS: [{TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}, {TYPE: "Станція", NAME: "Ужгород"}] }
    //                 ];
    import { mapGetters } from 'vuex';


    export default {
        name: "ContentBlock",
        data: () => ({
            // tickets,
            // isListEmpty: (!(typeof tickets != "undefined" && tickets != null && tickets.length != null && tickets.length > 0)),
            // ticketsLandscape: window.innerWidth <= 960
        }),
        computed: {
            ...mapGetters({
                tickets: 'GET_LIST',
                isListEmpty: 'IS_LIST_EMPTY'
            })
        }
    }
</script>

<style scoped>

</style>