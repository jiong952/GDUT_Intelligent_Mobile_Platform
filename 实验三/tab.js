jQuery(window).ready(function () 
{
    $(".tab>li").mouseenter(function () {

		$(this).addClass("active").siblings("li").removeClass("active");

        $(".products>div").eq($(this).index()).addClass("selected").siblings("div").removeClass("selected");
    });
});