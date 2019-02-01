<template>
    <v-toolbar class="transparent" dark flat absolute :class="{p100 : drawer}">
        <v-toolbar-items class="hidden-xs-only" v-if="!$props.home" v-on:click="rd('/')">
            <v-btn flat><h1>TIC.S</h1></v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="!$props.way">
            <v-btn v-on:click="setActive(1)" :class="{ activeMenu :  getActiveStyle(1) }" flat><v-icon>fas fa-bus</v-icon><span class="icon-text hidden-xs-only">Потяг</span></v-btn>
            <v-btn v-on:click="setActive(2)" :class="{ activeMenu :  getActiveStyle(2) }" flat><v-icon>fas fa-train</v-icon><span class="icon-text hidden-xs-only">Автобус</span></v-btn>
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
                            <img src="https://randomuser.me/api/portraits/men/85.jpg">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>John Leider</v-list-tile-title>
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
            this.LOAD_USER_MENU_LIST(this, window.api.storage.getCookie('token') !== undefined ? window.api.storage.getCookie('token') : "0");
        },
        methods: {
            LOAD_USER_MENU_LIST: async (component, token) => {
                {
                    let data = await window.api.user.get_menu(token);

                    if (data.status === 200) {
                        component.def_list = data.data;
                        component.$store.dispatch("BLOCK_LOADER_DEACTIVATE", "menu");
                    }
                }
            },
            rd (path) {
                this.$store.commit('SET_PATH', path)
            },
            getActiveStyle: function (index) {
                if (index === this.def_type) {
                    return true
                } else {
                    return false
                }
            },
            setActive: function (value) {
                this.$store.commit('SET_TYPE', value)
            }
        },
        computed: {
            ...mapGetters({
                def_type: 'GET_TYPE',
            //     def_list: 'GET_USER_MENU_LIST'
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