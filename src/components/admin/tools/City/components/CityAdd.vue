<template>
    <v-card style="padding: 30px" v-if="addActive.v">

        <v-layout row wrap>

            <v-flex xs12 sm12 md12 lg12>
                <v-text-field
                        label="Назва міста"
                ></v-text-field>
            </v-flex>

        </v-layout>

        <v-flex xs12>
            <v-btn dark color="indigo" @click="addTicket">Додати</v-btn>
        </v-flex>

    </v-card>
</template>

<script>
    export default {
        name: "CityAdd",
        props: {
            addActive: {

            }
        }
    }
</script>

<style scoped>

</style>