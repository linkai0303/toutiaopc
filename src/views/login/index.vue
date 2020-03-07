<template>
  <div class="login">
    <el-card class="box-card">
      <div class="logo">
        <img src="../../assets/logo_index.png" alt />
      </div>
      <!-- 绑定表单数据对象  绑定表单验证规则 获取form组件节点-->
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
        <!-- prop属性匹配对应字段名 -->
        <el-form-item prop="mobile" class="item">
          <!--  v-model双向绑定数据 -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code" class="item">
          <el-input v-model="loginForm.code" placeholder="验证码" class="check"></el-input>
          <el-button plain class="send">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="checked" class="item">
          <el-checkbox v-model="loginForm.checked">
            我已阅读并同意
            <a href="#">用户协议</a>
            和
            <a href="#">隐私条款</a>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary" class="btn">登录</el-button>
        </el-form-item>
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
        checked: true
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
        // 自定义校验：value为true执行callback(),false执行callback(new Error())
        checked: [
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
  },
  methods: {
    login () {
      this.$refs.loginForm.validate().then(() => {
        // 调用接口,
        this.$axios({
          url: '/authorizations',
          data: this.loginForm,
          method: 'post'
        })
          .then(result => {
            // 前端持久化 将token存于 本地缓存
            console.log(result.data)
            window.localStorage.setItem('user-token', result.data.token)
            // 验证成功=>跳转到主页 (编程式导航)
            this.$router.push('/')
          })
          .catch(() => {
            // 验证错误 弹出提示框
            this.$message.error('手机号或验证码错误')
          })
      })
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
    background-color: rgba(71, 144, 212, 0.2);
    border: 1px solid rgba(181, 208, 233, 0.3);
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
