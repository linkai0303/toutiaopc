<template>
  <el-row class="layout-header">
    <el-col :span="12" class="left">
      <i class="el-icon-s-fold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col :span="12" class="right">
      <el-row type="flex" justify="end" align="middle">
          <!-- 双向绑定src -->
        <img :src="userInfo.photo" alt />
        <!-- 点击菜单选项触发command事件 -->
        <el-dropdown trigger="click" @command="clickMenu">
            <!--双向绑定用户名  -->
          <span class="username">{{userInfo.name}}</span>
          <el-dropdown-menu slot="dropdown">
              <!-- 给下拉菜单选项添加command属性 -->
            <el-dropdown-item command="info">个人信息</el-dropdown-item>
            <el-dropdown-item command="git">git地址</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {} // 用来储存用户个人信息
    }
  },
  methods: {
    clickMenu (command) {
      if (command === 'info') {

      } else if (command === 'git') {
        window.location.href = 'https://github.com/linkai0303'
      } else {
        window.localStorage.removeItem('user-token')// 删除token缓存
        this.$router.push('/login')// 回到登录页
      }
    }
  },
  created () {
    const token = localStorage.getItem('user-token') // 从缓存中取出token值
    // 获取用户信息
    this.$axios({
      url: '/user/profile',
      //   请求头参数
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      // 将获取到的用户信息赋值给data中的对象
      this.userInfo = result.data.data
    })
  }

}
</script>

<style lang='less' scoped>
.layout-header {
  height: 54px;
  .left {
    font-size: 20px;
    line-height: 58px;
    color: rgb(143, 143, 143)
  }
  .right {
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 12px;
    }
    .username{
        cursor: pointer;
        color: rgb(204, 204, 204)
    }
  }
}
</style>
