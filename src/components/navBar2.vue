<template>
    <div class="navBar2">

        <!-- 导航栏 -->
        <div class="nav" @mouseover="controlNavSon">
            <ul class="leftnav">
                <!-- 图片logo部分 -->
                <li class="logoImg"><a href="javascript:;">图片</a> </li>
                <li v-for="(item,i) of leftnavList" :key="i" :class="{arrow:item.arrow}" :ref="item.arrow&&item.strid">{{item.title}}</li>
            </ul>
            <ul class="rightnav"></ul>
        </div>

        <!-- 导航子项内容区域 -->
        <ul class="navsonitem" :ref="'navsonitem'+index" v-for="(item,index) of navsonitemList" :key="index" >
            <!-- 遍历一个子项所有内容 -->
            <li v-for="(con,key) of navsonitemList[0]" :key="key" class="sonitem">
                <!-- 所有子项内的小的标题 -->
                <span class="title"><a href="javascript:;">{{con.title}}»</a></span>
                <!-- 所有小标题内的内容 -->
                <ul class="content">
                    <li v-for="(son,i) of con.son" :key="i"><a href="javascript:;">{{son}}</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>


// 基础样式
<style scoped>
    /* a标签清除默认样式 */
    a {
        color: white;
        text-decoration: none;
    }
    /*设置整个导航栏内容对齐方式  */
    .nav {
        background: orangered;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 0 3rem;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
    }
    /* 导航栏内部左边部分 右边为弹性 */
    .leftnav,.rightnav {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
    }
    /* 设置每一小块的高度 并垂直对齐 */
    .leftnav>li,.rightnav>li {
        height: 60px;
        line-height: 60px;
        padding: 0 18px;
        color: white;
        font-size: 16px;
        font-weight: 300;
        position: relative;
        cursor: pointer;
    }
    /* 图片盒子设置 */
    li.logoImg {
        padding: 0;
    }
    /* 设置logo容器 */
    .logoImg>a {
        display: block;
        height: 60px;
        line-height: 60px;
        width: 100px;
    }
    /* 画箭头 */
    .arrow::after {
        font-family: iconfont;
        font-weight: 900;
        font-size: 16px;
        content: "\e600";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0px;
    }

</style>

// 导航子项内容
<style scoped>
    /* 去除所有u */
    /* 子项盒子设置 */
    .navsonitem {
        border-radius: 5px;
        background: rgba(30, 30, 30, .6);
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
        width: 200px;
        z-index: 9999;
        overflow: hidden;
    }
    /* 设置没一个子项的内容 */
    .sonitem {
        padding: .9rem;
        border-bottom: 1px solid rgba(189, 186, 186, 0.28);
    }
    /* 子项标题 */
    .title {
        display: block;
        text-align: left;
        line-height: 1.4;
        font-size: 16px;
        padding: .5rem 0;
        color: rgb(173, 157, 157);
    }
    /* 子项内容 */
    .content {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
    }
    .content li {
        width: 40%;
        line-height: 1.8;
        text-align: left;
        padding-left: .3rem;
        font-size: 12px;
    }

    .title:hover {
        color: white;
    }



</style>

// 设置显示隐藏
<style scoped>
    .hide {
        width: 0;
        height: 0;
    }
</style>
<script>
import Popper from "popper";
export default {
    data() {
        return {
            // 导航栏logo
            logoImgUrl:"",

            // 首页左边导航项
            leftnavList:[
                {title:"首页",arrow:false,strid:"home"},
                {title:"发现",arrow:true,strid:"find"},
                {title:"找人/机构",arrow:false,strid:"institutions"},
                {title:"学院",arrow:false,strid:"college"},
                {title:"素材",arrow:true,strid:"material"},
                {title:"活动",arrow:true,strid:"activity"},
                {title:"更多",arrow:true,strid:"more"}
            ],
            // 首页右边导航项
            rightnavList:[
                {title:"首页",arrow:false,strid:"home"},
            ],
            // 自导航栏子项数据
            navsonitemList:[
                {top:{title:"作品",son:["广告","宣传片","MV"]},center:{title:"文章"},footer:{title:"场库"}},
                {top:{title:"作品",son:["广告","宣传片","MV"]},center:{title:"文章"},footer:{title:"场库"}},
                {top:{title:"作品",son:["广告","宣传片","MV"]},center:{title:"文章"},footer:{title:"场库"}},
                {top:{title:"作品",son:["广告","宣传片","MV"]},center:{title:"文章"},footer:{title:"场库"}}
            ],
            // 显示隐藏开关
            hideToggle:true

        }
    },
    mounted () {
        this.popperInit();
    },
    methods: {
        // 为所有子项popper初始化
        popperInit(){
            //用于保存有子项的数据
            var itemArray=[];
            for(var item of this.leftnavList) {
                if(item.arrow) {
                    itemArray.push(item.strid);
                }
            }
            // 为子项定位
            var index=0;
            for(var target of itemArray){
                new Popper(this.$refs[target][0],this.$refs['navsonitem'+index][0]);
                ++index;  
            }
        },
        // 控制子项显示隐藏 
        controlNavSon(e){
            // 事件冒泡 进行节点筛选
           if(e.target.nodeName=="LI"){
            // 获取所有有子项的Dom
            for(var item=0;item<this.leftnavList.length;item++) {
                if(this.leftnavList[item].arrow) {
                    // 遍历所有子导航栏子项数据 
                    console.log(e.target);
                    for(var i=0;i<this.navsonitemList.length;i++) {
                        // this.hideToggle=true;
                        this.$refs['navsonitem'+item][0].style.cssText=`width:0;height:0`;
                    }
                    this.$refs['navsonitem'+item][0].style.cssText='';
                    }
                
            }
           }
        }
    }
    

}
</script>