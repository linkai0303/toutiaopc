<template>
  <el-card>
    <!-- 卡片头部放置一个面包屑组件 -->
    <bread-crumb slot="header">
      <template slot="title">评论管理</template>
    </bread-crumb>
    <!-- 表格组件 -->
    <el-table :data="list">
      <el-table-column width="800"  label="标题"></el-table-column>
      <el-table-column  label="评论状态"></el-table-column>
      <el-table-column  label="总评论数"></el-table-column>
      <el-table-column  label="粉丝论数"></el-table-column>
      <el-table-column  label="操作"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [

      ]
    }
  }
}
</script>

<style>
</style>
