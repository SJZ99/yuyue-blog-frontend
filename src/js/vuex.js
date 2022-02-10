import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

// let vuexCookies = new VuexPersistence({
//     restoreState: (key) => Cookies.get(key),
//     saveState: (key, state) =>
//       Cookies.set(key, state, {
//         expires: 1/48 //30 minutes
//     }),
//     modules: ["loginInfo", "test"]
// })

// let vuexLocal = new VuexPersistence({
//     // storage: window.localStorage,
//     reducer: state => ({
//         oidcStore: state.oidcStore,
//         test: state.test
//     }),
// })

export default new Vuex.Store({
    state: {
        footerIndex: 2,
    },

    mutations: {
        SET_FOOTER_INDEX(state, options) {
            state.footerIndex = options.footerIndex;
        },
    },

    actions: {
    },

    modules: {
    },

    plugins: [
        // vuexLocal.plugin,
    ] 
})
