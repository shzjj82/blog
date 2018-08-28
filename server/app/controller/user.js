'use strict';
const jwt = require('jsonwebtoken');
const fs = require('fs')
const path = require('path')
const Controller = require('egg').Controller;
function generateToken(data, time) {
  let created = Math.floor(Date.now() / 1000);
  let cert = fs.readFileSync(path.join(__dirname, '../public/rsa_private_key.pem'));//私钥
  let token = jwt.sign({
    data,
    exp: created + time
  }, cert, { algorithm: 'RS256' });
  return token;
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

class HomeController extends Controller {
  async login() {
    let { app, ctx } = this;
    let { query, request } = ctx;
    let { username, password } = request.body;
    let user = await ctx.model.User.findOne({ email: username, password }).select('-password').exec();
    let time = 24 * 60 * 1000 * 60;
    let token = generateToken({ user: user, time: Date.now() + time }, time);
    app.redis.set(username, token);
    ctx.body = {
      success: true,
      token: token
    }
      ;
  }
}

module.exports = HomeController;
