<template>
    <v-container style="margin-top: -30px">
        <v-flex xs12 sm12 md12 lg12 >
            <v-btn flat @click="addActive = !addActive" :class="{activeBtn: addActive}">Новий квиток</v-btn>
        </v-flex>
        <ticket-add :add-active="{v: addActive}" :items="items"></ticket-add>
        <ticket-list :items="items" :tickets="tickets"></ticket-list>
    </v-container>
</template>

<script>
    // import { mapGetters } from 'vuex';
    //
    import TicketAdd from './components/TicketAdd'
    import TicketList from './components/TicketList'

    export default {
        name: "TicketMenu",
        props: {
            tickets:{

            },
            items: {
                default: null
            }
        },
        data: function () {
            return {
                addActive: false
            }
        },
        methods: {
            redaction: function (item) {
                alert(item.toString());
            },
            delete: function (id) {
                alert(id)
            },
            addTicket() {
                // this.$store.commit('ADD_TICKET', {FROM: })
            }
        },
        components: {
            TicketAdd,
            TicketList
        },
        computed: {
        }
    }
</script>

<style scoped>

</style>