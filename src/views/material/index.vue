<template>
  <el-card>
      <!-- 放置面包屑组件 -->
      <bread-crumb slot="header">
        <template slot="title">
            素材管理
        </template>
      </bread-crumb>
      <!-- 放置标签页 v-model所绑定的值就是当前激活的页签 -->
      <el-tabs v-model="activeName">
          <el-tab-pane label="全部素材" name="all">
              全部
          </el-tab-pane>
          <el-tab-pane label="收藏素材" name="collect">
              收藏
          </el-tab-pane>
      </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all'// 当前激活的页签
    }
  }
}
</script>

<style>

</style>
