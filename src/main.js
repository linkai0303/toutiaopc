import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入UI
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import '@/styles/index.less'// 引入样式
import axios from '@/utils/request.js'// 引入axios
import Components from '@/components'// 引入组件
import '@/permission'// 引入权限模块

Vue.config.productionTip = false

Vue.use(ElementUI)// 全局注册ElementUI
Vue.use(Components)// 注册自定义组件

Vue.prototype.$axios = axios// 将axios赋值给vue对象的原型属性

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
