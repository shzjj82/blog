<template>
  <div class="form-login-container">
    <el-form :model="formLabelAlign">
      <el-form-item class="form-item">
        <el-input v-model="formLabelAlign.name" class="input" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item class="form-item">
        <el-input
          v-model="formLabelAlign.region"
          class="input"
          placeholder="密码"
          :type="passwordType"
        >
          <i class="el-icon-view el-input__icon" slot="suffix" @click="toggle"></i>
        </el-input>
      </el-form-item>
      <div class="forget-wrapper form-item">
        <div></div>
        <div class="forget">忘记密码?</div>
      </div>
    </el-form>
    <el-button class="login-button" type="primary" @click="login">登录</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      isShowPassword: true
    };
  },
  computed: {
    passwordType() {
      return this.isShowPassword ? "password" : "text";
    }
  },
  methods: {
      toggle(){
          this.isShowPassword = ! this.isShowPassword;
      },
      login(){
          this.$router.push('/')
      }
  },
};
</script>
<style lang="less" scoped>
.form-login-container {
  padding: 0 40px 36px;
  height: 280px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .el-form-item{
    margin-top: 16px;
    /deep/ .el-input__inner {
      border-top: 0;
      border-right: 0;
      border-left: 0;
    }
    /deep/ .el-input__icon{
        margin-right: 10px;
        font-size: 24px;
    }
  }
  .forget-wrapper{
      display: flex;
      justify-content: space-between;
      .forget{
          color: grey;
          font-size: 14px;
      }
  }
  .login-button{
      width: 100%;
  }
}
</style>
