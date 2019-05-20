<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <champions-league />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ChampionsLeague from '@/views/ChampionsLeague'
import * as d3 from 'd3';

export default {
  name: 'app',
  components: {
    // HelloWorld,
    ChampionsLeague,
  },
  mounted() {
    const div = d3.select('#app').append('div');
    div.attr('style', 'width: 400px; height: 400px; background-color: black;');
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
