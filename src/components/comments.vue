// 评论模块 用户发表评论 动态加入列表中
<template>
    <div class="comments">
        <!-- 评论输入信息框 -->
        <div class="commentsInput">
            <h3 class="title">评论<span class="titleNum">{{plArr.length}}</span></h3>
            <div class="content">
                <div class="left">
                    <img :src="userHeadUrl" >
                </div>
                <div class="right">
                    <textarea placeholder='请输入评论内容' class="con" v-model="content"></textarea>
                    <span class="btn" @click="addPl">发表评论</span>
                </div>
            </div>
        </div>
        <!-- 用户列表项 -->
        <div class="list">
            <conment-list
             v-for="(con,i) of plArr" :key="i" :headerimg="con.headerimg" :userName="con.userName" :timeYear="con.timeYear" :content="con.content"></conment-list>
        </div>
        
    </div>
</template>

<style scoped>
.commentsInput {
    border-bottom: 1px solid #f0f0f0;
}
.comments {
    background: white;
    border-bottom: 1px solid #f0f0f0;
}
.list {
    padding: 0 30px;
}
</style>

<script>
// 导入评论输入信息框
import commentsInput from '../components/commentsInput'
// 导入评论列表项
import conmentList from "../components/conmentList";
export default {
    components:{
        commentsInput,
        conmentList
    },
    data(){
        return {
          
            // 用户默认头像
            userHeadUrl:'https://oss-xpc0.xpccdn.com/passport/default.png',
            // 其他评论信息
            plArr:[
                {
                    headerimg:'https://cs.xinpianchang.com/user_center_xpc_line/user_avatar_10015984.jpg',
                    userName:'负壹映像',
                    timeYear:'2019-11-7 09:46:58',
                    content:'我听到了泄！音源难道是王思妇那来的？'
                },

                {
                    headerimg:'https://oss-xpc0.xpccdn.com/Upload/user/2019/10/235daff24e3c47b.jpeg',
                    userName:'呵呵没有笑',
                    timeYear:'2019-11-7 09:34:19',
                    content:'超赞！'
                },
                {
                    headerimg:'https://oss-xpc0.xpccdn.com/passport/avatar/10025180/2019/11/5dc2cf72595ef.jpg',
                    userName:'E罩杯的怪兽',
                    timeYear:'2019-11-6 21:49:00',
                    content:'有内味儿了'
                },
                {
                    headerimg:'https://cs.xinpianchang.com/mwx-avatar/0d76154e78.jpg',
                    userName:'欧阳三石',
                    timeYear:'2019-11-7 13:12:24',
                    content:'剪辑的很棒'
                }
            ],
            // 用户评论
            content:""
        }
    },
    methods:{
        // 发表评论
        addPl(){
         
            this.plArr.unshift({content:this.content,timeYear:new Date().toLocaleString(),userName:'us'});
            // 清除输入框内容
            this.content='';
            
        }
    }
}
</script>


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
