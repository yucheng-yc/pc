<template>
    <div class="HomeLogin">
        <!-- 导航栏部分 -->
        <nav-bar></nav-bar>

        <!-- 登录后首页轮播图部分 -->
        <homeswiper></homeswiper>
        

        <!-- 页面底部 -->
        <homefooter></homefooter>
    </div>
</template>

<style scoped>

</style>

<script>
// 导入导航栏组件
import navBar from '../components/navBar'
// 导入轮播图组件
import homeswiper from "../components/homeswiper";
// 导入底部组件
import homefooter from "../components/homefooter"
export default {
    components:{
        navBar,
        homeswiper,
        homefooter
    }
}
</script>