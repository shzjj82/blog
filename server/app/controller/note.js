'use strict';

const Controller = require('egg').Controller;
const CONFIG = require('../common/config');

class NoteController extends Controller {
    /**
     * 文章列表 已Ok
     */
    async query() {
        let { app , ctx } = this;
        let { page, size } = this.ctx.query;
        let result = await this.ctx.model.Note.find().skip((page / 1) * size / 1).limit(size / 1).select().populate({ path: 'author', select: 'nickname -_id' }).exec();
        return ctx.body = ctx.helper.getSuccessResponse({code:CONFIG.NOTE.ERR_OK, data:{list:result}});
    }

    /**
     * 删除文章 已Ok
     */
    async delete() {
        let { ctx } = this;
        let { id } = ctx.query;
        let { _id } = ctx.user;
        let { author } = await this.ctx.model.Note.findOne({ _id: id });
        if (_id == author) {
            let response = await this.ctx.model.Note.remove({ _id: id });
            ctx.status = 201;
            ctx.body = {
                success: true
            }
        } else {
            ctx.status = 201;
            ctx.body = {
                success: false,
                msg: '你没有删除文章权限'
            }
        }

    }

    /**
     * 创建文章已OK
     */
    async create() {
        let { ctx } = this;
        let { content, title } = ctx.query;
        let { _id } = ctx.user;
        let date = new Date().getTime();
        let response = await ctx.model.Note.create({ title: title, content: content, update_date: date, create_date: date, author: Object(_id) });
        ctx.status = 201;
        ctx.body = {
            success: true
        }
    }
}

module.exports = NoteController;
