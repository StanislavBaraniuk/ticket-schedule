<template>
    <v-container>
        <list :orders="$props.orders" :stations="stations" :tickets="tickets" :users="users"></list>
    </v-container>
</template>

<script>

    import list from "./components/OrdersList"

    export default {
        name: "OrdersMenu",
        components: {
            list
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

<style scoped>

</style>