const express =require("express");
const router=express();
const pool=require("../pool");

// 为登录配置路由
router.get("/login/uphone && upwd",(req,res)=>{
    // 获取登录发送过来的数据
    var upwd=req.params.upwd;
    var uphone=req.params.uphone;
    if(req.params) {
        pool.query("SELECT uid FROM userInfo WHERE uphone=? and upwd=?",[uphone,upwd],(err,res)=>{
            if(res.lengh===0){
                console.log(res);
            }
            console.log("111");
            
        }
        );
    }
});

router.get("/login",(req,res)=>{
    // 获取登录发送过来的数据
    res.send("ok")
});

module.exports=router;