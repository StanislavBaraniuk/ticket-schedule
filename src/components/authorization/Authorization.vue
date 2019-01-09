<template>
    <div class="auth-page">
        <v-container grid-list-md text-md-center fill-height style=" z-index: 999;" >
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
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 style="margin-top: -20px">
                                <v-text-field
                                        label="Пароль"
                                        outline
                                ></v-text-field>
                            </v-flex>
                            <div style="height: 30px"></div>
                            <v-btn depressed dark style="margin-top: -70px; background-color: #38863d">Ввійти</v-btn>
                            <div  style="height: 30px"></div>
                        </v-card-text>

                        <v-card-text class="text-xs-center" v-if="activeBtn === 1">
                            <h1>Реєстрація</h1>

                            <v-flex xs12>
                                <v-text-field
                                        label="Емайл"
                                        outline
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 style="margin-top: -20px">
                                <v-text-field
                                        label="Пароль"
                                        outline
                                ></v-text-field>
                            </v-flex>
                            <div style="height: 30px"></div>
                            <v-btn depressed dark style="margin-top: -70px; background-color: #38863d">Зареєструватись</v-btn>
                            <div  style="height: 30px"></div>
                        </v-card-text>

                        <v-card-text class="text-xs-center" v-if="activeBtn === 2">
                            <h1>Введіть емайл</h1>

                            <v-flex xs12>
                                <v-text-field
                                        label="Емайл"
                                        outline
                                ></v-text-field>
                            </v-flex>
                            <div style="height: 30px"></div>
                            <v-btn depressed dark style="margin-top: -70px; background-color: #38863d">Відновити доступ</v-btn>
                            <div  style="height: 30px"></div>
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
                activeBtn: 2,
                showNav: true
        })
    }
</script>

<style lang="sass" scoped>
    .auth-page
        width: 100vw
        height: 100vh
        background-color: #38863d

    .button
        background-color: #38863d
</style>