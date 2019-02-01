<template>
    <div class="main" v-if="isActive[$props.location]" :style="{backgroundColor: $props.color}">
        <div class="preloader-2">
            <span class="line line-1"></span>
            <span class="line line-2"></span>
            <span class="line line-3"></span>
            <span class="line line-4"></span>
            <span class="line line-5"></span>
            <span class="line line-6"></span>
            <span class="line line-7"></span>
            <span class="line line-8"></span>
            <span class="line line-9"></span>
            <span class="line line-10"></span>
            <span class="line line-11"></span>
            <span class="line line-12"></span>
            <span class="line line-13"></span>
            <div>Loading</div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "BlockPreloader",
        props: ['location', 'color'],
        computed: {
            ... mapGetters({
                isActive: "IS_BLOCK_LOADER"
            })
        }
    }
</script>

<style lang="sass" scoped>
        /*background-color: #fafafa*/
    $border-color: #7f827f
    $background-color: white
    $border-radius-big: 6px
    $font-size-header: 16px

    $car-color: $border-color
    $spin-deg: 36deg

    html, body
        overflow-y: hidden

    .main
        height: 40vh
        width: 100%
        text-align: center
        font-size: 20px
        position: absolute
        z-index: 2 !important
        left: 0
        opacity: 1

    .preloader-2
        margin: 10vh auto 0

    div
        color: #353535
        margin: 0px 0
        text-transform: uppercase
        text-align: center
        font-family: 'Arial', sans-serif
        font-size: 20px
        letter-spacing: 2px

    .preloader-2 .line
        width: 3px
        height: 30px
        background: #353535
        margin: 0 1px
        display: inline-block
        animation: opacity-2 1400ms infinite ease-in-out

    .preloader-1 .line-1, .preloader-2 .line-1
        animation-delay: 100ms

    .preloader-1 .line-2, .preloader-2 .line-2
        animation-delay: 200ms

    .preloader-1 .line-3, .preloader-2 .line-3
        animation-delay: 300ms

    .preloader-1 .line-4, .preloader-2 .line-4
        animation-delay: 400ms

    .preloader-1 .line-5, .preloader-2 .line-5
        animation-delay: 500ms

    .preloader-1 .line-6, .preloader-2 .line-6
        animation-delay: 600ms

    .preloader-1 .line-7, .preloader-2 .line-7
        animation-delay: 700ms

    .preloader-1 .line-8, .preloader-2 .line-8
        animation-delay: 800ms

    .preloader-1 .line-9, .preloader-2 .line-9
        animation-delay: 900ms

    .preloader-1 .line-10, .preloader-2 .line-10
        animation-delay: 1000ms

    .preloader-1 .line-11, .preloader-2 .line-11
        animation-delay: 1200ms

    .preloader-1 .line-12, .preloader-2 .line-12
        animation-delay: 1300ms

    .preloader-1 .line-13, .preloader-2 .line-13
        animation-delay: 1400ms

    @keyframes opacity-1
        0%
            opacity: 1

        50%
            opacity: 0

        100%
            opacity: 1


    @keyframes opacity-2
        0%
            opacity: 1
            height: 35px

        50%
            opacity: 1
            width: 10px
            height: 30px

        100%
            opacity: 1
            height: 35px

</style>