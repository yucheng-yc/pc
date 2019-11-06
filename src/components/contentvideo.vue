<template>
    <div class="contentvideo">
    <!-- 背景图片 -->
    <img :src="bgimgurl" class="videoboximg">

        <!-- 整个视频框 -->
        <div class="videobox">
            <!-- 视频展示区 -->
            <div class="box">
                <video class="video" controls preload="auto" >
                    <source :src="videoUrl" type="video/mp4">
                </video>
            </div>
        </div>

    </div>
</template>


// 基础设置
<style scoped>
.contentvideo {
    width: 100%;
    height: 600px;
    padding-top: 3rem; 
    position: relative;
    overflow: hidden;
}
.videoboximg {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
}
.videobox {
    position: absolute;
    width: 960px;
    height: 540px;
    background-color: #000;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
}
.box {
    width: 100%;
    height: 100%;
    position: relative;
}
.video {
    width: 100%;
    height: 100%;
}
</style>



<script>
export default {
    props:{
        bgimgurl:{
            type:String,
            default:"https://cs.xinpianchang.com/uploadfile/article/2019/11/02/5dbd9fd8d03e0.jpeg@960w_540h_50-30bl_1e_1c"
        },
        videoUrl:{
            type:String,
            default:'https://qiniu-xpc4.xpccdn.com/5dbda00b53fa0.mp4'
        }
    }
}
</script>