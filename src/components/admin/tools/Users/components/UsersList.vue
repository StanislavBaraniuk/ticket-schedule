<template>
    <v-expansion-panel class="users-list">
        <v-expansion-panel-content
                v-for="(item,index) in stations.filter(function(obj) {
                  return obj[search_s] == search_t || search_t.length < 1
                })"
                :key="index"
        >
            <div slot="header">#{{ item.ID }} : {{ item.EMAIL }}</div>
            <v-card>
                <v-card-text class="info-block" >
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md2 lg1>Id: {{ item.ID }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Імя: {{ item.F_NAME }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Фамілія: {{ item.L_NAME }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Email: {{ item.EMAIL }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Стать: {{ item.SEX === 1 ? "чоловік" : item.SEX === 2 ? "жінка" : "Не визначено"}}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Активність: {{ item.ONLINE ? "online" : "offline" }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Активне замовлення: {{ item.ORDER_ACTIVE ? item.ORDER_ID : "відсутнє" }}</v-flex>
                        <v-flex xs12 sm6 md2 lg1>Аватар: {{ item.AVATAR }}</v-flex>
                        <v-spacer></v-spacer>
                        <v-flex xs12 sm12 md2 lg1><v-icon v-on:click="openRedact(item.ID)">fas fa-pencil-ruler</v-icon><v-icon class="delete-icon" >fas fa-trash</v-icon></v-flex>
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
            remove (item) {
                this.chips.splice(this.chips.indexOf(item), 1)
                this.chips = [...this.chips]
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