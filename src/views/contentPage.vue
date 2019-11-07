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
    background: red;
}
</style>

<script>
// 加载视屏模块
import contentvideo from "../components/contentvideo"
// 加载视屏介绍信息模块
import playinfoCard from "../components/playinfoCard"
// 加载评论模块
import comments from '../components/comments'
export default {
    components: {
        contentvideo,
        playinfoCard,
        comments
    }
}
</script>