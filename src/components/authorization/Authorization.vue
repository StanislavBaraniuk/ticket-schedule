<template>
    <div class="auth-page">
        <v-container grid-list-md text-md-center fill-height class="authorization" >
            <v-layout row align-center fill-height class="test">
                <v-flex xs12 sm6 md6 lg4 offset-lg4 offset-md3 offset-sm3>
                    <v-card
                            class="hide-overflow"

                    >

                        <v-card-text class="text-xs-center" v-if="activeBtn === 0">
                            <h1>Вхід</h1>

                            <v-flex xs12>
                                <v-text-field
                                        label="Емайл"
                                        outline
                                        :rules="emailRules"
                                ></v-text-field>
                            </v-flex>

                            <v-flex xs12>
                                <v-text-field
                                        label="Пароль"
                                        outline
                                        type="password"
                                        :rules="passwordRules"
                                ></v-text-field>
                            </v-flex>

                            <div class="h-space"></div>

                            <v-btn depressed dark class="go-button">Ввійти</v-btn>

                            <div  class="h-space"></div>
                        </v-card-text>

                        <v-card-text class="text-xs-center" v-if="activeBtn === 1">
                            <h1>Реєстрація</h1>

                            <v-flex xs12>
                                <v-text-field
                                        label="Емайл"
                                        outline
                                        :rules="emailRules"
                                ></v-text-field>
                            </v-flex>

                            <v-flex xs12>
                                <v-text-field
                                        label="Пароль"
                                        outline
                                        :rules="passwordRules"
                                ></v-text-field>
                            </v-flex>

                            <div class="h-space"></div>

                            <v-btn depressed dark class="go-button">Зареєструватись</v-btn>

                            <div  class="h-space"></div>
                        </v-card-text>

                        <v-card-text class="text-xs-center" v-if="activeBtn === 2">
                            <h1>Введіть емайл</h1>

                            <v-flex xs12>
                                <v-text-field
                                        label="Емайл"
                                        outline
                                        :rules="emailRules"
                                ></v-text-field>
                            </v-flex>

                            <div class="h-space"></div>

                            <v-btn depressed dark class="go-button">Відновити доступ</v-btn>

                            <div class="h-space"></div>
                        </v-card-text>

                        <v-bottom-nav
                                :active.sync="activeBtn"
                                :value="showNav"
                                absolute
                                color="transparent"
                        >
                            <v-btn flat color="teal">
                                <span>Вхід</span>
                                <v-icon>fas fa-sign-in-alt</v-icon>
                            </v-btn>

                            <v-btn flat color="teal">
                                <span>Реєстрація</span>
                                <v-icon>fas fa-plus</v-icon>
                            </v-btn>

                            <v-btn flat color="teal">
                                <span>Забули пароль?</span>
                                <v-icon>fas fa-lock-open</v-icon>
                            </v-btn>
                        </v-bottom-nav>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Authorization",
        data: () => ({
            activeBtn: 0,
            showNav: true,
            emailRules: [
                v => !!v || 'E-mail є обовязковим',
                v => /.[a-zA-Z/.]{}@[a-z]{1,}[.][a-z]{2,}/.test(v) || 'E-mail повинен бути вірним'
            ],
            passwordRules: [
                v => !!v || 'Пароль є обовязковим',
                v => /.(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(v) || 'Пароль повинен містити 8 символів та складатись з символів a-z, A-Z, 0-9'
            ]
        }),
        methods: {
            checkPassword(pass) {
                let is_numb = false, is_az = false, is_AZ = false;

                if (pass.length >= 8) {
                    for (let i = 0; i < pass.length; i++) {
                        is_numb = pass[i].match(/\d/) ? true : is_numb;
                        is_az = pass[i].match(/\d/) ? true : is_az;
                        is_AZ = pass[i].match(/\d/) ? true : is_AZ;
                    }
                } else {
                    return pass
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    .auth-page
        width: 100vw
        height: 100vh
        background-color: #38863d

        .button
            background-color: #38863d

        .authorization
            z-index: 999

        .h-space
            height: 30px

        .go-button
            margin-top: -50px
            background-color: #38863d
</style>