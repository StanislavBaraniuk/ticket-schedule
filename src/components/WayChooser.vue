<!--:style="setMarginTop"-->
<template>
    <div id="way-block" class="way-block" :style="setMarginTop">
    <v-container grid-list-md text-md-center style=" z-index: 999;" >
        <v-layout row align-center fill-height class="test">
            <v-flex xs12 sm12 md12 lg8  offset-lg2>
                <v-card color="green darken-2" style="color: white">
                    <v-container grid-list-md text-md-center>
                        <v-layout row wrap>
                            <v-flex xs12 sm12 lg4 md4 class="way-input">
                                <v-text-field
                                        label="З відки?"
                                        placeholder="Місто відправки"
                                        append-icon="place"
                                ></v-text-field>
                            </v-flex>

                            <v-flex xs12 sm0 lg1 md1>
                                <i class="material-icons" style="margin-top: 30px">
                                    swap_calls
                                </i>
                            </v-flex>
                            <v-flex xs12 sm12 lg4 md4 class="way-input" >
                                <v-text-field
                                        label="Куди?"
                                        placeholder="Місто прибуття"
                                        append-icon="place"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm12 lg1 md1>
                                <i class="material-icons" style="margin-top: 30px">event</i>
                            </v-flex>
                            <!--<div style="width: 20px"></div>-->
                            <v-flex xs12 sm12 lg2 md2 class="way-input">
                                <v-menu :close-on-content-click="false" :nudge-right="40"
                                        lazy
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        min-width="290px"
                                >
                                    <v-text-field
                                            slot="activator"
                                            v-model="date"
                                            label="Коли?"
                                            placeholder="День відправки"
                                            readonly
                                    ></v-text-field>
                                    <v-date-picker v-model="date"></v-date-picker>
                                </v-menu>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
                <v-flex xs12>
                    <v-btn color="warning" dark
                           @click="loadTickets"
                           :disabled="dialog"
                           :loading="dialog"
                    >
                        <span style="font-size: 12px">Знайти квиток</span>
                        <v-icon>arrow_forward</v-icon>
                    </v-btn>
                    <v-dialog
                            v-model="dialog"
                            hide-overlay
                            persistent
                            width="300"
                    >
                        <v-card
                                color="primary"
                                dark
                        >
                            <v-card-text>
                                Відбувається загрузка білетів
                                <v-progress-linear
                                        indeterminate
                                        color="white"
                                        class="mb-0"
                                ></v-progress-linear>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                </v-flex>
            </v-flex>
        </v-layout>
    </v-container>
    </div>
</template>

<script>

    export default {
        name: "WayChooser",
        data: () => ({
            date: '',
            dialog: false
        }),
        watch: {
            dialog (val) {
                if (!val) return

                setTimeout(() => (this.dialog = false), 4000)
            }
        },
        methods: {
            loadTickets: function () {
                this.store.commit('setActivePage');
                // this.$store.state.display.isActive = true;
            }
        },
        mutations: {
            dialogC: function () {
                this.dialog = true;
            }
        },
        computed: {
            setMarginTop () {

                let marg = '';
                if (window.innerWidth > 960) {
                    marg = window.innerHeight/2-100
                } else {
                    marg = window.innerHeight/10
                }

                return {
                    marginTop: `${marg}px`,
                }
            }
        }
    }

</script>

<style scoped>
/*body{*/
    /*color: rgba(0, 128, 0, 0.86);*/
/*}*/

    .way-input {
        color: white !important;
        background-color: white;
        padding: 20px !important;
        padding-bottom: 0 !important;
    }

</style>