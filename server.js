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

// 静态资源配置
app.use(express.static(__dirname + '/public'));// express托管静态文件，并设置静态文件目录
app.use('/', express.static(__dirname +'/public')); // 设置静态文件可访问的地址

// 服务端渲染配置


// use router
app.use('/', require('./routers/index'));

http.createServer(app).listen(800);

console.log('Server running on http://localhost:800');