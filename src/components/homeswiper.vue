<template>
    <div class="homeswiper">
          <swiper :options="swiperOption" ref="mySwiper" >
                <!-- slides -->
                <swiper-slide  v-for="(item,index) of swiperSlideList" :key="index">
                    <!-- 自定义内容容器 -->
                    <div class="myslideBox">
                        <!-- 内容容器最外层背景 -->
                        <img :src="item.bigImgUrl" class="bigImg">
                        <!-- 最内层内容容器 -->
                        <div class="centerBox">
                            <!-- 最内层容器背景图片 -->
                            <img :src="item.smallImgUrl" class="smallImg">
                            <!-- 最内层显示信息容器 -->
                            <div class="infoBox">
                                <a href="#" class="info">
                                    <span class="classification">剧情短片 - 其他</span><br>
                                    <p class="title">中国版天才枪手《捉刀人》</p><br> 
                                    <img src="" class="">
                                    <span class="classification">余成</span>
                                    <p>24s6d44d</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination" ref="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div>
            </swiper>
    </div>
</template>

// 整体样式设置
<style scoped>
    /*轮播项 最外层盒子设置  */
    .myslideBox {
        width: 100%;
        height: 460px;
        position: relative;
        background: orange;
    }
    /*轮播项 最外层盒子下的图片设置  */
    .bigImg {
        position: absolute;
        width: 100%;
        height: 100%;
        /* 不是滤镜  */
        /* filter:blur(40px); */

    }
    /* 轮播项 最内层盒子设置 */
    .centerBox {
        width: 1140px;
        height: 400px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        background: red;
        overflow: hidden;
    }
    /* 轮播项 最内层盒子下图片设置 */
    .centerBox>img {
        width: 100%;
        height: 100%;
        transition: .9s;
    }
    .centerBox:hover>img {
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
        width: 570px;
        height: 108px;
        transition: .5s;
    }
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
    /* 分类信息 */
    .classification {
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
                    el: ".swiper-pagination"
                }
            },
            // 轮播图的信息
            swiperSlideList:[
                {
                    smallImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/21/5dad90245fad5.png@2280w_800h_1e_1c",
                    bigImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/21/5dad90245fad5.png@720w_200h_50-20bl_1e_1c"
                },
                {
                    smallImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/17/5da8057d63728.png@2280w_800h_1e_1c",
                    bigImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/17/5da8057d63728.png@720w_200h_50-20bl_1e_1c"
                },
                {
                    smallImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/09/06/5d71ced6a3a67.jpg@2280w_800h_1e_1c",
                    bigImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/09/06/5d71ced6a3a67.jpg@720w_200h_50-20bl_1e_1c"
                },
                {
                    smallImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/14/5da3db9312966.jpg@2280w_800h_1e_1c",
                    bigImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/14/5da3db9312966.jpg@720w_200h_50-20bl_1e_1c"
                },
                {
                    smallImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/22/5dae820646750.jpg@2280w_800h_1e_1c",
                    bigImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/22/5dae820646750.jpg@720w_200h_50-20bl_1e_1c"
                },
                {
                    smallImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/22/5dae730bf2098.jpg@2280w_800h_1e_1c",
                    bigImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/22/5dae730bf2098.jpg@720w_200h_50-20bl_1e_1c"
                },
                {
                    smallImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/22/5dae838d75e9c.jpg@2280w_800h_1e_1c",
                    bigImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/10/22/5dae838d75e9c.jpg@720w_200h_50-20bl_1e_1c"
                },
                {
                    smallImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/09/16/5d7f68b564091.png@2280w_800h_1e_1c",
                    bigImgUrl:"https://cs.xinpianchang.com/uploadfile/banner/2019/09/16/5d7f68b564091.png@720w_200h_50-20bl_1e_1c"
                }
            ]
        }
    }
}
</script>