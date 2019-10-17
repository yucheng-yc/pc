<template>
    <div class="articleShow">
        <div class="article">
            <h4 class="title">启发创作灵感</h4>
            <p class="content"> 
                海量国内外优质作品，涵盖各类影视创作领域
                <br>
                了解业内最新、最全作品动态，寻找启发你的创意灵感
            </p>
            <ul class="showBtn" data-eventname="查看作品分类" data-key="分类">
                <li><a class="dplus-link" href="javascript:;" data-link="/channel/index/id-1/sort-like">广告/宣传片</a></li>
                <li><a class="dplus-link" href="javascript:;" data-link="/channel/index/id-31/sort-like">剧情短片</a></li>
                <li><a class="dplus-link" href="javascript:;" data-link="/channel/index/id-27/sort-like">MV</a></li>
                <li><a class="dplus-link" href="javascript:;" data-link="/channel/index/id-49/sort-like">纪录片</a></li>
                <li><a class="dplus-link" href="javascript:;" data-link="/channel/index/id-76/sort-like">创意混剪</a></li>
                <li><a class="dplus-link" href="javascript:;" data-link="/channel/index/sort-like">more</a></li>
            </ul>

        </div>
        <ul class="show">
            <li><div class="cover"></div></li>
            <li><div class="cover"></div></li>
            <li><div class="cover"></div></li>
            <li><div class="cover"></div></li>
            <li><div class="cover"></div></li>
            <li><div class="cover"></div></li>
            <li><div class="cover"></div></li>
            <li><div class="cover"></div></li>
            <li><div class="cover"></div></li>
        </ul>
    </div>
</template>

<style scoped>
    ul {
        list-style: none;
    }

    .articleShow {
        width: 1140px;
        margin: 120px auto 0;
        display: flex;
        font-weight: normal;
        position: relative;
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
    .showBtn>li>a {
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
        background: red;
    }
    .cover {
        width: 100%;
        height: 100%;
        opacity: 0;
    }
    .cover:hover {
        background: black;
        opacity: 1;
    }
</style>

<script>
export default {
    
}
</script>