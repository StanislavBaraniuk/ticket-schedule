<template>
    <v-expansion-panel class="ticket-list">
        <v-expansion-panel-content
                v-for="(item,index) in tickets.filter(function(obj) {
                  return String(obj[search_s]).indexOf(String(search_t)) !== -1 || search_t.length < 1
                })"
                :key="index"
        >
            <div slot="header">#{{ item.ID }} : {{ item.NAME }}</div>
            <v-card>
                <v-card-text class="element">
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md2 lg1>Ціна: {{ item.PRICE }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Відправка: {{ stations[item.FROM_PLACE-1] }} о {{ item.FROM_TIME }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Прибуття: {{ stations[item.TO_PLACE-1] }} о {{ item.TO_TIME }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>В дорозі: {{ item.WAY_TIME }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Тип транспорту: {{ item.TYPE === 1 ? 'Bus' : "Train" }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Місця: {{ item.PLACES }}</v-flex>
                        <v-spacer></v-spacer>
                        <v-flex xs12 sm12 md2 lg1><v-icon v-on:click="openRedact(item.ID)">fas fa-pencil-ruler</v-icon><v-icon class="redact-icon" >fas fa-trash</v-icon></v-flex>
                        <v-flex xs12 sm12 md12 lg12>
                            <h3 class="way-h">Маршрут</h3>
                            <div class="text-xs-center" >
                                <v-chip v-for="(object, i) in item.STATIONS" :key="i">{{ stations[object-1] }}</v-chip>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
            <ticket-redaction :f="{v: openRedact}" :items="stations" :activeTicketRedactId="{v: activeTicketRedactId}" :t_stations="item.STATIONS.map(function(item) { return stations[item-1] })" :item="item"></ticket-redaction>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    import TicketRedaction from './TicketRedaction'
    import { mapGetters } from 'vuex';

    export default {
        name: "TicketList",
        data: function () {
            return {
                activeTicketRedactId: false
            }
        },
        props: {
            items: {

            },
            tickets: {

            }
        },
        components: {
            TicketRedaction
        },
        methods: {
            openRedact: function (id) {
                this.activeTicketRedactId = id;
            },
            remove (item) {
                this.chips.splice(this.chips.indexOf(item), 1);
                this.chips = [...this.chips]
            }
        },
        computed:{
            ...mapGetters({
                stations: 'GET_STATIONS',
                search_t: "GET_ADMIN_SEARCH_TEXT",
                search_s: "GET_ADMIN_SEARCH_SELECT"
            })
        }
    }
</script>

<style lang="sass" scoped>
    .ticket-list
        margin-top: 20px

    .element
        margin-left: 20px

    .redact-icon
        padding-left: 20px

    .way-h
        width: 100%
        text-align: center
</style>