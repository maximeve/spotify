<template>
  <!-- SIDE NAV -->
  <div class="w-64 bg-black h-screen">
    <div class="p-6">
      <img src="../images/spotify.png" class="h-10" style="filter: brightness(0) invert(1)" />
    </div>
    <div class="mx-2 mb-5">
      <router-link v-for="page in pages" :key="page.id" :to="page.link" tag="button" class="font-bold w-full text-sm text-gray-400 rounded px-3 py-2 flex items-center justify-start hover:text-white focus:outline-none focus:bg-gray-900">
        <div class="flex items-center hover:text-white focus:outline-none focus:bg-gray-900 text-gray-400">
        <i class="material-icons mr-3">{{ page.icon }}</i>
        <p class="">{{ page.name }}</p>
        </div>
      </router-link>
    </div>
    <div class="mb-2 mx-6">
      <h1 class="text-sm text-gray-400 uppercase hover:text-white tracking-wide">Playlists</h1>
    </div>
    <div class="mx-2">
      <button
        class="font-bold w-full text-sm text-gray-400 rounded px-3 py-2 flex items-center justify-start hover:text-white hover:text-white focus:outline-none focus:bg-gray-900"
      >
        <i class="material-icons mr-3">add_box</i>
        <p>Create Playlist</p>
      </button>
    </div>
    <div class="mx-2">
      <button
        class="font-bold w-full text-sm text-gray-400 rounded px-3 py-2 flex items-center justify-start hover:text-white hover:text-white focus:outline-none focus:bg-gray-900"
      >
        <i class="material-icons mr-3">favorite</i>
        <p>Liked Songs</p>
      </button>
    </div>
    <div class="mx-6 h-px bg-gray-800 my-3"></div>
    <div class="mb-2 mx-6">
      <div class="w-full h-24 overflow-y-scroll">
        <p
          v-for="album in albums"
          :key="album.name"
          class="text-gray-400 text-sm hover:text-white mb-1"
        >{{album.name}}</p>
      </div>
    </div>
    <div class="mx-2">
      <button
        class="font-bold w-full text-sm text-gray-400 rounded px-3 py-2 flex items-center justify-start hover:text-white hover:text-white focus:outline-none focus:bg-gray-900"
      >
        <i class="material-icons mr-3">arrow_circle_down</i>
        <p>Install App</p>
      </button>
    </div>
    <div class="relative mt-4">
      <div class="w-full h-full flex justify-end items-start opacity-0 hover:opacity-100 absolute">
        <div class="bg-black rounded-full my-2 mx-2 h-6 w-6">
          <i class="material-icons text-white">keyboard_arrow_down</i>
        </div>
      </div>
      <img src="../images/jb.jpg" class="w-full" />
      <img />
    </div>
  </div>
</template>

<script>
export default {
  name: "sideNav",
  data: function() {
    return {
      pages: [
        { id: "home", name: "Home", icon: "home", link : '/' },
        { id: "search", name: "Search", icon: "search", link : '/search'},
        { id: "library", name: "Your Library", icon: "bar_chart", link : '/library' }
      ],
      albums: '',
    };
  },
  mounted(){
      this.albums = this.$store.getters.getAlbums
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
