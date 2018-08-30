const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken');

module.exports = (options, app) => {
    return async function userInterceptor(ctx, next) {
        //获取token
        let { headers } = ctx.request;
        let { username, token } = headers;
        if (token) {
            let { user } = verifyToken(token) //解密token
            let { _id } = user //检查是否有用户_id
            if (_id) {
                let redis_token = await app.redis.get(username) // 获取redis中的token
                let redis_user = verifyToken(redis_token).user;
                //验证是否为最新的token
                if (_id === redis_user._id) {
                    ctx.user = { _id }
                    await next();
                } else {
                    // 如果不是最新token，则代表用户在另一个机器上进行操作，需要用户重新登录保存最新token
                    ctx.body = {
                        status: 1,
                        message: '您的账号已在其他机器保持登录，如果继续将清除其他机器的登录状态'
                    }
                }
            } else {
                // 如果token不合法，则代表客户端token已经过期或者不合法（伪造token）
                ctx.body = {
                    status: 1,
                    message: '您的登录状态已过期，请重新登录'
                }
            }
        } else {
            // 如果token为空，则代表客户没有登录
            ctx.body = {
                status: 1,
                message: '您还没有登录，请登陆后再进行操作'
            }
        }
    };
}

function verifyToken(token) {
    let cert = fs.readFileSync(path.join(__dirname, '../public/rsa_public_key.pem'));//公钥
    let res = ''
    try {
        let result = jwt.verify(token, cert, { algorithms: ['RS256'] }) || {};
        let { exp, iat } = result, current = Math.floor(Date.now() / 1000);
        if (current <= exp) {
            res = result.data || {};
        }
    } catch (e) {
        console.log(e);
    }
    return res;
}