<template>
    <v-container class="order-menu">
        <orders-list :orders="$props.orders" :stations="stations" :tickets="tickets" :users="users"></orders-list>
    </v-container>
</template>

<script>
    import OrdersList from "./components/OrdersList"

    export default {
        name: "OrdersMenu",
        components: {
            OrdersList
        },
        data: function () {
            return {
                addActive: false
            }
        },
        props: {
            stations: {

            },
            orders: {

            },
            tickets: {

            },
            users: {

            }
        }
    }
</script>

<style lang="sass" scoped>
    .order-menu
        margin-top: -30px
</style>