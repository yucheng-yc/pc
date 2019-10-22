<template>
    <div class="homeswiper">
          <swiper :options="swiperOption" ref="mySwiper" >
                <!-- slides -->
                <swiper-slide><div class="myslideBox"><div class="centerBox"><img src="https://cs.xinpianchang.com/uploadfile/banner/2019/10/21/5dad90245fad5.png@2280w_800h_1e_1c"></div></div></swiper-slide>
                <swiper-slide><div class="myslideBox"><div class="centerBox"><img src="https://cs.xinpianchang.com/uploadfile/banner/2019/10/21/5dad90245fad5.png@2280w_800h_1e_1c"></div></div></swiper-slide>
                <swiper-slide><div class="myslideBox"><div class="centerBox"><img src="https://cs.xinpianchang.com/uploadfile/banner/2019/10/21/5dad90245fad5.png@2280w_800h_1e_1c"></div></div></swiper-slide>
                <swiper-slide><div class="myslideBox"><div class="centerBox"><img src="https://cs.xinpianchang.com/uploadfile/banner/2019/10/21/5dad90245fad5.png@2280w_800h_1e_1c"></div></div></swiper-slide>
                <swiper-slide><div class="myslideBox"><div class="centerBox"><img src="https://cs.xinpianchang.com/uploadfile/banner/2019/10/21/5dad90245fad5.png@2280w_800h_1e_1c"></div></div></swiper-slide>
                <swiper-slide><div class="myslideBox"><div class="centerBox"><img src="https://cs.xinpianchang.com/uploadfile/banner/2019/10/21/5dad90245fad5.png@2280w_800h_1e_1c"></div></div></swiper-slide>
                <swiper-slide><div class="myslideBox"><div class="centerBox"><img src="https://cs.xinpianchang.com/uploadfile/banner/2019/10/21/5dad90245fad5.png@2280w_800h_1e_1c"></div></div></swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div>
            </swiper>
    </div>
</template>

// 整体样式设置
<style scoped>
    .myslideBox {
        width: 100%;
        height: 460px;
        position: relative;
        background: orange;
    }
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
    .centerBox>img {
        width: 100%;
        height: 100%;
        transition: .9s;
    }
    .centerBox:hover>img {
        transform: scale(1.05);
    }
</style>

<script>

export default {
    data(){
        return {
            // swiper的配置项
            swiperOption: {
                // 每一项的slide自动高度
                autoHeight: true,
                // 自动复制一项 让它看起来 滑动效果
                loop:true,
                initialSlide :0,
                effect : 'fade',
                uniqueNavElements: false,
                on:{
                    // slide改变的时候自动触发回调函数
                    slideChange: function () {
                        // 获取当前真实值
                         console.log(this.realIndex);
                    }
                }
            }
        }
    }
}
</script>