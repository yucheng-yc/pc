<template>
    <div class="selectPage">

        <div class="title-wrap">
            <p>
                <span class="title">{{selectDate[0]}}</span>
                <span class="title_twn">{{selectDate[1]}}</span>
            </p>
            <a class="more" href="/channel/index/id-0/sort-pick/type-0?form=indexEditorPick">更多</a>
		</div>

    <transition enter-active-class="">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper">
            <!-- slides -->
                <swiper-slide class="swiperItem" v-for="(item,i) of boxCardList" :key="i">
                    <!-- 轮播的页面 -->
                    <div class="page">
                        <infoCardTitle :cardData='con' v-for="(con,i) of item" :key="i"></infoCardTitle>
                    </div>
                </swiper-slide>
            <!-- 翻页按钮 -->
            <div class="swiper-button-prev iconfont icon-jiantouyou-copy swiperBtn"  @click="prev"></div>
            <div class="swiper-button-next iconfont icon-jiantouyou swiperBtn" @click="next"></div>
        </swiper>
    </transition>

    </div>
</template>

// 基本页面设置
<style scoped>
/* 整体页面设置 */
.page {
    display: flex;
    flex-flow: row wrap;
    width: 1180px;
    margin: 0 auto;
    justify-content: space-between;
    padding: 1rem;
}
.title-wrap {
    width: 1180px;
    margin: 0 auto;
    padding: 1rem 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.title,.title_twn {
    font: 12px/1.5 "PingFang SC", "Microsoft YaHei", 微软雅黑, STHeiti, sans-serif;
    line-height: 1;
    color: #333333;
    font-size: 24px;
    font-weight: 600;
    display: inline-block;
}
.title_twn {
    padding-left: 10px;
    font-weight: 300;
}
.more {
    color: #333333;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    display: block;
    height: 24px;
    line-height: 24px;
    text-align: left;
    
}
</style>

// 上下页面样式重写
<style scoped>
.swiper {
    position: relative;
}
/* 样式穿透 */
.swiper /deep/ .swiper-button-prev {
    background-image: none;
    left: 3rem;
    
}
.swiper /deep/ .swiper-button-next {
    background-image: none;
    right: 3rem;
}

.swiperBtn {
    font-size: 28px;
    font-weight: 600;
    color: #ccc;
    width: 1.5rem;
    height: 1.5rem;
}
/* 解决swiper 自动加的超出隐藏问题 */
.swiper {
    overflow: visible;
}
</style>
<script>
import infoCardTitle from '../components/infoCardTitle';
import { all } from 'q';
export default {
    components:{
        infoCardTitle
    },
    data(){
        return {
            
            swiperOption: {
                autoplay: true,
                // 自动复制一项 让它看起来 滑动效果
                loop:true,
                initialSlide :0,
                effect : 'fade',
                uniqueNavElements: false,
            }
            
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    props:{
        boxCardList:{
            type:Array,
            default:function(){
                return [
                    // 一页中四张卡片的信息
                    // 第一页信息
                    [
                        // 第一组内容
                        {
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
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/article/2019/10/31/5dbacbbbc33c9.jpeg@540w_324h_1e_1c'

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
                        },
                        // 第二组内容
                        {
                            // 卡片上部数据
                            top:{
                                // 是否使用推荐图标
                                tjTg:true,
                                // 显示视频的时长 单位秒
                                time: 1200,
                                // 遮罩层信息
                                coverInfo:{
                                    // 遮罩层正文部分
                                    content:'第二组内容测试',
                                    // 发布时间 数据为毫米数
                                    release: 1572422047389,
                                },
                                // 图片url
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/article/2019/10/31/5dbaec50995e0.jpeg@540w_324h_1e_1c'

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
                        },
                        // 第三组内容
                        {
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
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/tmp/2019/10/31/5dbabfa495fff.png@540w_324h_1e_1c'

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
                        },
                        // 第四组内容
                        {
                            // 卡片上部数据
                            top:{
                                // 是否使用推荐图标
                                tjTg:true,
                                // 显示视频的时长 单位秒
                                time: 1200,
                                // 遮罩层信息
                                coverInfo:{
                                    // 遮罩层正文部分
                                    content:'第二组内容测试',
                                    // 发布时间 数据为毫米数
                                    release: 1572422047389,
                                },
                                // 图片url
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/article/2019/11/01/5dbbfa3e7a17a.jpeg@540w_324h_1e_1c'

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
                        },
                        // 第五组内容
                        {
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
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/article/2019/10/31/5dbacbbbc33c9.jpeg@540w_324h_1e_1c'

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
                        },
                        // 第六组内容
                        {
                            // 卡片上部数据
                            top:{
                                // 是否使用推荐图标
                                tjTg:true,
                                // 显示视频的时长 单位秒
                                time: 1200,
                                // 遮罩层信息
                                coverInfo:{
                                    // 遮罩层正文部分
                                    content:'第二组内容测试',
                                    // 发布时间 数据为毫米数
                                    release: 1572422047389,
                                },
                                // 图片url
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/article/2019/10/31/5dbaec50995e0.jpeg@540w_324h_1e_1c'

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
                        },
                        // 第七组内容
                        {
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
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/tmp/2019/10/31/5dbabfa495fff.png@540w_324h_1e_1c'

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
                        },
                        // 第八组内容
                        {
                            // 卡片上部数据
                            top:{
                                // 是否使用推荐图标
                                tjTg:true,
                                // 显示视频的时长 单位秒
                                time: 1200,
                                // 遮罩层信息
                                coverInfo:{
                                    // 遮罩层正文部分
                                    content:'第二组内容测试',
                                    // 发布时间 数据为毫米数
                                    release: 1572422047389,
                                },
                                // 图片url
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/article/2019/11/01/5dbbfa3e7a17a.jpeg@540w_324h_1e_1c'

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
                    ],
                     // 第二页信息
                    [
                        // 第一组内容
                        {
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
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/article/2019/10/31/5dbacbbbc33c9.jpeg@540w_324h_1e_1c'

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
                        },
                        // 第二组内容
                        {
                            // 卡片上部数据
                            top:{
                                // 是否使用推荐图标
                                tjTg:true,
                                // 显示视频的时长 单位秒
                                time: 1200,
                                // 遮罩层信息
                                coverInfo:{
                                    // 遮罩层正文部分
                                    content:'第二组内容测试',
                                    // 发布时间 数据为毫米数
                                    release: 1572422047389,
                                },
                                // 图片url
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/article/2019/10/25/5db2c7e532867.jpeg@540w_324h_1e_1c'

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
                        },
                        // 第三组内容
                        {
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
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/tmp/2019/10/30/5db998b130516.png@540w_324h_1e_1c'

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
                        },
                        // 第四组内容
                        {
                            // 卡片上部数据
                            top:{
                                // 是否使用推荐图标
                                tjTg:true,
                                // 显示视频的时长 单位秒
                                time: 1200,
                                // 遮罩层信息
                                coverInfo:{
                                    // 遮罩层正文部分
                                    content:'第二组内容测试',
                                    // 发布时间 数据为毫米数
                                    release: 1572422047389,
                                },
                                // 图片url
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/tmp/2019/10/30/5db997fa93e4f.png@540w_324h_1e_1c'

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
                        },
                        // 第五组内容
                        {
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
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/article/2019/10/31/5dbacbbbc33c9.jpeg@540w_324h_1e_1c'

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
                        },
                        // 第六组内容
                        {
                            // 卡片上部数据
                            top:{
                                // 是否使用推荐图标
                                tjTg:true,
                                // 显示视频的时长 单位秒
                                time: 1200,
                                // 遮罩层信息
                                coverInfo:{
                                    // 遮罩层正文部分
                                    content:'第二组内容测试',
                                    // 发布时间 数据为毫米数
                                    release: 1572422047389,
                                },
                                // 图片url
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/article/2019/10/31/5dbaec50995e0.jpeg@540w_324h_1e_1c'

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
                        },
                        // 第七组内容
                        {
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
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/tmp/2019/10/31/5dbabfa495fff.png@540w_324h_1e_1c'

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
                        },
                        // 第八组内容
                        {
                            // 卡片上部数据
                            top:{
                                // 是否使用推荐图标
                                tjTg:true,
                                // 显示视频的时长 单位秒
                                time: 1200,
                                // 遮罩层信息
                                coverInfo:{
                                    // 遮罩层正文部分
                                    content:'第二组内容测试',
                                    // 发布时间 数据为毫米数
                                    release: 1572422047389,
                                },
                                // 图片url
                                imgUrl:'https://cs.xinpianchang.com/uploadfile/article/2019/11/01/5dbbfa3e7a17a.jpeg@540w_324h_1e_1c'

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
                    ]
                ]
            }
        },
        selectDate:{
            type:Array,
            default:function(){
                return ["编辑精选",'STAFF PICKS']
                
            }
        }

        
    },
    methods:{
        prev(){
            this.swiper.slidePrev();
        },
        next(){
            this.swiper.slideNext();
        }
    }
}
</script>