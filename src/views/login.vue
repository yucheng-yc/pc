<template>
    <div class="login">
        <header class="head"></header>
        <div class="content">
            <div class="top">
                <h1 class="title">用作品打动世界</h1>
            </div>

            <!-- swiper轮播项 -->
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- login页面部分 -->
                <swiper-slide>
                    <div class="main"  ref="idx0main">
                        <div class="tabs">
                            <div class="tab" :class="{active:tabTg}" @click="tabTg=!tabTg">密码登录</div>
                            <div class="tab" :class="{active:!tabTg}" @click="tabTg=!tabTg">短信登录</div>
                        </div>

                        <div class="phone">
                            <div class="seBox">
                                <select class="se" v-model="se">
                                    <option value ="+86">+中国大陆86</option>
                                    <option value ="+852">香港</option>
                                    <option value="+853">澳门</option>
                                    <option value="+886">台湾</option>
                                </select>
                            </div>
                            <input type="text" class="inp" placeholder="手机号" ref="idx0phoneIpt" v-model="idx0phoneIpt">
                        </div>
                        <div class="pwdBox" v-if="tabTg">
                            <input type="password"  class="pwd" placeholder="密码" ref="idx0pwdIpt" v-model="idx0pwdIpt">
                        </div>
                        <div class="yzmBox" v-else>
                            <input type="text" class="yzm" placeholder="验证码" ref="idx0yzmIpt" v-model="idx0yzmIpt">
                            <button class="yzmBtn" ref="idx0yzmBtn" @click="yzmBtn">{{yzmBtnNum}}</button>
                        </div>

                        <div class="loginBox">
                            <button class="loginBtn" ref="idx0loginBtn" @click="login">登录</button>
                        </div>
                        <div class="forgetBox">
                            <a href="#" class="forgetLink" ref="idxforgetbtn">忘记密码</a>
                        </div>
                        <div class="ortherBox">
                            <a href="" ref="weibo"><i class="iconfont isize">&#xe619;</i></a>
                            <a href="" ref="QQ"><i class="iconfont isize">&#xe630;</i></a>
                            <a href="" ref="weixin"><i class="iconfont isize">&#xe62f;</i></a>
                            <a href="" ref="email"><i class="iconfont isize">&#xe654;</i></a>
                        </div>
                    </div>
                </swiper-slide>
                <!-- 注册页面部分 -->
                <swiper-slide>
                    <div class="main">
                        <div class="tabs resTitle"><div class="tab">注册</div></div>
                        <div class="nickname"><input type="text" placeholder="昵称" v-model="regName"></div>
                        <div class="phone"> 
                             <div class="seBox">
                                <select class="se">
                                    <option value ="+86">+中国大陆86</option>
                                    <option value ="+852">香港</option>
                                    <option value="+853">澳门</option>
                                    <option value="+886">台湾</option>
                                </select>
                            </div>
                            <input type="text" class="inp" placeholder="手机号" v-model="regPhone">
                        </div>
                         <div class="yzmBox" >
                            <input type="text"  placeholder="验证码" v-model="userInputYzm">
                            <div @click="mycanvas($refs.c1)" class="c1Box">
                                <canvas width="120" height="40" ref="c1"></canvas>
                            </div>
                        </div>
                        <div class="pwdBox" >
                            <input type="password" class="pwd" placeholder="密码" v-model="regPwd">
                        </div>
                         <div class="loginBox">
                            <button class="loginBtn" @click="reg">注册</button>
                        </div>
                         <div class="forgetBox">
                            <a href="javascript:;" class="forgetLink">用户协议</a>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            


            <a href="javascript:;" class="change" @click="changeSwiper()">{{tabContent}}</a>
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
        text-align: center;
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
        position: relative;
        width: 100%;
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
        outline: none;
        border: 0;
        border-left: 1px solid #ccc;
        cursor: pointer;
        font-size: 14px;
        position: relative;
    }
    .c1Box {
        width: 120px;
        height: 40px;
    }
    #c1 {
        position: absolute;
    }
    input:focus {
        box-shadow: 0,0,5px #ccc;
    }
