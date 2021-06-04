<template>
  <div class="w-screen h-screen bg-gray-800">
    <div class="flex overflow-y-scroll" style="height:88vh">
      <!-- SIDE NAV -->
      <side-nav></side-nav>
      <!-- MAIN CONTENT -->
      <router-view></router-view>
    </div>
    <!-- PLAYBAR -->
    <playbar></playbar>
  </div>
</template>

<script>
// @ is an alias to /src
import sideNav from './components/sideNav.vue'
import playbar from './components/playbar.vue'

export default {
  components: {
    sideNav,
    playbar
  },
  name: "App",
  data: function() {
    return {}
  }
};
</script>
<style scroped>
</style>