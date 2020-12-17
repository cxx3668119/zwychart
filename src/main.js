import Vue from 'vue'
import App from './App.vue'
import ECharts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts

new Vue({
  render: h => h(App),
}).$mount('#app')