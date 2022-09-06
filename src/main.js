import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Echarts from 'echarts'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
