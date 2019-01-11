<template>
    <!--<v-app>-->
    <div>
        <div class="p404" ></div>
        <my-header way></my-header>
        <div class="back"></div>
    </div>
    <!--</v-app>-->
</template>

<script>
    import MyHeader from '../components/standart/Header'
    import '../style/style.css'

    export default {
        name: "404",
        components: {
            MyHeader
        }
    }
</script>

<style lang="sass" scoped>
    .p404
        height: 65px
        background-color: #333333
        width: 100vw
        position: absolute

    .back
        background-image: url('https://www.sageisland.com/wp-content/uploads/2015/04/creative-404-error-page-design-marketing-assets.jpg')
        width: 100vw
        height: 100vh
        background-size: 70%
        background-position: center
        background-color: #d5edef

</style>