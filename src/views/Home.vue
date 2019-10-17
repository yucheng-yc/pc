<template>
  <div class="home">
      <bg-video></bg-video>
      <home-article></home-article>
      <article-show></article-show>
  </div>
</template>

<script>
import bgVideo from '../components/bgVideo';
import homeArticle from '../components/homeArticle';
import articleShow from '../components/articleShow'
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
    articleShow
  }
}
</script>

<style scoped>

</style>
