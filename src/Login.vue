<template>
    <v-app>
        <back-photo></back-photo>
        <my-header></my-header>
        <way-chooser></way-chooser>
        <content-block></content-block>
    </v-app>
</template>

<script>
    import myHeader from './components/Header'
    import BackPhoto from './components/BackPhoto'
    import WayChooser from './components/WayChooser'
    import ContentBlock from './components/ContentBlock'

    import WebFontLoader from 'webfontloader'

    export default {
        name: 'Login',
        mounted () {

            WebFontLoader.load({
                google: {
                    families: ['Roboto:100,300,400,500,700,900']
                },
                active: this.setFontLoaded
            })
        },
        components: {
            myHeader,
            BackPhoto,
            WayChooser,
            ContentBlock
        },
        methods: {
            setFontLoaded () {
                this.$emit('font-loaded')
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0;
        padding: 0;
    }

    body {
        padding: 0;
        margin: 0;
    }
</style>
