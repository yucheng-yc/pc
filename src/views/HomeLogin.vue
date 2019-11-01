<template>
    <div class="HomeLogin">
        <!-- 导航栏部分 -->
        <nav-bar3></nav-bar3>

        <!-- 登录后首页轮播图部分 -->
        <homeswiper></homeswiper>
 
        <!-- 精选模块 -->
        <model-page :boxCardList="boxCardList"></model-page> 

        <!-- 广告宣传 -->
        <model-page :boxCardList="boxCardList2" :selectDate="selectDate2"></model-page> 

        <!-- 创意混剪 -->
        <model-page :boxCardList="boxCardList3" :selectDate="selectDate3"></model-page>

        <!-- 文章 -->
        <model-page :boxCardList="boxCardList3" :selectDate="selectDate4"></model-page>

        <!-- 短视频 -->
        <model-page :boxCardList="boxCardList3" :selectDate="selectDate5"></model-page>

        <!-- 纪录片 -->
        <model-page :boxCardList="boxCardList3" :selectDate="selectDate6"></model-page>

        <!-- 剧情/动画 -->
        <model-page :boxCardList="boxCardList3" :selectDate="selectDate7"></model-page>




        <!-- 页面底部 -->
        <homefooter></homefooter>
    </div>
</template>

<style scoped>

</style>

<script>
// 导入导航栏组件
import navBar3 from '../components/navBar3'
// 导入轮播图组件
import homeswiper from "../components/homeswiper";
// 导入底部组件
import homefooter from "../components/homefooter";


import modelPage from '../components/modelPage'


export default {
    // 局部组件的注册
    components:{
        navBar3,
        homeswiper,
        homefooter,
        modelPage
    },
    data(){
        return {
            // 精选模块
            selectDate:["编辑精选",'STAFF PICKS'],
            boxCardList:[
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
            ],
            // 广告宣传模块
            selectDate2:["广告/宣传片",'ADVERTISING'],
            boxCardList2:[
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
                        }
                    ]
            ],
            // 创意混剪模块
            selectDate3:["创意混剪",'EXPERIMENTAL'],
            boxCardList3:[
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
                        }
                    ]
            ],
            // 文章模块
            selectDate4:["文章",'ARTICLE'],
            // 短视频模块
            selectDate5:["短视频",'SHORT VIDEO'],
            // 纪录片 DOCUMENTARY
            selectDate6:["纪录片",'DOCUMENTARY'],
            // 剧情/动画 DRAMA/ANIMATION
            selectDate7:["剧情/动画",'DRAMA/ANIMATION'],


        }
    }
}
</script>