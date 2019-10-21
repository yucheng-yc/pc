const express = require('express');
const app = express();
 
// 静态资源托管
app.use(express.static("./public"));


app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000,()=>{
    console.log("server is running Port is 3000");
})