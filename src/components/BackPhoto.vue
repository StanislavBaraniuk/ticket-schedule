<template>
    <div id="back-photo">
        <div class="back-photo" :class="{p50 : this.$store.state.display.isActive, 'p100' : !this.$store.state.display.isActive}" :key="'resizable'">
            <div class="back-photo-black"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BackPhoto",
        data: () => ({
            // height: "height: " + window.innerHeight + "px"
        }),
        methods: {
        },
        computed: {
            myStyles () {
                return {
                    // height: `${this.$store.state.display.isActive ? this.height/2 : this.height}px`
                }
            }
        }
    }

</script>

<style scoped>

</style>