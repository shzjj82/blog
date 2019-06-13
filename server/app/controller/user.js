'use strict';
const Controller = require('egg').Controller;
const CONFIG = require('../common/config');

class Usercontroller extends Controller {
  async login() {
    let { app, ctx, config } = this;
    let { username, password } = ctx.request.body;
    try {
      ctx.validate({
        username: { type: 'email' },
        password: { type: 'password' },
      });
      let user = await ctx.model.User.findOne({ username, password }).select('-password').exec();
      user = JSON.parse(JSON.stringify(user));
      if (!user) {
        throw Error('请输入正确的账号与密码');
      }
      let token = ctx.helper.getToken();
      app.redis.set(token, user);
      app.redis.expire(token,config.LOGON_DURATION);
      return ctx.body = ctx.helper.getSuccessResponse({msg:'登录成功',code:CONFIG.USER.ERR_OK,data:{token}})
    }catch(err){
      return ctx.body = ctx.helper.getFailedResponse({ msg: '请输入正确的账号与密码', code: CONFIG.USER.ERR_NOK });
    }
  }

  async register(){
    let { app,ctx,config } = this;
    let { username,password } = ctx.request.body;
    // 校验账号是否符合规范
    try{
      ctx.validate({
        username:{type:'email'},
        password:{ type: 'password'}
      })
    }catch(err){
      return ctx.body = ctx.helper.getFailedResponse({ msg: '请输入正确的账号与密码', code: CONFIG.USER.ERR_NOK });
    }

    // 检测账号是否存在
    let exist = await ctx.model.User.findOne({ username, password }).select('-password').exec();
    if(exist){
      return ctx.body = ctx.helper.getFailedResponse({ msg: '该用户已经存在', code: CONFIG.USER.EXIST});
    }else{
      await ctx.model.User.create({ username, password })
      let user = await ctx.model.User.findOne({ username, password }).select('-password').exec();
      let token = ctx.helper.getToken();
      app.redis.set(token, user);
      app.redis.expire(token,config.LOGON_DURATION);
      return ctx.body = ctx.helper.getSuccessResponse({msg:'注册成功',code:CONFIG.USER.ERR_OK,data:{token}})
    }

  }
}

module.exports = Usercontroller;
