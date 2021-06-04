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
          <button
            @click="submit"
            class="w-full py-2 text-gray-400 hover:text-white focus:outline-none border-b border-gray-500 focus:bg-gray-900"
          >Log in</button>
          <button
            @click="showDropdown = false"
            class="w-full py-2 text-gray-400 hover:text-white focus:outline-none focus:bg-gray-900"
          >Log Out</button>
        </div>
      </div>
    </div>
    <!-- CARDS HEADER -->
    <div class="w-full flex justify-between px-6 py-3">
      <div class="flex w-1/3 flex-col">
        <div class="text-2xl font-semibold text-white tracking-wider hover:underline">Top results</div>
        <div class="w-full p-2 mt-6 rounded-md bg-gray-900 relative cursor-pointer shadow-lg">
          <div
            class="w-full h-full flex justify-end items-start opacity-0 hover:opacity-100 absolute"
          >
            <div class="flex justify-center bg-green-500 rounded-full mt-32 mr-10 h-12 w-12">
              <i class="material-icons text-white pt-3">play_arrow</i>
            </div>
          </div>
          <div class="flex flex-wrap pt-4 px-2">
            <img :src="this.img" class="w-24 h-24 rounded-full shadow mb-2 shadow-lg" />
          </div>
          <div class="px-4 py-2">
            <h2 class="text-white text-3xl font-bold">{{ this.artist}}</h2>
            <p class="text-white text-gray-400 tracking-wide">{{ this.type }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-2/3">
        <div
          class="text-2xl text-left font-semibold text-white tracking-wider hover:underline"
        >Numbers</div>
        <div class="w-full p-2 mt-4 rounded-md cursor-pointer">
          <div
            v-for="number in popularNumbers"
            :key="number.name"
            class="hover:bg-gray-900 flex flex-wrap p-2 px-2"
          >
            <img :src="number.album.images[0].url" class="w-10 h-10 rounded-md shadow mb-2" />
            <div class="flex flex-col">
              <h1 class="ml-2 text-white">{{ number.name}}</h1>
              <div class="flex">
                <p class="text-sm ml-2 text-gray-400 tracking-wide">{{ number.artists[0].name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Albums -->
    <div class="flex justify-between px-6 py-3">
      <div>
        <div class="text-2xl font-semibold text-white tracking-wider hover:underline">Albums</div>
        <div class="w-full flex justify-between py-3">
          <div class="flex flex-wrap">
            <div v-for="album in albums" :key="album.id" class="p-2 w-62 relative">
              <div
                class="w-full h-full flex justify-end items-start opacity-0 hover:opacity-100 absolute cursor-pointer"
              >
                <div class="flex justify-center bg-green-500 rounded-full mt-40 mr-10 h-10 w-10">
                  <i class="material-icons text-white pt-2">play_arrow</i>
                </div>
              </div>
              <div class="bg-gray-900 w-full h-auto p-5 hover:bg-gray-700 rounded-md">
                <img :src="album.images[0].url" class="w-48 h-48 rounded-md shadow mb-2" />
                <h1 class="text-sm font-semibold text-white tracking-wide pt-4">{{ album.name.slice(0,20) }}</h1>
                <h2 class="text-xs text-gray-400 tracking-wide">{{ album.artists[0].name }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      showDropdown: false,
      search: this.$store.getters.getSearch,
      accessToken: this.$store.getters.getToken,
      searchData: "",
      img: "",
      type: "",
      artist: "",
      popularNumbers: "",
      albums: ""
    };
  },
  mounted() {
    console.log(this.$store.getters.getSearch);
    fetch(
      `https://api.spotify.com/v1/search?q=${this.search}&type=artist&limit=10`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.accessToken
        }
      }
    )
      .then(response => {
        console.log(
          response.json().then(data => {
            console.log(data);
            this.searchData = data;
            this.img = data.artists.items[0].images[0].url;
            this.type = data.artists.items[0].type;
            this.artist = data.artists.items[0].name;
            this.getTopTracks();
          })
        );
      })
      .catch(err => console.log(err));
  },
  methods: {
    getTopTracks() {
      const artistID = this.searchData.artists.items[0].id;
      fetch(
        `	https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=US&limit=5`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.accessToken
          }
        }
      ).then(response => {
        console.log(
          response.json().then(data => {
            console.log(data);
            this.popularNumbers = data.tracks.slice(0, 4);
            this.getAlbums(artistID);
          })
        );
      });
    },
    getAlbums(id) {
      fetch(
        `https://api.spotify.com/v1/artists/${id}/albums?&market=US&limit=10`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.accessToken
          }
        }
      ).then(response => {
        console.log(
          response.json().then(data => {
            console.log(data.items);
            this.albums = data.items;
          })
        );
      });
    }
  }
};
</script>