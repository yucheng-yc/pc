// 该组件是 用于播放视频的 介绍内容

<template>
    <div class="playinfoCard">
        <div class="topbox">
            <!-- 标题 -->
            <h3 class="title">{{playinfoObj.title}}<i class="icon icon-tuisongshezhi iconfont" ref="icon">icon</i></h3>
            
            <!-- 细节 -->
            <div class="topboxXj">
                <p class="topboxp">
                    <!-- 标签项 -->
                   <a :href="con.url" v-for="(con,i) of playinfoObj.spanBq" :key="i" class="bq1"><span>{{con.bq}}</span></a>
                    <!-- 其他信息 -->
                   <a :href="con.url" v-for="(con,i) of playinfoObj.spanBq2" :key="i+'1'" class="bq2"><span>{{con.bq}}</span></a>
                </p>
                <div class="otherinfo">
                    <div class="otherinfoleft">
                        <!-- 播放图标 -->
                        <span class="iconfont icon-bofang"></span>
                        <!-- 播放数量 -->
                        <span title="站内播放数">{{playinfoObj.playnum | numChange}}</span>
                    </div>
                    <!-- 按钮组 -->
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
        <!-- 内容组 -->
        <div class="centerbox">
            <h3 class="ctitle">标签</h3>
            <div class="tabbox">
                <a class="tab" :href="con.url" v-for="(con,index) of playinfoObj.tabs" :key="index">{{con.name}}</a>
            </div>
        </div>
    </div>
</template>
// 标题部分
<style scoped>
.playinfoCard {
    background: white;
}
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
    border-bottom: 1px solid #f0f0f0;
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
.topboxp>a.bq1 {
    display: inline-block;
    margin-right: .5rem;
    color: black;
}
.topboxp>a.bq2 {
    color: #999999;
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
.otherinfoleft {
    padding-top: .8rem;
}
.otherinfoleft>span{
    margin-right: .5rem;
}

.otherinforight {
    display: flex;
    justify-content: flex-end;
}
.otherinforight>span:first-child {
    background: #e74b3b;
    
}
.otherinforight>span:first-child a {
    color: white;
}
.otherinforight>span:first-child::before {
    content: "\e639";
    font-family: 'iconfont';
    font-size: 12px;
    color: #fff;
    margin-right: .25rem;
}
.otherinforight>span:first-child:hover {
    background: #cf4334;
}
.otherinforight>span:nth-child(2)::before {
    content: "\e637";
    font-family: 'iconfont';
    font-size: 12px;
    margin-right: .5rem;
}
.otherinforight>span:nth-child(3)::before {
    content: "\e639";
    font-family: 'iconfont';
    font-size: 12px;
    margin-right: .5rem;
}
.btn {
    position: relative;
    padding: 0 16px;
    cursor: pointer;
    display: inline-block;
    margin-left: 20px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    border: solid 1px rgba(153,153,153,.5);
    font-weight: 600;
    
}
.btn:hover {
    background: #f0f0f0;

}
.btncon {
    height: 30px;
    line-height: 30px;
    margin-right: .5rem;
    font-style: normal;
}
.btn>a {
    color: #333333;
}
.btnlike {
    border: 1px solid #e74b3b;
    background-color: #e74b3b;
}
</style>

// 中间部分
<style  scoped>
.centerbox {
    padding: 20px 0;
}
.ctitle {
    font-size: 14px;
    line-height: 1;
    font-weight: 600;
}
.ctitle::before {
    content: "\e72a";
    font-family: 'iconfont';
    font-size: 14px;
    color: #333;
    padding-right: 12px;

}
.tabbox {
    margin-top: 12px;
    font-weight: 300;
    overflow: hidden;
}
.tab {
    display: inline-block;
    background: #f7f8fa;
    border-radius: 2px;
    padding: 8px 12px;
    font-size: 12px;
    font-weight: 300;
    font-style: normal;
    line-height: 1;
    margin: 0 20px 10px 0;
    text-decoration: none;
    display: inline-block;
    color: #333;
    
}
.tab:hover {
    background-color: #e3e4e5;
}
</style>

// 图标部分
<style  scoped>
.title {
    position: relative;
}
.icon {
    position: absolute;
    top: .5rem;
    right: 0;
}
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
                ],
                // 标签组
                tabs:[
                    {name:"创意广告",url:""},
                    {name:"999皮炎皮小绿盒",url:""}
                ]


            }
        }
    },
    methods:{
        // tip集中操作
        createtippy(ele,content){
            this.tippy(ele,{
            content: content,
            placement: 'top',
            duration: 1000,
            delay: 50
            });
        }
    },
    mounted(){
        this.createtippy(this.$refs.icon,'推荐内容')
    },
    filters:{
        numChange(nStr){

            // 10000

        //     var n=0;
        //     var ye=e;
        //     var v='';
        //     while(e/1000>1){
        //         n++;
        //         if(e/1000<1){
        //             break;
        //         }
        //     }
           
        //    for(var i=0;i<n;i++){
        //         v+=','+ye.toString().slice(-4,-1);console.log(v);

        //    }
        nStr += '';  
	   var x = nStr.split('.');  
	   var x1 = x[0];  
	   var x2 = x.length > 1 ? '.' + x[1] : '';  
	    var rgx = /(\d+)(\d{3})/;  
	    while (rgx.test(x1)) {  
	        x1 = x1.replace(rgx, '$1' + ',' + '$2');  
	    }  
	    return x1 + x2; 

        }
    }

}
</script>