window.onload = function startTime()
{
    var today = new Date();
    
    var yyyy = today.getFullYear();     
    var MM = today.getMonth() + 1;      
    var dd = today.getDate();      
    var hh = today.getHours();    
    var mm = today.getMinutes();     
    var ss = today.getSeconds();     
     
    if(MM<10){MM="0"+MM;}
	if(hh<10){hh="0"+hh;}
	if(mm<10){mm="0"+mm;}
	if(ss<10){ss="0"+ss;}
	
    var day;
	
    if (today.getDay() == 0) day = "星期日 "
    if (today.getDay() == 1) day = "星期一 "
    if (today.getDay() == 2) day = "星期二 "
    if (today.getDay() == 3) day = "星期三 "
    if (today.getDay() == 4) day = "星期四 "
    if (today.getDay() == 5) day = "星期五 "
    if (today.getDay() == 6) day = "星期六 "
	
    document.getElementById('time').innerHTML = yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + "   " + day;
    setTimeout(startTime, 1000);   
}