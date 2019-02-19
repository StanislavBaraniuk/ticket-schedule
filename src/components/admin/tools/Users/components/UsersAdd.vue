<template>
    <v-card class="users-add" v-if="addActive.v">

        <v-layout row wrap>
            <v-flex xs12 sm12 md12 lg12>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md4 lg4>
                        <v-text-field
                                label="ІД"
                                v-model="ID"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12 md4 lg4>
                        <v-select
                                v-model="SEX"
                                :items="sex_id"
                                :label="'Стать - ' + sex_item[SEX]"
                        ></v-select>
                    </v-flex>

                    <v-flex xs12 sm12 md4 lg4>
                        <v-autocomplete
                                :items="access_list"
                                label="Рівень доступу"
                                :readonly="false"
                                v-model="ACCESS"
                        ></v-autocomplete>
                    </v-flex>

                    <v-flex xs12 sm12 md6 lg6>
                        <v-text-field
                                :rules="emailRules"
                                label="E-mail"
                                v-model="EMAIL"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12 md6 lg6>
                        <v-text-field
                                :rules="phoneRules"
                                label="Телефон"
                                v-model="PHONE"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12 md6 lg6>
                        <v-text-field
                                label="Імя"
                                v-model="FIRST_NAME"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12 md6 lg6>
                        <v-text-field
                                label="Фамілія"
                                v-model="LAST_NAME"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
        <small style="color: red">{{ error }}</small>
        <v-flex xs12>
            <v-btn dark color="indigo" @click="add">Додати</v-btn>
        </v-flex>

    </v-card>
</template>

<script >

    export default {
        name: "CityAdd",
        props: {
            addActive: {

            }
        },
        data: function () {
            return {
                error: '',
                access_list: [1,2],
                PHONE: '',
                ID: 0,
                SEX: 0,
                EMAIL: '',
                ACCESS: 1,
                FIRST_NAME: '',
                LAST_NAME: '',
                requireRule: [
                    v => !!v || 'Обовязкове поле'
                ],
                phoneRules: [
                    v => /.([0-9]{11})/.test(v) || 'Телефон: 13 цифер'
                ],
                emailRules: [
                    v => !!v || 'E-mail є обовязковим',
                    v => /.[a-zA-Z0-9]{1,}@[a-z]{1,}[.][a-z]{2,}/.test(v) || 'E-mail повинен бути вірним'
                ],
                sex_id: [0,1,2],
                sex_item: ['Не визначено','Чоловік','Жінка']
            }
        },
        methods: {
            add: function () {
                    let user = {
                        ID: this.ID,
                        EMAIL: this.EMAIL,
                        FIRST_NAME: this.FIRST_NAME,
                        LAST_NAME: this.LAST_NAME,
                        ONLINE: 0,
                        ACCESS: this.ACCESS,
                        SEX: this.SEX,
                        TOKEN: "",
                        PASSWORD: "",
                        IP: "",
                        PHONE: this.PHONE
                    };


                    let add_user = async (user) => {
                        await window.api.client.add(window.api.storage.getToken(), user)
                    };

                    if (this.EMAIL.length > 0 && /.[a-zA-Z0-9]{1,}@[a-z]{1,}[.][a-z]{2,}/.test(this.EMAIL) && parseInt(this.ID) >= 0 && /.([0-9]{11})/.test(this.PHONE)) {
                        add_user(user).then(function () {
                            window.location.reload();
                        });
                    } else {
                        this.error = "Впевніться що: емайл введено, ІД >= 0, Телефон: 13 цифер"
                    }
                }
        }
    }
</script>

<style lang="sass" scoped>
    .users-add
        padding: 30px
</style>