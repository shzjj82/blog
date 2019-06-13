<template>
  <div class="form-register-container" >
    <el-form :model="formLabelAlign" :rules="rules" ref='form'> 
      <el-form-item class="form-item" prop="username">
        <el-input v-model="formLabelAlign.username" class="input" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item class="form-item" prop='password'>
        <el-input v-model="formLabelAlign.password" class="input" placeholder="密码" type="password"></el-input>
      </el-form-item>
      <el-form-item class="form-item" prop='confirmPassword'>
        <el-input
          v-model="formLabelAlign.confirmPassword"
          class="input"
          placeholder="确认密码"
          type="password"
        ></el-input>
      </el-form-item>
    </el-form>
     <el-button class="register-button form-item" type="primary" @click='register'>注册</el-button>
  </div>
</template>
<script>
import api from '@/common/api';
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      formLabelAlign: {
        username: "",
        password: "",
        confirmPassword: ""
      },
       rules: {
         username:[{
           type:'email',message:'请输入正确的邮箱',trigger: 'blur'
         }],
         password:[
           {required:true,message:'请输入密码', trigger: 'blur'},
         ],
         confirmPassword:[{
           required: true,validator:this.validatePass,trigger: 'blur'
         }]
       }
    };
  },
  mounted() {
    this.__init();
  },
  methods: {
    __init() {
      this.formLabelAlign.username = "";
      this.formLabelAlign.password = "";
      this.formLabelAlign.confirmPassword = "";
    },
    validatePass(rule, value, callback){
      if (value !== this.formLabelAlign.password) {
        callback(new Error('两次输入密码不一致!'))
      }
	  },
    async register(){
      let url = api.user.register();
      let data = {
        username:this.formLabelAlign.username,
        password:this.formLabelAlign.password,
      }
      let res = await this.$http.post(url,data);
      let { success,msg } = res.data;
      if(success){
        this.$message({
          showClose: true,
          message: msg,
          type: 'success'
        });
       let {data:{token}} = res.data;
       this.setToken(token);
       return this.$router.push('/')
      }
     this.$message({
        showClose: true,
        message: msg,
        type: 'error'
      });
    },
     ...mapMutations({setToken:'SET_TOKEN'})
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
