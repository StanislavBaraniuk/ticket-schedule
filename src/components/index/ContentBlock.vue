<template>
    <v-container class="content-block">
        <div v-if="!isActive" class="transp-block">

        </div>
        <v-container v-if="isActive" grid-list-md text-xs-center class="inside-container">
            <v-layout row wrap>
                <v-flex xs12 sm12 md12 lg8 offset-lg2  v-for=" (item , index) in tickets" :key="index">
                    <v-card class="inside-card">
                        <v-container grid-list-md text-xs-center class="inside-container-inside">
                            <v-layout row wrap>
                                <v-flex xs12 sm6 md6 lg6>
                                    <v-card-title>
                                        <v-flex xs12 sm1 md1 lg1>
                                            <i class="material-icons type-icon">{{ item.TYPE === 0 ? "directions_railway" : "directions_bus"}}</i>
                                        </v-flex>
                                        <v-flex xs12 sm11 md11 lg11>
                                            <h3 class="name">{{ item.NAME }}</h3>
                                        </v-flex>
                                    </v-card-title>
                                </v-flex>
                                <v-flex xs12 sm6 md6 lg6>
                                    <v-card-actions class="order-btn-block">
                                        <v-spacer></v-spacer>
                                        <v-btn disabled color="orange" class="price">{{ item.PRICE }} ₴</v-btn>
                                        <v-btn color="green" dark>Забронювати
                                            <v-icon dark right>add_shopping_cart</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-flex>
                                <v-flex xs12>
                                    <v-autocomplete
                                            class="place"
                                            label="Місце"
                                            :items="item.PLACES"
                                            placeholder="Оберіть місце"
                                            append-icon="fas fa-ticket-alt"
                                            v-model="to"
                                    ></v-autocomplete>
                                </v-flex>
                                <!--s{{ stations }}-->
                                <v-flex xs12 sm6 md6 lg6>
                                    <v-stepper vertical class="positions">
                                        <v-stepper-step complete="" complete-icon="">
                                            {{ stations[item.FROM_PLACE-1] }}
                                            <small>Відправлення о {{ item.FROM_TIME | timeNormalizer }}</small>
                                        </v-stepper-step>

                                        <v-stepper-content >

                                        </v-stepper-content>

                                        <v-stepper-step complete="" complete-icon="">
                                            {{ item.WAY_TIME | timeNormalizer }}
                                            <small>час у дорозі</small>
                                        </v-stepper-step>

                                        <v-stepper-content>

                                        </v-stepper-content>

                                        <v-stepper-step complete="" complete-icon="">
                                            {{   stations[item.TO_PLACE-1] }}
                                            <small>Прибуття о {{ item.TO_TIME | timeNormalizer }}</small>
                                        </v-stepper-step>
                                    </v-stepper>
                                </v-flex>
                                <v-flex xs12 sm6 md6 lg6>
                                    Маршрут
                                    <v-stepper vertical class="stations">
                                        <v-stepper-step complete="" complete-icon="" v-for="(state, s_index) in item.STATIONS" :key="s_index">
                                            {{ stations[state-1] }}
                                            <small>Зупинка</small>
                                        </v-stepper-step>

                                        <v-stepper-content >

                                        </v-stepper-content>
                                    </v-stepper>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <block-preloader v-if="isActive" location="contentBlock" color="#fafafa"></block-preloader>
        <v-container class="not-found-block" v-if="tickets.length < 1 && isActive" grid-list-md text-xs-center style="padding: 0px">
            <v-layout row wrap>
                <v-flex xs12 sm12 md12 lg8 offset-lg2>
                    <div class="text-xs-center mt6vh">
                        <v-chip text-color="white" class="not-found">
                            <h1>Квитків не знайдено</h1>
                        </v-chip>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex';
    import BlockPreloader from '../preloader/BlockPreloader'

    export default {
        name: "ContentBlock",
        data: () => ({

        }),
        components: {
            BlockPreloader
        },
        computed: {
            ...mapGetters({
                tickets: "GET_ALL_TICKETS",
                filter: "GET_FILTER",
                isActive: "GET_IS_ACTIVE",
                stations: 'GET_STATIONS'
            })
        }
    }
</script>

<style lang="sass" scoped>
    .content-block
        margin-top: -50px

        .transp-block
            position: absolute
            width: 100%
            margin-right: auto
            margin-left: auto

        .inside-container
            padding: 0

            .inside-card
                margin-top: 20px

                .inside-container-inside
                    padding: 10px 0 0

                    .type-icon
                        margin-left: 8px
                        margin-top: 10px

                .name
                    margin-left: 10px

                .order-btn-block
                    padding-right: 20px

                    .price
                        font-size: 20px
                        color: black !important

                .positions
                    height: 260px
                    box-shadow: none

                .stations
                    height: 260px
                    overflow-y: scroll
                    box-shadow: none

    .mt6vh
        margin-top: 12vh

    .not-found
        font-size: 8px !important
        background-color: #9f9f9f
        color: white
        padding: 10px

    .not-found-block
        z-index: 1 !important
        height: 30vh

    .place
        width: 95%
        margin-left: 2.5%

</style>