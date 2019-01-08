<template>
    <v-container style="margin-top: -30px">
        <v-flex xs12 sm12 md12 lg12 >
            <v-btn flat @click="addActive = !addActive" :class="{activeBtn: addActive}">Додати користувача</v-btn>
        </v-flex>
        <city-add :add-active="{v: addActive}"></city-add>
        <city-list :stations="stations"></city-list>
    </v-container>
</template>

<script>
    import CityAdd from './UsersAdd'
    import CityList from './UsersList'

    export default {
        name: "UsersMenu",
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
                addActive: true
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

<style scoped>

</style>