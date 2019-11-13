<template>
    <div class="contentPage">
        <!-- 视屏播放模块 -->
        <contentvideo></contentvideo>

        <div class="content">
            <div class="contentleft">
                <!-- 播放信息 -->
                <playinfo-card></playinfo-card>
                <!-- 评论模块 -->
                <comments></comments>
            </div>
            <div class="contentright">
                <!-- 创作人列表 -->
                <authors-list></authors-list>

                <!-- 浏览记录 -->
                <visit-history></visit-history>

                <!-- 创作人的其他作品 -->
                <creators-other-products></creators-other-products>

            </div>
            
        </div>
    </div>
</template>

<style scoped>
.contentPage {
    background: rgb(247, 247, 247);
}
.content {
    display: flex;
    justify-content: center;
    /* height: 800px; */
    margin-top: 1rem;
}
.contentleft {
    width: 750px;
    /* background: orange; */
    margin-right: 1rem;
}
.contentright {
    width: 375px;
}
</style>

<script>
// 加载视屏模块
import contentvideo from "../components/contentvideo"
// 加载视屏介绍信息模块
import playinfoCard from "../components/playinfoCard"
// 加载评论模块
import comments from '../components/comments'
// 加载用户列表模块
import authorsList from "../components/authorsList";
// 加载访客历史记录模块
import visitHistory from "../components/visitHistory";
// 加载创作人其他作品展示模块
import creatorsOtherProducts from "../components/creatorsOtherProducts";
export default {
    components: {
        contentvideo,
        playinfoCard,
        comments,
        authorsList,
        visitHistory,
        creatorsOtherProducts
    },
    data(){
        return {
           
        }
    }
}
</script>