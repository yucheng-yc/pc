// 评论列表项
<template>
    <div class="conmentList">
        <div class="leftbox">
            <img :src="headerimg" class="headerimg">
        </div>
        <div class="rightbox">
            <div class="titleBox">
                <span class="userName">{{userName}}</span>
                <span class="timeYear">{{timeYear}}</span>
            </div>
            <div class="contentBox">{{content}}</div>
            <div class="tabbtn">
                <span>删除</span>
                <span>回复</span>
                <span>赞({{dzNb}})</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.conmentList {
    padding: 20px 0px 12px;
    position: relative;
    box-sizing: border-box;
    background: white;
    height: 83px;
    border-bottom: 1px solid #f0f0f0;
}
.rightbox {
    margin-left: 55px;
    width: 635px;
    box-sizing: border-box;
    position: relative;
}
.leftbox {
    position: absolute;
    top: 20;
    left: 0;
    width: 40px;
    height: 40px;
}
.headerimg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.headerimg:hover {
    opacity: .5;
}
.userName {
    color: #333333;
    font-size: 14px;
    font-weight: 600;
}
.timeYear {
    color: #999999;
    font-size: 12px;
    font-weight: 300;
    margin-left: 10px;
}
.contentBox {
    line-height: 1.8;
    margin-top: 4px;
    word-wrap: break-word;
    color: #333333;
    font-size: 14px;
    font-weight: 300;
    
}
.tabbtn {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 10px;
    line-height: 1;
    color: #999999;
    font-size: 12px;
    font-weight: 600;
}
.tabbtn>span {
    margin-left: .5rem;
}
.tabbtn>span:not(:last-child)::after {
    content: "\e62c";
    font-family: 'iconfont';
}
.tabbtn>span:hover {
    color: black;
}
</style>

<script>
export default {
    data(){
        return {
            // 点赞数
            dzNb:0
        }
    },
    props:{
        // 头像
        headerimg:{
            type:String,
            default:"https://cs.xinpianchang.com/passport/default.png"
        },
        // 昵称
        userName:{
            type:String,
            default:'yc'
        },
        // 时间
        timeYear:{
            type:String,
            default:'2019-11-7 17:34:10'
        },
        // 评论内容
        content:{
            type:String,
            default:'我擦,感觉还不错'
        }
    }
}
</script>