function count(y,m,d){ //参数ymd为截止时间的年月日
    var now = Date.now();  //返回自1970年1月1日到当前时间的毫秒数
    //返回从1970年1月1日至截止日期的毫秒数
    var end = new Date(y,m-1,d).getTime();
    var ms = end - now;
    var s = Math.floor(ms/1000);   //floor()向下取整
    var sec = Math.floor(s % 60 )  //秒数
    var min = Math.floor(s / 60 % 60 );  //分钟
    var hour = Math.floor(s / 60 / 60 % 24);  //小时
    var day = Math.floor(s / 60 / 60 / 24);  //天数

    var text1 = "下一场比赛还有"+day+"天"+hour+"时"+min+"分"+sec+"秒";
    time.innerHTML = text1;  //获取内容
}
count(2022,12,14);  //设置截止日期
//循环：每隔1秒执行一次function
setInterval(function(){count(2022,12,14);},1000);
