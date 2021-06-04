<template>
  <!-- MAIN CONTENT -->
  <div class="w-full h-full relative">
    <!-- HEADER -->
    <div class="z-10 w-full sticky top-0 py-4 px-6 flex items-center justify-between">
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
        <div v-on:keyup.enter="searchSongs" class="relative">
          <i class="material-icons absolute text-gray-400 ml-5 pt-2">search</i>
          <input
            type="text"
            v-model="search"
            placeholder="Search Artists, songs or podcasts"
            class="w-80 rounded-full ml-4 text-center h-10 focus:outline-none text-sm"
          />
        </div>
      </div>
      <div class="relative">
        <button
          @click="showDropdown = true"
          class="h-12 bg-black rounded-full py-1 px-2 flex items-center focus:outline-none"
        >
          <img src="../images/profilepic.jpeg" class="w-6 h-6 rounded-full" />
          <p class="ml-4 text-white text-sm font-bold">Maxime Van Eijndhoven</p>
          <i
            v-if="showDropdown === false"
            class="ml-1 material-icons text-3xl text-white"
          >arrow_drop_down</i>
          <i
            v-if="showDropdown === true "
            class="ml-1 material-icons text-3xl text-white"
          >arrow_drop_up</i>
        </button>
        <div v-if="showDropdown" class="absolute bg-black w-full rounded mt-1">
          <button @click="showDropdown" class="w-full py-2 text-gray-400 hover:text-white focus:outline-none border-b border-gray-500 focus:bg-gray-900">Log in</button>
          <button @click="showDropdown = false" class="w-full py-2 text-gray-400 hover:text-white focus:outline-none focus:bg-gray-900">Log Out</button>
        </div>
      </div>
    </div>
    <!-- CARDS HEADER -->
    <div class="flex justify-between px-6 py-3">
      <div class="text-2xl font-semibold text-white tracking-wider hover:underline">Recent searches</div>
      <div
        class="text-sm font-semibold text-white tracking-wider hover:text-white hover:underline"
      >See All</div>
    </div>
    <!-- RECENTLY PLAYED -->
    <div class="w-full flex flex-wrap">
      <div v-for="recent in recents" :key="recent.id" class="p-2 w-62 relative cursor-pointer">
        <div class="w-full h-full flex justify-end items-start absolute opacity-50">
          <div class="flex justify-center items-center bg-gray-800 rounded-full mt-2 mr-5 h-8 w-8">
            <i class="material-icons text-white">highlight_off</i>
          </div>
        </div>
        <div
          class="w-full h-full flex justify-end items-start opacity-0 hover:opacity-100 absolute"
        >
          <div class="flex justify-center bg-green-500 rounded-full mt-40 mr-10 h-10 w-10">
            <i class="material-icons text-white pt-2">play_arrow</i>
          </div>
        </div>
        <div class="bg-gray-700 w-full h-auto p-5 hover:bg-gray-700 rounded-md">
          <img :src="require(`../images/${recent.img}`)" class="w-40 h-40 rounded-full shadow mb-2" />
          <h1 class="text-sm font-semibold text-white tracking-wide pt-4">{{ recent.name }}</h1>
          <h2 class="text-xs text-gray-400 tracking-wide">{{ recent.album }}</h2>
        </div>
      </div>
    </div>
    <!-- YOUR PLAYLISTS -->
    <div class="flex justify-between px-6 py-3">
      <div
        class="text-2xl font-semibold text-white tracking-wider hover:underline"
      >Your favorite genres</div>
      <div
        class="text-sm font-semibold text-white tracking-wider hover:text-white hover:underline"
      >See All</div>
    </div>
    <!-- RECENTLY PLAYED -->
    <div class="w-full flex flex-wrap">
      <div v-for="genre in genres" :key="genre.id" class="p-2 w-62 cursor-pointer">
        <div class="w-80 h-40 p-5 rounded-md relative overflow-hidden" :class="genre.bg">
          <h1 class="text-3xl font-semibold text-white tracking-wide">{{ genre.name }}</h1>
          <div class="absolute ml-48">
            <img
              :src="require(`../images/${genre.img}`)"
              class="w-96 transform rotate-12 h-auto rounded-md shadow mb-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      showDropdown: false,
      recents: "",
      playlist: "",
      genres: "",
      search: "",
    };
  },
  mounted() {
      (this.playlist = this.$store.getters.getCurrentInfo),
      (this.genres = this.$store.getters.getGenres),
      (this.recents = this.$store.getters.getRecents);
  },
  methods: {
    searchSongs(){
      if( this.accessToken === ''){
        alert('Please log in')
      }else{
      const urlSpotify = "https://accounts.spotify.com/api/token";
      axios({
        method: "post",
        url: urlSpotify,
        data: "grant_type=client_credentials",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        auth: {
          username: this.$store.getters.getClient.clientID, // User ID
          password: this.$store.getters.getClient.clientSecret // User Secret
        }
      })
        .then(response => {
          this.$store.dispatch('setToken', response.data.access_token)
          this.showDropdown = false
          this.$store.dispatch('setSearch', this.search)
          this.$router.push('/searched')
        })
        .catch(err => console.log(err));
      }
    },
  }
};
</script>

<style>
</style>