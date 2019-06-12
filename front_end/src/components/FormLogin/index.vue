<template>
  <div class="form-login-container">
    <el-form :model="formLabelAlign">
      <el-form-item class="form-item">
        <el-input v-model="formLabelAlign.username" class="input" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item class="form-item">
        <el-input
          v-model="formLabelAlign.password"
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
import api from "@/common/api";
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      formLabelAlign: {
        username: "",
        password: "",
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
    toggle() {
      this.isShowPassword = !this.isShowPassword;
    },
    async login() {
      let url = api.user.login();
      let data = {
        username: this.formLabelAlign.username,
        password: this.formLabelAlign.password
      };
      let res = await this.$http.post(url, data);
      let { success ,data:{token} } = res.data;
      if(success){
       this.setToken(token);
       this.$router.push('/')
      }
     
    },
    ...mapMutations({setToken:'SET_TOKEN'})
  }
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
  .el-form-item {
    margin-top: 16px;
    /deep/ .el-input__inner {
      border-top: 0;
      border-right: 0;
      border-left: 0;
    }
    /deep/ .el-input__icon {
      margin-right: 10px;
      font-size: 24px;
    }
  }
  .forget-wrapper {
    display: flex;
    justify-content: space-between;
    .forget {
      color: grey;
      font-size: 14px;
    }
  }
  .login-button {
    width: 100%;
  }
}
</style>
