<template>
    <div class="way-block" :style="setMarginTop">
    <v-container grid-list-md text-md-center style=" z-index: 999;" >
        <v-layout row align-center fill-height class="test">
            <v-flex xs12 sm12 md12 lg8  offset-lg2>
                <v-card color="rgba(0, 128, 0, 0.86)" style="color: white">
                    <v-container grid-list-md text-md-center>
                        <v-layout row wrap>
                            <v-flex xs12 sm12 lg4 md4 class="way-input">
                                <v-text-field
                                        label="З відки?"
                                        placeholder="Місце відправки"
                                ></v-text-field>
                            </v-flex>

                            <v-flex xs12 sm0 lg1 md1>
                                <i class="material-icons" style="margin-top: 30px">
                                    swap_calls
                                </i>
                            </v-flex>
                            <v-flex xs12 sm12 lg4 md4 class="way-input" >
                                <v-text-field
                                        label="З відки?"
                                        placeholder="Місце відправки"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm12 lg1 md1>
                                <i class="material-icons" style="margin-top: 30px">event</i>
                            </v-flex>
                            <!--<div style="width: 20px"></div>-->
                            <v-flex xs12 sm12 lg2 md2 class="way-input">
                                <v-menu :close-on-content-click="false" v-model="menu2" :nudge-right="40"
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
                                    <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                                </v-menu>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
                <v-flex xs12>
                    <v-btn color="warning" dark><span style="font-size: 12px">Знайти квиток</span><v-icon>arrow_forward</v-icon></v-btn>
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
            menu: false,
            modal: false,
            menu2: false,
        }),
        methods: {
            setRight () {
                // alert(document.querySelector('#tt').getBoundingClientRect().right)
            }
        },
        computed: {
            setMarginTop () {
                let marg = '';
                if (window.innerWidth > 960) {
                    marg = window.innerHeight/2-160
                } else {
                    marg = window.innerHeight/6
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