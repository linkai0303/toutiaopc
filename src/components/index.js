// 使用vue.use的方法注册
// vue.use会调用对象中的install方法 第一个参数是Vue对象
import LayoutAsider from './home/layout-aside'
import LayoutHeader from './home/layout-header'
import BreadCrumb from './common/bread-crumb'
// 任何位置都可使用
export default {
  install: function (Vue) {
    Vue.component('layout-header', LayoutHeader)// 注册头部组件
    Vue.component('layout-aside', LayoutAsider)// 注册侧边栏组件
    Vue.component('bread-crumb', BreadCrumb)// 注册面包屑组件
  }
}
