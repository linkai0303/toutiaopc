<template>
  <el-card>
    <!-- 放置面包屑组件 -->
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <el-row type="flex" justify="end">
      <!-- 上传组件必须传action属性 -->
      <el-upload action :http-request="uploudImg" :show-file-list="false">
        <el-button size="small" type="primary">上传素材</el-button>
      </el-upload>
    </el-row>

    <!-- 放置标签页 v-model所绑定的值就是当前激活的页签 -->
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部素材" name="all">
        <div class="img-list">
          <el-card v-for="(item,index) in list" :key="item.id" class="img-card">
            <img :src="item.url" @click="selectImg(index)" />
            <el-row class="operate" type="flex" align="middle" justify="space-around">
              <i
                @click="collectOrCancel(item)"
                :style="{color: item.is_collected ? 'red' : 'black'}"
                class="el-icon-star-on"
              ></i>
              <i @click="delMaterial(item)" class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="收藏素材" name="collect">
        <div class="img-list">
          <el-card v-for="(item,index) in list" :key="item.id" class="img-card">
            <img :src="item.url" @click="selectImg(index)" />
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-row type="flex" justify="center" align="middle" style="height:80px">
      <el-pagination
        background
        :total="page.total"
        :current-page="page.currentpage"
        :page-size="page.pageSize"
        layout="prev,pager,next"
        @current-change="changePage"
      ></el-pagination>
    </el-row>
    <!-- 弹层组件 通过visible属性控制显示隐藏  -->
    <el-dialog @opened="openEnd" :visible="dialogVisible" @close="dialogVisible = false">
      <!-- 走马灯组件 -->
      <el-carousel ref="myCarousel" indicator-position="outside" height="400px">
        <!-- 循环生成当前list图片 -->
        <el-carousel-item v-for="item in list" :key="item.id">
          <img :src="item.url" alt style="width:100%;height:100%" />
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
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
        pageSize: 8 // 每页多少条
      },
      dialogVisible: false, // 控制弹层显示隐藏
      clickIndex: -1 // 点击的索引
    }
  },
  methods: {
    //   定义图层打开结束后的方法
    openEnd () {
      this.$refs.myCarousel.setActiveItem(this.clickIndex) // 设置当前点击的index
    },
    // 点击图片的时候调用
    selectImg (index) {
      this.clickIndex = index // 记录索引并赋值
      this.dialogVisible = true // 打开图层
    },
    //   收藏或取消方法
    collectOrCancel (row) {
      // 调用收藏或取消接口
      this.$axios({
        url: `/user/images/${row.id}`,
        method: 'put',
        data: {
          collect: !row.is_collected // 收藏或取消收藏根据当前状态取反得到
        } // body参数
      })
        .then(() => {
          this.getMeterial() // 成功重新加载
        })
        .catch(() => {
          this.$message.error('操作失败') // 提示消息
        })
    },
    //   删除素材犯法
    delMaterial (row) {
      this.$confirm('您确定要删除此图片吗？', '提示').then(() => {
        this.$axios({
          url: `/user/images/${row.id}`,
          method: 'delete'
        })
          .then(() => {
            this.getMeterial() // 成功重新加载
          })
          .catch(() => {
            this.$message.error('操作失败') // 提示消息
          })
      })
    },
    //   定义一个上传组件的方法
    uploudImg (params) {
      const data = new FormData() // 实例化一个formData
      data.append('image', params.file) // 加入文件参数
      this.$axios({
        url: '/user/images',
        method: 'post',
        data
      })
        .then(() => {
          this.getMeterial()
        })
        .catch(() => {})
    },
    // 页面切换时执行
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMeterial()
    },
    // 获取素材数据
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
    // 标签切换时执行
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
