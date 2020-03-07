<template>
<!-- 封装面包屑组件 设置分割符为>-->
  <el-breadcrumb separator=">">
      <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
      <!-- 第二个选项为动态的,使用slot插槽传值 -->
      <el-breadcrumb-item>
          <slot name="title"></slot>
      </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style>

</style>
