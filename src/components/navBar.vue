<template>
    <div>
        <div class="navBar">
            <ul class="leftNav">
                <li class="logImg"><a href="">新片场</a></li>
                <li class="pageHome"><a href="">首页</a></li>
                <li class="wrapper" @mouseenter="addH" @mouseleave="remH">
                    <a href="">发现</a>
                    <ul class="tooltip found" ref='found'>
                        <li class="tpTop" >
                            <span class="title"><a href="javascript:;">作品&gt;</a></span>
                            <ul>
                                <li><a href="">广告</a></li>
                                <li><a href="">宣传片</a></li>
                                <li><a href="">剧情短片</a></li>
                                <li><a href="">记录片</a></li>
                                <li><a href="">创意混剪</a></li>
                                <li><a href="">MV</a></li>
                            </ul>
                        </li>
                        <li class="tpCenter">
                            <span class="title"><a href="javascript:;">作品&gt;</a></span>
                        </li>
                        <li class="tpFooter">
                            
                            <span class="title"><a href="javascript:;">场库-高品质短片精选</a></span>
                        </li>
                    </ul>
                </li>
                <li><a href="">找人/机构</a></li>
                <li><a href="">学院</a></li>
                <li><a href="">素材</a></li>
                <li><a href="">活动</a></li>
                <li><a href="">更多</a></li>
            </ul>
            <ul class="rightNav">
                <li><a href="">会员</a></li>
                <li><a href="">搜索</a></li>
                <li><a href="">登录</a></li>
                <li><a href="">注册</a></li>
            </ul>
        </div>

    </div>
</template>
// 导航栏的基本样式
<style scoped>
    .navBar {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        padding: 0px 1rem;
        background: orange;
        white-space:nowrap;
    }
    .leftNav,.rightNav {
        list-style: none;
        display: flex;
        justify-content: space-around;
        height: 100%;
        margin: 0px !important;
        
    }
    .leftNav>li,.rightNav>li {
        padding: 0px 18px;
        font-weight: 300;
        height: 60px;
        line-height: 60px;
        text-align: center;
        display: inline-block;

    }
    .leftNav a,.rightNav a {
        text-decoration: none;
        color: white;
        display: block;
        height: 100%;
    }
    .pageHome {
        font-weight: 600;
    }
    ul {
        list-style: none;
        padding: 0px;
    }

</style>

// 提示框的基础css
<style scoped>
.wrapper {
  position: relative;
}
.wrapper .tooltip {
    display: block;
    list-style: none;
    border-radius: 5px;
    background: rgba(51, 51, 51, .5);
    position: absolute;
    width: 100%;
    top: 100%;
    left: -20px;
    opacity: 0;
    /* 向上淡入的效果 */
    margin-bottom: -20px;
    transform: translateY(20px);
    transition: all .25s ease-out;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);

    height: 0px;
    overflow: hidden;
}

/* css画三角形 */
/* .wrapper .tooltip::before {
  content: " ";
  height: 0;
  width: 0;
  border-left: solid transparent 10px;
  border-right: solid transparent 10px;
  border-bottom: 10px solid white;
  position: absolute;
  left: 50%;
  top: -10px;
  transform: translateX(-50%);
} */
  
.wrapper:hover .tooltip {
  opacity: 1;
  transform: translateY(0px);
}




</style>


//每个提示框设置
<style scoped>
    ul.found {
        width: 180px !important;
        padding: 0px;
        display: flex;
        flex-flow: column nowrap;
        overflow: hidden;
    }
    .found>li {
        width: 100%;
        background: rgba(51,51,51,.5);
        border-bottom: 1px solid rgba(61, 61, 61, 0.28);
        padding: 1rem;
    }
    .title {
        text-align: left;
        line-height: 1.5;
        font-size: 16px;
    }
    .tpTop>ul{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    .tpTop li {
        width: 40%;
        line-height: 2.5;
        text-align: left;
    }
    .tpTop li>a {
        font-size: 12px;
        color: #ccc;
    }
    .tpTop li>a:hover {
        color: white;
    }

</style>
<script>
export default {
    data(){
        return{
            foundH:'255px',
            listData:[
                
            ]

        }
    },  
    methods:{
        addH(){
            this.$refs.found.style.height=this.foundH;
        },
        remH(){
            this.$refs.found.style.height=0;
        }
    },
    props:["listData"]

}
</script>