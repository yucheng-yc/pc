// 头像信息 用于显示用户信息

<template>
    <div class="headsInfo">
        <!-- 头部信息 -->
        <div class="top">
            <div class="leftHead">
                <div class="header"></div>
            </div>
            <dv class="rightContent">
                <h3></h3>
                <p></p>
            </dv>
            <!-- 个性签名 -->
            <p></p>
        </div>
        
        <!-- 图片信息 -->
        <div class="center"></div>
        <!-- 关注数 粉丝数 -->
        <div class="footer"></div>
    </div>
</template>

// 头部信息
<style scoped>
/* 信息卡的宽度 */
.headsInfo {
    width: 270px;
    padding: 20px 20px 12px;
}
.top {
    height: 60px;
    margin: 0 0 10px 74px;
    display: flex;
}
.header {
    width: 60px;
    height: 60px;
}
.rightContent {
    width: 156px;
}
</style>

<script>
export default {
    data(){
        return {
            // 头像url  默认头像
            headUrl:'https://oss-xpc0.xpccdn.com/passport/default.png',
            // 认证
            certificationId:false,
            // 会员信息
            memberUrl:'',
            // 用户昵称
            uname:'剪辑师',
            // 用户描述
            describe:"安徽 淮南市",
            // 个性签名
            signature:"",
            // 粉丝数量
            fansNum:'',
            // 关注数量
            attentionNum:'',
            // 发布视频
            videolan:[
                // 图片url  播放时长
                {imgUrl:"",time:''}
            ]
        }
    }
}
</script>