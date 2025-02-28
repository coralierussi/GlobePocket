import Vue from 'vue'
import Index from './index.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

new Vue({
  vuetify: new Vuetify(),
  render: h => h(Index)
}).$mount('#app')
