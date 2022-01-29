import Vue from 'vue'
import './js/axios'
import App from './App.vue'
import vuetify from './js/vuetify'
import router from './js/router'
import VueRamda from 'vue-ramda'
import vuex from './js/vuex'

Vue.config.productionTip = false
Vue.use(VueRamda)

var vm = new Vue({
  vuetify,
  router,
  vuex,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
})

vm.$mount('#app')
