<template>
    <div id="back-photo">
        <div class="back-photo" :class="{p50 : this.$store.state.display.isActive, 'p100' : !this.$store.state.display.isActive}" :key="'resizable'">
            <div class="back-photo-black"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BackPhoto",
        data: () => ({
            // height: "height: " + window.innerHeight + "px"
        }),
        methods: {
        },
        computed: {
            myStyles () {
                return {
                    // height: `${this.$store.state.display.isActive ? this.height/2 : this.height}px`
                }
            }
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
            background-image: url("https://znaj.ua/images/2018/09/25/IcXKNfRpuvkrvkgYodOhx7p1WD107ndNP6XMKLjT.jpeg")
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