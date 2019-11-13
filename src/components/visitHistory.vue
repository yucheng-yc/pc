// 该组件用来记录用户访问记录
<template>
    <div class="visitHistory">
        <div class="visit">
            <div class="header">
                <h3 class="title">来访创作人</h3>
                <!-- 切换盒子 -->
                <div class="tabBox">
                    <span :class="{active:stateTg}" @click="stateTg=!stateTg">看过</span>
                    <span :class="{active:!stateTg}" @click="stateTg=!stateTg">喜欢</span>
                </div>
            </div>
            <!-- 内容列表部分 -->
            <ul class="content" v-if="stateTg">
                <li class="headBox" v-for="(con,i) of visitList" :key="i">
                    <a href="" class="headLink">
                        <img :src="con.headerimg" class="headerimg">
                        <!-- 头部图片认证 -->
                        <span class="iconfont v">
                            <img src="../assets/images/rzhtrue.png" v-if="con.vTg">
                            <img src="../assets/images/rzfalse.png" v-else-if="con.vTg===false">
                            <i v-else></i>
                        </span>
                    </a>
                </li>
                <li class="more">
					<a href="/article/filmplay/ts-recent_visit/articleid-10587390" class="icon-icon-arrow-right iconfont arr"></a>
				</li>
            </ul>
            <ul class="content" v-if="!stateTg">
                <li class="headBox" v-for="(con,i) of HistoryList" :key="i+'his'">
                    <a href="" class="headLink">
                        <img :src="con.headerimg" class="headerimg">
                        <!-- 头部图片认证 -->
                        <span class="iconfont v">
                            <img src="../assets/images/rzhtrue.png" v-if="con.vTg">
                            <img src="../assets/images/rzfalse.png" v-else-if="con.vTg===false">
                            <i v-else></i>
                        </span>
                    </a>
                </li>
                <li class="more">
					<a href="/article/filmplay/ts-recent_visit/articleid-10587390" class="icon-icon-arrow-right iconfont arr"></a>
				</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.visitHistory {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fff;
}
.headBox {
    padding-right: .6rem;
}
.header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}
.title {
    margin: 0;
    padding: 0;
}
.tabBox {
    width: 150px;
    padding-top: 10px;
    cursor: pointer;
    text-align: right;
}
.tabBox>span {
    padding: 0 12px;
    transition: .15s;
    position: relative;
    font-size: 12px;
    font-weight: 600;
    color: #333333;
    cursor: pointer;
}
.tabBox>span:first-child:after {
    content: "\e62c";
    font-family: 'iconfont';
    position: relative;
    right: -12px;
    color: #333;
}
.tabBox>span:hover {
    color: #e74b3b;
}
/* 当点击是加上红色字体 */
.active {
    color: #e74b3b !important;
}
.content {
    display: flex;
    justify-content: flex-start;
}
.headLink {
    display: block;
    width: 39px;
    height: 39px;
    position: relative;
}
.headerimg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.headerimg:hover {
    opacity: .5;
}
.v {
    position: absolute;
    width: 1rem;
    height: 1rem;
    bottom: -.1rem;
    right: -.2rem;
    border-radius: 50%;
    overflow: hidden;
}
.v img {
    width: .8rem;
    height: .8rem;
}
.more {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: solid 1px rgba(153, 153, 153, 0.5);
    margin-right: 0;
    display: inline-block;
    vertical-align: middle;
    padding: 0;
    font-size: 0;
    padding: 0;
}
/* 更多按钮 */
.arr {
    font-size: 12px;
    color: #333;
    font-weight: 600;
    display: block;
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
}
</style>

<script>
export default {
    props:{
        visitList:{
            type:Array,
            default:function(){
                return [
                    {headerimg:"https://oss-xpc0.xpccdn.com/Upload/user/2019/01/095c36100ec222f.jpeg@80w_80h_1e_1c",vTg:true,url:'javascript:;'},
                    {headerimg:"https://oss-xpc0.xpccdn.com/passport/avatar/10249283/2019/6/5d132aa39080e.jpg@80w_80h_1e_1c",vTg:true,url:'javascript:;'},
                    {headerimg:"https://cs.vmovier.com/Uploads/avatar/2016/08/06/57a5e65bdce0f_180.jpeg@80w_80h_1e_1c",vTg:true,url:'javascript:;'},
                    {headerimg:"https://cs.xinpianchang.com/user_center_xpc_line/user_avatar_10146710.jpg@80w_80h_1e_1c",vTg:true,url:'javascript:;'},
                    {headerimg:"https://cs.xinpianchang.com/user_center_xpc_line/user_avatar_10037339.jpg@80w_80h_1e_1c",vTg:true,url:'javascript:;'},
                    {headerimg:"https://oss-xpc0.xpccdn.com/passport/avatar/10386618/2019/8/5d56448a6ce71.jpg@80w_80h_1e_1c",vTg:true,url:'javascript:;'}
                ]
            }
        },
        HistoryList:{
            type:Array,
            default:function(){
                return [
                    {headerimg:"https://oss-xpc0.xpccdn.com/Upload/user/2019/07/225d35ab8a62d2b.jpeg@80w_80h_1e_1c",vTg:true,url:'javascript:;'},
                    {headerimg:"https://cs.xinpianchang.com/user_center_xpc_line/user_avatar_10208463.jpg@80w_80h_1e_1c",vTg:true,url:'javascript:;'},
                    {headerimg:"https://cs.xinpianchang.com/uploadfile/user/2016/07/14/57870a9ebf369_180.jpeg@80w_80h_1e_1c",vTg:true,url:'javascript:;'},
                    {headerimg:"https://cs.xinpianchang.com/uploadfile/user/2017/03/10/58c286a0206cb.jpeg@80w_80h_1e_1c",vTg:true,url:'javascript:;'},
                    {headerimg:"https://cs.xinpianchang.com/user_center_xpc_line/user_avatar_10037339.jpg@80w_80h_1e_1c",vTg:true,url:'javascript:;'},
                    {headerimg:"https://oss-xpc0.xpccdn.com/passport/avatar/10065783/2019/6/5d009e88bde72.jpg@80w_80h_1e_1c",vTg:true,url:'javascript:;'}
                ]
            }
        },
    },
    data(){
        return {
            // 切换状态标识
            stateTg:true
        }
    }
}
</script>