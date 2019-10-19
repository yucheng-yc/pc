<template>
    <div class="articleShow">
        <ul class="photos show" v-if="togglePhotos" ref="photos">
            <li><div class="cover"><img :src="photosList[0].url"></div></li>
            <li><div class="cover"><img :src="photosList[1].url"></div></li>
            <li><div class="cover"><img :src="photosList[2].url"></div></li>
            <li><div class="cover"><img :src="photosList[2].url"></div></li>
            <li><div class="cover"><img :src="photosList[0].url"></div></li>
            <li><div class="cover"><img :src="photosList[1].url"></div></li>
            <li><div class="cover"><img :src="photosList[2].url"></div></li>
            <li><div class="cover"><img :src="photosList[2].url"></div></li>
        </ul>
        <div class="article" ref="article">
            <h4 class="title">启发创作灵感</h4>
            <p class="content"> 
                海量国内外优质作品，涵盖各类影视创作领域
                <br>
                了解业内最新、最全作品动态，寻找启发你的创意灵感
            </p>
            <ul class="showBtn" data-eventname="查看作品分类" data-key="分类">
                <li><a href="javascript:;" >广告/宣传片</a></li>
                <li><a href="javascript:;" >剧情短片</a></li>
                <li><a href="javascript:;" >MV</a></li>
                <li><a href="javascript:;" >纪录片</a></li>
                <li><a href="javascript:;" >创意混剪</a></li>
                <li><a href="javascript:;" class="more">more</a></li>
            </ul>

        </div>
        <ul class="show" v-if="togglePhotos==false" ref="show">
            <li><div class="cover"><img :src="photosList[0].url"></div></li>
            <li><div class="cover"><img :src="photosList[0].url"></div></li>
            <li><div class="cover"><img :src="photosList[1].url"></div></li>
            <li><div class="cover"><img :src="photosList[2].url"></div></li>
            <li><div class="cover"><img :src="photosList[2].url"></div></li>
            <li><div class="cover"><img :src="photosList[0].url"></div></li>
            <li><div class="cover"><img :src="photosList[1].url"></div></li>
            <li><div class="cover"><img :src="photosList[2].url"></div></li>
            <li><div class="cover"><img :src="photosList[2].url"></div></li>
        </ul>
    </div>
</template>

<style scoped>
    ul {
        list-style: none;
    }

    .articleShow {
        width: 1141px;
        margin: 120px auto 0;
        display: flex;
        font-weight: normal;
        position: relative;
        flex-flow: row wrap;
        align-items: center;
    }
    .article,.show {
        height: 435px;
    }
    .article {
        width: 372px;
        height: 297px;
        display: flex;
        flex-flow: column wrap;
    }
    .title,.content,.showBtn {
        width: 100%;
        color: black;
    }
    .title {
        height: 42px;
        line-height: 42px;
        font-size: 28px;
        font-weight: normal;
        padding: 0;
        margin: 0;
    }
    .content {
        font-size: 14px;
        font-weight: 300;
        color: #333;
        line-height: 1.86;
        padding: 20px 0 60px;
        margin: 0;
    }
    .showBtn {
        list-style: none;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        padding: 0;
        margin: 0;
    }
    .showBtn>li {
        margin: 0 20px 25px 0;
    }
    .showBtn>li>a:not(.more) {
        display: block;
        padding: 0 26px;
        height: 36px;
        line-height: 36px;
        background-color: #f35c4c;
        color: #fff;
        font-size: 14px;
        border-radius: 100px;
        transition: .15s ease-in-out;
        font-weight: 300;
        text-decoration: none;
    }
    .more {
        text-decoration: none;
        height: 36px;
        line-height: 36px;
        color: #f35c4c;
    }
    .show {
        width: 695px;
        margin-left: 72px;
        vertical-align: middle;
        padding: 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    .show>li {
        width: 225px;
        height: 135px;
    }
    .cover {
        width: 100%;
        height: 100%;
        opacity: 1;
        overflow: hidden;
    }
    .cover>img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .cover:hover {
        opacity: .5;
        background: black;
    }
    .article {
         height: 362px;
    }
</style>


<style scoped>
    .photos.show {
        margin:0px;
        margin-right: 72px;
        width: 721px;
        height: 360px;
    }
    .photos.show>li {
        width: 180px;
        height: 180px;
    }
    .photos+.article {
        width: 336px;
    }
    .photos+.article .showBtn a:not(.more){
        background-color: #1bc5b5; 
    }
    .photos+.article .showBtn a.more {
        color: #1bc5b5;
    }
</style>


<style scoped>
    .show>.cover {
        padding: 0.5rem;
    }
    /* .showTitle {

    }
    .scource {

    } */
</style>



<script>
export default {
    data(){
        return {
            photosList:[
                {
                    url:'//cs.vmovier.com/Uploads/Activity/2017-09-20/59c1d503e9e99.jpg@360w_360h_1e_1c',
                    index:0,
                    name:''
                },
                {
                    url:'https://oss-xpc0.xpccdn.com/Upload/user/2019/08/045d45d1d188a9d.jpeg@360w_360h_1e_1c',
                    index:1
                },
                {
                    url:"https://cs.xinpianchang.com/uploadfile/user/2014/03/09/302660_180.jpeg@360w_360h_1e_1c",
                    index:2
                }
            ],
            showList:[
                {
                    url:"https://cs.xinpianchang.com/uploadfile/article/2019/09/27/5d8db4d8c3c3b.jpeg@450w_270h_1e_1c"
                }
            ]
        }
    },
    props:{
        togglePhotos:{
            type:Boolean,
            default:false
        }
        
    }
}
</script>