<template>
  <div class="w-full flex justify-between items-center bg-gray-900 px-5" style="height:12vh;">
    <!-- LEFT -->
    <div class="flex items-center">
      <img :src="require(`../images/${currentInfo.currentImg}`)" class="w-12 h-12 rounded-md shadow mb-2 mr-2" />
      <div>
        <h1 class="text-sm text-white tracking-wide">{{ currentInfo.currentArtist }}</h1>
        <h2 class="text-xs text-gray-400 tracking-wide w-32">{{ currentInfo.currentAlbum }}</h2>
      </div>
      <i class="material-icons text-lg text-green-500 pl-5 hover:text-white">favorite</i>
      <i class="material-icons text-lg text-gray-400 px-3 hover:text-white">picture_in_picture_alt</i>
    </div>
    <!-- MIDDLE -->
    <div class="flex flex-col items-center justify-center w-1/3 mr-32">
      <div class="flex items-center">
        <button class="text-lg text-gray-400 hover:text-white focus:outline-none">
          <i class="material-icons mx-4 text-lg">shuffle</i>
        </button>
        <button class="text-lg text-gray-400 hover:text-white focus:outline-none">
          <i class="material-icons text-lg">skip_previous</i>
        </button>
        <button
          class="rounded-full w-9 h-9 border-2 border-gray-400 flex justify-center items-center text-lg text-gray-400 hover:text-white mx-4 focus:outline-none"
        >
          <i class="material-icons text-lg">play_arrow</i>
        </button>
        <button class="text-lg text-gray-400 hover:text-white focus:outline-none">
          <i class="material-icons text-lg">skip_next</i>
        </button>
        <button class="text-lg text-gray-400 hover:text-white focus:outline-none">
          <i class="material-icons mx-4 text-lg">repeat</i>
        </button>
      </div>
      <div class="w-full">
        <div class="w-full h-1 bg-gray-400 text-white rounded-full mt-4"></div>
      </div>
    </div>
    <!-- RIGHT -->
    <div class="flex items-center">
      <i
        class="material-icons text-lg text-gray-400 pl-5 hover:text-white focus:outline-none"
      >playlist_play</i>
      <i
        class="material-icons text-lg text-sm text-gray-400 pl-3 hover:text-white focus:outline-none"
      >important_devices</i>
      <i
        class="material-icons text-lg text-gray-400 px-3 hover:text-white focus:outline-none"
      >volume_up</i>
      <div class="w-20 h-1 rounded-full bg-gray-400"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentInfo() {
      return this.$store.getters.getCurrentInfo;
    }
  },
  data: function() {
    return {
      album: "",
      name: "",
      img: ""
    };
  }
};
</script>

<style>
</style>