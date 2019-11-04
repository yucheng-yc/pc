<template>
    <div class="infocard">
        <!-- 卡片 -->
        <div class="card">
            <!-- 上层图片盒子 -->
            <div class="imgBox">
                <div class="img">
                    <img :src="cardData.top.imgUrl" alt="图片正在加载">
                </div>
                <!-- 显示时间 01'14"-->
                <span class="time">{{cardData.top.time | thetime}}</span>
                <!-- 显示小logo -->
                    <span class="smallLogo" v-if="cardData.top.tjTg"><i class="iconfont icon-shuqian"></i></span>
                <div class="coverBox">
                    <div class="coverInfo">
                        {{cardData.top.coverInfo.content}}
                    </div>
                    <!-- 发布年月日信息 2019-10-29发布 -->
                    <p class="zqTime">{{cardData.top.coverInfo.release |dateFormat}}</p>
                </div>
            </div>

            <!-- 下层信息盒子 -->
            <div class="infoBox">
                <!-- 头部信息盒子 -->
                <div class="headerInfoBox">
                    <!-- 标题内容 -->
                    <p class="title">{{cardData.bottom.title}}</p>
                    <!-- 分类标签 -->
                    <div class="classBox">
                        <span class="classification" v-for="(con,i) of cardData.bottom.classification" :key="i">{{con}}</span>
                    </div>
                </div>

                <!-- 底部信息盒子 -->
                <div class="footerInfoBox">
                      <!-- 头像信息 -->
                    <a  class="info" >
                        <!-- 第一 头像区域 -->
                        <div class="heads">
                            <!-- 头部图片 -->
                                <p class="headsImg" >
                                    <img  class="infoimg" :src="cardData.bottom.boxInfo.headsImgUrl"  ref="infoimg">
                                    <!-- 头部图片认证 -->
                                    <span class="iconfont v">
                                        <img src="../assets/images/rzhtrue.png" v-if="cardData.bottom.boxInfo.vTg">
                                        <img src="../assets/images/rzfalse.png" v-else-if="cardData.bottom.boxInfo.vTg===false">
                                        <i v-else></i>
                                    </span>
                                </p>
                            <!-- 作者信息 -->
                            <span class="author">{{cardData.bottom.boxInfo.author}}</span>
                            <!-- 第二 介绍区域 -->
                            <p class="Introduces">{{cardData.bottom.boxInfo.Introduces}}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        
        <!-- 提示框提示信息 -->
        <div  class="btn" ref="btn"></div>
        <!-- 提示框 一 list -->
        <ul class="tiptitle_one" ref="tiptitle_one">
            <li class="list_item" v-for="(con,i) of cardData.bottom.info" :key="i" :ref="'li'+i">
                <!-- 头像信息 -->
                <a  class="info">
                    <!-- 第一 头像区域 -->
                    <div class="heads">
                        <!-- 头部图片 -->
                            <p class="headsImg">
                                <img  class="infoimg show" :src="con.headsImgUrl" ref="infoimgShow"  >
                                <!-- 头部图片认证 -->
                                <span class="iconfont v">
                                    <img src="../assets/images/rzhtrue.png" v-if="con.vTg">
                                    <img src="../assets/images/rzfalse.png" v-else-if="con.vTg===false">
                                    <i v-else></i>
                                </span>
                            </p>
                        <!-- 作者信息 -->
                        <span class="author">{{con.author}}</span>
                        <!-- 第二 介绍区域 -->
                        <p class="Introduces">{{con.Introduces}}</p>
                    </div>
                </a>
            </li>
        </ul>
        <!-- 提示框 二 info -->
        <div class="tiptitle_twn" ref="tiptitle_twn">
            <!-- top -->
            <div class="twnTop">
                <div class="twnImgBox">

                </div>
            </div>
            <!-- center -->
            <div class="twnCenter"></div>
            <!-- footer -->
            <div class="twnFooter"></div>

        </div>

    </div> 
</template>

