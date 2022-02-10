import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        footerIndex: 2,
        article: {
            content: "",
            imgName: "",
        }
    },

    mutations: {
        SET_FOOTER_INDEX(state, options) {
            state.footerIndex = options.footerIndex;
        },
        SET_ARTICLE(state, article) {
            state.article = article
        },
        SET_CONTENT(state, content) {
            state.article.content = content
        },
        SET_IMG_NAME(state, imgName) {
            state.article.imgName = imgName
        },
    },

    actions: {
    },

    modules: {
    },

    plugins: [
        new VuexPersistence({
            reducer: state => ({
                article: state.article,
            })
        }).plugin
    ] 
})
