<template>
    <div class="imgCard">
        <div class="imgBox">
            <img :src="contentBox.imgBoxUrl">
        </div>
        <div class="contentBox">
            <a href="javascript:;" class="title">{{contentBox.title}}</a>
            <p class="content">{{contentBox.content}}</p>
        </div>
    </div>
</template>

// 全局样式设置
<style scoped>
    .imgCard {
        height: 374px;
        width: 366px;
        /* box-shadow:  0 0  10px rgb(63, 62, 62); 
        outline: 1px solid #ccc; */
        /* margin-top: 10px; */
    }
    .imgBox {
        height: 230px;
        position: relative;
        overflow: hidden;
    }
    .imgBox img {
        height: 230px;
        width: 366px;
        /* object-fit: cover; */
        transition: all .5s; 
    }
    img:hover{
        transform:scale(1.1);
    }
    .contentBox {
        padding: 35px 0;
        height: 144px;
        /* padding: 20px 18px 14px; */
        background-color: #fff;
    }
    .title {
        font-size: 16px;
        color: #000;
        line-height: 1;
        font-weight: normal;
        transition: .15s ease-in-out;
        cursor: pointer;
        text-decoration: none;
    }
    .title:hover {
        color: #e74b3b;
    }
    .content {
        margin: 0;
        font-size: 14px;
        font-weight: 300;
        line-height: 1.86;
        color: #999999;
        padding-top: 15px;
        text-overflow: ellipsis;
    }
</style>


<script>
export default {
    data(){
        return {
        }
    },
    props:{
        contentBox:{
            type:Object,
            default:function(){
                return {title:"这是title",content:"这是1内容",imgBoxUrl:"//cs.vmovier.com/Uploads/Activity/2017-09-18/59bf9d6d08933.png@732w_460h_1e_1c"}
            }
        }
    }
}
</script>