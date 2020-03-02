<template>
  <!-- 外层容器 -->
  <el-container>
    <!-- 左侧容器 -->
    <el-aside>我是左侧容器</el-aside>
    <!-- 右侧外层容器 -->
    <el-container>
      <!-- 顶部容器 -->
      <el-header>我是顶部容器</el-header>
      <!-- 主体容器 -->
      <el-main>
        <!-- 二级路由容器 -->
        我是二级路由容器
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style>
</style>
