// 导入express
const express = require('express');
// 导入express的中间件
const bodyParser = require('body-parser');


// 导入 路由模块
const user=require("./router/user");
// 导入cors 解决跨域
const cors=require("cors");
// 导入session模块 
const session = require('express-session')

// 导入request-promise模块
// const rq =require("request-promise");
// // 导入数据分析模块
// const cheerio =require("cheerio");

// 创建express服务器
const server = express();

 
// 设置静态资源托管
server.use(express.static(__dirname+"/public"));
// 挂载中间件
server.use(bodyParser.urlencoded({
  extended:false
}));

// 设置跨域 请求头
server.use(cors({
  // 允许程序列表
  origin:['http://localhost:8080','http://127.0.0.1:8080'],  
  // 每次请求需要验证
  credentials:true
}));

// 设置session
server.use(session({
  // 安全字符串
  secret: 'keyboard cat',
  // 请求时更新数据
  resave: true,
  // 保存初始数据
  saveUninitialized: true,
  cookie: { secure: true }
}))

// 设置静态托管
server.get('/', function (req, res) {
  res.sendFile(__dirname+'/public/1.html');
})

 // 开始服务器监听 
server.listen(5050,()=>{
    console.log("server is running");
    console.log('Port is 5050');
})
// 挂载路由器
server.use("/user",user);





// var opttions={
//   uri:"https://www.xinpianchang.com/square"
// }

// // 开始发送ajax请求
// rq(opttions).then((res)=>{
//   // 获取到数据
//   // console.log(res);
//   var $=cheerio.load(res);
//   // 这是推荐模块数据分析

//   //1 标题信息获取
//       var titleList=[];
//       // 标题获取
//         // 主标题
//         titleList.push($(".real-staff-pisk .title-wrap>span:nth-child(1)").text());
//         // 副标题
//         titleList.push($(".real-staff-pisk .title-wrap>span:nth-child(2)").text());
//         // 链接信息获取
//         titleList.push($(".real-staff-pisk .title-wrap>a").attr("href"));
//   //2 正文内容获取
//       var comtentList=[];
//         // 
//         // comtentList.push($(".real-staff-pisk")
//         // .find(".video-cover>img")
//         // .attr("src"));

//         comtentList.push($(".fs_12.fw_300.c_w_f.desc").text());
//       console.log(comtentList[0]);
// }
// )
// .catch((error)=>{
//   console.log('error');
// })