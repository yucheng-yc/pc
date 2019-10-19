<template>
  <div class="home">
      <bg-video></bg-video>
      <home-article></home-article>
      <article-show :togglePhotos="false"></article-show>
      <article-show :togglePhotos="true"></article-show>
      <activity></activity>
      <activity :bgVideoToggle="true"></activity>
      <homeCserver></homeCserver>
  </div>
</template>

<script>
import bgVideo from '../components/bgVideo';
import homeArticle from '../components/homeArticle';
import articleShow from '../components/articleShow';
import activity from "../components/activity";
import homeCserver from "../components/homeCserver"

export default {
  name: 'home',
  components: {
    
  },
  data(){
    return {
      
    }
  },
  methods:{
   
  },
  components:{
    bgVideo,
    homeArticle,
    articleShow,
    activity,
    homeCserver
  }
}
</script>

<style scoped>

</style>
