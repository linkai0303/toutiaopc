<template>
  <div class="layout-aside">
    <div class="title">
      <img src="@/assets/logo_admin.png" alt />
    </div>
    <el-menu class="menu" background-color="#323745" text-color="#adafb5" active-text-color="#fff">
      <el-menu-item>
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </el-menu-item>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-s-grid"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item>发布文章</el-menu-item>
        <el-menu-item>内容列表</el-menu-item>
        <el-menu-item>评论列表</el-menu-item>
        <el-menu-item>素材管理</el-menu-item>
      </el-submenu>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-monitor"></i>
          <span slot="title">粉丝管理</span>
        </template>
        <el-menu-item>图文数据</el-menu-item>
        <el-menu-item>粉丝概况</el-menu-item>
        <el-menu-item>粉丝画像</el-menu-item>
        <el-menu-item>粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item>
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
  background-color: #323745;
  .title {
    padding: 12px 0;
    text-align: center;
    background-color: #2e2f32;
    img {
      height: 30px;
    }
  }
  .menu {
    border-right: none;
  }
}
</style>
