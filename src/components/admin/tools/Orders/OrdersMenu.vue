<template>
    <v-container>
        <list :items="$props.orders" :tickets="tickets" :users="users"></list>
    </v-container>
</template>

<script>

    import list from "./OrdersList"

    export default {
        name: "OrdersMenu",
        components: {
            list
        },
        props: {
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