<template>
        <v-card class="ticket-add" v-if="addActive.v">

            <v-layout row wrap>

                <v-flex xs12 sm12 md2 lg1>
                    <v-text-field
                            label="ІД"
                            v-model="ID"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md5 lg6>
                    <v-text-field
                            label="Назва"
                            v-model="NAME"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md3 lg3>
                    <v-text-field
                            label="Ціна"
                            type="number"
                            v-model="PRICE"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md2 lg2>
                    <v-autocomplete
                            :items="[1,2]"
                            label="Транспорт"
                            :readonly="false"
                            v-model="TYPE"
                    ></v-autocomplete>
                </v-flex>

                <v-flex xs12 sm12 md12 lg8>
                    <v-autocomplete
                            :items="items.map(function(v) { return v.ID })"
                            :label="'Місце відпревлення - ' + items.filter(function(v) { return v.ID === FROM_PLACE })[0].NAME"
                            :readonly="false"
                            v-model="FROM_PLACE"
                    ></v-autocomplete>
                </v-flex>

                <v-flex xs12 sm12 md6 lg2>
                    <v-menu :close-on-content-click="false" :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                    >
                        <v-text-field
                                slot="activator"
                                label="Час відправлення"
                                placeholder="День відправки"
                                readonly
                                v-model="d_time"
                        ></v-text-field>
                        <v-time-picker v-model="d_time" format="24hr"></v-time-picker>
                    </v-menu>
                </v-flex>

                <v-flex xs12 sm12 md6 lg2>
                    <v-menu :close-on-content-click="false" :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                    >
                        <v-text-field
                                slot="activator"
                                v-model="d_date"
                                label="День відправлення"
                                placeholder=""
                                readonly
                        ></v-text-field>
                        <v-date-picker v-model="d_date"></v-date-picker>
                    </v-menu>
                </v-flex>

                <v-flex xs12 sm12 md12 lg8>
                    <v-autocomplete
                            :items="items.map(function(v) { return v.ID })"
                            :label="'Місце прибуття - ' + items.filter(function(v) { return v.ID === TO_PLACE })[0].NAME"
                            :readonly="false"
                            v-model="TO_PLACE"
                    ></v-autocomplete>
                </v-flex>

                <v-flex xs12 sm12 md6 lg2>
                    <v-menu :close-on-content-click="false" :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                    >
                        <v-text-field
                                slot="activator"
                                label="Час прибуття"
                                placeholder=""
                                readonly
                                v-model="a_time"
                        ></v-text-field>
                        <v-time-picker v-model="a_time" format="24hr"></v-time-picker>
                    </v-menu>
                </v-flex>

                <v-flex xs12 sm12 md6 lg2>
                    <v-menu :close-on-content-click="false" :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                    >
                        <v-text-field
                                slot="activator"
                                v-model="a_date"
                                label="День прибуття"
                                placeholder=""
                                readonly
                        ></v-text-field>
                        <v-date-picker v-model="a_date"></v-date-picker>
                    </v-menu>
                </v-flex>

                <v-combobox
                        v-model="STATIONS"
                        :items="items.map(function(v) { return String(v.ID) })"
                        label="Вкажіть міста для створення маршруту"
                        :readonly="false"
                        chips
                        clearable
                        solo
                        multiple
                >
                    <template slot="selection" slot-scope="data_r">
                        <v-chip
                                :selected="data_r.selected"
                                close
                                @input="remove(data_r.item)"
                        >
                            <strong>{{ items.filter(function(v) { return v.ID === parseInt(data_r.item) })[0].NAME }}</strong>&nbsp;
                            <span> : {{data_r.item}}</span>
                        </v-chip>
                    </template>
                </v-combobox>

                <v-flex xs12 sm12 md12 lg12>
                    <v-text-field
                            label="Посадкові місця"
                            v-model="PLACES"
                    ></v-text-field>
                </v-flex>

            </v-layout>
            <small style="color: red">{{ error }}</small>
            <v-flex xs12>
                <v-btn dark color="indigo" @click="add">Додати</v-btn>
            </v-flex>

        </v-card>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "TicketAdd",
        data: function () {
            return {
                ID: 0,
                NAME: '',
                PRICE: 0,
                FROM_PLACE: 1,
                TO_PLACE: 1,
                TYPE: 1,
                STATIONS: [],
                PLACES: '',
                error: "",
                priceRules: [
                    v => !!v || 'Введіть ціну',
                    v => /.[\d]/.test(v) || 'Ціна помилкова'
                ]
            }
        },
        props: {
            addActive: {

            },
            chips: {
                default: []
            },
            items: {
                default: null
            }
        },
        methods: {
            add: function () {
                let ticket = {
                    ID: this.ID,
                    NAME: this.NAME,
                    PRICE: this.PRICE,
                    FROM_DATE: this.d_date,
                    TO_DATE: this.a_date,
                    FROM_PLACE: this.FROM_PLACE,
                    TO_PLACE: this.TO_PLACE,
                    TYPE: this.TYPE,
                    FROM_TIME: this.d_time,
                    TO_TIME: this.a_time,
                    WAY_TIME: String((new Date(this.a_date + " " + this.a_time) - new Date(this.d_date + " " + this.d_time))/1000).toHHMMSS(),
                    STATIONS: this.STATIONS.join(),
                    PLACES: this.PLACES
                };

                let add = async (ticket) => {
                    await window.api.ticket.add(window.api.storage.getToken(), ticket)
                };

                if (this.NAME.length > 0 && parseInt(this.ID) >= 0 && this.PRICE >= 0 && this.FROM_PLACE !== this.TO_PLACE) {
                    add(ticket).then(function () {
                        window.location.reload();
                    });
                } else {
                    this.error = "Впевніться що: назва введена, ІД >= 0, ціна > 0, місце відправлення != місцю прибуття"
                }
            }
        },
        computed: {
            d_time: {
                get () {
                    return this.def_d_time;
                },
                set (value) {
                    this.$store.commit('SET_D_TIME', value)
                }
            },
            a_time: {
                get () {
                    return this.def_a_time;
                },
                set (value) {
                    this.$store.commit('SET_A_TIME', value)
                }
            },
            a_date: {
                get () {
                    return this.def_a_date;
                },
                set (value) {
                    this.$store.commit('SET_A_DATE', value)
                }
            },
            d_date: {
                get () {
                    return this.def_d_date;
                },
                set (value) {
                    this.$store.commit('SET_D_DATE', value)
                }
            },
            ...mapGetters({
                def_tickets: 'GET_ALL_TICKETS',
                def_d_time: 'GET_D_TIME',
                def_a_time: 'GET_A_TIME',
                def_a_date: 'GET_A_DATE',
                def_d_date: 'GET_D_DATE',
            })
        }

    }
</script>

<style lang="sass" scoped>
    .ticket-add
        padding: 30px
</style>