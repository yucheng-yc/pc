<template>
  <div class="home">
      <bg-video></bg-video>
      <home-article></home-article>
  </div>
</template>

<script>
import bgVideo from '../components/bgVideo';
import homeArticle from '../components/homeArticle';
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
    homeArticle
  }
}
</script>

<style scoped>

</style>
