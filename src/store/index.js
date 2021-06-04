import { createStore } from 'vuex'

export default createStore({
  state: {
    client: {clientID: "2b02f89ebcb54369bcae380bd52108e2",clientSecret: "1e43cfc652fe42469ea5d6081869b26c"},
    currentAlbum: 'Ctrl',
    currentArtist: 'Sza',
    currentImg: 'sza.jpeg',
    accessToken : '',
    search:'',
    albums: [
      { name: "Pablo Honey" },
      { name: "The Bends" },
      { name: "Kid A" },
      { name: "Amnesiac" },
      { name: "Hail To The Chief" },
      { name: "The King Of Limbs" },
      { name: "Drive" },
      { name: "Amnesiac" },
      { name: "Hail To The Chief" },
      { name: "The King Of Limbs" },
      { name: "Drive" }
    ],
    recents: [
      {
        id: "James Blake",
        name: "James Blake",
        album: "James Blake",
        img: "jb.jpg"
      },
      { id: "Sza", name: "Sza", album: "Ctrl", img: "sza.jpeg" },
      {
        id: "The Blaze",
        name: "The Blaze",
        album: "Dancehall",
        img: "tb.jpeg"
      },
      {
        id: "Francis Bebey",
        name: "Francis Bebey",
        album: "African Electronic Music",
        img: "fb.jpeg"
      },
      {
        id: "Connan Mockasin",
        name: "Connan Mockasin",
        album: "Forever Dolphin Love",
        img: "cm.jpeg"
      },
      {
        id: "Bryson Tiller",
        name: "Bryson Tiller",
        album: "Trapsoul",
        img: "bt.jpeg"
      },
      {
        id: "Francis Bebey",
        name: "Francis Bebey",
        album: "African Electronic Music",
        img: "fb.jpeg"
      },
    ],
    playlist: [
      {
        id: "Drive",
        name: "Drive",
        album: "Van Maxime",
        img: "drive.png"
  
      },
      {
        id: "African",
        name: "African",
        album: "Van Maxime",
        img: "african.png"
      },
      {
        id: "House",
        name: "House",
        album: "Van Maxime",
        img: "house.png"
      },
      {
        id: "Afro",
        name: "Afro",
        album: "Van Maxime",
        img: "afro.png"
      },
      {
        id: "Rnb",
        name: "Rnb",
        album: "Van Maxime",
        img: "rnb.png"
      },
      {
        id: "Dnb",
        name: "Dnb",
        album: "Van Maxime",
        img: "dnb.png"
      }
    ],
    genres: [
      {
        id: "Drive",
        name: "Afro",
        album: "Van Maxime",
        img: "drive.png",
        bg : 'bg-gradient-to-r from-yellow-400 to-yellow-800'
        
      },
      {
        id: "African",
        name: "RnB",
        album: "Van Maxime",
        img: "african.png",
        bg : 'bg-gradient-to-r from-red-400 to-red-800'
      },
      {
        id: "House",
        name: "House",
        album: "Van Maxime",
        img: "house.png",
        bg : 'bg-gradient-to-r from-blue-400 to-blue-800'
      },
      {
        id: "Afro",
        name: "Afro",
        album: "Van Maxime",
        img: "afro.png",
        bg : 'bg-gradient-to-r from-purple-400 to-purple-800'
      },
      {
        id: "Dnb",
        name: "Dnb",
        album: "Van Maxime",
        img: "dnb.png",
        bg : 'bg-gradient-to-r from-gray-400 to-gray-700'
      }
    ],
  },
  mutations: {
    setPlayInfo(state, payload) {
      state.currentArtist = payload.name;
      state.currentAlbum = payload.album;
      state.currentImg = payload.img;
    },
    setCurrentSearch(state,payload){
      state.search = payload
    },
    setCurrentToken(state,payload){
      state.accessToken = payload
    }
  },
  actions: {
    setPlayInfo(context, payload) {
      context.commit('setPlayInfo', payload)
    },
    setSearch(context,payload){
      context.commit('setCurrentSearch',payload)
    },
    setToken(context,payload){
      context.commit('setCurrentToken',payload)
    }
  },
  getters: {
    getCurrentInfo(state) {
      return state
    },
    getAlbums(state) {
      return state.albums
    },
    getRecents(state) {
      return state.recents
    },
    getPlaylist(state) {
      return state.playlist
    },
    getGenres(state) {
      return state.genres
    },
    getSearch(state){
      return state.search
    },
    getClient(state){
      return state.client
    },
    getToken(state){
      return state.accessToken
    }
  },

})
