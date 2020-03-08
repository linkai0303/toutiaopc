<template>
  <!-- 外层容器 -->
  <el-container>
    <!-- 左侧容器 -->
    <el-aside  style="width:220px;background-color:#252525">
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧外层容器 -->
    <el-container>
      <!-- 顶部容器 -->
      <el-header style="background-color: #222">
        <layout-header></layout-header>
      </el-header>
      <!-- 主体容器 -->
      <el-main style="padding:0">
        <!-- 二级路由容器 -->
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
