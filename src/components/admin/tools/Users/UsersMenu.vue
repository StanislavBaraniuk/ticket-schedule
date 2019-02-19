<template>
    <v-container class="users-manu">
        <v-flex xs12 sm12 md12 lg12 >
            <v-btn flat @click="addActive = !addActive" :class="{activeBtn: addActive}">Додати користувача</v-btn>
        </v-flex>
        <city-add :add-active="{v: addActive}"></city-add>
        <city-list :stations="stations"></city-list>
    </v-container>
</template>

<script>
    import CityAdd from './components/UsersAdd'
    import CityList from './components/UsersList'

    export default {
        name: "UsersMenu",
        components: {
            CityAdd,
            CityList
        },
        props: {
            stations:{}
        },
        data: function () {
            return {
                addActive: false
            }
        }
    }
</script>

<style lang="sass" scoped>
    .users-manu
        margin-top: -30px
</style>