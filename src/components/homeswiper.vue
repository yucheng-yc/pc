<template>
    <div class="homeswiper">
          <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide  v-for="(item,index) of swiperSlideList" :key="index">
                    <!-- 自定义内容容器 -->
                    <div class="myslideBox">
                        <!-- 内容容器最外层背景 -->
                        <img :src="item.bigImgUrl" class="bigImg">
                        <!-- 最内层内容容器 -->
                        <div class="prevnextBox">
                            <div class="centerBox">
                                <div class="prev iconfont icon-jiantouyou-copy"></div>
                                <div class="next iconfont icon-jiantouyou"></div>
                                <!-- 最内层容器背景图片 -->
                                <a :href="item.smallTZUrl" class="infotop"><img :src="item.smallImgUrl" class="smallImg"></a>
                                <!-- 最内层显示信息容器 -->
                                <div class="infoBox" v-if="item.infoObj!=undefined">
                                    <span class="info">
                                        <!-- 这里的a标签为以后功能留着 -->
                                        <a :href="item.infoObj.heads.gxUrl" class="infotop">
                                            <!-- 类型分类 -->
                                            <p class="classBox">
                                                <span class="classification" v-for="(c,i) of item.infoObj.classification" :key="i">{{c}}</span>
                                            </p>
                                            <!-- 标题 -->
                                            <p class="title">{{item.infoObj.title}}</p>
                                        </a>
                                        <!-- 头像信息 -->
                                        <a :href="item.infoObj.heads.gxUrl" class="info">
                                            <div class="heads">
                                                <!-- 头部图片 -->
                                                    <p class="headsImg">
                                                        <img :src="item.infoObj.heads.infoimg" class="infoimg">
                                                        <!-- 头部图片认证 -->
                                                        <span class="iconfont v" v-if="item.infoObj.heads!=undefined">
                                                            <img :src="require(`@/assets/images/rzhtrue.png`)" v-if="item.infoObj.heads.rzimg==true">
                                                            <img :src="require(`@/assets/images/rzfalse.png`)" v-else>
                                                        </span>
                                                    </p>
                                                <!-- 作者信息 -->
                                                <span class="author">{{item.infoObj.heads.author}}</span>
                                                <span v-if="item.infoObj.heads.lastimg!=undefined" class="iconfont lastimg" :class="item.infoObj.heads.lastimg">
                                                </span>
                                            </div>
                                            <!-- 介绍 -->
                                            <p class="Introduces">{{item.infoObj.Introduces}}</p>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="pagination" slot="pagination" ref="pagination"></div>
            </swiper>
    </div>
</template>

