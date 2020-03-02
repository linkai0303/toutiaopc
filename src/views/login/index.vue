<template>
  <div class="login">
    <el-card class="box-card">
      <div class="logo">
        <img src="../../assets/logo_index.png" alt />
      </div>
      <!-- 绑定表单数据对象 -->
      <el-form :model="loginForm" :rules="loginRules">
        <!-- prop属性匹配对应字段名 -->
        <el-form-item prop="mobile" class="item">
          <!--  v-model双向绑定数据 -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code" class="item">
          <el-input v-model="loginForm.code" placeholder="验证码" class="check"></el-input>
          <el-button plain class="send">发送验证码</el-button>
        </el-form-item>
        <el-checkbox prop="checked" v-model="checked" class="item">
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
export default {
  data () {
    return {
      // 表单数据对象
      loginForm: {
        mobile: '',
        code: '',
        checked: false
      },
      // 配置表单验证规则
      loginRules: {
        // 手机号规则验证
        mobile: [
          { required: true, message: '请输入您的手机号' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机格式有误' }
        ],
        // 验证码规则验证
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码有误' }
        ],
        // 复选框是否勾选
        checked: [
          // 自定义校验：value为true执行callback(),false执行callback(new Error())
          {
            validator: function (rule, value, callback) {
              value
                ? callback()
                : callback(new Error('请阅读用户协议和隐私条款'))
            }
          }
        ]
      }
    }
  }
}
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
