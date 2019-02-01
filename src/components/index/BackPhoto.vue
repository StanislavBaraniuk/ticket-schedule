<template>
    <div id="back-photo">
        <div class="back-photo" :class="{p50 : isActive, 'p100' : !isActive}" :key="'resizable'">
            <div class="back-photo-black"></div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "BackPhoto",
        data: () => ({

        }),
        methods: {
        },
        computed: {
            ...mapGetters({
                isActive: "GET_IS_ACTIVE"
            })
        }
    }

</script>

<style lang="sass">
    #back-photo
        .back-photo
            padding: 0
            margin: 0
            width: 100%
            position: absolute
            /*background-image: url("https://znaj.ua/images/2018/09/25/IcXKNfRpuvkrvkgYodOhx7p1WD107ndNP6XMKLjT.jpeg")*/
            background-image: url("https://images.wallpaperscraft.ru/image/zheleznaya_doroga_poezd_gory_zima_118617_960x544.jpg")
            background-repeat: no-repeat
            background-size: cover
            background-position: center

        .back-photo-black
            padding: 0
            margin: 0
            height: 100%
            width: 100%
            position: absolute
            background-color: black
            opacity: 0.5

    .p100
        height: 100vh
    .p50
        height: 50vh
</style>