<template>
    <div class="navBar">
        <!-- <el-menu mode="horizontal" :default-active="activeIndex" background-color="#fff">
            <el-menu-item index="1">img</el-menu-item>
            <el-menu-item index="2">首页</el-menu-item>
                <el-submenu index="3">
                <template slot="title">发现</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
            <el-menu-item index="4">找人/机构</el-menu-item>
            <el-menu-item index="5">学院</el-menu-item>
            <el-submenu index="6">
                <template slot="title">素材</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
                <template slot="title">活动</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="8">
                <template slot="title">更多</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
        </el-menu> -->
        <div class="nav">
            <ul class="navLeft">
                <li></li>
            </ul>
            <ul class="navRight"></ul>
        </div>

    </div>
</template>

<style scoped>
    .navBar {
        background: rgba(0, 0, 0, 0.5);
        position: relative;
        top: 0px;
        width: 100%;
        padding: 0px 1rem;
    }
    .navBar>.nav{
        display: flex;
        justify-content: space-between;    
    }
    .navLeft {
        list-style: none;
    }
</style>

<script>
export default {
    data(){
        return {
            activeIndex:1
        }
    }
}
</script>