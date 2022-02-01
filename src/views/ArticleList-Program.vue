<template>
    <div>
        <div id="box">
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
            {
                id: 2,
                img: require('../assets/cyberpunk/city.jpg'),
                title: "【tag】titletle",
                preface: "canvalkjvnnlsajdnvalsjdnvaljdskva;vas",
                date: "2022/1/31"
            },
            {
                id: 3,
                img: require('../assets/cyberpunk/city.jpg'),
                title: "【tag】titletle",
                preface: "canvalkjvnnlsajdnvalsjdnvaljdskva;vas",
                date: "2022/1/31"
            },
        ],
    })
}
</script>

<style lang='scss' scope>
@import '../assets/scss/components/box.scss';
#preview {
    width: 100%;
    margin: 0 auto;
    margin-top: 5vh;
}

#preview:hover {
    filter: brightness(130%);
}

</style>