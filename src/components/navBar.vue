<template>
    <div>
        <div class="navBar">
            <ul class="leftNav">
                <li class="logImg"><a href="">{{listData[0].navItem}}</a></li>
                <li class="pageHome"><a href="">{{listData[1].navItem}}</a></li>
                <li class="wrapper" @mouseenter="addH" @mouseleave="remH">
                    <a href="" class="iconfont icon-xiala">{{listData[2].navItem}}</a>
                    <ul class="tooltip sonlist" ref='sonlist' v-if="listData[2].hasSonItem">
                        <li class="tpTop" >
                            <span class="title"><a href="javascript:;">{{listData[2].tpTop.title}}»</a></span>
                            <ul>
                                <li v-for="(con,i) in listData[2].tpTop.ulitem" :key="i"><a href="">{{con}}</a></li>
                            </ul>
                        </li>
                        <li class="tpCenter">
                            <span class="title"><a href="javascript:;">{{listData[2].tpCenter.title}}»</a></span>
                        </li>
                        <li class="tpFooter">
                            <span class="title"><a href="javascript:;">{{listData[2].tpFooter.title}}</a></span>
                        </li>
                    </ul>
                </li>
                <li><a href="">{{listData[3].navItem}}</a></li>
                <li><a href="">{{listData[4].navItem}}</a></li>
                <li>
                    <a href="javascript:;" class="iconfont icon-xiala">{{listData[5].navItem}}</a>
                </li>
                <li>
                    <a href="javascript:;" class="iconfont icon-xiala">{{listData[6].navItem}}</a>
                </li>
                <li>
            
                    <a href="javascript:;" class="iconfont icon-xiala">{{listData[7].navItem}}</a>
                </li>
            </ul>
            <ul class="rightNav">
                <li><a href="javascript:;" class="iconfont icon-VIP">{{listData[8].navItem}}</a></li>
                <li><a href="javascript:;" class="iconfont icon-search"></a></li>
                <li><a href="javascript:;" ref='login' @click="toLogin">{{listData[10].navItem}}</a></li>
                <li><a href="javascript:;" @click="toregistered">{{listData[11].navItem}}</a></li>
            </ul>
        </div>

    </div>
</template>
// 导航栏的基本样式
<style scoped>
    .navBar {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        padding: 0px 1rem;
        background: transparent;
        white-space:nowrap;
        z-index: 4;
    }
    .leftNav,.rightNav {
        list-style: none;
        display: flex;
        justify-content: space-around;
        height: 100%;
        margin: 0px !important;
        padding: 0px 2rem 0px 0px;
        
    }
    .leftNav>li,.rightNav>li {
        padding: 0px 10px;
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
    ul.sonlist {
        width: 180px !important;
        padding: 0px;
        display: flex;
        flex-flow: column nowrap;
        overflow: hidden;
    }
    .sonlist>li {
        width: 100%;
        background: rgba(51,51,51,.5);
        padding: 1rem;
    }
    .sonlist>li:not(:last-child) {
        border-bottom: 1px solid rgba(189, 186, 186, 0.28);
    }
    .title {
        text-align: left;
        line-height: 1.4;
        font-size: 16px;
        color: #ccc;
    }
    .title a {
        color: #ccc;
    }
    .title a:hover {
        color: white;
    }
    .tpTop>ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
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
            sonlistH:'255px',
            
        }
    },  
    methods:{
        addH(){
            if(this.$refs.sonlist!==undefined){
                this.$refs.sonlist.style.height=this.sonlistH;
            }  
        },
        remH(){
            if(this.$refs.sonlist!==undefined){
                this.$refs.sonlist.style.height=0;
            }
        },
        toLogin(){
            this.$router.push("/login");
        },
        toregistered(){
            this.$router.push("/registered");
        }
    },
    props:["listData"]

}
</script>