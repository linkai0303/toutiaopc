<template>
  <el-card>
    <!-- 卡片头部放置一个面包屑组件 -->
    <bread-crumb slot="header">
      <template slot="title">评论管理</template>
    </bread-crumb>
    <!-- 表格组件 -->
    <el-table :data="list">
      <el-table-column width="800" prop="title" label="标题"></el-table-column>
      <!-- table中不显示布尔值 用formatter属性用来格式化内容 -->
      <el-table-column :formatter="formatterBool" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝论数"></el-table-column>
      <el-table-column label="操作">
          <el-button type="text">修改</el-button>
          <el-button type="text">关闭评论</el-button>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getComment () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment'// 控制获取数据类型
        }
      }).then(result => {
        this.list = result.data.results
      })
    },
    // 格式化布尔值
    formatterBool (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>
</style>
