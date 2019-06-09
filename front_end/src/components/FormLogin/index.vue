<template>
  <div class="form-login-container">
    <el-form :model="formLabelAlign">
      <el-form-item class="form-item">
        <el-input v-model="formLabelAlign.name" class="input" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item class="form-item">
        <el-input v-model="formLabelAlign.region" class="input" placeholder="密码" :type='passwordType'></el-input>
      </el-form-item>
      <div class="forget-wrapper form-item">
          <div></div>
          <div class="forget">忘记密码?</div>
      </div>
      <el-button class="login-button form-item" type='primary'>登录</el-button>
    </el-form>
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
      isShowPassword:true,
    };
  },
  computed: {
      passwordType(){
          return this.isShowPassword?"password":"text"
      }
  },
};
</script>
<style lang="less" scoped>
.form-login-container {
  padding: 0 40px 36px;
  .form-item {
    margin-top: 16px;
    /deep/ .el-input__inner {
      border-top: 0;
      border-right: 0;
      border-left: 0;
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
