/**
 * NodeJs服务器启动文件
 * 使用: node server.js
 */
const http = require('http'),
      express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      sql = require('./config/mysql');

// post 请求处理
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// use router
app.use('/', require('./routers/index'));

http.createServer(app).listen(800);

console.log('Server running on http://localhost:800');