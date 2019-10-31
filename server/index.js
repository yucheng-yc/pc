const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const user=require("./router/user");
const cors=require("cors");
const session = require('express-session')
 
// 静态资源托管
server.use(express.static(__dirname+"/public"));
server.use(bodyParser.urlencoded({extended:false}));

server.use(cors({
  // 允许程序列表
  origin:['http://localhost:8080','http://127.0.0.1:8080'],  
  // 每次请求需要验证
  credentials:true
}));


server.use(session({
  // 安全字符串
  secret: 'keyboard cat',
  // 请求时更新数据
  resave: true,
  // 保存初始数据
  saveUninitialized: true,
  cookie: { secure: true }
}))

server.get('/', function (req, res) {
  res.sendFile(__dirname+'/public/1.html');
})
 
server.listen(5050,()=>{
    console.log("server is running");
    console.log('Port is 5050');
})

server.use("/user",user);