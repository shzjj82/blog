'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async query() {
        let { page, size } = this.ctx.query;

        let response = await this.ctx.model.Note.find().skip((page / 1) * size / 1).limit(size / 1).select('-_id').populate({ path: 'author', select: 'nickname -_id' }).exec();
        this.ctx.status = 201;
        this.ctx.body = {
            success: true,
            list: response
        }
    }
    async find() {
        this.ctx.status = 201;
        this.ctx.body = {};
    }
}

module.exports = HomeController;
