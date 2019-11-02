<template>
    <div class="navBar2">

        <!-- 导航栏 -->
        <div class="nav">
            <ul class="leftnav">
                <!-- 图片logo部分 -->
                <li class="logoImg"><a href="javascript:;" class="iconfont logo" :class="logoImgClass"></a> </li>
                <li v-for="(item,i) of leftnavList" :key="i" :class="{arrow:item.arrow}" :ref="item.arrow&&item.strid">
                     <i class="iconfont iimg" v-show="item.img" :class="item.imgClass"></i>{{item.title}}
                </li>
            </ul>
            <!-- 右侧导航栏部分 -->
            <ul class="rightnav">
                <li class="logoImg"><a href="javascript:;" class="iconfont iimg" :class="rightImgClass"></a></li>
                <li v-for="(itemR,iR) of rightnavList" :key="iR" :class="{arrow:itemR.arrow}" :ref="itemR.arrow&&itemR.strid">
                    <i class="iconfont iimg" v-show="itemR.img" :class="itemR.imgClass"></i>{{itemR.title}}
                </li>
            </ul>
        </div>

        <!-- 导航子项内容区域 -->
        <!-- 左侧子项 -->
        <ul class="navsonitem" :ref="'navsonitem'+index" v-for="(item,index) of navsonitemList" :key="index">
            <!-- 遍历一个子项所有内容 -->
            <li v-for="(con,key) of navsonitemList[index]" :key="key" class="sonitem">
                <!-- 所有子项内的小的标题 -->
                <span class="title"><a href="javascript:;">{{con.title}}»</a></span>
                <!-- 所有小标题内的内容 -->
                <ul class="content">
                    <li v-for="(son,i) of con.son" :key="i"><a href="javascript:;">{{son}}</a></li>
                </ul>
            </li>
        </ul>
        <!-- 右侧子项 -->
        <ul class="navsonitem" :ref="'rightnavsonitem'+index" v-for="(item,index) of rightnavsonitemList" :key="index+'right'">
            <li v-for="(con,key) of rightnavsonitemList[index]" :key="key" class="sonitem">
                <span class="title"><a href="javascript:;">{{con.title}}»</a></span>
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
        min-width: 1182px;
        box-sizing: border-box;
        position: fixed;
        width: 100%;
        background: transparent;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 0 3rem;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
        z-index: 9999;
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
    .logo {
        font-size: 20px;
        font-weight: 400;
    }
    .iimg {
        font-size: 16px;
        font-weight: 200;
    }

</style>

// 导航子项内容
<style scoped>
    /* 去除所有u */
    /* 子项盒子设置 */
    .navsonitem {
        border-radius: 5px;
        /* background: rgba(30, 30, 30, .6); */
        background: transparent;
        /* box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28); */
        width: 200px;
        /* z-index: 9999; */
        overflow: hidden;
    }
    /* 设置每一个子项的内容 */
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
        /* color: rgb(173, 157, 157); */
        
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
    .title a:hover {
        color: blank;
    }



</style>

