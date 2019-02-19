<template>
    <v-toolbar class="transparent" dark flat absolute :class="{p100 : drawer}">
        <v-toolbar-items class="hidden-xs-only" v-if="!$props.home" v-on:click="rd('/')">
            <v-btn flat><h1>TIC.S</h1></v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items v-if="!$props.way">
            <v-btn v-on:click="setActive(1)" :class="{ activeMenu :  getActiveStyle(1) }" flat><v-icon>fas fa-train</v-icon><span class="icon-text hidden-xs-only">Потяг</span></v-btn>
            <v-btn v-on:click="setActive(2)" :class="{ activeMenu :  getActiveStyle(2) }" flat><v-icon>fas fa-bus</v-icon><span class="icon-text hidden-xs-only">Автобус</span></v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-layout
                    style="margin-top: -15px"
                    wrap
            >
                <v-container>
                    <v-layout justify-center>
                        <v-toolbar-side-icon
                                color="white"
                                light
                                @click.stop="drawer = !drawer"
                        >
                            <v-icon v-if="current_user.ONLINE === 1">fas fa-globe-americas</v-icon>
                        </v-toolbar-side-icon>
                    </v-layout>
                </v-container>

                <v-navigation-drawer
                        v-model="drawer"
                        absolute
                        light
                        temporary
                >
                    <v-list class="pa-1">


                        <v-list-tile avatar tag="div">
                            <v-list-tile-avatar>
                                <img src="http://cdn.onlinewebfonts.com/svg/img_215059.png">
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>{{ current_user.FIRST_NAME !== undefined &&  current_user.FIRST_NAME !== null ? current_user.FIRST_NAME + " " + current_user.LAST_NAME : "Account" }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>

                    <block-preloader location="menu" color="white"></block-preloader>

                    <v-list class="pt-0" dense>
                        <v-divider light></v-divider>

                        <v-list-tile
                                v-for="item in def_list"
                                :key="item.TITLE"
                                v-on:click="rd(item.PATH)"
                        >
                            <a :href="item.PATH" style="width: 100%; height: 100%; position: absolute; z-index: 999"></a>
                            <v-list-tile-action>
                                <v-icon>{{ item.ICON }}</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.TITLE }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-navigation-drawer>
            </v-layout>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    import BlockPreloader from '../preloader/BlockPreloader'
    import { mapGetters } from 'vuex';

    export default {
        name: 'myHeader',
        props: {
            home: {
                type: Boolean,
                default: false
            },
            way: {
                type: Boolean,
                default: false
            },
            bColor: {
                type: String,
                default: "transparent"
            }
        },
        components: {
            BlockPreloader
        },
        data() {
            return {
                // current_user: '',
                def_list: [],
                drawer: null,
                direction: 'bottom',
                fab: false,
                fling: false,
                hover: true,
                tabs: null,
                top: true,
                right: true,
                bottom: false,
                left: false,
                transition: 'slide-y-reverse-transition'
            };
        },
        created() {
            this.$store.dispatch("BLOCK_LOADER_ACTIVATE", "menu");
            this.LOAD_USER_INFO(this, window.api.storage.getToken());
            this.LOAD_USER_MENU_LIST(this, window.api.storage.getToken());
        },
        methods: {
            LOAD_USER_MENU_LIST: async (component, token) => {
                {
                    let data = await window.api.user.getMenu(token);

                    if (data.status === 200) {
                        component.def_list = data.data;
                        component.$store.dispatch("BLOCK_LOADER_DEACTIVATE", "menu");
                    }
                }
            },
            LOAD_USER_INFO: async (component, token) => {
                {
                    let data = await window.api.user.getInfo(token);

                    if (data.status === 200) {
                        component.$store.dispatch('SET_USER_INFO', data.data);
                    }
                }
            },
            rd (path) {
                this.$store.commit('SET_PATH', path)
            },
            getActiveStyle: function (index) {
                return index === this.def_type;
            },
            setActive: function (value) {
                this.$store.commit('SET_TYPE', value)
            }
        },
        computed: {
            ...mapGetters({
                def_type: 'GET_TYPE',
                current_user: "GET_CURRENT_USER"
            }),
        }
    }
</script>

<style lang="sass" scoped>
    .activeMenu
        border-bottom: 3px solid white
        transition: 0s
        border-radius: 0

    .v-btn
        /*transition: 1s*/

    .icon-text
        margin-left: 10px

    .inside-block
        width: 100%
        height: 100%

</style>