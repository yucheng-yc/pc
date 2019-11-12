// 该模块宫濑
<template>
    <div class="authorsList">
        <!-- 标题 -->
        <div class="title">
            <h3 class="htitle">本片创作人</h3>
            <a href="#" class="btn">你也参与该片创作?</a>
        </div>
        <!-- 创作人列表信息 -->
        <div class="conmentList" v-for="(con,i) of showList" :key="i">
            <div class="leftbox">
                <img :src="con.headerimg" class="headerimg">
                <!-- 头部图片认证 -->
                <span class="iconfont v">
                    <img src="../assets/images/rzhtrue.png" v-if="con.vTg">
                    <img src="../assets/images/rzfalse.png" v-else-if="con.vTg===false">
                    <i v-else></i>
                </span>
            </div>
            <div class="rightbox">
                <div class="titleBox">
                    <span class="userName">{{con.userName}}</span>
                </div>
                <div class="contentBox">{{con.content}}</div>
                <a href="javascript:;" class="gzbtn">关注</a>
            </div>
        </div>
        <!-- 加载更多按钮 -->
        <a href="javascript:;" class="btnMore" v-if="authorsListData.length>=10" @click="gtAll" v-show="tgAllBtn">展开全部{{authorsListData.length}}人</a>
    </div>
</template>

<style scoped>
.authorsList {
    padding: 20px;
    background-color: #fff;
    margin-bottom: 20px;
}
.title {
    height: 30px;
    display: flex;
    justify-content: space-between;
    
}
.htitle {
    color: #33343b;
    margin: 0;
    padding: 0;
}
.btn {
    padding-top: 10px;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    color: #333333;

}
.btn:hover {
    color: #e74b3b;
}
</style>