<script>
// 主题文件
// import 'tippy.js/themes/light.css';
import "@/assets/css/navthemes.css"
export default {
    data() {
        return {
        //用于保存左侧有子项的数据
        itemArray:[],
        //用于保存右侧侧有子项的数据
        rightitemArray:[],
        //用来保存导航栏状态
        navstateDefault:true
        }
        
    },
    // 挂载生命周期
    mounted () {
        this.popperInit();
    },
    methods: {
        // 为所有子项popper初始化
        popperInit(){
            // 保存有子项的数据
            for(var item of this.leftnavList) {
                if(item.arrow) {
                    this.itemArray.push(item.strid);
                }
            }
            // 为子项定位 
            for(var i=0;i<this.itemArray.length;i++){
                this.createtippy(this.$refs[this.itemArray[i]][0],this.$refs['navsonitem'+i][0]);
            }

            // 右侧导航栏 操作
            // 保存有子项的数据
            for(var it of this.rightnavList) {
                if(it.arrow) {
                    this.rightitemArray.push(it.strid);
                }
            }
            console.log(this.rightitemArray);
            // 为子项定位 

            for(let index=0;index<this.rightitemArray.length;index++){
                this.createtippy(this.$refs[this.rightitemArray[index]][0],this.$refs['rightnavsonitem'+index][0]);
            }

        },
        // 创建tippy提示框
        createtippy(ele,content){
           new this.tippy(ele,{
            content: content,
            theme: 'yc',
            interactive: true,
            placement: 'bottom',
            duration: 1000,
            delay: 50,
            });
        }
    },
    // 基本数据
    props:{
        // 导航栏logo
        logoImgClass:{
            type:String,
            default:'icon-logo'
        },
        // 首页左边导航项
        leftnavList:{
            type:Array,
            default:function(){
                return [
                {title:"首页",arrow:false,strid:"home",img:false},
                {title:"发现",arrow:true,strid:"find",img:false},
                {title:"找人/机构",arrow:false,strid:"institutions",img:false},
                {title:"学院",arrow:false,strid:"college",img:false},
                {title:"素材",arrow:true,strid:"material",img:false},
                {title:"活动",arrow:true,strid:"activity",img:false},
                {title:"更多",arrow:true,strid:"more",img:false}
                ]
            }
        },
        // 自导航栏子项数据
        navsonitemList:{
            type:Array,
            default:function(){
                return [
                {top:{title:"作品",son:['广告','宣传片','剧情短片','记录片','创意混剪','MV']},center:{title:"文章"},footer:{title:"场库-高品质精选"}},
                {top:{title:"视频",son:["动物","人物","自然","科技","建筑物","商业"]},center:{title:"音乐",son:["商业","动感","快乐","预告片","灵感","摇滚"]},footer:{title:"图片"}},
                {top:{title:"电影季"},center:{title:"创作吧少年"},footer:{title:"NEW VISION毕业展"},footer2:{title:"更多"}},
                {top:{title:"新片场影业"},center:{title:"新片场短视频"},footer:{title:"新片场营销"}}
                ]
            }
        },
        // ************右侧导航栏********************
         // 导航栏logo
        rightImgClass:{
            type:String,
            default:"icon-pinpaihuiyuanzhan"
        },
        // 首页右边导航项
        rightnavList:{
            type:Array,
            default:()=>{
                return [
                {title:"搜索",arrow:false,strid:"search",img:true,imgClass:'icon-icon_search'},
                {title:"消息",arrow:false,strid:"lingdang",img:true,imgClass:'icon-lingdang'},
                {title:"个人",arrow:true,strid:"xuanzhong",img:true,imgClass:'icon-yduigerenzhongxinxuanzhong'},
                {title:"发布消息",arrow:true,strid:"xiaoxi",img:false}
                ]
            }
        },
        // 右侧自导航栏子项数据
        rightnavsonitemList:{
            type:Array,
            default:function(){
                return [
                    {
                        top:{title:"个人主页"},
                        center:{title:"收藏"},
                        footer:{title:"我的课程"},
                        footer2:{title:"我的素材"},
                        footer3:{title:"我的订单"},
                        footer4:{title:"我的优惠券"},
                        footer5:{title:"我的购物车"},
                        footer6:{title:"认证"},
                        footer7:{title:"账号设置"},
                        footer7:{title:"退出登录"}
                    },
                    {
                        top:{title:"上传视频"},
                        center:{title:"发布文章"}
                    }
                ]
            }
        },
        // 状态模式 登录 或者
        navstate:{
            type:Boolean,
            default:false
        },
        userInfo:{
            type:Object
        }
    },
    // 组件传值是在挂载之后, 对传值进行处理
    updated(){
        alert(this.navstate);
        
    },
  
    

}
</script>