export default {
    // 创建一个获得验证码的属性
    getNum:()=>{
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
        var c1dom=document.querySelector('#c1');
        var ctx=c1dom.getContext("2d");
        ctx.fillStyle=rc(180,230);
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
            ctx.fillStyle=rc(80,150);
            ctx.save();
            ctx.translate(30*i+15,15);
            ctx.rotate(deg*Math.PI/180);
            ctx.fillText(c,-15+5,-15);
            ctx.restore();
        }
        return arr;
    }    
}