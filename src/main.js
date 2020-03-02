import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入UI
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import '@/styles/index.less'// 引入样式
import axios from 'axios'// 引入axios

Vue.config.productionTip = false

Vue.use(ElementUI)// 全局注册ElementUI

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 配置请求头默认地址
Vue.prototype.$axios = axios// 将axios赋值给vue对象的原型属性

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
