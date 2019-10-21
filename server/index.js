const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user=require("./router/user");
const cors=require("cors");
const session = require('express-session')
 
// 静态资源托管
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors({
  origin:["http://localhost:8080","http://127.0.0.1:5500"]//不能用*
}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(5500,()=>{
    console.log("server is running Port is 5500");
})

app.use("/user",user);