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
    <div class="article-item" v-for="item in 100" :key="item">
        <div class="left">
            <img src="http://img3.imgtn.bdimg.com/it/u=1027914118,3873084687&fm=11&gp=0.jpg" alt="">
            <div class="info">
                <span>标-----------题</span>
                <el-tag class="tag">已发表</el-tag>
                <span class="date">2020-02-18 22:22:22</span>
            </div>
        </div>
        <div class="right">
            <span> <i class="el-icon-edit"></i> 修改</span>
            <span> <i class="el-icon-delete"></i> 删除</span>
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
      dateRange: [] // 接收频道的数据
    }
  },
  methods: {
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
    this.getChannels()
  }
}
</script>

<style lang='less' scoped>
.articles {
  .total {
    height: 60px;
    border-bottom: 1px dashed #ccc;
  }
  .article-item{
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
      .left{
          display: flex;
          img{
              width: 180px;
              height: 100px;
              border-radius: 4px;
          }
          .info{
              display: flex;
              flex-direction: column;
              height: 100px;
              justify-content: space-around;
              margin-left: 10px;
              .date{
                  color: #999;
                  font-size: 14px;
              }
              .tag{
                  width: 60px;
                  text-align: center;
              }
          }
      }
      .right{
          span{
              font-size: 14px;
              margin-right: 12px;
              cursor: pointer;
              user-select: none;
          }
      }
  }
}
</style>
