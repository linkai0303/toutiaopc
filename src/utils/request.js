// 封装请求工具
// 对于axios 的二次封装
// 配置拦截器
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 配置请求头默认地址

// 注册请求拦截器
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('user-token') // 从缓存中取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
