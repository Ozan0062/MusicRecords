const baseUrl = "http://localhost:5269/api/musicrecords"

Vue.createApp({
    data() {
        return {
            allMusicRecords: [],
            musicRecords: [],
            artist: null
            
        }
    },
    async created() {
        this.getAll(baseUrl)
    },
    methods: {
        async getAll(url) {
            try {
                const response = await axios.get(url)
                this.allMusicRecords = await response.data
                this.musicRecords = this.allMusicRecords
                console.log(this.allMusicRecords)
            } catch (ex) {
                alert(ex.message)
            }
        },
        filterByArtist(artist) {
            try {
                this.musicRecords = this.allMusicRecords.filter((item) => item.artist === artist)
                console.log(this.artist)
            } catch (ex) {
                alert(ex.message)
            }
        }
    }
    
}).mount("#app") 


