<template>
    <v-container class="city-menu">
        <v-flex xs12 sm12 md12 lg12 >
            <v-btn flat @click="addActive = !addActive" :class="{activeBtn: addActive}">Додати місто</v-btn>
        </v-flex>
        <city-add :add-active="{v: addActive}"></city-add>
        <city-list :stations="stations"></city-list>
    </v-container>
</template>

<script>
    import CityAdd from './components/CityAdd'
    import CityList from './components/CityList'

    export default {
        name: "CityMenu",
        components: {
            CityAdd,
            CityList
        },
        props: {
            stations:{

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
    }
</script>

<style lang="sass" scoped>
    .city-menu
        margin-top: -30px
</style>