<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<style>

</style>

<script>
import navBar from './components/navBar'
export default {
  components:{
    navBar
  }
}
</script>
