<template>
    <div id="app">
        <v-app>
            <router-view/>
        </v-app>
    </div>
</template>

<script>
    async function STILL_AUTH() {
        await window.api.user.is_auth(window.api.storage.getCookie('token') !== undefined ? window.api.storage.getCookie('token') : "0", '/');
    }

    export default {
        name: "App",
        created() {
            setInterval(function () {
                if (window.api.storage.getCookie('token') !== null && window.api.storage.getCookie('token') !== undefined && window.api.storage.getCookie('token') !== '0') {
                    STILL_AUTH();
                }
            }, 1000);
        }
    }
</script>

<style scoped>

</style>