<template>
  <el-row class="layout-header">
    <el-col :span="12" class="left">
        <i class='el-icon-s-fold'></i>
        <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col :span="12" class="right">
        <el-row type="flex" justify="end" align="middle">
        <img src="http://img11.360buyimg.com/n1/jfs/t15874/299/1681080569/87898/230d995/5a5c5c4eN365116fa.jpg" alt="">
        <el-dropdown trigger="click">
            <span>abc</span>
            <el-dropdown-menu slot="dropdown" >
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>git地址</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.layout-header {
  height: 55px;
  .left{
      font-size: 20px;
      line-height: 55px;
  }
  .right{
      img{
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin-right: 5px
      }
  }
}
</style>
