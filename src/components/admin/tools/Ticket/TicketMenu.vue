<template>
    <v-container class="ticket-menu">
        <v-flex xs12 sm12 md12 lg12 >
            <v-btn flat @click="addActive = !addActive" :class="{activeBtn: addActive}">Новий квиток</v-btn>
        </v-flex>
        <ticket-add :add-active="{v: addActive}" :items="items"></ticket-add>
        <ticket-list :items="items" :tickets="tickets"></ticket-list>
    </v-container>
</template>

<script>
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
        components: {
            TicketAdd,
            TicketList
        },
        computed: {
        }
    }
</script>

<style lang="sass" scoped>
    .ticket-menu
        margin-top: -30px
</style>