$(document).ready(function () {
  var jqli = $(".box>ul>li");

  //绑定事件
  jqli.mouseenter(function () {
    $(this).children("ul").stop().slideDown(500);
  });

  //绑定事件(移开隐藏)
  jqli.mouseleave(function () {
    $(this).children("ul").stop().slideUp(500);
  });
});

window.onload = function () {
  var liArr = document.getElementsByClassName("indexOne");
  var liWidth = liArr[0].offsetWidth;
  var span = document.getElementsByTagName("span")[0];
  //计数器
  var count = 0;

  //for循环绑定事件
  for (var i = 0; i < liArr.length; i++) {
    //自定义属性，然后绑定index属性为索引值
    liArr[i].index = i;
    //鼠标进入事件
    liArr[i].onmouseover = function () {
      //让span运动到该li的索引值位置
      //图片运动需要封装的方法
      animate(span, this.index * liWidth);
    };
    //鼠标移开
    liArr[i].onmouseout = function () {
      //让span运动到该li的索引值位置
      //图片运动需要封装的方法
      animate(span, count * liWidth);
    };
    //点击事件，记录功能
    liArr[i].onclick = function () {
      //需要一个计数器，每次点击以后把所以只记录下来
      //因为onmouseout事件要用到这个计数器，所以应该是一个全局变量
      count = this.index;
      animate(span, count * liWidth);
    };
  }

  //缓动动画封装
  function animate(ele, target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
      var step = (target - ele.offsetLeft) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      ele.style.left = ele.offsetLeft + step + "px";
      // console.log(1);
      if (Math.abs(target - ele.offsetLeft) < Math.abs(step)) {
        ele.style.left = target + "px";
        clearInterval(ele.timer);
      }
    }, 18);
  }
};

var arr = [
  {
    //  1
    width: 400,
    top: 50,
    left: 50,
    opacity: 50,
    zIndex: 2,
  },
  {
    // 2
    width: 600,
    top: 120,
    left: -50,
    opacity: 80,
    zIndex: 3,
  },
  {
    // 3
    width: 800,
    top: 160,
    left: 200,
    opacity: 100,
    zIndex: 4,
  },
  {
    // 4
    width: 600,
    top: 120,
    left: 750,
    opacity: 80,
    zIndex: 3,
  },
  {
    //5
    width: 400,
    top: 50,
    left: 750,
    opacity: 30,
    zIndex: 2,
  },
  {
    //6
    width: 500,
    top: 0,
    left: 375,
    opacity: 20,
    zIndex: 1,
  },
];

//0.获取元素
var slide = document.getElementById("slide");
var liArr = slide.getElementsByTagName("li");
var arrow = slide.children[1];
var arrowChildren = arrow.children;
//设置一个开闭原则变量，点击以后修改这个值。
var flag = true;

//1.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
slide.onmouseenter = function () {
  //arrow.style.opacity = 1;
  animate(arrow, { opacity: 100 });
};
slide.onmouseleave = function () {
  //arrow.style.opacity = 1;
  animate(arrow, { opacity: 0 });
};

move();
//3.把两侧按钮绑定事件。(调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转)
arrowChildren[0].onclick = function () {
  if (flag) {
    flag = false;
    move(true);
  }
};
arrowChildren[1].onclick = function () {
  if (flag) {
    flag = false;
    move(false);
  }
};

//4.书写函数。
function move(bool) {
  //判断：如果等于undefined,那么就不执行这两个if语句
  if (bool === true || bool === false) {
    if (bool) {
      arr.unshift(arr.pop());
    } else {
      arr.push(arr.shift());
    }
  }
  //在次为页面上的所有li赋值属性，利用缓动框架
  for (var i = 0; i < liArr.length; i++) {
    animate(liArr[i], arr[i], function () {
      flag = true;
    });
  }
}

//需求1：点击按钮显示遮罩层和添加数据表格
$("#j_btnAddData").click(function () {
  //显示遮罩层和j_formAdd这个盒子
  $("#j_mask").show();
  $("#j_formAdd").show();
});

//需求2：点击里面的关闭按钮隐藏遮罩层和添加数据表格
$("#j_hideFormAdd").click(function () {
  //显示遮罩层和j_formAdd这个盒子
  $("#j_mask").hide();
  $("#j_formAdd").hide();
});

