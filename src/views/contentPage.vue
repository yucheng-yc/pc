<template>
    <div class="contentPage">
        <!-- 视屏播放模块 -->
        <contentvideo></contentvideo>

        <div class="content">
            <div class="contentleft">
                <playinfo-card></playinfo-card>
            </div>
            <div class="contentright">

            </div>
        </div>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    justify-content: center;
    height: 800px;
    margin-top: 1rem;
}
.contentleft {
    width: 750px;
    background: orange;
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
export default {
    components: {
        contentvideo,
        playinfoCard
    }
}
</script>