<template>
    <div id="v-app">
        <header-block way ></header-block>
        <account-page></account-page>
        <footer-block></footer-block>
    </div>
</template>

<script>
    import HeaderBlock from '../components/standart/Header'
    import FooterBlock from '../components/standart/Footer'
    import AccountPage from '../components/account/AccountPage'

    export default {
        name: "Account",
        components: {
            HeaderBlock,
            AccountPage,
            FooterBlock
        }
    }
</script>

<style lang="sass">
    #v-app
        ::-webkit-scrollbar-thumb
            -webkit-border-radius: 0px
            border-radius: 2px
            background-color: rgba(134, 134, 134, 0.34)
            &:hover
                background-color: rgba(193, 193, 194, 0.9)
</style>