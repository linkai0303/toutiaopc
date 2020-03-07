// 封装请求工具
// 对于axios 的二次封装
// 配置拦截器
import axios from 'axios'
import router from '@/router'// 引入路由实例对象

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 配置请求头默认地址

// 注册请求拦截器
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('user-token') // 从缓存中取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config
}, function (error) {
  return Promise.reject(error)
})

// // 注册响应拦截器
axios.interceptors.response.use(function (response) {
  // 成功的时候执行
  return response.data ? response.data : {}// 有数据返回数据，没有数据返回空对象
}, function (error) {
  // 失败的时候执行
  if (error.response.status === 401) {
    localStorage.removeItem('user-token') // 移除token
    router.push('/login') // 跳回主页
  }
  return Promise.reject(error)
})

export default axios
