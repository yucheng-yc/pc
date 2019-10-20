<template>
    <div class="say">
        <h3 class="title">在这里，用作品打动世界</h3>
        <div class="btnBox" data-key="位置">
            <a class="fisrtBtn" href="javascript:;" data-link="/square" data-value="尾部">随便逛逛</a>
            <a class="twnBtn" href="javascript:;" data-link="https://passport.xinpianchang.com?callback=https%3A%2F%2Fwww.xinpianchang.com%2F" data-value="尾部">立即加入</a>
        </div>
	</div>
</template>

<style scoped>
    .say {
        margin-top: 40px;
        padding: 60px 0 230px;
        background: url(//cs.vmovier.com/Uploads/Activity/2017-09-18/59bfaae90e8dd.png) no-repeat;
        background-position: bottom;
        background-size: 100% 500px;
        text-align: center;
       
    }
    .title {
        padding-bottom: 190px;
        color: #333;
        font-size: 36px;
        font-weight: normal;
    }
    .btnBox {
        margin: 0 auto;
        text-align: center;
    }
    .fisrtBtn:hover,.twnBtn:hover {
        opacity: .5;
    }
    .fisrtBtn {
        display: inline-block;
        width: 160px;
        height: 50px;
        line-height: 50px;
        border-radius: 2px;
        text-align: center;
        cursor: pointer;
        font-size: 16px;
        color: #fff;
        margin: 0 10px;
        background-color: rgba(255, 255, 255, 0.3);
        transition: all .5s;
    }
    .twnBtn {
        display: inline-block;
        width: 160px;
        height: 50px;
        line-height: 50px;
        border-radius: 2px;
        text-align: center;
        cursor: pointer;
        font-size: 16px;
        color: #fff;
        margin: 0 10px;
        background: #e74b3b;
        transition: all .5s;
    }
</style>


<script>
export default {
    
}
</script>