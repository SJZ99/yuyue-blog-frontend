import Vue from 'vue'
import './axios'
import App from './App.vue'
import vuetify from './vuetify'
import router from './router'
import VueRamda from 'vue-ramda'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRamda)

var vm = new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
})

vm.$mount('#app')
