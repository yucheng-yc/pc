<template>
    <div class="HomeLogin">
        <!-- 导航栏部分 -->
        <nav-bar3></nav-bar3>

        <!-- 登录后首页轮播图部分 -->
        <homeswiper></homeswiper>
 
        <!-- 精选模块 -->
        <model-page :boxCardList="HomeLogin.boxCardList"></model-page> 

        <!-- 广告宣传 -->
        <model-page :boxCardList="HomeLogin.boxCardList2" :selectDate="HomeLogin.selectDate2"></model-page> 

        <!-- 创意混剪 -->
        <model-page :boxCardList="HomeLogin.boxCardList3" :selectDate="HomeLogin.selectDate3"></model-page>

        <!-- 文章 -->
        <model-page :boxCardList="HomeLogin.boxCardList3" :selectDate="HomeLogin.selectDate4"></model-page>

        <!-- 短视频 -->
        <model-page :boxCardList="HomeLogin.boxCardList3" :selectDate="HomeLogin.selectDate5"></model-page>

        <!-- 纪录片 -->
        <model-page :boxCardList="HomeLogin.boxCardList3" :selectDate="HomeLogin.selectDate6"></model-page>

        <!-- 剧情/动画 -->
        <model-page :boxCardList="HomeLogin.boxCardList3" :selectDate="HomeLogin.selectDate7"></model-page>


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
import homefooter from "../components/homefooter";
// 导入登录后主页 内容模块
import modelPage from '../components/modelPage';

// 加载vuex内的数据 使用vuex辅助函数
import { mapState } from 'vuex';
export default {
    // 局部组件的注册
    components:{
        navBar3,
        homeswiper,
        homefooter,
        modelPage
    },
    data(){
        return {

        }
    },
    computed:{
        // 使用辅助函数来获取数据
        ...mapState({
            HomeLogin:state=>state.HomeLogin
        })
    },
    mounted () {
        console.log(this.HomeLogin);
    }
}
</script>