// 用来处理路由权限
import router from '@/router'
// 注册
router.beforeEach(function (to, from, next) {
  // 如果去的地址以home开头，判断是否有token
  if (to.path.startsWith('/home')) {
    const token = window.localStorage.getItem('user-token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
