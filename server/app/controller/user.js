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
}

module.exports = Usercontroller;
