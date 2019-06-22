<template>
    <div class="tools">
        <div class="I-do-not-remember-what-it-is-but-I-will-leave-this-here"></div>
        <v-toolbar v-if="CHECK_ADMIN" class="hidden-sm-and-up">
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

            <v-list-tile
            >
                <v-list-tile-action>
                    <v-icon>fas fa-key</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title><div style="width: 100%; overflow-x: scroll">vm6EGBm2yRvPSDerfjz8kUD2yc5z2qB4BZuN8L6cLXSyPf2EBNс</div></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

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
                        <v-list-tile-title>{{ item.title }}  <v-icon class="menu-arrow" v-on:click="openNewTab('/admin?tools=tickets')">fas fa-external-link-square-alt</v-icon></v-list-tile-title>
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
        <v-container fill-height v-if="!CHECK_ADMIN">
            <h1 v-on:click="rd('/login')">Login as admin</h1>
        </v-container>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import StatisticTab from '../components/admin/statistic/StatisticTab'
    import ToolTab from '../components/admin/tools/ToolTab'
    import preloader from '../components/preloader/Preloader'

    export default {
        name: "Tools",
        data: () => ({
            drawer: true,
            items: [
                { title: 'Статистика', icon: 'fas fa-file-invoice-dollar'},
                { title: 'Дії', icon: 'fas fa-tools' }
            ],
            right: null
        }),
        methods: {
            openNewTab: function (url) {
                window.open(url, '_blank');
            },
            rd (path) {
                this.$store.commit('SET_PATH', path)
            },
            setActiveTab: function (index) {
                this.$store.commit("C_ACTIVE_ADMIN_ELEMENT", index);
                history.replaceState({} , index === 0 ?
                    "?statistic" : "?tools", index === 0 ? "?statistic" : "?tools=tickets");
            },
            CHECK_AUTH: function () {
                let check = async (component, token) => {
                    {
                        await window.api.user.isAuth(token, '/');
                    }
                };

                setInterval(function () {
                    check(this,
                        window.api.storage.getCookie('token') !== undefined ?
                            window.api.storage.getCookie('token') : "0"
                    )
                }, 1000);

            },
            CHECK_ADMIN: function () {
                let check = async (component, token) => {
                    {
                        return await window.api.user.isAdmin(token, '/');
                    }
                };

                return check(this, window.api.storage.getCookie('token') !== undefined ? window.api.storage.getCookie('token') : "0")
            }
        },
        components: {
            StatisticTab,
            ToolTab,
            preloader
        },
        created() {
            this.CHECK_AUTH(this, window.api.storage.getCookie('token') !== undefined ? window.api.storage.getCookie('token') : "0");
            let url = window.location.href.split('/');
            let uri = url[url.length-1];
            let element_path = uri.split('?');
            if (element_path[1].split('=')[0] === 'statistic') {
                this.$store.commit("C_ACTIVE_ADMIN_ELEMENT", 0);
            } else if (element_path[1].split('=')[0] === 'tools') {
                this.$store.commit("C_ACTIVE_ADMIN_ELEMENT", 1);
                history.replaceState({} , "tools");
            }
        },
        mounted() {

        },
        computed: {
            ...mapGetters({
                activeTab: 'GET_AVTIVE_ADMIN_ELEMENT',
                activeTabName: 'GET_AVTIVE_ADMIN_ELEMENT_NAMES'
            }),
            isAdmin: function () {
                return this.CHECK_ADMIN();
            }
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

    .tool-block-s
        margin-left: 300px
        width: calc(100vw - 300px)
        background-color: whitesmoke
        @media all and (max-width: 600px)
            margin-left: 0
            width: 100vw

    .tool-block
        margin-left: 300px
        width: calc(100vw - 300px)
        background-color: whitesmoke
        max-width: 100vw !important
        @media all and (max-width: 600px)
            margin-left: 0
            width: 100vw



    .text-left
        text-align: left
        padding-left: 25px
        padding-top: 25px
</style>