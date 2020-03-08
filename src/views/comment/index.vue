<template>
  <el-card v-loading="loading">
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
        <template slot-scope="obj">
          <el-button type="text">修改</el-button>
          <el-button @click="openOrClose(obj.row)" type="text">{{obj.row.comment_status ? '关闭' : '打开'}}评论</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="height:80px" type='flex' align="middle" justify="center">
        <!-- 分页组件 -->
    <el-pagination background layout="prev, pager, next" :total="page.total" :current-page ="page.currentPage" :page-size="page.pageSize" @current-change="changePage"></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      page: {
        total: 0, // 默认总页数
        currentPage: 1, // 当前页码
        pageSize: 10 // 每页条数
      },
      loading: false // 控制这招层的显示隐藏
    }
  },
  methods: {
    // 页码改变事件 newPage为最新的切换页码
    changePage (newPage) {
      this.page.currentPage = newPage // 最新页码赋值给当前页码
      this.getComment()
    },
    //   获取评论数据
    getComment () {
      this.loading = true // 请求之前打开遮罩层
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment', // 控制获取数据类型
          page: this.page.currentPage, // 查第一页数据
          per_page: this.page.pageSize// 每页查十条
        }
      }).then(result => {
        this.list = result.data.results// 将数据赋值给list
        this.page.total = result.data.total_count // 将总数赋值
        this.loading = false // 请求结束关闭遮罩层
      })
    },
    // 格式化布尔值
    formatterBool (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },
    // 开火或关闭评论
    openOrClose (row) {
      const mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`否确定${mess}评论`, '提示').then(() => {
        this.$axios({
          url: '/comments/status',
          method: 'put',
          params: {
            // query参数
            article_id: row.id.toString()// 要求参数的文章id 将BigNumber类型转为字符串
          },
          data: {
            // body参数
            allow_comment: !row.comment_status
          }
        }).then(() => {
          this.$message.success(`${mess}评论成功`)
          this.getComment()// 重新获取数据
        }).catch(() => {
          this.$message.error(`${mess}评论失败`)
        })
      })
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>
</style>
