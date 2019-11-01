<template>
    <div class="selectPage">

        <div class="title-wrap">
            <span class="title">编辑精选</span>
            <span class="title_twn">STAFF PICKS</span>
            <a class="more fs_14 fw_600 c_b_3" href="/channel/index/id-0/sort-pick/type-0?form=indexEditorPick">更多</a>
		</div>
        <div class="page">
            <infoCardTitle></infoCardTitle>
            <infoCardTitle></infoCardTitle>
            <infoCardTitle></infoCardTitle>
            <infoCardTitle></infoCardTitle>
        </div>
    </div>
</template>

<style scoped>
/* 整体页面设置 */
.page {
    display: flex;
    flex-flow: row nowrap;
    width: 1180px;
    margin: 0 auto;
    justify-content: space-between;
    padding: 1rem;
}
.title-wrap {
    width: 1180px;
    margin: 0 auto;
    padding: 1rem;
}
.title {
    line-height: 1;
    color: #333333;
    font-size: 24px;
    font-weight: 600;
    display: inline-block;
    font: 12px/1.5 "PingFang SC", "Microsoft YaHei", 微软雅黑, STHeiti, sans-serif;
}
</style>

<script>
import infoCardTitle from '../components/infoCardTitle'
export default {
    components:{
        infoCardTitle
    },
    data(){
        return {
            selectDate:{
                title:["编辑精选",'STAFF PICKS']
            }
        }
    }
}
</script>