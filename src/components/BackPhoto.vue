<template>
    <div class="back-photo" :style="myStyles">
        <div class="back-photo-black"></div>
    </div>
</template>

<script>
    export default {
        name: "BackPhoto",
        data: () => ({
            pageIsActive: true
        }),
        computed: {
            myStyles () {
                return {
                    height: `${this.pageIsActive ? window.innerHeight/2 : window.innerHeight}px`
                }
            }
        }
    }

</script>

<style scoped>
    .back-photo {
        padding: 0;
        margin: 0;
        width: 100%;
        position: absolute;
        background-image: url("https://znaj.ua/images/2018/09/25/IcXKNfRpuvkrvkgYodOhx7p1WD107ndNP6XMKLjT.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }


    .back-photo-black {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: black;
        opacity: 0.5;
    }
</style>