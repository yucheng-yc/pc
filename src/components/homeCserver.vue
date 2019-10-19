<template>
    <div class="homeCserver">
        <h3 class="levelTitle">为创作人提供服务</h3>
        <div class="imgBox">
            <imgCard :contentBox="contentBoxList[i]" v-for="(con,i) in contentBoxList" :key="i"></imgCard>
        </div>
        
    </div>
</template>

<style scoped>
    .homeCserver {
        display: flex;
        width: 1140px;
        height: 738px;
        margin: 0 auto;
        flex-flow: column nowrap;
    }
    .levelTitle {
        width: 100%;
        height: 20px;
        font-size: 36px;
        padding: 100px 0 50px;
        text-align: center;
    }
    .imgBox {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
</style>

<script>
import imgCard from "../components/imgCard"
export default {
    components:{
        imgCard
    },
    data(){
        return {
            contentBoxList:[
                {title:'版权音乐素材',content:'影视配乐专属的版权音乐曲库在线交易，根据项目用途提供多种报价方案。可下载正式授权书，并支持永久使用，避免版权纠纷。',imgBoxUrl:"//cs.vmovier.com/Uploads/Activity/2017-09-18/59bf99e2e7127.png@732w_460h_1e_1c"},
                {title:"创作吧！少年短片征集大赛",content:"创作吧！少年，是新片场社区主办的系列短视频主题征集活动，每期结合电影、商业品牌等主题，累计征集作品3000多部。",imgBoxUrl:"//cs.vmovier.com/Uploads/Activity/2017-09-18/59bf9d6d08933.png@732w_460h_1e_1c"},
                {title:"新片场开放日",content:"新片场开放日，是全国范围内的优质短片线下展映、行业交流活动，足迹已遍布国内20多座城市，累计参与人数超过5万，覆盖用户超过300万。",imgBoxUrl:"//cs.vmovier.com/Uploads/Activity/2017-09-19/59c10d099b26e.png@732w_460h_1e_1c"},
                {title:"更多影视创作工具",content:"更多影视创作工具陆续上线",imgBoxUrl:"//cs.vmovier.com/Uploads/Activity/2017-09-18/59bfa62336642.png@732w_460h_1e_1c"}
            ]
        }
    }
}
</script>