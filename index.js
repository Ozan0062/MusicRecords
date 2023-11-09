const baseUrl = "http://localhost:5269/api/musicrecords"

Vue.createApp({
    data() {
        return {
            allMusicRecords: [],
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
                console.log(this.allMusicRecords)
            } catch (ex) {
                alert(ex.message)
            }
        },
    }
    
}).mount("#app") 


