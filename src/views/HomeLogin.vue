<template>
    <div class="HomeLogin">
        <!-- 导航栏部分 -->
        <nav-bar3></nav-bar3>

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
import navBar3 from '../components/navBar3'
// 导入轮播图组件
import homeswiper from "../components/homeswiper";
// 导入底部组件
import homefooter from "../components/homefooter"
export default {
    components:{
        navBar3,
        homeswiper,
        homefooter
    }
}
</script>