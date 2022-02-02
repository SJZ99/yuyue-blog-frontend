<template>
    <div>
        <div id="box">
            <Title 
                :title="article.title"
                :date="article.date"
            ></Title>
            <Preface :text="article.preface"></Preface>
            <v-img 
                :src="article.img"
                max-width="90vw"
                id="img"
            ></v-img>
            <p id="content">{{ article.content }}</p>
        </div>
    </div>
</template>

<script>
import Title from '../components/Title.vue'
import Preface from '../components/Preface.vue'
import router from '../js/router'
export default {
    components: {
        Preface,
        Title
    },
    data: () => ({
        type: router.currentRoute.name.toLowerCase(),
        id: router.currentRoute.params.id,
        article: {
            id: router.currentRoute.params.id,
            title: '【Spring】titletle',
            preface: 'preface...vnv;sbfsbf fdvafbab fbnanfvalsvn',
            content: 'njnsavjbnlsjnvajsdnvlajdbvnajbdsvlakjsdnvlaksjdvnlajdsbvaipuiegqnrqpu34 jnbpiufv dnawdfdjpqwoenwrgbqpirunav jb ipnlvkj iu j hunpljnfpquqrnlerphvj',
            date: '2022/1/31',
            img: require('../assets/cyberpunk/city.jpg')
        }
    }),
    methods: {
        fetchArticle () {
            this.axios.get(`/${this.type}/articles/${this.id}`)
                    .then(response => {
                        this.article = response.data
                        this.article.img = `${this.axios.defaults.baseURL}/${this.type}/img/${this.article.img}`
                    })
        },
    },
    created () {
        this.fetchArticle()
    }
}
</script>

<style lang="scss" scope>
@import '../assets/scss/components/common.scss';

#img {
    margin: 0 auto;
}
#content {
    color: #ebebeb;
    font-size: 1.2em;
    max-width: 100%;
    overflow-wrap: break-word;
}
</style>