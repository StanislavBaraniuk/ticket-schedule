<template>
    <v-card class="info-block">
        <v-layout row wrap class="info-block">
            <!-- initialization of user profile redact variables here,
                because need for synchronization of the it with props.user
                because it is impossible to do from other place (maybe :) ) -->
            {{ init(user) }}
            <v-flex xs2>
                <v-avatar>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_215059.png"
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
                                <span class="headline">Профіль</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container grid-list-md style="margin-top: -40px">
                                    <v-layout wrap>
                                        <v-flex xs12 sm12 md12 lg12>
                                            <v-text-field
                                                    :rules="emailRules"
                                                    label="Email"
                                                    v-bind:value="user.EMAIL"
                                                    v-on:input="updateEMAIL"
                                            ></v-text-field>
                                        </v-flex>

                                        <v-flex xs12 sm12 md12 lg12>
                                            <v-text-field
                                                    :rules="phoneRules"
                                                    label="Телефон"
                                                    v-bind:value="user.PHONE"
                                                    v-on:input="updatePHONE"
                                            ></v-text-field>
                                        </v-flex>

                                        <v-flex xs12 sm12 md12 lg6>
                                            <v-text-field
                                                    label="Імя"
                                                    v-bind:value="user.FIRST_NAME"
                                                    v-on:input="updateFIRST_NAME"
                                            ></v-text-field>
                                        </v-flex>

                                        <v-flex xs12 sm12 md12 lg6>
                                            <v-text-field
                                                    label="Фамілія"
                                                    v-bind:value="user.LAST_NAME"
                                                    v-on:input="updateLAST_NAME"
                                            ></v-text-field>
                                        </v-flex>

                                        <v-flex xs12 sm12 md12 lg12>
                                            <v-autocomplete
                                                    v-bind:value="sex_item[user.SEX]"
                                                    v-on:input="updateSEX"
                                                    :items="sex_item"
                                                    label="Стать"
                                                    :readonly="false"
                                            ></v-autocomplete>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-text>
                            <v-card style="width: 90%; margin-left: 5%; margin-top: -30px">
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12 sm12 md12 lg12 :class="{errorBorder: error_password_text.length > 0, successBorder: success_password_text.length > 0}">
                                            <v-text-field
                                                    label="Старий пароль"
                                                    v-model="old_password"
                                                    type="password"
                                            ></v-text-field>
                                        </v-flex>

                                        <v-flex xs12 sm12 md12 lg12 style="margin-top: 5px" :class="{errorBorder: error_password_text.length > 0, successBorder: success_password_text.length > 0}">
                                            <v-text-field
                                                    label="Новий пароль"
                                                    v-model="new_password"
                                                    type="password"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm12 md12 lg12>
                                            <div>
                                                <small style="color: green; padding: 5px; margin-left: 10px" v-if="error_password_text.length < 1">{{success_password_text}}</small>
                                                <small style="color: red; padding: 5px; margin-left: 10px" v-if="success_password_text.length < 1">{{error_password_text}}</small>
                                            </div>
                                            <v-btn color="blue darken-1" flat @click="changePassword">Змінити пароль</v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat @click="closeModal">Close</v-btn>
                                <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
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
                error_password_text: '',
                success_password_text: '',
                new_password: '',
                old_password: '',
                redact: {
                    EMAIL: '',
                    PHONE: '',
                    FIRST_NAME: '',
                    LAST_NAME: '',
                    SEX: ''
                },
                dialog: false,
                emailRules: [
                    v => !!v || "E-mail є обов'язковим",
                    v => /.[a-zA-Z/.]{1,}@[a-z]{1,}[.][a-z]{2,}/.test(v) || 'E-mail повинен бути вірним'
                ],
                sex_item: ['Не визначено','Чоловіча','Жіноча'],
                sex_select: 0,
                phoneRules: [
                    v => !!v || "Телефон є обов'язковим",
                    v => /.[0-9/+]{9,}/.test(v) || 'Телефон повинен бути вірним'
                ],
            }
        },
        methods: {
            closeModal: function () {
                this.error_password_text = '';
                this.success_password_text = '';
                this.new_password = '';
                this.old_password = '';
                this.dialog = false;
            },
            changePassword: function () {
                this.error_password_text = '';
                this.success_password_text = "";

                let send = async (component, old_password, new_password) => {
                    let response = await window.api.user.changPassword(window.api.storage.getToken(), old_password, new_password);

                    if (response.status === 200) {
                        component.error_password_text = '';
                        component.success_password_text = "Пароль змінено";
                    } else if (response.status === 409) {
                        component.error_password_text = 'Пароль не змінено';
                        component.success_password_text = "";
                    }
                };

                send(this, this.old_password, this.new_password)
            },
            updateEMAIL: function (value) {
                this.redact.EMAIL = value;
            },
            updatePHONE: function (value) {
                this.redact.PHONE = value;
            },
            updateFIRST_NAME: function (value) {
                this.redact.FIRST_NAME = value;
            },
            updateLAST_NAME: function (value) {
                this.redact.LAST_NAME = value;
            },
            updateSEX: function (value) {
                this.redact.SEX = this.sex_item.indexOf(value);
            },
            save: function () {
                let start = async (user) => {
                    await window.api.user.changeInfo(window.api.storage.getToken(), user);
                };

                start(this.redact).then(function (v) {
                    window.location.reload()
                });
            },
            init(user) {
                this.redact.EMAIL = user.EMAIL;
                this.redact.PHONE = user.PHONE;
                this.redact.FIRST_NAME = user.FIRST_NAME;
                this.redact.LAST_NAME = user.LAST_NAME;
                this.redact.SEX = user.SEX;
            }
        },
        created() {
            alert(this.user.EMAIL);
            this.redact.EMAIL = this.user.EMAIL
        }
    }
</script>

<style lang="sass" scoped>
    .errorBorder
        color: red !important
        border: 1px solid red !important

    .successBorder
        border: 1px solid green !important

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