export default {

    checkCode:function(){

        // 获取canvas元素
        var Cbtn = document.getElementById("Cbtn");
        // 创建画笔
        var context = Cbtn.getContext("2d");
        // 清除画布 120 40
        context.clearRect(0,0,700,300); 

        // 生成随机数
        function roundNum(min,max){
            return parseInt(Math.random()*(max-min)+min);
        }
        // 所有字符串
        var strStore = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var str="";
        var arr=[]
        for(var i=0;i<4;i++){
            context.beginPath();
            //随机颜色（浅色：RGB - 200~250）
            var color = `rgb(${roundNum(131,254)},${roundNum(67,175)},${roundNum(101,155)})`;
            context.fillStyle = color;
            context.font = roundNum(100,150)+"px Arial";
            context.lineWidth="5"
            context.textAlign = "center";
            // 要画上去字符
            str = strStore[roundNum(0,strStore.length)];
            arr.push(str.split(""))
            context.fillText(str, 40 + 60 * i, roundNum(80,120));
        }

         //10个左右的随机（长度随机，位置随机），干扰线
        for(var j = 0; j < roundNum(10, 20); j++) {
            context.beginPath();
            context.lineWidth="2"
            var color = `rgb(${roundNum(0,255)},${roundNum(0,255)},${roundNum(0,255)})`;
            context.strokeStyle = color;
            context.moveTo(roundNum(0, 300), roundNum(0, 150));
            context.lineTo(roundNum(0, 300), roundNum(0, 150));
            context.stroke();
        }
        //干扰项：10个左右的随机（半径随机，位置随机），干扰圆
        for(var j = 0; j < roundNum(800, 1000); j++) {
            context.beginPath();
            context.fillStyle = "#d1ce9a";
            context.arc(roundNum(0, 300), roundNum(0, 150), roundNum(2.5, 3), Math.PI * 2 / (roundNum(1, 360)), Math.PI * 2 / (roundNum(1, 360)));
            context.fill();
        }
        return arr;
    }
    
}
