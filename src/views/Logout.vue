<template>
    <div class="main">
        LOGOUT ...
    </div>
</template>

<script>
    import '../style/style.css'

    export default {
        name: "Logout",
        created() {
            this.LOGOUT(this, window.api.storage.getCookie('token') !== undefined ? window.api.storage.getCookie('token') : "0");
            this.CHECK_AUTH(this, window.api.storage.getCookie('token') !== undefined ? window.api.storage.getCookie('token') : "0");
        },
        methods: {
            LOGOUT: async (component, token) => {
                {
                    await window.api.user.logout(token);
                }
            },
            CHECK_AUTH: async (component, token) => {
                {
                    await window.api.user.isAuth(token, '/');
                }
            }
        },
    }
</script>

<style lang="sass" scoped>
    .main
        height: 100vh
        width: 100vw
        text-align: center
        color: #b5b5b5
        line-height: 100vh
        font-size: 20px

</style>