// 整体样式设置
<style scoped>
    .homeswiper {
        position: relative;
    }
    /*轮播项 最外层盒子设置  */
    .myslideBox {
        width: 100%;
        height: 460px;
        position: relative;
    }
    /*轮播项 最外层盒子下的图片设置  */
    .bigImg {
        position: absolute;
        width: 100%;
        height: 100%;
        /* 不是滤镜  */
        /* filter:blur(40px); */

    }
    .prevnextBox {
        width: 1140px;
        height: 400px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
    }
    /* 轮播项 最内层盒子设置 */
    .centerBox {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    /* 轮播项 最内层盒子下图片设置 */
    .centerBox>a>img {
        width: 100%;
        height: 100%;
        transition: .9s;
    }
    .centerBox:hover a>img {
        transform: scale(1.05);
    }
</style>

// 信息盒子设置
<style scoped>
    /* 内容信息展示盒子 */
    .infoBox {
        position: absolute;
        bottom: -.1rem;
        left: 2.5rem;
        width: 670px;
        height: 108px;
        transition: .5s;
    }
    /* 上移效果 */
     .centerBox:hover>.infoBox {
        bottom: 3.8rem;
    }
    /* 信息链接 */
    .info {
        display: block;
        width: 100%;
        height: 100%;
        color: white;
    }
    .infotop {
        color: white;
    }
    .classBox {
        padding: 0;
        margin: 0;
    }
    /*当不为一个时加竖线分隔 */ 
    .classBox>span:not(:last-child)::after {
        content: '\e62c';
        font-family: 'iconfont';

    }
    /* 分类信息 */
    .classification,.author {
        font-size: 12px;
        opacity: 0.75;
    }
    /* 标题信息 */
    .title {
        font-size: 30px;
        font-weight: 800;
        padding: 0;
        margin: 0;
        padding: 8px 0;
    }
    /* 头像信息 */
    .heads {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
    }
    /* 头像图片盒子设置 */
    .headsImg {
        padding: 0;
        margin: 0;
        width: 1.6rem;
        height: 1.6rem;
        position: relative;
    }
    /* t头像图片 */
    .infoimg {
        border-radius: 50%;
        width:  1.6rem;
        height: 1.6rem;
        vertical-align: middle;
    }
    .v {
        position: absolute;
        width: 1rem;
        height: 1rem;
        bottom: .1rem;
        right: -.5rem;
        border-radius: 50%;
        overflow: hidden;
    }
    .v img {
        width: .5rem;
        height: .5rem;

    }
    .heads>span {
        display: inline-block;
        height: 2rem;
        line-height: 2rem;
        padding: 0;
    }
    /* 作者设置 */
    span.author {
        display: inline-block;
        height: 2rem;
        line-height: 2rem;
        padding: 0 .5rem;
    }
    /* 对名字后有子图图标的设置 */
    .lastimg {
        color: rgba(238, 225, 50, 0.521);
        font-size: 20px;
        height: 2.5rem;
        line-height: 2rem;
        overflow: hidden;
    }
    .lastimg img {
        height: .5rem;
        width: .5rem;
    }

    .Introduces {
        height: 3rem;
    }
</style>

// 分页器样式设定
<style scoped>
    .pagination {
        text-align: center;
        z-index: 888;
        position: absolute;
        bottom: .5rem;
    }
    .pagination /deep/.swiper-pagination-bullet {
        background: black;
        width: 8px;
        transition:  .5s;
    }
    .pagination /deep/.swiper-pagination-bullet-active {
        background: white;
        width: 1.5rem;
        border-radius: 25%;
        opacity: .8;
    }
</style>

// 上一张 下一张样式设置
<style scoped>
    .prev {
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        top: 50%;
        left: -40px;
        transform: translatey(-50%);
        font-size: 28px;
        font-weight: 600;
        color: #ccc;
        opacity: .1;
        transition: .8s;
    }
    .next {   
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        top: 50%;
        transform: translatey(-50%);
        right: -38px;
        font-size: 28px;
        font-weight: 600;
        opacity: 0;
        color: #ccc;
        transition: .8s;
    }
    /* 下一章样式设置 */
    .myslideBox:hover .prev,
    .myslideBox:hover .next{
        color: white;
        opacity: 1;
    }
</style>

<script>
export default {
    data(){
        return {
            // swiper的配置项
            swiperOption: {
                autoplay:true,
                // 每一项的slide自动高度
                autoHeight: true,
                // 自动复制一项 让它看起来 滑动效果
                loop:true,
                // 初始化页面
                initialSlide :0,
                effect : 'fade',
                // 分页器
                pagination:{
                    el: ".pagination"
                },
                navigation: {
                    nextEl: '.next',
                    prevEl: '.prev',
                }
            },
            // 轮播图的信息
            swiperSlideList:[
                // 第一张图片
                {
                    // 轮播小图的背景来源
                    smallImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/25/5db2b10ce2833.jpg@2280w_800h_1e_1c",
                    // 轮播大图的背景来源
                    bigImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/25/5db2b10ce2833.jpg@720w_200h_50-20bl_1e_1c",
                    // 轮播跳转url
                    smallTZUrl: 'https://www.xinpianchang.com/a10569638?from=IndexBanner',
                    infoObj:{
                        classification:['广告-医疗保健'],
                        title:'999魔性调查报告《人人健康中国强》',
                        heads:{
                            // 头像url
                            infoimg:'https://cs.xinpianchang.com/Upload/user/2017/08/1759950c16d812c.jpeg@44w_44h_1e_1c',
                            // 认证两种图片
                            rzimg: false,
                            // 认证链接地址
                            gxUrl:"https://www.xinpianchang.com/u10021246",
                            // 作者名字
                            author:'舞刀弄影',
                            // iconfont 类 显示后面的图片
                            lastimg: 'icon-svip'
                        },
                            // 介绍信息
                        Introduces:'每天一遍，防止抑郁'
                    }
                },
                // 第二张图片
                {
                    // 轮播小图的背景来源
                    smallImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/25/5db2af58f249f.jpg@2280w_800h_1e_1c",
                     // 轮播大图的背景来源
                    bigImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/25/5db2af58f249f.jpg@720w_200h_50-20bl_1e_1c",
                    // 轮播跳转url
                    smallTZUrl: 'https://www.xinpianchang.com/a10513543?from=IndexBanner',
                    infoObj:{
                        classification:['mv','创意混剪-混剪'],
                        title:'治愈催泪向日漫混剪《曾经我也想过一了百了》',
                        heads:{
                            // 头像url
                            infoimg:'https://oss-xpc0.xpccdn.com/passport/avatar/10019796/2019/8/5d5622591b16f.jpg@44w_44h_1e_1c',
                            // 认证两种图片
                            rzimg: false,
                            // 认证链接地址
                            gxUrl:"https://www.xinpianchang.com/u10019796",
                            // 作者名字
                            author:'阿Rain(李沣润)',
                            // iconfont 类 显示后面的图片
                            lastimg: ''
                        },
                            // 介绍信息
                        Introduces:'温柔又震撼'
                    }
                },
                 // 第三张图片
                {
                    // 轮播小图的背景来源
                    smallImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/24/5db17e662e333.png@2280w_800h_1e_1c",
                     // 轮播大图的背景来源
                    bigImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/24/5db17e662e333.png@720w_200h_50-20bl_1e_1c",
                    // 轮播跳转url
                    smallTZUrl: 'https://www.xinpianchang.com/a10519160?from=search_post&from=IndexBanner',
                    infoObj:{
                        classification:['剧情短片 - 其他'],
                        title:'中国版天才枪手《捉刀人》',
                        heads:{
                            // 头像url
                            infoimg:'https://oss-xpc0.xpccdn.com/Upload/user/2019/08/025d43a69499a68.jpeg@44w_44h_1e_1c',
                            // 认证两种图片
                            rzimg: false,
                            // 认证链接地址
                            gxUrl:"https://www.xinpianchang.com/u10052813",
                            // 作者名字
                            author:'阿Rain(李沣润)',
                            // iconfont 类 显示后面的图片
                            lastimg: ''
                        },
                            // 介绍信息
                        Introduces:'北京电影学院，2017级导演系 x 摄影学院大二年级的短片作业。'
                    }
                },
                 // 第四张图片
                {
                    // 轮播小图的背景来源
                    smallImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/11/5da042676c78d.png@2280w_800h_1e_1c",
                     // 轮播大图的背景来源
                    bigImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/11/5da042676c78d.png@720w_200h_50-20bl_1e_1c",
                    // 轮播跳转url
                    smallTZUrl: 'https://www.xinpianchang.com/e18741?from=IndexBanner',
                },
                 // 第五张图片
                {
                    // 轮播小图的背景来源
                    smallImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/24/5db16aeeb89e3.png@2280w_800h_1e_1c",
                     // 轮播大图的背景来源
                    bigImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/24/5db16aeeb89e3.png@720w_200h_50-20bl_1e_1c",
                    // 轮播跳转url
                    smallTZUrl: 'https://www.vmovier.com/56366?from=banner&from=IndexBanner',
                },
                 // 第六张图片
                {
                    // 轮播小图的背景来源
                    smallImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/21/5dad90245fad5.png@2280w_800h_1e_1c",
                     // 轮播大图的背景来源
                    bigImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/21/5dad90245fad5.png@720w_200h_50-20bl_1e_1c",
                    // 轮播跳转url
                    smallTZUrl: 'https://www.xinpianchang.com/e19007?from=IndexBanner',
                },
                 // 第七张图片
                {
                    // 轮播小图的背景来源
                    smallImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/09/16/5d7f68b564091.png@2280w_800h_1e_1c",
                     // 轮播大图的背景来源
                    bigImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/09/16/5d7f68b564091.png@720w_200h_50-20bl_1e_1c",
                    // 轮播跳转url
                    smallTZUrl: 'https://vip.xinpianchang.com/?from=IndexBanner',
                }
            ]
        }
    }
}
</script>