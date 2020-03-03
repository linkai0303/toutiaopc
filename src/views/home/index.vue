<template>
  <!-- 外层容器 -->
  <el-container>
    <!-- 左侧容器 -->
    <el-aside>
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧外层容器 -->
    <el-container>
      <!-- 顶部容器 -->
      <el-header>
        <layout-header></layout-header>
      </el-header>
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
// 引入侧边栏组件
import LayoutAside from '@/components/home/layout-aside'
import LayoutHeader from '@/components/home/layout-header'

export default {
  components: {
    'layout-aside': LayoutAside,
    'layout-header': LayoutHeader
  }
}
</script>

<style>
</style>
