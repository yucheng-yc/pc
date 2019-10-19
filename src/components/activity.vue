<template>
    <div class="activity" :class="{act:bgVideoToggle}">
        <div class="componentContent" :class="{vg:bgVideoToggle}">
            <h4 class="levelTitle" :class="{vgh:bgVideoToggle}">举办各类赛事活动</h4>
            <div class="itemIntro" v-if="bgVideoToggle"><em>线上教学</em><em>线下培训</em><em>大师领路</em><em>实战经验</em></div>
            <ul class="exampleList">
                <li class="first">
                    <div class="imgBox">
                        <img src="//cs.vmovier.com/Uploads/Activity/2017-09-18/59bf99e2e7127.png@732w_460h_1e_1c">
                    </div>
                    <div class="contentBox">
                        <a href="">NEW ERA 青年电影季</a>
                        <p>NEW ERA 青年电影季，是一个为未来而建的青年影展，其使命是发现未成名的好电影，鼓励纯粹的创作，扶植优秀青年创作人。</p>
                    </div>
                </li>
                <li class="twn">
                    <div class="imgBox">
                        <img src="//cs.vmovier.com/Uploads/Activity/2017-09-18/59bf9d6d08933.png@732w_460h_1e_1c">
                    </div>
                    <div class="contentBox">
                        <a href="">创作吧！少年短片征集大赛</a>
                        <p>创作吧！少年，是新片场社区主办的系列短视频主题征集活动，每期结合电影、商业品牌等主题，累计征集作品3000多部。</p>
                    </div>
                </li>
                <li class="three">
                    <div class="imgBox">
                        <img src="//cs.vmovier.com/Uploads/Activity/2017-09-19/59c10d099b26e.png@732w_460h_1e_1c">
                    </div>
                    <div class="contentBox">
                        <a href="">新片场开放日</a>
                        <p>新片场开放日，是全国范围内的优质短片线下展映、行业交流活动，足迹已遍布国内20多座城市，累计参与人数超过5万，覆盖用户超过300万。</p>
                    </div>
                </li>
            </ul>
            <a class="btn">浏览更多新片场活动</a>
        </div>
        <div class="bgvideo" v-if="bgVideoToggle" :class="{bgv:bgVideoToggle}">
            <video class="video" autoplay loop preload="auto" muted>
                <source src="//qiniu-xpc0.xpccdn.com/59c21d072be72.mp4" type="video/mp4">
            </video>
        </div>
    </div>
</template>

<style scoped>
    .activity {
        text-align: center;
        margin: 120px auto 0;
        position: relative;
        height: 572px;
        width: 100%;
    }
    .componentContent {
        padding: 0;
    }
    .componentContent,.bgvideo {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .vg {
       top:9.5rem !important;
       height: 572px;
    }
    .vgh {
        font-size: 36px !important;
        color: white;
        padding-bottom: 1rem;
    }
    .bgvideo {
        z-index: 0;
    }
    .bgvideo .video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .exampleList {
        width: 1140px;
        height: 395px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-flow: row nowrap;
    }
    .levelTitle {
        margin: 0;
        padding-bottom: 40px;
        font-weight: normal;
        font-size: 28px;
    }
    .exampleList li {
        width: 366px;
        height: 374px;
        overflow: hidden;
        text-align: left;
    }
    .imgBox {
        height: 230px;
        overflow: hidden;
    }
    .imgBox>img {
        height: 230px;
        width: 366px;
    }
    .contentBox {
        padding-top: 35px;
        background: white;
        padding: 1rem;
    }
    .contentBox a {
        font-size: 16px;
        color: #000;
        line-height: 1;
        font-weight: normal;
        transition: .15s ease-in-out;
        cursor: pointer;
    }
    .contentBox a:hover {
        color: #e74b3b;
    }
    .contentBox p {
        margin: 0;
        font-size: 14px;
        font-weight: 300;
        line-height: 1.86;
        color: #999999;
        padding-top: 15px;
       text-overflow: ellipsis;
    }
    .btn {
        display: block;
        width: 226px;
        height: 48px;
        line-height: 48px;
        border: 1px solid #666;
        border-radius: 2px;
        text-align: center;
        cursor: pointer;
        border-radius: 2px;
        transition: .15s ease-in-out;
        background-color: #fff;
        font-size: 16px;
        color: #333;
        margin: 45px auto 0;
    }
    .btn:hover {
        background: #ccc;
    }
</style>


<style scoped>
    .itemIntro {
        height: 24px;
        line-height: 24px;
        padding-bottom:2rem; 
        text-align: center;
        position: relative;
    }
    .itemIntro em {
        font-size: 16px;
        padding: 0 16px;
        color: white;
        position: relative;
        font: 12px/1.5 'PingFang SC', 'Microsoft YaHei', '微软雅黑', STHeiti, sans-serif;
    }
    .itemIntro em::after {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: rgba(216, 216, 216, 0.49);
        right: -2px;
        top: 50%;
        transform: translateY(-50%);
    }
    .bgv {
        height: 800px;
    }
    .act {
        height: 800px !important;
    }

</style>
<script>
export default {
    props:{
        bgVideoToggle:{
            type:Boolean,
            default:false
        }
    },
    watch:{
        bgVideoToggle(){
            console.log("11111111");
        }
    }
}
</script>