<template>
    <v-toolbar class="transparent" dark flat absolute :class="{p100 : drawer}">
        <v-toolbar-items class="hidden-xs-only">
            <v-btn flat><i class="material-icons">home</i></v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn v-on:click="setActive(1)" :style="isActive(1)" flat><i class="material-icons">directions_railway</i><span class="icon-text">Потяг</span></v-btn>
            <v-btn v-on:click="setActive(2)" :style="isActive(2)" flat><i class="material-icons">directions_bus</i><span class="icon-text">Автобус</span></v-btn>
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

                <v-list class="pt-0" dense>
                    <v-divider light></v-divider>

                    <v-list-tile
                            v-for="item in items"
                            :key="item.title"
                            @click=""
                    >
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
        </v-layout>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>

    export default {
        name: 'myHeader',
        data() {
            return {
                drawer: null,
                items: [
                    { title: 'Ввійти', icon: 'fas fa-sign-in-alt' },
                    { title: 'Зареєструватись', icon: 'question_answer' },
                    { title: 'Налаштування', icon: 'settings_applications' },
                    { title: 'Адмін панель', icon: 'fas fa-tools' },
                    { title: 'Вихід', icon: 'fas fa-sign-out-alt' },
                    { title: 'Корзина', icon: 'fas fa-shopping-cart' }

                ],

                activeIndex: 1,
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
        methods: {
            setActive: function (index) {
                this.activeIndex = index;
            },
            isActive: function (index) {
                let style = 'none';
                if (this.activeIndex === index) {
                    style = '3px solid white';
                }
                return "border-bottom: "+style+";"
            }
        },
        computed: {

        }
    }
</script>

<style scoped>

    v-btn {
        transition: 1s;
    }

    .icon-text {
        margin-left: 10px;
    }

    .inside-block {
        width: 100%;
        height: 100%;
    }

</style>