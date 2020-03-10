<template>
  <el-card class="articles">
    <bread-crumb slot="header">
      <template slot="title">文章列表</template>
    </bread-crumb>
    <!-- 搜索工具栏 筛选 -->
    <el-form style="padding-left:50px">
      <el-form-item label="文章状态 : ">
        <!-- 单选框组 -->
        <el-radio-group v-model="searchForm.status">
          <el-radio :label="5">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道类型 : ">
        <!-- 选择器 -->
        <el-select placeholder="请选择频道" v-model="searchForm.channel_id">
          <!-- 下拉选项组件 label=>显示值 value=>绑定值 -->
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日期范围 : ">
        <!-- 日期范围选择组件 -->
        <el-date-picker type="daterange" v-model="searchForm.dateRange"></el-date-picker>
      </el-form-item>
    </el-form>
    <!-- -------------------------文章主体结构 ---------------------------------->
    <el-row type="flex" class="total" align="middle">
      <span>共找到9999条符合条件的内容</span>
    </el-row>
    <div class="article-item" v-for="item in list" :key="item.id.toString()">
      <div class="left">
        <!-- 图片需要判断时,地址用require()的方式转化为变量 -->
        <img :src=" item.cover.images.length ? item.cover.images[0] : defaultImg " alt />
        <div class="info">
          <span>{{item.title}}</span>
          <!-- 根据状态值过滤当前标签类型和显示信息 -->
          <el-tag :type="item.status | filterType" class="tag">{{item.status | filterStatus}}</el-tag>
          <span class="date">{{item.pubdate}}</span>
        </div>
      </div>
      <div class="right">
        <span>
          <i class="el-icon-edit"></i> 修改
        </span>
        <span>
          <i class="el-icon-delete"></i> 删除
        </span>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      // 表单数据对象
      searchForm: {
        // 文章状态:0-草稿;1-待审核;2-审核通过;3-审核失败;4-已删除;5-不传为全部
        status: 5,
        channel_id: null // 频道列表
      },
      channels: [], // 接收频道列表的数据
      dateRange: [], // 接收频道的数据
      list: [], // 接收文章列表
      defaultImg: require('@/assets/yourname.jpeg') // 图片地址对应文件赋值给变量
    }
  },
  //   专门处理 显示格式
  filters: {
  // 文章状态过滤器:0-草稿;1-待审核;2-审核通过;3-审核失败
    filterStatus (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'
      }
    },
    // 根据状态显示不同的tag标签
    filterType (value) {
      switch (value) {
        case 0:
          return 'warning'
        case 1:
          return 'info'
        case 2:
          return ''
        case 3:
          return 'danger'
      }
    }
  },
  methods: {
    //   获取文章列表
    getArticles () {
      this.$axios({
        url: '/articles'
      }).then(result => {
        this.list = result.data.results
      })
    },
    //   获取频道数据
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    }
  },
  created () {
    this.getChannels() // 调用获取频道数据
    this.getArticles() // 调用获取文章列表
  }
}
</script>

<style lang='less' scoped>
.articles {
  .total {
    height: 60px;
    border-bottom: 1px dashed #ccc;
  }
  .article-item {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    .left {
      display: flex;
      img {
        width: 180px;
        height: 100px;
        border-radius: 4px;
      }
      .info {
        display: flex;
        flex-direction: column;
        height: 100px;
        justify-content: space-around;
        margin-left: 10px;
        .date {
          color: #999;
          font-size: 14px;
        }
        .tag {
          width: 60px;
          text-align: center;
        }
      }
    }
    .right {
      span {
        font-size: 14px;
        margin-right: 12px;
        cursor: pointer;
        user-select: none;
      }
    }
  }
}
</style>
