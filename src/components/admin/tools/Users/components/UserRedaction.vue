<template>
    <v-card class="user-redaction" v-if="activeRedactId.v === item.ID">

        <v-layout row wrap>
            <v-flex xs12 sm12 md12 lg12>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md6 lg6>
                        <v-select
                                v-model="item.SEX"
                                :items="sex_id"
                                :label="'Стать - ' + sex_item[item.SEX]"
                        ></v-select>
                    </v-flex>

                    <v-flex xs12 sm12 md6 lg6>
                        <v-autocomplete
                                :items="access_list"
                                label="Рівень доступу"
                                :readonly="false"
                                v-model="item.ACCESS"
                        ></v-autocomplete>
                    </v-flex>

                    <v-flex xs12 sm12 md6 lg6>
                        <v-text-field
                                :rules="emailRules"
                                label="E-mail"
                                v-model="item.EMAIL"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12 md6 lg6>
                        <v-text-field
                                :rules="phoneRules"
                                label="Телефон"
                                v-model="item.PHONE"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12 md6 lg6>
                        <v-text-field
                                label="Імя"
                                v-model="item.FIRST_NAME"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12 md6 lg6>
                        <v-text-field
                                label="Фамілія"
                                v-model="item.LAST_NAME"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>

        <v-flex xs12>
            <v-btn dark color="indigo" v-on:click="f.v(-1)"><v-icon>close</v-icon></v-btn>
            <v-btn dark color="indigo" v-on:click="save(item)">SAVE</v-btn>
            <span><small style="color: red">{{error}}</small></span>
        </v-flex>

    </v-card>
</template>

<script>
    export default {
        name: "UserRedaction",
        data: function () {
            return {
                error: '',
                access_list: [1,2],
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
        props: {
            item:{

            },
            activeRedactId: {

            },
            f: {}
        },
        methods: {
            save: function (user) {
                let add_user = async (user) => {
                    await window.api.client.update(window.api.storage.getToken(), user)
                };

                if (user.EMAIL.length > 0 && /.[a-zA-Z0-9]{1,}@[a-z]{1,}[.][a-z]{2,}/.test(user.EMAIL) && parseInt(user.ID) >= 0 && (/.([0-9]{11})/.test(user.PHONE) || user.PHONE.length === 0)) {
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
    .user-redaction
        padding: 30px
</style>