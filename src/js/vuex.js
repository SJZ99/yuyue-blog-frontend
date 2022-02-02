import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        footerIndex: 2,
    },

    mutations: {
        SET_FOOTER_INDEX(state, options) {
            state.footerIndex = options.footerIndex;
        }
    },

    actions: {
    },

    modules: {
    },

    plugins: [
        new VuexPersistence({
            // reducer: state => ({
            //     footerIndex: state.footerIndex,
            // })
        }).plugin
    ] 
})
