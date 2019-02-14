<template>
    <v-container v-if="activeTicketRedactId.v === item.ID">

        <v-card class="inside-card">

            <v-layout row wrap>

                <v-flex xs12 sm12 md5 lg5>
                    <v-text-field
                            label="Назва"
                            v-model="item.NAME"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md5 lg5>
                    <v-text-field
                            label="Ціна"
                            type="number"
                            v-model="item.PRICE"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md2 lg2>
                    <v-autocomplete
                            :items="[1,2]"
                            label="Транспорт"
                            type="number"
                            :readonly="false"
                            v-model="item.TYPE"
                    ></v-autocomplete>
                </v-flex>

                <v-flex xs12 sm12 md12 lg8>
                    <v-autocomplete
                            :items="items.map(function(v) { return v.NAME })"
                            v-model="items.filter(function(v) { return v.ID === item.FROM_PLACE })[0].NAME"
                            label="Місце відправлення"
                            :readonly="false"
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
                                v-model="item.FROM_TIME"
                                label="Час відправлення"
                                placeholder="День відправлення"
                                readonly
                        ></v-text-field>
                        <v-time-picker v-model="item.FROM_TIME" format="24hr"></v-time-picker>
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
                                v-model="item.FROM_DATE"
                                label="День відправлення"
                                placeholder=""
                                readonly
                        ></v-text-field>
                        <v-date-picker v-model="item.FROM_DATE"></v-date-picker>
                    </v-menu>
                </v-flex>

                <v-flex xs12 sm12 md12 lg8>
                    <v-autocomplete
                            :items="items.map(function(v) { return v.NAME })"
                            label="Місце прибуття"
                            :readonly="false"
                            v-model="items.filter(function(v) { return v.ID === item.TO_PLACE })[0].NAME"
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
                                v-model="item.TO_TIME"
                                label="Час прибуття"
                                placeholder=""
                                readonly
                        ></v-text-field>
                        <v-time-picker v-model="item.TO_TIME" format="24hr"></v-time-picker>
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
                                v-model="item.TO_DATE"
                                label="День прибуття"
                                placeholder=""
                                readonly
                        ></v-text-field>
                        <v-date-picker v-model="item.TO_DATE"></v-date-picker>
                    </v-menu>
                </v-flex>

                <v-combobox
                        v-model="t_stations"
                        :items="items.map(function(v) { return v.ID })"
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
                            <span></span>
                        </v-chip>
                    </template>
                </v-combobox>

            </v-layout>

            <v-flex xs12>
                <v-btn dark color="indigo" v-on:click="f.v(-1)"><v-icon>close</v-icon></v-btn>
            </v-flex>

        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "TicketRedaction",
        props: {
            item: {},
            items: {},
            t_stations: {},
            activeTicketRedactId: {},
            f: {}
        }
    }
</script>

<style lang="sass" scoped>
    .inside-card
        padding: 30px
</style>