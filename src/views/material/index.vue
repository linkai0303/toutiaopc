<template>
  <el-card>
    <!-- 放置面包屑组件 -->
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <!-- 放置标签页 v-model所绑定的值就是当前激活的页签 -->
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部素材" name="all">
        <div class="img-list">
          <el-card v-for="item in list" :key="item.id" class="img-card">
            <img :src="item.url" alt />
            <el-row class="operate" type="flex" align="middle" justify="space-around">
              <i class="el-icon-star-on"></i>
              <i class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="收藏素材" name="collect">
        <div class="img-list">
          <el-card v-for="item in list" :key="item.id" class="img-card">
            <img :src="item.url" alt />
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-row type="flex" justify="center" align="middle" style="height:80px">
        <el-pagination background
         :total="page.total"
        :current-page="page.currentpage"
        :page-size="page.pageSize"
        layout="prev,pager,next"
        @current-change="changePage"
        ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all', // 当前激活的页签
      list: [], // 用来接收全部素材
      page: {
        currentPage: 1, // 默认加载第一页
        total: 0, // 当前总数
        pageSize: 8// 每页多少条
      }
    }
  },
  methods: {
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMeterial()
    },
    getMeterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect', // 根据当前activeName 决定获取的数据是否为收藏数据
          page: this.page.currentPage, // 获取当前页码中的数据
          per_page: this.page.pageSize // 获取每页数量
        },
        data: {}
      }).then(result => {
        this.list = result.data.results // 将返回的数据赋值到data中的数据
        this.page.total = result.data.total_count // 将素材总数赋值给当前总数
      })
    },
    changeTab () {
      // 将页码重置为第一页
      this.page.currentPage = 1
      this.getMeterial()
    }
  },
  created () {
    this.getMeterial()
  }
}
</script>

<style lang="less" scoped>
.img-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .img-card {
    position: relative;
    width: 220px;
    height: 240px;
    margin: 20px 50px;
    img {
      width: 100%;
      height: 100%;
    }
    .operate {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 30px;
      background-color: #f4f5f6;
      i {
        font-size: 20px;
      }
    }
  }
}
</style>
