<template>
    <v-card style="padding: 30px" v-if="activeRedactId.v === item.ID">

        <v-layout row wrap>
            <v-flex xs12 sm12 md12 lg2>
                <picture-input

                        ref="pictureInput"
                        @change="onChanged"
                        @remove="onRemoved"
                        :removable="true"
                        :width="210"
                        :height="210"
                        removeButtonClass="ui red button"
                        accept="image/jpeg, image/png, image/gif"
                        buttonClass="ui button primary"
                        :customStrings="{
                          upload: '<h1>Upload it!</h1>',
                          drag: 'Оберіть фото'
                          }">
                </picture-input>
            </v-flex>

            <v-flex xs12 sm12 md12 lg10>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md12 lg12>
                        <v-text-field
                                :rules="emailRules"
                                label="Email"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12 md12 lg6>
                        <v-text-field
                                label="Імя"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12 md12 lg6>
                        <v-text-field
                                label="Фамілія"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12 md12 lg12>
                        <v-autocomplete
                                v-model="sex_item[sex_select]"
                                :items="sex_item"
                                label="Стать"
                                :readonly="false"
                        ></v-autocomplete>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>

        <v-flex xs12>
            <v-btn dark color="indigo" v-on:click="f.v(-1)"><v-icon>close</v-icon></v-btn>
        </v-flex>

    </v-card>
</template>

<script>
    import PictureInput from 'vue-picture-input'

    export default {
        name: "UserRedaction",
        components: {PictureInput},
        data: function () {
            return {
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.[a-zA-Z/.]{}@[a-z]{1,}[.][a-z]{2,}/.test(v) || 'E-mail must be valid'
                ],
                sex_item: ['Не визначено','Не визначено','Чоловіча','Жіноча'],
                sex_select: 0
            }
        },
        props: {
            item:{

            },
            activeRedactId: {

            },
            f: {}
        },
    }
</script>

<style scoped>

</style>