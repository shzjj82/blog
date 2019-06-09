const CONFIG  = require('../common/config')
module.exports = (options, app) => {
    return async function handleToken(ctx, next) {
        let { token } = ctx.request.headers;
        let result = await app.redis.get(token);
        if(!result){
            return ctx.body = ctx.helper.getFailedResponse({ msg: '登录状态失效', code: CONFIG.USER.LOST_TOKEN });
        }
        app.redis.expire(token,100);
        ctx.query.__user = result ;
        await next();
    }
}