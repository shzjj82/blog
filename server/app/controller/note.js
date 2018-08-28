'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    /**
     * 文章列表 已Ok
     */
    async query() {
        let { page, size } = this.ctx.query;
        let response = await this.ctx.model.Note.find().skip((page / 1) * size / 1).limit(size / 1).select().populate({ path: 'author', select: 'nickname -_id' }).exec();
        this.ctx.status = 201;
        this.ctx.body = {
            success: true,
            list: response
        }
    }
    async find() {
        let { ctx } = this;
        let { id } = ctx.query;
        let response = await ctx.model.findOne({ _id: id }).select('-_id').exec();
        ctx.status = 201;
        ctx.body = {
            success: true,
            ...response
        }
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

module.exports = HomeController;
