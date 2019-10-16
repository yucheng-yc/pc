<template>
    <div class="bgVideo">
        <div class="bgVideoCover">
            <div class="coverCenter">
                <p class="title">用作品打动世界</p>
                <p class="num"><span>1,512,936</span> 位创作人已加入</p>
                <div class="btnBox">
                    <a href="javascript:;" class="btn btnLeft">随便逛逛</a>
                    <a href="javascript:;" class="btn btnRight">立即加入</a>
                </div>
            </div>
            <div class="playBox iconfont icon-play"><span>观看视频</span></div>
        </div>
        <div class="videoContainer">
            <video class="video" autoplay loop preload="auto" muted>
                <source src="//qiniu-xpc0.xpccdn.com/5a9ce9df6bab2.mp4" type="video/mp4">
            </video>
        </div>
    </div>
</template>

<style scoped>
    .bgVideo {
        width: 100%;
        min-width: 1300px;
        height: 630px;
        position:  relative;
    }
    .bgVideoCover {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 1;
        text-align: center;
    }
    .coverCenter {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        color: white;
    }
    .coverCenter>p {
        margin: 0px;
        font-size: 20px;
        font-weight: 400;
    }
    .coverCenter>.title {
        font-size: 48px;
    }
    .videoContainer {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    .video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .num {
        padding:25px 0px 0px;
    }
    .btnBox {
        margin-top: 69px;
        text-align: center;
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
        margin: 0 10px;
        text-decoration: none;
        letter-spacing: 1px;
        transition: all .4s linear;
    }
    .btnLeft {
        background-color: rgba(255,255,255,.3);
    }
    .btnRight {
        background-color: #e74b3b;
    }
    .btnLeft:hover {
        background-color: rgba(255,255,255,.6) !important;
    }
    .btnRight:hover {
        background-color: #a0372c;
    }
    .playBox {
        position: absolute;
        bottom: 3rem;
        left: 50%;
        transform: translate(-50%);
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
        color: #fff;
        cursor: pointer; 
    }
    .playBox:hover {
        opacity: .6;
    }
</style>

<script>


export default {
    
}
</script>