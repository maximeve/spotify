<template>
  <!-- MAIN CONTENT -->
  <div class="w-full h-full relative">
    <!-- HEADER -->
    <div
      class="z-10 w-full sticky top-0 py-4 px-6 flex items-center justify-between"
      :class="backgroundClass"
    >
      <div class="flex items-center">
        <button
          class="flex justify-center items-center rounded-full bg-black w-8 h-8 text-gray-600 mr-2 focus:outline-none hover:text-white"
        >
          <i class="material-icons text-3xl">keyboard_arrow_left</i>
        </button>
        <button
          class="flex justify-center items-center rounded-full bg-black w-8 h-8 text-gray-600 focus:outline-none hover:text-white"
        >
          <i class="material-icons text-3xl">keyboard_arrow_right</i>
        </button>
      </div>
      <div class="relative">
        <button @click="showDropdown = true" class="h-12 bg-black hover:bg-gray-700 rounded-full py-1 px-2 flex items-center focus:outline-none">
          <img src="../images/profilepic.jpeg" class="w-6 h-6 rounded-full" />
          <p class="ml-4 text-white text-sm font-bold">Maxime Van Eijndhoven</p>
          <i v-if="showDropdown === false" class="ml-1 material-icons text-3xl text-white">arrow_drop_down</i>
          <i v-if="showDropdown === true " class="ml-1 material-icons text-3xl text-white">arrow_drop_up</i>
        </button>
        <div v-if="showDropdown" class="absolute bg-gray-900 w-full rounded mt-1">
          <button
            @click="showDropdown = false"
            class="w-full py-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none border-b border-gray-500 focus:bg-gray-900">Account</button>
          <button
            @click="showDropdown = false"
            class="w-full py-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-900"
          >Log Out</button>
        </div>
      </div>
    </div>
    <!-- CARDS HEADER -->
    <div class="flex justify-between px-6 py-3">
      <div class="text-2xl font-semibold text-white tracking-wider hover:underline">Recently Played</div>
      <div
        class="text-sm font-semibold text-white tracking-wider hover:text-white hover:underline"
      >See All</div>
    </div>
    <!-- RECENTLY PLAYED -->
    <div class="w-full flex flex-wrap">
      <div v-for="recent in recents" :key="recent.id" @click="setCurrentArtist(recent.name,recent.album,recent.img)" class="p-2 w-62 relative">
        <div class="w-full h-full flex justify-end items-start opacity-0 hover:opacity-100 absolute cursor-pointer">
          <div class="flex justify-center bg-green-500 rounded-full mt-40 mr-10 h-10 w-10">
            <i class="material-icons text-white pt-2">play_arrow</i>
          </div>
        </div>
        <div class="bg-gray-900 w-full h-auto p-5 hover:bg-gray-700 rounded-md">
          <img :src="require(`../images/${recent.img}`)" class="w-48 h-48 rounded-md shadow mb-2" />
          <h1 class="text-sm font-semibold text-white tracking-wide pt-4">{{ recent.name }}</h1>
          <h2 class="text-xs text-gray-400 tracking-wide">{{ recent.album }}</h2>
        </div>
      </div>
    </div>
    <!-- YOUR PLAYLISTS -->
    <div class="flex justify-between px-6 py-3">
      <div class="text-2xl font-semibold text-white tracking-wider hover:underline">Your Playlists</div>
      <div
        class="text-sm font-semibold text-white tracking-wider hover:text-white hover:underline"
      >See All</div>
    </div>
    <!-- RECENTLY PLAYED -->
    <div class="w-full flex flex-wrap">
      <div v-for="list in playlist" :key="list.id" class="p-2 w-62 relative">
        <div
          class="w-full h-full flex justify-end items-start opacity-0 hover:opacity-100 absolute cursor-pointer">
          <div class="flex justify-center bg-green-500 rounded-full mt-40 mr-10 h-10 w-10">
            <i class="material-icons text-white pt-2">play_arrow</i>
          </div>
        </div>
        <div class="bg-gray-900 w-full h-auto p-5 hover:bg-gray-700 rounded-md">
          <img :src="require(`../images/${list.img}`)" class="w-48 h-48 rounded-md shadow mb-2" />
          <h1 class="text-sm font-semibold text-white tracking-wide pt-4">{{ list.name }}</h1>
          <h2 class="text-xs text-gray-400 tracking-wide">{{ list.album }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sideNav",
    methods: {
    handleScroll() {
      console.log("helloo");
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 20) {
        this.backgroundClass = "bg-gray-900";
      } else {
        this.backgroundClass = "";
      }
    },
    setCurrentArtist(name,album,img){
      const payload = {
        name : name,
        album : album,
        img : img
      }
      this.$store.dispatch('setPlayInfo',payload)
    }
  },
  data: function() {
    return {
      showDropdown: false,
      scrollPosition: null,
      backgroundClass: "",
      recents: this.$store.getters.getRecents,
      playlist: this.$store.getters.getPlaylist
    };
  }
}
</script>
