import Vue from 'vue'
import App from './components/App.vue'
import './Style.css'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
