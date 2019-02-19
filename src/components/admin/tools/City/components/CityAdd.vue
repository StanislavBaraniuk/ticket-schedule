<template>
    <v-card class="city-add" v-if="addActive.v">

        <v-layout row wrap>

            <v-flex xs12 sm12 md12 lg12>
                <v-text-field
                        label="ID"
                        v-model.number="ID"
                        mask="#############################################"
                ></v-text-field>
            </v-flex>

            <v-flex xs12 sm12 md12 lg12>
                <v-text-field
                        label="Назва міста"
                        v-model="NAME"
                ></v-text-field>
            </v-flex>
        </v-layout>
        <small style="color: red">{{error}}</small>
        <v-flex xs12>
            <v-btn dark color="indigo" v-on:click="add">Додати</v-btn>
        </v-flex>

    </v-card>
</template>

<script>
    export default {
        name: "CityAdd",
        props: {
            addActive: {

            }
        },
        data() {
            return {
                NAME: '',
                ID: 0,
                error: ""
            }
        },
        methods: {
            add: function () {
                let add = async (cmp) => {
                    let resp = await window.api.stations.add(window.api.storage.getToken(), {
                        ID: this.ID,
                        NAME: this.NAME
                    });

                    alert(resp.status);

                    if (resp.status === 200) {
                        window.location.reload();
                    } else if (resp.status === 409) {
                        cmp.error = "Елемент з такою назвою вже існує";
                    } else {
                        cmp.error = 'Щось пішло не так :('
                    }
                };

                if (this.NAME.length > 0 && parseInt(this.ID) >= 0) {
                    add(this)
                } else {
                    this.error = "Заповніть поля"
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    .city-add
        padding: 30px

</style>