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
        article: {
            id: router.currentRoute.params.id,
            title: '【Spring】titletle',
            preface: 'preface...vnv;sbfsbf fdvafbab fbnanfvalsvn',
            content: 'njnsavjbnlsjnvajsdnvlajdbvnajbdsvlakjsdnvlaksjdvnlajdsbvaipuiegqnrqpu34 jnbpiufv dnawdfdjpqwoenwrgbqpirunav jb ipnlvkj iu j hunpljnfpquqrnlerphvj',
            date: '2022/1/31',
            img: require('../assets/cyberpunk/city.jpg')
        }
    })
}
</script>

<style lang="scss" scope>
@import '../assets/scss/components/box.scss';

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