</style>

<style scoped>
    .isize {
        font-size: 25px!important;
    }

</style>


<style scoped>
    
    .resTitle.tabs>.tab {
        margin: 0; 
        width: 100%;
    }
    .nickname {
        padding-left: 10px;
        border: 1px solid #ccc;
    }
    .nickname >input {
        height: 30px;
        margin-top: 2.5px;
        outline: none;
        width: 96%;
        border: 0;
    }
</style>
<script>
import { mapMutations } from 'vuex';
export default {
    data(){
        return {
            // 密码验证还是短信验证
            tabTg:true,
            // swiper的配置项
            swiperOption: {
                // 每一项的slide自动高度
                autoHeight: true,
                // 自动复制一项 让它看起来 滑动效果
                // loop:true,
                initialSlide :0,
                effect : 'fade'
            },
            // 注册信息
                // 电话号码前缀
            se:"+86",
            // 默认输入的电话号码 登录账户
            idx0phoneIpt:13036592217,
            // 默认输入的密码
            idx0pwdIpt:"1",
            // 默认验证码
            idx0yzmIpt:10086,
            // 验证是否通过 总开关
            yzTg:true,
            // 注册登陆切换 内容
            tabContent:'没有账号？注册',
            // 验证码倒计时 数字
            yzmBtnNum:'获取验证码',
            // 用户输入的验证码
            userInputYzm:'',
            // 对比验证码
            outInputYzm:'',
            // 昵称
            regName:'',
            // 注册电话
            regPhone:'',
            // 注册密码
            regPwd:''
        }
    },
    // 加载组件判断登录还是注册
    created(){
        // 通过路由传值判断显示登陆 还是注册页
        if(this.$route.query.defaultid==0){
            this.swiperOption.initialSlide=0;
        }else if(this.$route.query.defaultid==1){
            this.swiperOption.initialSlide=1;
        }
        
    },
    mounted(){
        this.myTip(); 
        this.outInputYzm=this.mycanvas(this.$refs.c1).join('').toUpperCase();
        // 发送ajax请求，获取数据
        this.axios.get("/user/v1/getCardInfo/1").then((res)=>{
            console.log(res.data);
        })
        .catch(()=>{

        })
    },
    // 计算属性 简化swiper
    computed:{
        swiper(){
           return this.$refs.mySwiper.swiper;
        }
    },
    methods:{
        // tip集中操作
        createtippy(ele,content){
            this.tippy(ele,{
            content: content,
            placement: 'top',
            duration: 1000,
            delay: 50
            });
        },
        //tip初始化
        myTip(){
            this.createtippy(this.$refs.weixin,"微信");
            this.createtippy(this.$refs.weibo,"微博");
            this.createtippy(this.$refs.QQ,"QQ");
            this.createtippy(this.$refs.email,"邮箱");
        },
        // 为表单绑定数据验证
        loginYz(){
            // 获取登录的Dom值
        },
        //发送登录请求
        login(){
            if(!this.yzTg) {
                return;
            }
            // 发送ajax请求 登录操作
            this.axios.get(`/user/v1/login/${this.idx0phoneIpt}&${this.idx0pwdIpt}`)
            .then(res=>{
                var data=res.data;
                // 判断是否注册成功 然后跳转页面
                 if(data.code===200) {
                   
                    Promise.all([this.changeUserInfo({upwd:this.idx0pwdIpt,uphone:data.uphone,uname:data.uname})])
                    .then(()=>{
                        // 保存用户状态 修改vuex
                        Promise.all([this.changenavstate({value:true})])
                        .then(()=>{
                            sessionStorage.setItem("key",'key');
                            // 跳转 登录后的主页面
                            this.$router.push("/HomeLogin");
                        })
                    })
                    .catch(()=>{
                        alert('vuex修改状态失败');
                    })

                    
                }
            })
            .catch(err=>{
                alert("登录失败");
            })
        },
        // 发送注册请求
        reg(){
            // 先进行非空验证
            if(!this.regPwd||!this.regPhone||!this.regName){
                alert('不能为空');
                return;
            }
            // 对数据进行验证
            // 昵称验证
            if(!/^\w{3,}$/i.test(this.regName)){
                alert('昵称必须3位以上');
                return;
            }

            // 电话号码验证
            if(!/^1[2-9]\d{9}$/i.test(this.regPhone)){
                alert('电话号码格式不正确');
                return;
            }
            // 对验证码进行验证
            if(this.outInputYzm!=this.userInputYzm.trim().toUpperCase()){
                alert('验证码错误，请重新输入');
                this.outInputYzm=this.mycanvas(this.$refs.c1);
                return;
            }
            
            // 最后对密码进行验证
            if(!/^\w{3,}$/i.test(this.regPwd)) {
                alert('密码长度必须3位以上');
                return;
            }

            // 发送ajax请求 进行注册
            this.axios.post("/user/v1/reg",`upwd=${this.regPwd}&uphone=${this.regPhone}&uname=${this.regName}`)
            .then((res)=>{
                // 判断是否注册成功 然后跳转页面
                 if(res.data.code===200) {
                   
                    Promise.all([this.changeUserInfo({upwd:this.regPwd,uphone:this.regPhone,uname:this.regName})])
                    .then(()=>{
                         Promise.all([this.changenavstate({value:true})])
                         .then(()=>{
                            sessionStorage.setItem("key",'key');
                            this.$router.push("/HomeLogin");
                         })
                        
                        
                    })
                    .catch(()=>{
                        alert('vuex修改状态失败');
                    })
                    
                }
            }
            )
            .catch((err)=>{
                
            })


        },
        // 改变swiper轮播项
        changeSwiper(){
            var sw=this.swiper;
            if(sw.realIndex==1){
                sw.slidePrev();
            }else{
                sw.slideNext();
            }
            
            this.tabContent=sw.realIndex==1?'有账号？登陆':'没有账号？注册';
        },
        // 验证码 倒计时效果
        yzmBtn(){
            this.yzmBtnNum=60;
            var t=setInterval(() => {
                this.yzmBtnNum--;
                if(this.yzmBtnNum==0){
                    this.yzmBtnNum='获取验证码';
                    clearInterval(t);
                }
            }, 1000);
        },
        // 使用canvas画验证码
        mycanvas(c1){
            // 获得max值到最小值之间的数
            function rn(min,max){
                return  Math.floor(Math.random()*(max-min)+min);
            }
            //2.新建一个函数产生随机颜色
            function rc(min,max){
                var r=rn(min,max);
                var g=rn(min,max);
                var b=rn(min,max);
                return `rgb(${r},${g},${b})`;
            }
            //3.填充背景颜色,颜色要浅一点
            var w=120;
            var h=40;
            var ctx=c1.getContext("2d");
             ctx.fillRect(0,0,w,h);
            
            //4.随机产生字符串
            var pool="ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
            var arr=[];
            for(var i=0;i<4;i++){
                var c=pool[rn(0,pool.length)];//随机的字
                arr.push(c);
                var fs=rn(18,40);//字体的大小
                var deg=rn(-30,30);//字体的旋转角度
                ctx.font=fs+'px Simhei';
                ctx.textBaseline="top";
                ctx.fillStyle=rc(0,250);
                ctx.save();
                ctx.translate(30*i+15,15);
                ctx.rotate(deg*Math.PI/180);
                ctx.fillText(c,-15+5,-15);
                ctx.restore();
            }
            return arr;
        },
        // 使用辅助函数进行登录状态操作
        ...mapMutations({
            'changeUserInfo':'changeUserInfo',
            "changenavstate":"changenavstate"
        })

    }
}
</script>