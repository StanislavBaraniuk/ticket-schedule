<template>
    <div>
        <my-header way ></my-header>
        <authorization></authorization>
        <footer-block></footer-block>
    </div>
</template>

<script>
    import myHeader from '../components/standart/Header'
    import Authorization from '../components/authorization/Authorization'
    import FooterBlock from '../components/standart/Footer'

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
            Authorization,
            myHeader,
            FooterBlock
        },
        methods: {
            setFontLoaded () {
                this.$emit('font-loaded')
            }
        }
    }
</script>

<style lang="sass" scoped>
    #app
        font-family: 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        text-align: center
        color: #2c3e50
        margin: 0
        padding: 0


    body
        padding: 0
        margin: 0


</style>
