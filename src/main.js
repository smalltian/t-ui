import Vue from 'vue'
import App from './App.vue'
import zhujuntianui from 'zhujuntian-ui'

console.log(zhujuntianui)

Vue.use(zhujuntianui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
