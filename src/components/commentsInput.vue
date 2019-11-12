// 用户评论输入组件  -》仅为了以后备用
<template>
    <div class="commentsInput">
        <h3 class="title">评论<span class="titleNum">{{inputNum}}</span></h3>
        <div class="content">
            <div class="left">
                <img :src="userHeadUrl" >
            </div>
            <div class="right">
                <textarea placeholder='请输入评论内容' class="con"></textarea>
                <span class="btn">发表评论</span>
            </div>
        </div>
    </div>
</template>

// 用户评论输入组件 样式
<style scoped>
.commentsInput {
    padding: 20px 30px 30px;
    background-color: white;
    
}
.title {
    color: #333333;  
    font-size: 20px;
    font-weight: 600;
}
.titleNum {
    margin-left: .5rem;
    font-size: 14px;
    color: #999999;
}

.content {
    margin: 20px 0 0;
    position: relative;
}
.right {
    margin-left: 55px;
    height: 126px;
    position: relative;
}
.left {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    overflow: hidden;
}
.left>img {
    width: 40px;
    height: 40px;
}
.left:hover {
    opacity: .5;
}
.con {
    display: block;
    height: 80px;
    width: 100%;
    background-color: #ffffff;
    border: solid 1px #e3e4e5;
    padding: 10px 14px;
    font-size: 14px;
    color: #333;
    resize: none;
    margin-bottom: 14px;
    outline: none;
    line-height: 16px;
    box-sizing: border-box;
}
.btn {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 90px;
    height: 32px;
    font-size: 12px;
    color: #fffefe;
    text-align: center;
    line-height: 32px;
    cursor: pointer;
    background: #e74b3b;
    border-radius: 2px;
    transition: .5s;
}
.btn:hover {
    background: #cf4334;
}
</style>

<script>
export default {
    data(){
        return {
            // 评论数量
            inputNum:11,
            userHeadUrl:'https://oss-xpc0.xpccdn.com/passport/default.png'

        }
    }
}
</script>