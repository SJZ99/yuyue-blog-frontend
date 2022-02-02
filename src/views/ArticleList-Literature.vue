<template>
    <div>
        <div id="box">
            <h2 id="custom-title">Article</h2>
            <v-card
                v-for="(article, index) in articles"
                :key="index"
                @click="changePath(`/literature/${seriesId}/${article.id}`)"
                id="preview"
                dark
            >
                <v-img
                    :src="article.img"
                ></v-img>
                
                <v-card-title>{{ article.title }}</v-card-title>

                <v-card-subtitle>{{ article.preface }}</v-card-subtitle>

                <v-card-actions>
                    <h5>{{ article.date }}</h5>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
import router from '../js/router'
export default {
    components: {
    },
    data: () => ({
        seriesId: router.currentRoute.params.seriesId,
        articles: [
            {
                id: 1,
                img: require("../assets/cyberpunk/city.jpg"),
                title: 'Titletle',
                preface: 'preface..vsdvnjnnjsa afknavn nonv',
                date: '2020-12-31',
            },
            {
                id: 2,
                img: require("../assets/cyberpunk/smoke-building.jpg"),
                title: 'Titletle',
                preface: 'preface..vsdvnjnnjsa afknavn nonv',
                date: '2020-12-31',
            },
            {
                id: 3,
                img: require("../assets/cyberpunk/city.jpg"),
                title: 'Titletle',
                preface: 'preface..vsdvnjnnjsa afknavn nonv',
                date: '2020-12-31',
            },
        ],
    }),
    methods: {
        fetchPreviews() {
            this.axios.get(`/literature/previews/${this.seriesId}`)
                    .then(response => {
                        this.articles = response.data
                        this.articles.forEach(article => {
                            article.img = `${this.axios.defaults.baseURL}/literature/img/${article.img}`
                        })
                        console.log(this.articles)
                    })
        }
    },
    created() {
        this.fetchPreviews()
    }
}
</script>

<style lang="scss" scope>
@import '../assets/scss/components/common.scss';
#preview {
    width: 100%;
    margin: 0 auto;
    margin-top: 5vh;
}

#preview:hover {
    filter: brightness(130%);
}
</style>