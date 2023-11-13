const baseUrl = "http://localhost:5269/api/musicrecords"

Vue.createApp({
    data() {
        return {
            allMusicRecords: [],
            musicRecords: [],
            artist: null,
<<<<<<< HEAD
            title: null,
            year: null
=======
            publicationYear: null,
            title: null,
            duration: null,
            addData: { artist: "", title: "", publicationYear: null, duration: null},
            
>>>>>>> ea4ee66d7491e56377b6335e9f5caf33c1d894cb
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
        async addMusicRecords() {
            try {
                response = await axios.post(baseUrl, this.addData)
                this.getAll(baseUrl)
            } catch (ex) {
                alert(ex.message)
            }
        },
        filterByArtist(artist) {
            try {
                this.musicRecords = this.allMusicRecords.filter((item) => item.artist == artist)
                console.log(this.artist)
            } catch (ex) {
                alert(ex.message)
            }
        },
        filterByTitle(title) {
            try {
                this.musicRecords = this.allMusicRecords.filter((item) => item.title == title)
                console.log(this.title)
            } catch (ex) {
                alert(ex.message)
            }
        },
        filterByYear(publicationYear) {
            try {
                this.musicRecords = this.allMusicRecords.filter((item) => item.publicationYear > publicationYear)
                console.log(this.publicationYear)
            } catch (ex) {
                alert(ex.message)
            }
        }
    }
    
}).mount("#app") 


