<template>
    <div class="login">
        <header class="head">toubu </header>
        <div class="content">
            <div class="top">
                <h1 class="title">用作品打动世界</h1>
            </div>
            <div class="main">
                <div class="tabs">
                    <div class="tab" :class="{active:tabTg}" @click="tabTg=!tabTg">密码登录</div>
                    <div class="tab" :class="{active:!tabTg}" @click="tabTg=!tabTg">短信登录</div>
                </div>

                <div class="phone">
                    <div class="seBox">
                        <select class="se">
                            <option value ="+86">+中国大陆86</option>
                            <option value ="+852">香港</option>
                            <option value="+853">澳门</option>
                            <option value="+886">台湾</option>
                        </select>
                    </div>
                    <input type="text" name="" id="" class="inp" placeholder="手机号">
                </div>
                <div class="pwdBox" v-if="tabTg">
                    <input type="password" name="" id="" class="pwd" placeholder="密码">
                </div>
                <div class="yzmBox" v-else>
                    <input type="text" class="yzm" placeholder="验证码">
                    <button class="yzmBtn">发送验证码</button>
                </div>

                <div class="loginBox">
                    <button class="loginBtn">登录</button>
                </div>
                <div class="forgetBox">
                    <a href="#" class="forgetLink">忘记密码</a>
                </div>
                <div class="ortherBox">
                    <a href="" ref="weibo">微博</a>
                    <a href="" ref="QQ">QQ</a>
                    <a href="" ref="weixin">微信</a>
                    <a href="" ref="email">邮箱</a>
                </div>
            </div>
            <a href="#" class="change">没有账号？注册</a>
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
        background: white;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .main>div {
        height: 40px;
        margin-top:10px;
    }
    .footer {
        padding: 1rem 2rem;
        text-align: center;
        color: white;
        font-size: 16px;
    }

</style>


<style scoped>
    .change {
        display: block;
        text-align: center;
        height: 47px;
        background: white;
        line-height: 47px;
        color: #9e9e9e;
        background: #fafafa;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .tabs {
        display: flex;
        justify-content: space-between;
        text-align: center;
        overflow: hidden;
        
    }
    .tab {
        margin: 0 32px 0 0;
        padding: 12px 16px;
        width: 50%;
        text-decoration: none;
        cursor: pointer;
        transition: color .3s cubic-bezier(.645,.045,.355,1);
        position: relative;
        
    }
    .tab:hover {
        color: #f57a67;
    }
    .phone {
        display: flex;
        justify-content: space-between;
         border: 1px solid #9e9e9e;
    }
    .seBox {
        padding: 2px;
        background: #f7f7f7;
    }
    .se {
        width: 68px;
        border: 0;
        line-height: 40px;
        height: 38px;
        outline: none;
        border: 1px solid transparent;
        color: #595959;
    }
    .inp {
        width: 232px;
        outline: none;
        border: 0;
        height: 19.5px;
        padding: 10px;
    }
    .pwdBox {
        border: 1px solid #9e9e9e;
        padding-right: 5px 30px 5px 0;
        
    }
    .pwd {
        height: 19.5px;
        outline: none;
        width: 85%;
        border: 0;
        padding: 10px;
    }
    .loginBox {
        text-align: center;
        overflow: hidden;
        border-color: #e74b3b;
        color: white;
        border-radius: 5px;
    }
    .loginBtn {
        width: 100%;
        height: 100%;
        background-color: #e74b3b;
        border: 0;
        outline: 0;
        opacity: 1;
        transition: all .3s cubic-bezier(.645,.045,.355,1);
    }
    .loginBtn:hover {
        opacity: .6;
    }
    .forgetBox {
        display: flex;
        justify-content: flex-end;
        height: 40px;
        line-height: 40px;
    }
    .forgetLink {
        display: block;
        padding-right: 1rem;
        color: #9e9e9e;

    }
    .ortherBox {
        padding: 3px 10px;
        display: flex;
        justify-content: space-between;
    }
    .ortherBox>a {
        display: block;
        height: 40px;
        line-height: 40px;
        width: 24%;
        color: #9e9e9e;
    }
</style>

<style scoped>
    .tab::after {
        content: " ";
        position: absolute;
        background-color: white;
        height: 2px;
        width: 0;
        left: 50px;
        bottom: 0;
        transition: all .5s;
    }
    .active::after {
        content: " ";
        position: absolute;
        background-color: #e74b3b;
        height: 2px;
        width: 96px;
        left: 10px;
        bottom: 0;
    }
    .active {
        color: #e74b3b;
    }
    .yzmBox {
        display: flex;
        justify-content: space-between;
        border: 1px solid #9e9e9e;
    }
    .yzm {
        width: 60%;
        outline: none;
        border: 0;
        padding: 9px 11px;
    }
    .yzm:focus {
        border: 1px solid #ccc;
        box-shadow: 0,0,5px #ccc;
    }
    .yzmBtn {
        width: 40%;
        text-decoration: none;
        background-color: #f7f7f7;
        outline: none;
        border: 0;
        border-left: 1px solid #ccc;
        cursor: pointer;
        font-size: 14px;
    }
    input:focus {
        box-shadow: 0,0,5px #ccc;
    }
</style>

<script>
export default {
    data(){
        return {
            tabTg:false
        }
    },
    mounted(){
        this.createtippy(this.$refs.weixin,"微信");
        this.createtippy(this.$refs.weibo,"微博");
        this.createtippy(this.$refs.QQ,"QQ");
        this.createtippy(this.$refs.email,"邮箱");
    },
    methods:{
        createtippy(ele,content){
             this.tippy(ele,{
            content: content,
            placement: 'top',
            duration: 1000,
            delay: 50
        });
        }
    }
}
</script>