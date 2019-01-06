<template>
  <v-app>
    <div :class="{vh100 : !this.$store.state.display.isActive, pr100: this.$store.state.display.isActive}">
    <!--<resize-observer @notify="handleResize" />-->
    <back-photo></back-photo>
    <header-block ></header-block>
    <way-chooser></way-chooser>
    <content-block></content-block>
    </div>
    <footer-block></footer-block>
  </v-app>
</template>

<script>
import HeaderBlock from './components/standart/Header'
import BackPhoto from './components/index/BackPhoto'
import WayChooser from './components/index/WayChooser'
import ContentBlock from './components/index/ContentBlock'
import FooterBlock from './components/standart/Footer'
import './style/style.css'
// import WebFontLoader from 'webfontloader'

export default {
  name: 'app',
  components: {
    HeaderBlock,
    BackPhoto,
    WayChooser,
    ContentBlock,
    FooterBlock
  },
  data: function () {
    return {
      windowWidth: window.innerWidth
    };
  },
  methods: {
    setFontLoaded () {
      this.$emit('font-loaded')
    },
    // handleResize () {
    //   // document.getElementById('way-block').style.marginTop = (window.innerHeight/2 - document.querySelector('#way-block').clientHeight/2+20) +"px";
    // }
  },
  created() {

  }
}
</script>

<style lang="sass">

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin: 0
    padding: 0


  body
    padding: 0
    margin: 0

  .vh100
    height: 100vh
  .pr100
    height: 100%
</style>
