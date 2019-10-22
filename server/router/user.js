const express =require("express");
const router=express.Router();
const pool=require("../pool");

// 为登录配置路由
router.get("/v1/login/:uphone&:upwd",(req,res)=>{
    // 获取登录发送过来的数据
    var upwd=req.params.upwd;
    var uphone=req.params.uphone;
    if(req.params) {
        pool.query("SELECT uid FROM userInfo WHERE uphone=? and upwd=?",[uphone,upwd],(err,result)=>{
            if(res.length==0){
                res.send({code:400,msg:"没有账号信息"});
                return;
            }
            res.send({code:200,msg:"登录成功"});
        }
        );
    }
});

//为注册配置路由
router.put("/v1/reg",(req,res)=>{
    // 获取注册信息
    var name=req.params.name;
    console.log();
}) 



module.exports=router;