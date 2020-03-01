<template>
  <div class="login">
    <el-card class="box-card">
      <div class="logo">
        <img src="../../assets/logo_index.png" alt />
      </div>
      <el-form>
        <el-form-item class="item">
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item class="item">
          <el-input placeholder="验证码" class="check"></el-input>
          <el-button plain class="send">发送验证码</el-button>
        </el-form-item>
        <el-checkbox v-model="checked" class="item">
          我已阅读并同意
          <a href="#">用户协议</a>
          和
          <a href="#">隐私条款</a>
        </el-checkbox>
        <el-button type="primary" class="btn">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

// 设置less语言 并只对当前页面生效
<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/login_bg1.jpg");
  background-size: cover;
  .box-card {
    width: 577px;
    height: 357px;
    .logo {
      text-align: center;
      img {
        width: 230px;
        margin: 5px 0 0 10px;
      }
    }
    .btn {
      width: 100%;
    }
    .item {
      margin: 20px 0;
    }
    .check {
      width: 65%;
    }
    .send {
      float: right;
      width: 30%;
    }
    a {
      color: #409eff;
    }
  }
}
</style>
