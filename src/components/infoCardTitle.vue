<template>
    <div class="infoCardTitle">
        <!-- 基本信息盒子 -->
        <infocard :cardData="cardData"></infocard>
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

// 基本设置
<style scoped>
.infoCardTitle {
    position: relative;
    margin-top: 20px;
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
    margin: 0;
    display: flex;
    flex-flow: column nowrap;
    box-sizing: border-box;
    
}
.list_item {
    overflow: hidden;
    line-height: 28px;
    height: 28px;
    margin: 0;
    white-space: normal;
    vertical-align: top;
    padding: 13px 15px;
    font-size: 0;
    transition: .8s;
    position: relative;
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
    background-color: transparent;
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
    width: 3rem;
    height: 3rem;
    background: transparent;
    top: 15.4rem;
    left: 0;
    z-index: 88;
}

</style>


<script>
// 导入信息卡片
import infocard from "../components/infocard"; 
import "@/assets/css/themesWhite.css"
export default {
    data(){
        return {
            
        }
    },
    methods:{
        // 对提示框进行封装
        createTippy(obj){
            this.tippy(obj.el,{
            content: obj.con,
            theme: 'yc',
            // 子盒子可hover
            interactive: true,
            placement: obj.place||'bottom',
            duration: 1000,
            delay: 50,
            offset:obj.offset ||0,
            popperOptions: {
                positionFixed: true,
            }
            })
        }
    },
    components:{
        infocard
    },
    mounted () {
        this.createTippy({
            el:this.$refs.li0,
            con:this.$refs.tiptitle_twn,
            place:'right-end',
            
        })
            this.createTippy({
            el:this.$refs.btn,
            con:this.$refs.tiptitle_one,
            place:'bottom-start',
        })
    },
    props:{
        cardData:{
            type:Object,
            default:()=>{
                return {
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
            }
        }
    }
}
</script>