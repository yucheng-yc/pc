<template>
  <div id="app">
    <nav-bar :listData='listData'></nav-bar>
    <router-view></router-view>
  </div>
</template>

<style>

</style>

<script>
import navBar from './components/navBar'
export default {
  components:{
    navBar
  },
  data(){
    return {
      listData:[
        {navItem:'新片场'},
        {navItem:'首页'},
        {navItem:'发现',H:'255px',hasSonItem:true,tpTop:{title:'作品',ulitem:['广告','宣传片','记录片','创意混剪','MV']},tpCenter:{title:'文章',ulitem:[]},tpFooter:{title:'场库-高品质短片精选',ulitem:[]},other:[]},
        {navItem:'找人/机构'},
        {navItem:'学院'},
        {navItem:'素材',H:'255px',hasSonItem:true,tpTop:{title:'作品',ulitem:['广告','宣传片','记录片','创意混剪','MV']},tpCenter:{title:'文章',ulitem:[]},tpFooter:{title:'场库-高品质短片精选',ulitem:[]},other:[]},
        {navItem:'活动',H:'255px',hasSonItem:true,tpTop:{title:'作品',ulitem:['广告','宣传片','记录片','创意混剪','MV']},tpCenter:{title:'文章',ulitem:[]},tpFooter:{title:'场库-高品质短片精选',ulitem:[]},other:[]},
        {navItem:'更多',H:'255px',hasSonItem:true,tpTop:{title:'作品',ulitem:['广告','宣传片','记录片','创意混剪','MV']},tpCenter:{title:'文章',ulitem:[]},tpFooter:{title:'场库-高品质短片精选',ulitem:[]},other:[]},
        {navItem:'会员'},
        {navItem:'搜索'},
        {navItem:'会员'},
        {navItem:'注册'}
      ]
    }
  }
}
</script>
