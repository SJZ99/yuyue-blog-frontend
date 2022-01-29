import Vue from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import router from './router'

Vue.config.productionTip = false

var vm = new Vue({
  vuetify,
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
})

vm.$mount('#app')
