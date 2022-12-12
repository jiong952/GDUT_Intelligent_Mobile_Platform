$(function()
{    
	var img = document.getElementById("tiger");
    
    img.onmouseover = function ()
    {
        this.src = "img/tiger.png";
    }

    img.onmouseout = function ()
    {
        this.src = "img/cat.png";
    }
});