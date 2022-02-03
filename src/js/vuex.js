import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import Cookies from 'js-cookie'
import * as LoginInfo from './module/LoginInfo'
Vue.use(Vuex)

let vuexCookies = new VuexPersistence({
    restoreState: (key) => Cookies.get(key),
    saveState: (key, state) =>
      Cookies.set(key, state, {
        expires: 1/48 //30 minutes
    }),
    modules: ["loginInfo"]
})

let vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    // reducer: state => ({

    // }),
})

export default new Vuex.Store({
    state: {
        footerIndex: 2,
    },

    mutations: {
        SET_FOOTER_INDEX(state, options) {
            state.footerIndex = options.footerIndex;
        },
        SET_LOGIN_INFO(state, loginInfo) {
            state.loginInfo = loginInfo;
        }
    },

    actions: {
    },

    modules: {
        loginInfo: LoginInfo
    },

    plugins: [
        vuexLocal.plugin, vuexCookies.plugin
    ] 
})
