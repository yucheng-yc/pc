<template>
    <div class="infocard">
        <!-- 卡片 -->
        <div class="card">
            <!-- 上层图片盒子 -->
            <div class="imgBox">
                <div class="img">
                    <img src="" alt="">
                </div>
            </div>

            <!-- 下层信息盒子 -->
            <div class="infoBox">
                <!-- 头部信息盒子 -->
                <div class="headerInfoBox">
                    <!-- 标题内容 -->
                    <p class="title"></p>
                    <!-- 分类标签 -->
                    <div class="classBox">
                        <span class="classification">命名</span>
                        <span class="classification">命名</span>
                    </div>
                </div>

                <!-- 底部信息盒子 -->
                <div class="footerInfoBox">
                      <!-- 头像信息 -->
                    <a  class="info">
                        <div class="heads">
                            <!-- 头部图片 -->
                                <p class="headsImg">
                                    <img  class="infoimg">
                                    <!-- 头部图片认证 -->
                                    <span class="iconfont v">
                                        <!-- <img :src="require(`@/assets/images/rzhtrue.png`)" v-if="item.infoObj.heads.rzimg==true">
                                        <img :src="require(`@/assets/images/rzfalse.png`)" v-else-if='item.infoObj.heads.rzimg==false'>
                                        <i v-else></i> -->
                                    </span>
                                </p>
                            <!-- 作者信息 -->
                            <span class="author"></span>
                            <span class="iconfont lastimg">
                            </span>
                        </div>
                        <!-- 介绍 -->
                        <p class="Introduces"></p>
                    </a>
                </div>
            </div>
        </div>
    </div> 
</template>

// 卡片基本样式设置
<style scoped>
    /*对整个卡片进行设置  */
    .card {
        width: 270px;
        height: 294px;
        background-color: orange;
    }
    /* 上层图片盒子 */
    .imgBox {
        width: 270px;
        height: 162px;
        background-color: red;
    }
    /* 下层显示信息盒子 */
    .infoBox {
        width: 270px;
        height: 132px;
    }
    /* 下层盒子最外层盒子 */
    .headerInfoBox {
        padding: 16px;
    }
    /* 标题信息 */
    .title {
        width: 238px;
        height: 21px;
        margin: 0;
        font-size: 30px;
        font-weight: 800;
        background-color: blueviolet;
    }
    /* 分类标签盒子样式 */
    .classBox {
        background-color: yellowgreen;
        margin-top: 12px;
    }
    /* 分类标签具体样式 */
    .classification {
        color: aqua;
        font-size: 12px;
        opacity: 0.75;
    }
     /*当不为一个时加竖线分隔 */ 
    .classBox>span:not(:last-child)::after {
        content: '\e62c';
        font-family: 'iconfont';
    }
    .footerInfoBox {
        padding: 0 16px;
    }
</style>


// 头部盒子设置
<style scoped>
    /* 头像信息 */
    .heads {
        background-color: red;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
    }
      /* a超链接信息链接 */
    .info {
        color: white;
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
<script>
export default {
    
}
</script>