<template>
  <div class="home">
      <nav-bar3></nav-bar3>
      <bg-video></bg-video>
      <home-article></home-article>
      <article-show :togglePhotos="false"></article-show>
      <article-show :togglePhotos="true"></article-show>
      <activity></activity>
      <activity :bgVideoToggle="true" :activityData="activityData"></activity>
      <homeCserver></homeCserver>
      <say></say>
      <homefooter></homefooter>
  </div>
</template>

<script>
// 视频首页导航栏
import navBar3 from '../components/navBar3'
// 视频首页 背景视频
import bgVideo from '../components/bgVideo';
// 视频首页 文章展示
import homeArticle from '../components/homeArticle';

import articleShow from '../components/articleShow';
import activity from "../components/activity";
import homeCserver from "../components/homeCserver";
import say from "../components/say";
import homefooter from "../components/homefooter"
// 导入辅助函数
import { mapState } from 'vuex';
export default {
  name: 'home',
  data(){
    return {
      activityData:{
        url:"//oss-xpc0.xpccdn.com/Upload/edu/2018/04/145ad1710e8b009.jpeg?x-oss-process=image%2Fresize%2Cw_720%2Ch_400%2Cm_fill"
      },
      // 导航栏数据
    }
  },
  methods:{
   
  },
  components:{
    bgVideo,
    homeArticle,
    articleShow,
    activity,
    homeCserver,
    say,
    homefooter,
    navBar3
  },

}
</script>

<style scoped>
.home {
   background: rgb(247, 247, 247);
}
</style>
