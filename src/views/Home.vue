<template>
  <div class="home">
      <nav-bar></nav-bar>
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
import navBar from '../components/navBar'
import bgVideo from '../components/bgVideo';
import homeArticle from '../components/homeArticle';
import articleShow from '../components/articleShow';
import activity from "../components/activity";
import homeCserver from "../components/homeCserver";
import say from "../components/say";
import homefooter from "../components/homefooter"

export default {
  name: 'home',
  data(){
    return {
      activityData:{
        url:"//oss-xpc0.xpccdn.com/Upload/edu/2018/04/145ad1710e8b009.jpeg?x-oss-process=image%2Fresize%2Cw_720%2Ch_400%2Cm_fill"
      }
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
    navBar
  }
}
</script>

<style scoped>

</style>
