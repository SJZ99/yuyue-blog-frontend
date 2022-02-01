import Vue from 'vue'
import './js/axios'
import App from './App.vue'
import vuetify from './js/vuetify'
import router from './js/router'
import VueRamda from 'vue-ramda'
import vuex from './js/vuex'

Vue.config.productionTip = false
Vue.use(VueRamda)

let mixin = {
    methods: {
        changePath(goToPath) {
            this.$router.push(goToPath).catch((error) => {
                if (error.name != "NavigationDuplicated") {
                    throw error;
                }
            });
        },
    },
}

Vue.mixin(mixin)

let vm = new Vue({
    vuetify,
    router,
    vuex,
    render: h => h(App),
    mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
})

vm.$mount('#app')
