<template>
    <v-toolbar class="transparent" dark flat>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-on:click="setActive(1)" :style="isActive(1)" flat><i class="material-icons">directions_railway</i><span class="icon-text">Потяг</span></v-btn>
            <v-btn v-on:click="setActive(2)" :style="isActive(2)" flat><i class="material-icons">directions_bus</i><span class="icon-text">Автобус</span></v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>

    export default {
        name: 'myHeader',
        data() {
            return {
                activeIndex: 1,
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