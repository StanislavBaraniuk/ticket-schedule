<template>
    <v-container v-if="activeTicketRedactId.v === item.ID">

        <v-card style="padding: 30px">

            <v-layout row wrap>

                <v-flex xs12 sm12 md6 lg6>
                    <v-text-field
                            label="Назва"
                            v-model="item.NAME"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md6 lg6>
                    <v-text-field
                            label="Ціна"
                            v-model="item.PRICE"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md12 lg8>
                    <v-select
                            :items="items"
                            v-model="item.FROM"
                            label="Місце відправлення"
                    ></v-select>
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
                                placeholder="День відправки"
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
                    <v-select
                            :items="items"
                            label="Місце прибуття"
                            v-model="item.TO"
                    ></v-select>
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
                        v-model="item.STATIONS"
                        :items="items"
                        label="Вкажіть міста для створення маршруту"
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
                            <strong>{{ data_r.item }}</strong>&nbsp;
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
            item: {

            },
            items: {

            },
            activeTicketRedactId: {

            },
            f: {

            }
        }
    }
</script>

<style scoped>

</style>