<template>
    <v-expansion-panel class="users-list">
        <v-expansion-panel-content
                v-for="(item,index) in stations.filter(function(obj) {
                  return String(obj[search_s]).indexOf(String(search_t)) !== -1 || search_t.length < 1
                })"
                :key="index"
        >
            <div slot="header">#{{ item.ID }} : {{ item.EMAIL }}</div>
            <v-card>
                <v-card-text class="info-block" >
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md4 lg1>Id: {{ item.ID }}</v-flex>
                        <v-flex xs12 sm12 md4 lg2>Імя: {{ item.FIRST_NAME }}</v-flex>
                        <v-flex xs12 sm12 md4 lg2>Фамілія: {{ item.LAST_NAME }}</v-flex>
                        <v-flex xs12 sm12 md4 lg2>Email: {{ item.EMAIL }}</v-flex>
                        <v-flex xs12 sm12 md4 lg2>Стать: {{ item.SEX === 1 ? "чоловік" : item.SEX === 2 ? "жінка" : "Не визначено"}}</v-flex>
                        <v-flex xs12 sm12 md4 lg2>Активність: {{ item.ONLINE ? "online" : "offline" }}</v-flex>
                        <v-spacer></v-spacer>
                        <v-flex xs12 sm12 md12 lg1><v-icon v-on:click="openRedact(item.ID)">fas fa-pencil-ruler</v-icon><v-icon class="delete-icon" v-on:click="remove(item.ID)">fas fa-trash</v-icon></v-flex>
                        <v-spacer></v-spacer>
                    </v-layout>
                </v-card-text>
            </v-card>
            <user-redaction :f="{v: openRedact}" :activeRedactId="{v: activeRedactId}" :item="item"></user-redaction>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    import UserRedaction from './UserRedaction'
    import { mapGetters } from 'vuex';

    export default {
        name: "UsersList",
        components: {
            UserRedaction
        },
        data: function () {
            return {
                activeRedactId: -1
            }
        },
        methods: {
            openRedact: function (id) {
                this.activeRedactId = id;
            },
            remove:  async (item) => {
                let resp = await window.api.client.delete(window.api.storage.getCookie('token') !== undefined ? window.api.storage.getCookie('token') : "0", item);

                if (resp.status === 200) {
                    window.location.reload();
                }
            }
        },
        props: {
            stations:{

            }
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
    .users-list
        margin-top: 20px

        .info-block
            margin-left: 20px

            .delete-icon
                padding-left: 20px
</style>