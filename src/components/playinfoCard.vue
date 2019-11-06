// 该组件是 用于播放视频的 介绍内容

<template>
    <div class="playinfoCard">
        <div class="topbox">
            <h3 class="title">{{playinfoObj.title}}</h3>
            <div class="topboxXj">
                <p class="topboxp">
                    <!-- 标签 -->
                   <a :href="con.url" v-for="(con,i) of playinfoObj.spanBq" :key="i" class="bq1"><span>{{con.bq}}</span></a>
                   <a :href="con.url" v-for="(con,i) of playinfoObj.spanBq2" :key="i+'1'" class="bq2"><span>{{con.bq}}</span></a>
                </p>
                <div class="otherinfo">
                    <div class="otherinfoleft">
                        <span class="iconfont icon-bofang"></span>
                        <span>{{playinfoObj.playnum}}</span>
                    </div>
                    <div class="otherinforight">
                        <span class="btn" v-for="(con,i) of playinfoObj.btns" :key="i+'2'">
                            <a :href="con.btnurl">
                                <i class="btncon">{{con.ctn}}</i>
                                <span class="btnnum">{{con.btnnum}}</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>


        <div class="centerbox">

        </div>
        <div class="bottombox">

        </div>
    </div>
</template>
// 标题部分
<style scoped>
.playinfoCard {
    padding: 0 30px;
    margin-bottom: 20px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}
.playinfoCard div {
    width: 100%;
}
.topbox {
    padding: 20px 0 36px 0;
}
.title {
    color: #333333;
    font-size: 26px;
    font-weight: 600;
    margin: 0;
}
.topboxXj {
    padding-top: 10px;
    line-height: 1;
    color: #999999;
    font-size: 12px;
    font-weight: 300;
}
.topboxp {
    padding: 0;
    margin: 0;
}
.topboxp>a {
    display: inline-block;
    margin-right: .5rem;
}
.bq1:not(:last-child)::after {
    content: "\e62c";
    font-family: "iconfont";
}
.bq2 {
    font-family: "iconfont";
}
.otherinfo {
    display: flex;
    justify-content: space-between;
    margin-top: 28px;
    user-select: none;
    position: relative;
    color: #666666;
}
.otherinfoleft>span{
    margin-right: .5rem;
}
.otherinforight {

}
.btn {
    color: #333333;
    font-size: 0;
    position: relative;
    padding: 0 16px;
    cursor: pointer;
    display: inline-block;
    margin-left: 20px;
    height: 30px;
    text-align: center;
    border-radius: 5px;
}
.btnlike {
    border: 1px solid #e74b3b;
    background-color: #e74b3b;
}
</style>

// 中间部分
<style  scoped>


</style>


<script>
export default {
    data(){
        return {
            playinfoObj:{
                // 标题
                title:"神州！5分钟疾行960万平方公里超燃混剪",
                // 标签
                spanBq:[
                    {bq:"MV",url:""},
                    {bq:"创意混剪 - 混剪",url:""}
                ],
                // 其他标签
                 spanBq2:[
                    {bq:"11-02 23:25",url:""},
                    {bq:"e6e3",url:""},
                    {bq:" 举报",url:""}
                ],
                // 播放量
                playnum:10000,
                // btn组信息
                btns:[
                    {ctn:"喜欢",btnnum:271,btnurl:''},
                    {ctn:"分享",btnnum:'',btnurl:''},
                    {ctn:"收藏",btnnum:'',btnurl:''}
                ]


            }
        }
    }

}
</script>