//需求3：点击get所在的标签，删除所在的tr
$("a.get").click(function () {
  //删除的是所在的tr。
  $(this).parent("td").parent("tr").remove();
});

//需求4：点击里面的添加内容，全部能容这个成tr嵌套td的形式添加到tbody中
$("#j_btnAdd").click(function () {
  //bug1： 内容不能为空
  if ($("#j_txtLesson").val() === "") {
    alert("内容不能为空！");
    return;
  }

  //全部能容这个成tr嵌套td的形式添加到tbody中
  //获取tr，然后为tr赋值。
  var tr = $("<tr></tr>");
  //赋值
  tr.html(
    "<td>" +
      $("#j_txtLesson").val() +
      "</td><td>" +
      $("#j_txtBelSch").val() +
      '</td><td><a href="javascrip:;" class="get">GET</a></td>'
  );
  //在房间tbody中
  $("#j_tb").append(tr);

  //bug3：新产生的tr没有时间绑定
  tr.find("a").click(function () {
    //删除的是所在的tr。
    tr.remove();
  });
  //问题代码
  console.log($("#j_tb").html());

  //显示遮罩层和j_formAdd这个盒子
  $("#j_mask").hide();
  $("#j_formAdd").hide();
  //bug2:设置完毕，清空内容
  $("#j_txtLesson").val("");
});

// 放大镜
var box = document.getElementsByClassName("box_big")[0];
var small = box.firstElementChild || box.firstChild;
var big = box.children[1];
var mask = small.children[1];
var bigImg = big.children[0];

//显示和隐藏
function show(ele) {
  ele.style.display = "block";
}
function hide(ele) {
  ele.style.display = "none";
}

//1.鼠标放上去显示盒子，移开隐藏盒子。(为小盒子绑定事件)
small.onmouseenter = function () {
  //封装好方法调用：显示元素
  show(mask);
  show(big);
};
small.onmouseleave = function () {
  //封装好方法调用：隐藏元素
  hide(mask);
  hide(big);
};

//2.老三步和新五步（黄盒子跟随移动）
//绑定的事件是onmousemove，而事件源是small(只要在小盒子上移动1像素，黄盒子也要跟随)
small.onmousemove = function (event) {
  //想移动黄盒子，必须知道鼠标在small中的位置。x作为mask的left值，y作mask的top值。
  //新五步
  event = event || window.event;
  var pagex = event.pageX || scroll().left + event.clientX;
  var pagey = event.pageY || scroll().top + event.clientY;
  //让鼠标在黄盒子最中间，减去黄盒子宽高的一半
  var x = pagex - box.offsetLeft - mask.offsetWidth / 2;
  var y = pagey - box.offsetTop - mask.offsetHeight / 2;
  //限制换盒子的范围
  //left取值为大于0，小盒子的宽-mask的宽。
  if (x < 0) {
    x = 0;
  }
  if (x > small.offsetWidth - mask.offsetWidth) {
    x = small.offsetWidth - mask.offsetWidth;
  }
  //top同理。
  if (y < 0) {
    y = 0;
  }
  if (y > small.offsetHeight - mask.offsetHeight) {
    y = small.offsetHeight - mask.offsetHeight;
  }
  //移动黄盒子
  console.log(small.offsetHeight);
  mask.style.left = x + "px";
  mask.style.top = y + "px";

  //3.右侧的大图片，等比例移动。
  //如何移动大图片？等比例移动。
  //    大图片/大盒子 = 小图片/mask盒子
  //    大图片走的距离/mask走的距离 = （大图片-大盒子）/（小图片-黄盒子）
  //                var bili = (bigImg.offsetWidth-big.offsetWidth)/(small.offsetWidth-mask.offsetWidth);

  //大图片走的距离/mask盒子都的距离 = 大图片/小图片
  var bili = bigImg.offsetWidth / small.offsetWidth;

  var xx = bili * x;
  var yy = bili * y;

  bigImg.style.marginTop = -yy + "px";
  bigImg.style.marginLeft = -xx + "px";
};

var imgJD = document.getElementById("jingdong");
//2.绑定事件(悬停事件：鼠标进入到事件源中立即出发事件)
imgJD.onmouseover = function () {
  //3.书写事件驱动程序(修改src)
  this.src = "images/jd2.png";
};

imgJD.onmouseout = function () {
  //3.书写事件驱动程序(修改src)
  this.src = "images/jd1.png";
};
