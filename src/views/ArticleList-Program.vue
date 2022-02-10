<template>
    <div>
        <div id="box">
            <h2 id="custom-title">Articles</h2>
            <v-card
                v-for="(article, index) in articles"
                :key="index"
                @click="changePath(`/program/${language}/${article.id}`)"
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
    data: () => ({
        language: router.currentRoute.params.lang.toLowerCase(),
        articles: [
            {
                id: 1,
                img: require('../assets/cyberpunk/city.jpg'),
                title: "【tag】titletle",
                preface: "canvalkjvnnlsajdnvalsjdnvaljdskva;vas",
                date: "2022/1/31"
            },
        ],
    }),

    methods: {
        fetchPreviews () {
            this.axios
                    .get(`/program/previews/${this.language}`)
                    .then(response => {
                        this.articles = response.data
                        this.articles.forEach(article => {
                            article.img = `${this.axios.defaults.baseURL}/program/img/${article.img}`
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
        },
    },

    created () {
        this.fetchPreviews();
    },
}
</script>

<style lang='scss' scope>
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