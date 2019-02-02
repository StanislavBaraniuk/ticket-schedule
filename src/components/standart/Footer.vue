<template>
    <v-footer
            class="footer-block"
            dark
            height="auto"
    >
        <v-card
                class="flex"
                flat
                tile
        >
            <v-card-title class="green darken-2">
                <strong class="subheading">Зв'яжіться з нами в соціальних мережах!</strong>

                <v-spacer></v-spacer>

                <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-3"
                        dark
                        icon
                        @click="echoSocialError"
                >
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-actions class="grey darken-3 justify-center">
                &copy;2018 — <pre> <strong>Stanislav Baraniuk</strong></pre>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data: () => ({
            size: (window.innerWidth + innerHeight),
            icons: [
                'fab fa-facebook',
                'fab fa-twitter',
                'fab fa-google-plus',
                'fab fa-linkedin',
                'fab fa-instagram'
            ]
        }),
        methods: {
            echoSocialError () {
                alert("Not created");
            }
        },
    }
</script>

<style lang="sass" scoped>
    .footer-block
        z-index: 100
</style>