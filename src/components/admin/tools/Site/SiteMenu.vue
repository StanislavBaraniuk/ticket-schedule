<template>
    <v-container class="site-menu">
        <v-flex xs12 sm12 md12 lg12 >
            <v-btn @click="turn_c" flat>{{ !$props.status.v ? "Ввімкнути сайт" : "Вимкнути сайт" }}</v-btn>
        </v-flex>
        <v-flex xs12 sm12 md12 lg12 >
            <h1>Mode: {{ $props.status.v ? "online" : "offline" }} for users</h1>
        </v-flex>
    </v-container>
</template>

<script>

    export default {
        name: "CityMenu",
        components: {

        },
        props: {
            status: {

            }
        },
        data: function () {
            return {
                addActive: false
            }
        },
        methods: {
            turn_c: function () {
                this.$store.commit('SET_SITE_STATUS', !this.$props.status.v)
            },
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
    .site-menu
        margin-top: -30px
</style>