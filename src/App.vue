<template>
  <v-app>
    <resize-observer @notify="handleResize" />
    <back-photo></back-photo>
    <header-block></header-block>
    <way-chooser></way-chooser>
    <content-block></content-block>
    <footer-block></footer-block>

  </v-app>
</template>

<script>
import HeaderBlock from './components/Header'
import BackPhoto from './components/BackPhoto'
import WayChooser from './components/WayChooser'
import ContentBlock from './components/ContentBlock'
import FooterBlock from './components/Footer'
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
    handleResize () {
      document.getElementById('way-block').style.marginTop = (window.innerHeight/2 - document.querySelector('#way-block').clientHeight/2+20) +"px";
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

body {
  padding: 0;
  margin: 0;
}
</style>
