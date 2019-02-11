<template>
    <v-expansion-panel class="city-list">
        <v-expansion-panel-content
                v-for="(item, index) in stations.filter(function(obj) {
                  return String(obj[search_s]).indexOf(String(search_t)) !== -1 || search_t.length < 1
                })"
                :key="index"
        >
            <div  slot="header">#{{ item.ID }} : {{ item.NAME }}</div>
            <v-card  >
                <v-card-text class="card-info">
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md2 lg1>Id: {{ item.ID }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Name: {{ item.NAME }}</v-flex>
                        <v-spacer></v-spacer>
                        <v-flex xs12 sm12 md2 lg1><v-icon class="delete-icon">fas fa-trash</v-icon></v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>

    import { mapGetters } from 'vuex';

    export default {
        name: "CityList",
        props: {
            stations:{

            }
        },
        created() {
            this.GET_STATIONS(this, window.api.storage.getCookie('token') !== undefined ? window.api.storage.getCookie('token') : "0");
        },
        methods: {
            GET_STATIONS: async (component, token) => {
                {
                    let data = await window.api.stations.get_with_keys(token);


                    if (data.status === 200) {
                        component.stations  = Object.values(data.data);

                    }
                }
            },
        },
        computed:{
            ...mapGetters({
                search_t: "GET_ADMIN_SEARCH_TEXT",
                search_s: "GET_ADMIN_SEARCH_SELECT"
            })
        }
    }
</script>

<style lang="sass" scoped>
    .city-list
        margin-top: 20px

        .card-info
            margin-left: 20px

        .delete-icon
            padding-left: 20px
</style>