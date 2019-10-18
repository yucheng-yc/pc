<template>
    <div class="login">
        <header class="head">toubu </header>
        <div class="content">
            <div class="top">
                <h1 class="title">用作品打动世界</h1>
            </div>
            <div class="main">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <p class="footer">©2019 新片场 · 京ICP备14003808号-1</p>
    </div>
</template>

<style scoped>
    .login {
        height: 780px;
        width:100%;
        background: url(../assets/images/bg_login.jpg) no-repeat center/cover;
    }
    .head {
        height: 96px;
        background: orange;
    }
    .content {
        width: 360px;
        margin: 0 auto;
    }
    .top {
        height: 160px;
    }
    .title {
        color: orange !important;
        letter-spacing: 20px;
        margin: 12px -20px 32px 0;
    }
    .main {
        padding: 30px;
    }
    .main>div {
        height: 40px;
        background: red;
        margin-top:10px;
    }
    .footer {
        padding: 1rem 2rem;
        text-align: center;
        color: white;
        font-size: 16px;
    }

</style>

<script>
export default {

}
</script>