<style scoped>
.conmentList {
    position: relative;
    box-sizing: border-box;
    background: white;
    height: 41px;
    margin-bottom: 20px;
}
.rightbox {
    box-sizing: border-box;
    margin-left: 55px;
    width: 100%;
    overflow: hidden;
    position: relative;
}
.leftbox {
    position: absolute;
    top: 20;
    left: 0;
    width: 40px;
    height: 40px;
}
.titleBox {
    box-sizing: border-box;
    width: 100%;
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

.contentBox {
    line-height: 1.8;
    margin-top: 4px;
    word-wrap: break-word;
    color: #333333;
    font-size: 14px;
    font-weight: 300;
    box-sizing: border-box;
    
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

<style scoped>
.gzbtn {
    width: 58px;
    height: 26px;
    border-radius: 2px;
    text-align: center;
    line-height: 26px;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 50px;
    border: 1px solid #e74b3b;
    background: #e74b3b;
    color: #ffffff;
    font-size: 12px;
}
.v {
    position: absolute;
    width: 1rem;
    height: 1rem;
    bottom: .1rem;
    right: -.2rem;
    border-radius: 50%;
    overflow: hidden;
}
.v img {
    width: .8rem;
    height: .8rem;
}
.btnMore {
    width: 100%;
    height: 30px;
    line-height: 30px;
    border: 1px solid rgba(153,153,153,.5);
    text-align: center;  
    cursor: pointer;
    color: #333333;
    font-size: 12px;
    font-weight: 600;
    display: block;
}
</style>



<script>
export default {
    data(){
        return {
            showList:this.getShowList(),
            // 是否显示展开按钮
            tgAllBtn:true
        }
    },
    props:{
        authorsListData:{
            type:Array,
            default:function(){
                return [
                {
                // 头像
                headerimg:'https://oss-xpc0.xpccdn.com/Upload/user/2018/03/175aad3aa5ae55d.jpeg@80w_80h_1e_1c',
                // 认证类型 true false 或其他 三种,
                vTg:true,
                // 昵称
                userName:'壹橙贰青',
                // 评论内容
                content:'制作方/出品方'
                },
                {
                // 头像
                headerimg:'https://cs.xinpianchang.com/uploadfile/user/2015/01/13/573319_180.jpeg@80w_80h_1e_1c',
                // 认证类型 true false 或其他 三种,
                vTg:true,
                // 昵称
                userName:'俞炜巍__Tanc',
                // 评论内容
                content:'剪辑'
                },
                {
                // 头像
                headerimg:'https://cs.xinpianchang.com//uploadfile/user/2016/09/2557e76989f12b8_180.jpeg@80w_80h_1e_1c',
                // 认证类型 true false 或其他 三种,
                vTg:true,
                // 昵称
                userName:'陈天艺',
                // 评论内容
                content:'剪辑'
                },

                {
                // 头像
                headerimg:'https://oss-xpc0.xpccdn.com/Upload/user/2017/11/285a1d8600d2386.jpeg@80w_80h_1e_1c',
                // 认证类型 true false 或其他 三种,
                vTg:true,
                // 昵称
                userName:'谈天',
                // 评论内容
                content:'美术指导'
                },
                {
                // 头像
                headerimg:'https://cs.xinpianchang.com/uploadfile/user/2015/05/04/5546e1f33849a_180.jpeg@80w_80h_1e_1c',
                // 认证类型 true false 或其他 三种,
                vTg:true,
                // 昵称
                userName:'抖点葱',
                // 评论内容
                content:'执行导演'
                },
                {
                // 头像
                headerimg:'https://oss-xpc0.xpccdn.com/Upload/user/2018/09/125b993609a7f96.jpeg@80w_80h_1e_1c',
                // 认证类型 true false 或其他 三种,
                vTg:true,
                // 昵称
                userName:'阿玛',
                // 评论内容
                content:'策划/编剧'
                },
                 {
                // 头像
                headerimg:'https://oss-xpc0.xpccdn.com/Upload/user/2018/03/175aad3aa5ae55d.jpeg@80w_80h_1e_1c',
                // 认证类型 true false 或其他 三种,
                vTg:true,
                // 昵称
                userName:'壹橙贰青',
                // 评论内容
                content:'制作方/出品方'
                },
                {
                // 头像
                headerimg:'https://cs.xinpianchang.com/uploadfile/user/2015/01/13/573319_180.jpeg@80w_80h_1e_1c',
                // 认证类型 true false 或其他 三种,
                vTg:true,
                // 昵称
                userName:'俞炜巍__Tanc',
                // 评论内容
                content:'剪辑'
                },
                {
                // 头像
                headerimg:'https://cs.xinpianchang.com//uploadfile/user/2016/09/2557e76989f12b8_180.jpeg@80w_80h_1e_1c',
                // 认证类型 true false 或其他 三种,
                vTg:true,
                // 昵称
                userName:'陈天艺',
                // 评论内容
                content:'剪辑'
                },

                {
                // 头像
                headerimg:'https://oss-xpc0.xpccdn.com/Upload/user/2017/11/285a1d8600d2386.jpeg@80w_80h_1e_1c',
                // 认证类型 true false 或其他 三种,
                vTg:true,
                // 昵称
                userName:'谈天',
                // 评论内容
                content:'美术指导'
                },
                {
                // 头像
                headerimg:'https://cs.xinpianchang.com/uploadfile/user/2015/05/04/5546e1f33849a_180.jpeg@80w_80h_1e_1c',
                // 认证类型 true false 或其他 三种,
                vTg:true,
                // 昵称
                userName:'抖点葱',
                // 评论内容
                content:'执行导演'
                },
                {
                // 头像
                headerimg:'https://oss-xpc0.xpccdn.com/Upload/user/2018/09/125b993609a7f96.jpeg@80w_80h_1e_1c',
                // 认证类型 true false 或其他 三种,
                vTg:true,
                // 昵称
                userName:'阿玛',
                // 评论内容
                content:'策划/编剧'
                }
            ]
            }
        }
    },
    methods:{
        // 开始时若多余10创作人 只显示10个
        getShowList(){
            return this.authorsListData.length>10?this.authorsListData.slice(0,10):this.authorsListData;
        },
        // 展开全部按钮
        gtAll(){
            this.showList=this.authorsListData;
            this.tgAllBtn=false;
        }
    }
}
</script>