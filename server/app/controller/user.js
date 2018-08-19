'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // console.log(this.ctx.model.User.findOne());
    this.ctx.body = await this.ctx.model.User.find().sort({ _id: -1 }).exec()
    // this.ctx.body = 'hello world !!!'
  }
}

module.exports = HomeController;
