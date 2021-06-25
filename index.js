var app = new Vue({
    el: '#app',
    data: {
        message: "Hil I'm WQisdo",
        isLoading: false,
        isAdding: false,
        posts: [],
        text: ''
    },

    methods: {
        async getTexts() {
            this.isLoading = true
            try {
                let posts = await axios.get('https://boostbe.herokuapp.com/texts');
                this.posts = posts.data.data;
                console.log(this.posts);
                this.isLoading = false

            } catch (err) {
                console.log(err);
                this.isLoading = false

            }
        },

        async addPost() {
            this.isAdding = true
            try {
                await axios.post('https://boostbe.herokuapp.com/add-text', { text: this.text });
                this.getTexts();
                this.text = ""
                // alert('post added');
                this.isAdding = false


            } catch (err) {
                console.log(err);
                this.isAdding = true

            }
        }
    },

    created() {
        this.getTexts()
    }
})