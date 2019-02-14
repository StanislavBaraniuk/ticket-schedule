<template>
    <v-container class="site-menu">
        <v-flex xs12 sm12 md12 lg12 >
            <v-btn @click="$props.status.v ? on : off " flat>{{ !$props.status.v ? "Ввімкнути сайт" : "Вимкнути сайт" }}</v-btn>
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
            on: function () {
                let on = async () => {
                    await window.api.site.on(window.api.storage.getCookie('token') !== undefined ? window.api.storage.getCookie('token') : "0");
                };

                on();
                this.$store.commit('SET_SITE_STATUS', true)
            },
            off: function () {
                let off = async () => {
                    await window.api.site.on(window.api.storage.getCookie('token') !== undefined ? window.api.storage.getCookie('token') : "0");
                };

                off();
                this.$store.commit('SET_SITE_STATUS', false)
            },
        },
    }
</script>

<style lang="sass" scoped>
    .site-menu
        margin-top: -30px
</style>