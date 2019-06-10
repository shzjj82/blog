<template>
  <div class="form-register-container">
    <el-form :model="formLabelAlign">
      <el-form-item class="form-item">
        <el-input v-model="formLabelAlign.name" class="input" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item class="form-item">
        <el-input v-model="formLabelAlign.password" class="input" placeholder="密码" type="password"></el-input>
      </el-form-item>
      <el-form-item class="form-item">
        <el-input
          v-model="formLabelAlign.againPassword"
          class="input"
          placeholder="确认密码"
          type="password"
        ></el-input>
      </el-form-item>
    </el-form>
     <el-button class="register-button form-item" type="primary">注册</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formLabelAlign: {
        name: "",
        password: "",
        againPassword: ""
      }
    };
  },
  mounted() {
    this.__init();
  },
  methods: {
    __init() {
      this.formLabelAlign.name = "";
      this.formLabelAlign.password = "";
      this.formLabelAlign.password = "";
    }
  }
};
</script>
<style lang="less" scoped>
.form-register-container {
  padding: 0 40px 36px;
  height: 280px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .form-item {
    margin-top: 16px;
    /deep/ .el-input__inner {
      border-top: 0;
      border-right: 0;
      border-left: 0;
    }
  }
  .register-button {
    width: 100%;
  }
}
</style>