// 卡片基本样式设置
<style scoped>
    /*对整个卡片进行设置  */
    .card {
        width: 270px;
        height: 294px;
    }
    /* 上层图片盒子 */
    .imgBox {
        width: 270px;
        height: 162px;
        position: relative;
    }
    .img {
        overflow: hidden; 
    }
    .img>img {
        width: 100%;
        height: 100%;
        transition: .5s;
    }
    /* 显示时间 */
    .time {
        position: absolute;
        color: #fffefe;
        font-weight: 300;
        bottom: 14px;
        right: 14px;
        z-index: 1;
    }
    /* 显示图标设置 */
    .smallLogo {
        position: absolute;
        color: #fffefe;
        font-weight: 300;
        top: 14px;
        left: 14px;
        z-index: 1;
        transition: .5s;
    }
    /* 下层显示信息盒子 */
    .infoBox {
        width: 270px;
        height: 132px;
    }
    /* 下层盒子最外层盒子 */
    .headerInfoBox {
        padding: 16px;
    }
    /* 标题信息 */
    .title {
        width: 238px;
        height: 21px;
        margin: 0;
        color: #333333;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;

    }
    /* 分类标签盒子样式 */
    .classBox {
        margin-top: 12px;
    }
    /* 分类标签具体样式 */
    .classification {
        color: #999999;
        font-size: 12px;
        text-align: left;
        font-weight: 300;
    }
     /*当不为一个时加竖线分隔 */ 
    .classBox>span:not(:last-child)::after {
        content: '\e62c';
        font-family: 'iconfont';
    }
    .footerInfoBox {
        padding: 10px 16px;
        border-top: 1px solid rgb(247,247,247);
    }
</style>

// 遮罩层内容设置
<style scoped>
/* 遮罩层 */
.coverBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 10;
    transition: .5s;
    opacity: 0;
}

/* 内容区域宽高 */
.coverInfo {
    margin: 14px;
    max-height: 53px;
    color: #ffffff;
    font-size: 12px;
    font-weight: 300;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    
}
.zqTime {
    color: #fff;
    position: absolute;
    bottom: 14px;
    left: 14px;
    line-height: 1;
    font-weight: 300;
    font-size: 12px;
    margin: 0;
    padding: 0;
}

.imgBox:hover .coverBox {
    opacity: 1;
}
.imgBox:hover .smallLogo {
    opacity: 0;
}



</style>

// 头部盒子设置
<style scoped>
    /* 头像信息 */
    .heads {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
    }
      /* a超链接信息链接 */
    .info {
        color: white;
    }
    /* 头像图片盒子设置 */
    .headsImg {
        padding: 0;
        margin: 0;
        width: 1.6rem;
        height: 1.6rem;
        position: relative;
    }
    /* t头像图片 */
    .infoimg {
        border-radius: 50%;
        width:  1.6rem;
        height: 1.6rem;
        vertical-align: middle;
    }
    .v {
        position: absolute;
        width: 1rem;
        height: 1rem;
        bottom: .1rem;
        right: -.55rem;
        border-radius: 50%;
        overflow: hidden;
    }
    .v img {
        width: .6rem;
        height: .6rem;
    }
    .heads>span {
        display: inline-block;
        height: 2rem;
        line-height: 2rem;
        padding: 0;
    }
    /* 作者设置 */
    .author,.Introduces {
        display: inline-block;
        height: 2rem;
        line-height: 2rem;
        padding-left: 1rem;
        margin-left: .5rem;
        max-width: 100px;
        color: #333333;
        font-size: 12px;

    }
    .Introduces {
        margin: 0;
        color: #999999;
    }
    .card:hover {
        box-shadow: 0 4px 12px 0px rgba(0,0,0,.1);
    }
</style>

// 提示框设置
<style scoped>
/* list盒子设置 */
.tiptitle_one {
    list-style: none;
    width: 200px;
    overflow:auto;
    margin: 0;
    display: flex;
    flex-flow: column nowrap;
    box-sizing: border-box;
    
}
.list_item {
    /* overflow: hidden; */
    line-height: 28px;
    height: 28px;
    margin: 0;
    white-space: normal;
    vertical-align: top;
    padding: 13px 15px;
    font-size: 0;
    transition: .8s;
}
li.list_item:not(:last-child) {
    border-bottom: 1px solid rgb(244,244,244);
}
li.list_item:hover {
    background-color: rgb(244,244,244);
}
/* twn 设置 */
.tiptitle_twn {
    padding: 15px;
    width: 100px;
    height: 100px;
    background-color: orange;
    z-index: 888;
}
</style>

