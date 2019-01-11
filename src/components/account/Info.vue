<template>
    <v-card class="info-block">
        <v-layout row wrap class="info-block animated slideInLeft delay-1s">
            <v-flex xs2>
                <v-avatar>
                    <img :src="$props.user.AVATAR === null ?
                    'http://cdn.onlinewebfonts.com/svg/img_215059.png'
                    : $props.user.AVATAR "
                         class="avatar"
                         alt="avatar">
                </v-avatar>
            </v-flex>
            <v-flex xs9>
                <v-card-text class="text-lg-left">
                    {{ $props.user.FIRST_NAME }} {{ $props.user.LAST_NAME }}
                </v-card-text>
            </v-flex>
            <v-flex xs1>
                <v-layout row justify-center>
                    <v-dialog v-model="dialog" persistent max-width="600px">
                        <v-icon  slot="activator" class="rotation setting">settings</v-icon>
                        <v-card>
                            <v-card-title>
                                <span class="headline">User Profile</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12 sm12 md12 lg12>
                                            <v-text-field
                                                    :rules="emailRules"
                                                    label="Email"
                                            ></v-text-field>
                                        </v-flex>

                                        <v-flex xs12 sm12 md12 lg12>
                                            <v-text-field
                                                    :rules="phoneRules"
                                                    label="Телефон"
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
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                                <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-layout>
            </v-flex>
            <v-flex xs12>
                <v-card-text class="text-lg-left">
                    Емайл: {{ $props.user.EMAIL }}
                </v-card-text>
            </v-flex>
            <v-flex xs12>
                <v-card-text class="text-lg-left">
                    Телефон: {{ $props.user.PHONE }}
                </v-card-text>
            </v-flex>
            <v-flex xs12>
                <v-card-text class="text-lg-left">
                    Стать: {{ $props.user.SEX === 1 ? "Чоловіча" : $props.user.SEX === 2 ? "Жіноча" : "Не визначено"}}
                </v-card-text>
            </v-flex>
            <v-flex xs12>
                <v-card-text class="text-lg-left">
                    Статус: {{ $props.user.STATUS }}
                </v-card-text>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
    export default {
        name: "Info",
        props: {
            user: {

            }
        },
        data: function() {
            return {
                dialog: false,
                emailRules: [
                    v => !!v || "E-mail є обов'язковим",
                    v => /.[a-zA-Z/.]{1,}@[a-z]{1,}[.][a-z]{2,}/.test(v) || 'E-mail повинен бути вірним'
                ],
                sex_item: ['Не визначено','Не визначено','Чоловіча','Жіноча'],
                sex_select: 0,
                phoneRules: [
                    v => !!v || "Телефон є обов'язковим",
                    v => /.[0-9/+]{9,}/.test(v) || 'Телефон повинен бути вірним'
                ],
            }
        },
        computed: {
        }
    }
</script>

<style lang="sass" scoped>
    .info-block
        padding: 20px 10px 10px 10px
        background-color: whitesmoke !important

        .avatar
            background-size: contain

        .setting
            cursor: pointer
            margin-top: 7px

    .rotation
        border-radius: 50%
        -webkit-transition: -webkit-transform .3s ease-in-out
        transition:         transform .3s ease-in-out

    .rotation:hover
        -webkit-transform: rotate(45deg)
        transform: rotate(45deg)

</style>