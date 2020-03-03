<template>
  <div class="layout-aside">
    <div class="title">
      <img src="@/assets/logo_admin.png" alt />
    </div>
    <!-- 开启路由模式 -->
    <el-menu class="menu" router background-color="#252525" text-color="#adafb5" >
        <!-- 配置index属性作为跳转路径 -->
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-grid"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item index='/home/publish'>发布文章</el-menu-item>
        <el-menu-item index='/home/articles'>内容列表</el-menu-item>
        <el-menu-item index='/home/comment'>评论列表</el-menu-item>
        <el-menu-item index='/home/material'>素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-monitor"></i>
          <span slot="title">粉丝管理</span>
        </template>
        <el-menu-item index='/home/picture'>图文数据</el-menu-item>
        <el-menu-item index='/home/fansinfo'>粉丝概况</el-menu-item>
        <el-menu-item index='/home/fansphoto'>粉丝画像</el-menu-item>
        <el-menu-item index='/home/fanslist'>粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item index='/home/account'>
        <i class="el-icon-user-solid"></i>
        <span>账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.layout-aside {
  height: 100vh;
  width: 220px;
  background-color: #252525;
  .title {
    padding: 11px 0;
    text-align: center;
    background-color: #2e2f32;
    img {
      height: 34px;
    }
  }
  .menu {
    border-right: none;
  }
}
</style>
