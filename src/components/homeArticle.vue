<template>
    <div class="homeArticle">
        <h3 class="title">创建影视作品</h3>
        <div class="article">
            <div class="left">
                <video class="video" autoplay loop preload="auto" muted width="100%" height="100%">
                    <source src="//qiniu-xpc0.xpccdn.com/59c21cd10410f.mp4" type="video/mp4">
                </video>
            </div>
            <div class="right">
                <ul>
                    <li>提供个性化展示空间</li>
                    <li>高清 4K 原画播放体验</li>
                    <li>无广告无水印视频</li>
                </ul>
                <div class="btnBox">
                    <a href="#" class="btn">创建作品集</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .homeArticle {
        padding-bottom: 76px;
        text-align: center;
    }
    .homeArticle>.title{
        font-size: 36px;
        padding: 100px 0 50px;
        text-align: center;
        color: #000;
        font-weight: normal;
    }
    .article {
        display: flex;
        justify-content: center;



    }
    .left {
        width: 500px;
        height: 459px;
        vertical-align: middle;
        background-color: #e2e3e5;
    }
    .right {
        width: 380px;
        margin-left: 78px;
    }
    .right>ul {
        list-style: none;
        width: 380px;
        height: 162px;
        padding: 0px;
    }
    .right>ul>li {
        font-size: 16px;
        color: #333;
        font-weight: 300;
        padding-top: 30px;
        text-align: left;
    }
    .btnBox {
        margin-top: 69px;
        text-align: left;
    }
    .btn {
        display: inline-block;
        width: 160px;
        height: 50px;
        line-height: 50px;
        border-radius: 2px;
        cursor: pointer;
        font-size: 16px;
        color: #fff;
        margin: 0;
        text-decoration: none;
        letter-spacing: 1px;
        transition: all .4s linear;
        background-color: #e74b3b;
        text-align: center;
    }
    .btn:hover {
        background-color: #a0372c;
    }
</style>


<script>
export default {
    
}
</script>