// 提示按钮定位
<style scoped>
.infocard {
    position: relative;
}
.btn {
    position: absolute;
    display: block;
    width: 2rem;
    height: 2rem;
    background: orange;
    bottom: .5rem;
    left: 1rem;
    z-index: 88;
}

</style>

<script>
import "@/assets/css/themesWhite.css"
export default {
    data(){
        return {

        }
    },
    // 局部过滤器
    filters:{
        // 时间格式化 01'14"
        thetime(time){
            // data数据是以秒为单位
            var points=Math.floor(time/60);
            var seconds=Math.floor(time%60);
            if(points<10){
                points='0'+points;
            }

            return `${points}'${seconds}"`
        },
        // 发布日期格式化
        dateFormat(time){
            // 数据为毫秒数 转为 '2019-10-8'
            var dt=new Date(time);
            var year=dt.getFullYear();
            var month=dt.getMonth();
            var day=dt.getDate();
            return `${year}-${month}-${8} 发布`;
            
        }

    },
    props:{
         // 数据部分
        cardData:{
            type:Object,
            // 默认数据
            default:function(){
                var cardDataDefault={
                    // 卡片上部数据
                    top:{
                        // 是否使用推荐图标
                        tjTg:true,
                        // 显示视频的时长 单位秒
                        time: 1200,
                        // 遮罩层信息
                        coverInfo:{
                            // 遮罩层正文部分
                            content:'',
                            // 发布时间 数据为毫米数
                            release: 1572422047389,
                        },
                        // 图片url
                        imgUrl:'https://cs.xinpianchang.com/uploadfile/article/2019/10/26/5db31cb32f7b6.jpeg@540w_324h_1e_1c'

                    },
                    // 卡片底部数据
                    bottom:{
                        // 显示标题
                        title:'ANOTHER ME我与另一个“我” | PEACE BIRD',
                        // 分类标签 
                        classification: ["广告-美妆时尚"],
                        // 盒子上的头像信息
                        boxInfo:{
                                // 头像图片
                                headsImgUrl:"https://oss-xpc0.xpccdn.com/Upload/user/2017/12/095a2acf9beee3a.jpeg@40w_40h_1e_1c",
                                // 认证类型 true false 或其他 三种
                                vTg: true,
                                // 作者信息
                                author:'2位创作者',
                                // 职业信息 介绍信息
                                Introduces:'导演/剪辑',
                                // 其他信息 
                            },
                        // 头像区域 信息集合
                        info:[
                            {
                                // 头像图片
                                headsImgUrl:"https://oss-xpc0.xpccdn.com/Upload/user/2017/12/095a2acf9beee3a.jpeg@40w_40h_1e_1c",
                                // 认证类型 true false 或其他 三种
                                vTg: true,
                                // 作者信息
                                author:'yc',
                                // 职业信息 介绍信息
                                Introduces:'导演/剪辑',
                                // 其他信息 

                            },
                            {
                                // 头像图片
                                headsImgUrl:"https://oss-xpc0.xpccdn.com/Upload/user/2017/12/095a2acf9beee3a.jpeg@40w_40h_1e_1c",
                                // 认证类型 true false 或其他 三种
                                vTg: true,
                                // 作者信息
                                author:'yc2',
                                // 职业信息 介绍信息
                                Introduces:'导演/剪辑',
                                // 其他信息 

                            }
                        ]
                    }
                }
                return cardDataDefault;
            }
        }
    },
    // 初始化tippy操作
    mounted(){
        this.createTippy({
            el:this.$refs.btn,
            con:this.$refs.tiptitle_one
        })
        this.createTippy({
            el:this.$refs.li0,
            con:this.$refs.tiptitle_twn,
            place:'right-end'
        })
 
    },
    methods:{
        // 对提示框进行封装
        createTippy(obj){

            this.tippy(obj.el,{
            content: obj.con,
            theme: obj.theme||'yc',
            // 子盒子可hover
            interactive: true,
            placement: obj.place||'bottom',
            duration: 1000,
            delay: 50,
            positionFixed: true,
            html:true,
            offset:obj.offset ||0,
            inlinePositioning: false,
        })
        }
    }
}
</script>