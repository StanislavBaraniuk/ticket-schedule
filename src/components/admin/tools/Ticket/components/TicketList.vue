<template>
    <v-expansion-panel style="margin-top: 20px">
        <v-expansion-panel-content
                v-for="(item,index) in tickets.filter(function(obj) {
                  return obj[search_s] == search_t || search_t.length < 1
                })"
                :key="index"
        >
            <div slot="header">#{{ item.ID }} : {{ item.NAME }}</div>
            <v-card>
                <v-card-text  style="margin-left: 20px">
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md2 lg1>Ціна: {{ item.PRICE }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Відправка: {{ item.FROM }} о {{ item.FROM_TIME }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Прибуття: {{ item.TO }} о {{ item.TO_TIME }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>В дорозі: {{ item.WAY_TIME }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Тип транспорту: {{ item.TYPE === 1 ? 'Bus' : "Train" }}</v-flex>
                        <v-spacer></v-spacer>
                        <v-flex xs12 sm12 md2 lg1><v-icon v-on:click="openRedact(item.ID)">fas fa-pencil-ruler</v-icon><v-icon style="padding-left: 20px" >fas fa-trash</v-icon></v-flex>
                        <v-flex xs12 sm12 md12 lg12>
                            <h3 style="width: 100%; text-align: center">Маршрут</h3>
                            <div class="text-xs-center" >
                                <v-chip v-for="(object, i) in item.STATIONS" :key="i">{{ object }}</v-chip>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-card-text>

            </v-card>
            <ticket-redaction :f="{v: openRedact}" :items="items" :activeTicketRedactId="{v: activeTicketRedactId}" :item="item"></ticket-redaction>
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
                search_t: "GET_ADMIN_SEARCH_TEXT",
                search_s: "GET_ADMIN_SEARCH_SELECT"
            })
        }
    }
</script>

<style scoped>

</style>