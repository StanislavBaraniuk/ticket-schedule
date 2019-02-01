<template>
    <div class="tools">
        <div class="I-do-not-remember-what-it-is-but-I-will-leave-this-here"></div>
        <v-toolbar v-if="isAdmin" class="hidden-sm-and-up">
            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn flat v-on:click="rd('/')"><v-icon>home</v-icon></v-btn>
                <v-btn flat v-on:click="setActiveTab(0)"><v-icon>fas fa-file-invoice-dollar</v-icon></v-btn>
                <v-btn flat v-on:click="setActiveTab(1)"><v-icon>fas fa-tools</v-icon></v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>
        </v-toolbar>
        <div v-if="isAdmin">
        <h1  class="tool-block text-left" >{{ activeTabName }}</h1>
        <v-navigation-drawer class="hidden-xs-only" permanent absolute>
            <v-toolbar flat>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title class="title">
                            Admin panel
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-toolbar>

            <v-divider></v-divider>

            <v-list dense class="pt-0">
                <v-list-tile
                        v-for="(item, i) in items"
                        :key="item.title"
                        v-on:click="setActiveTab(i)"
                >
                    <v-list-tile-action>
                        <v-icon >{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile
                        v-on:click="rd('/')"
                >
                    <v-list-tile-action>
                        <v-icon>fas fa-arrow-left</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>Вихід</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <div v-if="isAdmin && activeTab === 0" style=" overflow-y: scroll; overflow-x: hidden">
            <statistic-tab></statistic-tab>
        </div>
        <div v-if="isAdmin && activeTab === 1" style=" overflow-y: scroll; overflow-x: hidden">
            <tool-tab></tool-tab>
        </div>
        </div>
        <v-container fill-height v-if="!isAdmin">
            <h1 v-on:click="rd('/login')">Login as admin</h1>
        </v-container>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import StatisticTab from '../components/admin/statistic/StatisticTab'
    import ToolTab from '../components/admin/tools/ToolTab'

    export default {
        name: "Tools",
        data: () => ({
            drawer: true,
            isAdmin: window.api.user.is_admin,
            items: [
                { title: 'Статистика', icon: 'fas fa-file-invoice-dollar'},
                { title: 'Дії', icon: 'fas fa-tools' }
            ],
            right: null
        }),
        methods: {
            rd (path) {
                this.$store.commit('SET_PATH', path)
            },
            setActiveTab: function (index) {
                this.$store.commit("C_ACTIVE_ADMIN_ELEMENT", index);
            }
        },
        components: {
            StatisticTab,
            ToolTab
        },
        computed: {
            ...mapGetters({
                activeTab: 'GET_AVTIVE_ADMIN_ELEMENT',
                activeTabName: 'GET_AVTIVE_ADMIN_ELEMENT_NAMES'
            }),
        }
    }
</script>

<style lang="sass" scoped>

    .tools
        background-color: whitesmoke
        height: 100vh

        .I-do-not-know-what-it-is-but-I-will-leave-this-here
            width: 500px
            margin-left: 300px
            background-color: #00b33f

    .tool-block
        margin-left: 300px
        width: calc(100vw - 300px)
        background-color: whitesmoke
        @media all and (max-width: 600px)
            margin-left: 0
            width: 100vw

    .text-left
        text-align: left
        padding-left: 25px
        padding-top: 25px
</style>